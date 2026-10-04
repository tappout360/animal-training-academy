// WarrenWise Youth Animal Training Academy - Entitlement & Subscription Service
// Manages local-first offline entitlement caching, parent-authorized checkout, seat limits, and anti-pay-to-win rules

import { SUBSCRIPTION_TIERS, EDUCATIONAL_ADDONS } from '../config/subscriptionPlans.js';
import { verifyParentPin } from './YouthSafetyService.js';

const STORAGE_PREFIX = 'ww_entitlements_';
const AUDIT_STORAGE_PREFIX = 'ww_billing_audit_';

export const PROMO_CODES = {
  'FAIR2026': { code: 'FAIR2026', discountPercent: 20, description: 'County Fair Special (20% Off)' },
  '4HLEADER': { code: '4HLEADER', discountPercent: 25, description: '4-H Club Leader Discount (25% Off)' },
  'SCHOLARSHIP': { code: 'SCHOLARSHIP', discountPercent: 100, description: 'Youth Project Scholarship (100% Free Pass)' }
};

export const DEFAULT_ENTITLEMENTS = {
  tier: 'free', // 'free' | 'pro' | 'family' | 'club'
  billingCycle: 'annual', // 'monthly' | 'annual'
  status: 'active', // 'active' | 'past_due' | 'canceled' | 'scholarship'
  startedAt: new Date().toISOString(),
  renewAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  purchasedAddons: [], // array of addon ids e.g. ['addon_record_book']
  assignedChildIds: ['lrn_01'], // array of child IDs with active seats
  clubCharterDetails: null,
  cancelAtPeriodEnd: false
};

const _memoryCache = new Map();
const _auditMemoryCache = new Map();

export class EntitlementService {
  /**
   * Retrieves entitlements for a given parent account (local-first cache).
   */
  static getEntitlements(parentEmail = 'parent.miller@example.com') {
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        const data = localStorage.getItem(`${STORAGE_PREFIX}${parentEmail}`);
        if (data) {
          const parsed = { ...DEFAULT_ENTITLEMENTS, ...JSON.parse(data) };
          _memoryCache.set(parentEmail, parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Storage read notice in EntitlementService:', e.message);
    }
    if (_memoryCache.has(parentEmail)) {
      return { ...DEFAULT_ENTITLEMENTS, ..._memoryCache.get(parentEmail) };
    }
    return { ...DEFAULT_ENTITLEMENTS };
  }

  /**
   * Persists updated entitlements locally.
   */
  static saveEntitlements(parentEmail = 'parent.miller@example.com', entitlements) {
    const full = { ...DEFAULT_ENTITLEMENTS, ...entitlements };
    _memoryCache.set(parentEmail, full);
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
        localStorage.setItem(`${STORAGE_PREFIX}${parentEmail}`, JSON.stringify(full));
      }
    } catch (e) {
      console.warn('Storage write notice in EntitlementService:', e.message);
    }
    return full;
  }

  /**
   * Checks whether a species pack is unlocked for learning.
   */
  static isSpeciesUnlocked(speciesId, parentEmail = 'parent.miller@example.com') {
    const entitlements = this.getEntitlements(parentEmail);
    const tierConfig = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;

    if (tierConfig.allowedSpecies === 'ALL') return true;
    return tierConfig.allowedSpecies.includes(speciesId);
  }

  /**
   * Checks whether a trail difficulty tier (1-4) is unlocked in Herd Trail Quest.
   */
  static isTrailTierUnlocked(tierNumber, parentEmail = 'parent.miller@example.com') {
    const entitlements = this.getEntitlements(parentEmail);
    const tierConfig = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;
    return Number(tierNumber) <= tierConfig.maxTrailTier;
  }

  /**
   * Checks whether the AI WarrenWise Show Coach is unlocked.
   */
  static isAiTutorUnlocked(parentEmail = 'parent.miller@example.com') {
    const entitlements = this.getEntitlements(parentEmail);
    const tierConfig = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;
    return !!tierConfig.aiTutor;
  }

  /**
   * Checks whether official downloadable completion certificates are unlocked.
   */
  static isCertificateUnlocked(parentEmail = 'parent.miller@example.com') {
    const entitlements = this.getEntitlements(parentEmail);
    const tierConfig = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;
    return !!tierConfig.verifiableCerts;
  }

  /**
   * Checks whether the Digital Barn Record Book & Weigh-In Kit is unlocked.
   */
  static isRecordBookUnlocked(parentEmail = 'parent.miller@example.com') {
    const entitlements = this.getEntitlements(parentEmail);
    const tierConfig = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;

    // Included in Family and Club tiers, or purchased as standalone add-on
    if (tierConfig.recordBookIncluded) return true;
    return entitlements.purchasedAddons.includes('addon_record_book');
  }

  /**
   * Checks whether a new child seat can be assigned within the active plan.
   */
  static canAddChildSeat(currentChildCount, parentEmail = 'parent.miller@example.com') {
    const entitlements = this.getEntitlements(parentEmail);
    const tierConfig = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;
    return currentChildCount < tierConfig.maxChildren;
  }

  /**
   * Validates a promotional or scholarship discount code.
   */
  static validatePromoCode(code) {
    if (!code) return null;
    const clean = String(code).trim().toUpperCase();
    return PROMO_CODES[clean] || null;
  }

  /**
   * Upgrades or updates the user subscription tier.
   * STRICT RULE: Requires verified 4-digit Parent PIN. Youth cannot purchase alone.
   */
  static upgradePlan({
    parentEmail = 'parent.miller@example.com',
    newTier,
    billingCycle = 'annual',
    parentPin,
    promoCode = null
  }) {
    if (!verifyParentPin(parentPin, '4444')) {
      return {
        success: false,
        error: 'Parent authorization required: Incorrect 4-digit Parent PIN. Youth cannot checkout alone.'
      };
    }

    if (!SUBSCRIPTION_TIERS[newTier]) {
      return { success: false, error: 'Invalid subscription tier selected.' };
    }

    const current = this.getEntitlements(parentEmail);
    const promo = this.validatePromoCode(promoCode);

    const targetTier = SUBSCRIPTION_TIERS[newTier];
    const durationDays = billingCycle === 'annual' ? 365 : 30;

    const updated = {
      ...current,
      tier: newTier,
      billingCycle,
      status: promo && promo.discountPercent === 100 ? 'scholarship' : 'active',
      startedAt: new Date().toISOString(),
      renewAt: new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString(),
      cancelAtPeriodEnd: false
    };

    this.saveEntitlements(parentEmail, updated);

    // Record billing audit receipt
    const receipt = {
      id: `rcpt_${Date.now()}`,
      parentEmail,
      tier: newTier,
      planName: targetTier.name,
      amountPaid: promo ? Math.round((billingCycle === 'annual' ? targetTier.priceAnnual : targetTier.priceMonthly) * (1 - promo.discountPercent / 100) * 100) / 100 : (billingCycle === 'annual' ? targetTier.priceAnnual : targetTier.priceMonthly),
      billingCycle,
      promoApplied: promo ? promo.code : null,
      timestamp: new Date().toISOString()
    };
    this.appendBillingAudit(parentEmail, receipt);

    return {
      success: true,
      entitlements: updated,
      receipt
    };
  }

  /**
   * Purchases an educational add-on tool (e.g. Fair Record Book, Masterclass).
   * STRICT RULE: Requires verified 4-digit Parent PIN.
   */
  static purchaseAddon({
    parentEmail = 'parent.miller@example.com',
    addonId,
    parentPin
  }) {
    if (!verifyParentPin(parentPin, '4444')) {
      return {
        success: false,
        error: 'Parent authorization required: Incorrect 4-digit Parent PIN. Youth cannot purchase add-ons alone.'
      };
    }

    const addon = EDUCATIONAL_ADDONS.find(a => a.id === addonId);
    if (!addon) {
      return { success: false, error: 'Add-on product not found.' };
    }

    const current = this.getEntitlements(parentEmail);
    if (current.purchasedAddons.includes(addonId)) {
      return { success: false, error: 'This add-on is already permanently unlocked for your family.' };
    }

    const updated = {
      ...current,
      purchasedAddons: [...current.purchasedAddons, addonId]
    };

    this.saveEntitlements(parentEmail, updated);

    const receipt = {
      id: `rcpt_addon_${Date.now()}`,
      parentEmail,
      addonId,
      title: addon.title,
      amountPaid: addon.price,
      type: 'one_time_addon',
      timestamp: new Date().toISOString()
    };
    this.appendBillingAudit(parentEmail, receipt);

    return {
      success: true,
      entitlements: updated,
      receipt
    };
  }

  /**
   * Cancels subscription at period end (never immediately cuts off paid access).
   */
  static cancelSubscription({
    parentEmail = 'parent.miller@example.com',
    parentPin,
    reason = 'No longer showing animals this year'
  }) {
    if (!verifyParentPin(parentPin, '4444')) {
      return { success: false, error: 'Incorrect Parent PIN.' };
    }

    const current = this.getEntitlements(parentEmail);
    const updated = {
      ...current,
      cancelAtPeriodEnd: true,
      cancellationReason: reason
    };

    this.saveEntitlements(parentEmail, updated);
    return { success: true, entitlements: updated };
  }

  /**
   * Admin / Root emergency override tool for customer support or fair grants.
   */
  static adminOverrideEntitlement({
    parentEmail,
    tier,
    reason,
    adminKey
  }) {
    if (String(adminKey).trim() !== '9999') {
      return { success: false, error: 'Unauthorized: Invalid Master Admin Key.' };
    }

    const current = this.getEntitlements(parentEmail);
    const updated = {
      ...current,
      tier,
      status: 'active',
      adminOverrideReason: reason,
      renewAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    };

    this.saveEntitlements(parentEmail, updated);
    return { success: true, entitlements: updated };
  }

  /**
   * Internal billing audit ledger per parent.
   */
  static appendBillingAudit(parentEmail, receipt) {
    const key = `${AUDIT_STORAGE_PREFIX}${parentEmail}`;
    const memList = _auditMemoryCache.get(key) || [];
    const updated = [receipt, ...memList];
    _auditMemoryCache.set(key, updated);

    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
        localStorage.setItem(key, JSON.stringify(updated));
      }
    } catch (e) {
      console.warn('Billing audit write notice:', e.message);
    }
  }

  static getBillingAudit(parentEmail = 'parent.miller@example.com') {
    const key = `${AUDIT_STORAGE_PREFIX}${parentEmail}`;
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        const item = localStorage.getItem(key);
        if (item) return JSON.parse(item);
      }
    } catch (e) {
      console.warn('Billing audit read notice:', e.message);
    }
    return _auditMemoryCache.get(key) || [];
  }
}
