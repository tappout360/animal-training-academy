import React, { useState, useEffect } from 'react';
import { 
  Cloud, RefreshCw, ShieldCheck, Key, Smartphone, 
  CheckCircle2, AlertTriangle, X, Lock, Database, ArrowRight, UserCheck, LogOut
} from 'lucide-react';
import { useUser, useClerk, Show, SignInButton, SignUpButton, UserProfile } from '@clerk/react';
import { CloudSyncService } from '../../services/CloudSyncService';

const hasClerkKey = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

function ClerkAwareCloudSyncContent({ isOpen, onClose }) {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();

  const [syncMeta, setSyncMeta] = useState(() => CloudSyncService.getLocalSyncMeta());
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncResultMsg, setSyncResultMsg] = useState(null);
  const [showMfaProfile, setShowMfaProfile] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSyncMeta(CloudSyncService.getLocalSyncMeta());
      setSyncResultMsg(null);
    }
  }, [isOpen]);

  const handleManualSync = async () => {
    if (!isSignedIn || !user) return;

    setIsSyncing(true);
    setSyncResultMsg(null);

    const token = await user.getIdToken?.().catch(() => null);

    const res = await CloudSyncService.syncWithCloud({
      userId: user.id,
      userEmail: user.primaryEmailAddress?.emailAddress,
      userToken: token
    });

    setIsSyncing(false);
    setSyncMeta(CloudSyncService.getLocalSyncMeta());

    if (res.success) {
      setSyncResultMsg({
        type: 'success',
        text: res.message || 'Progress, badges, and trail milestones backed up successfully!'
      });
    } else {
      setSyncResultMsg({
        type: 'error',
        text: res.error || 'Sync could not be completed.'
      });
    }
  };

  const handleSignOutAndClear = async () => {
    await signOut();
    CloudSyncService.setLocalSyncMeta({
      lastSyncedAt: null,
      autoSyncEnabled: false,
      status: 'idle',
      pendingChanges: false
    });
    setSyncMeta(CloudSyncService.getLocalSyncMeta());
    setSyncResultMsg({
      type: 'success',
      text: 'Signed out safely. Local offline Dexie database remains active on this device.'
    });
  };

  return (
    <div className="p-6 overflow-y-auto space-y-6">
      {/* SECTION 1: STORAGE ARCHITECTURE */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-black text-stone-800">Storage Architecture</span>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
            100% Offline Capable
          </span>
        </div>
        
        <p className="text-xs text-stone-600 leading-relaxed">
          Your device uses high-speed local <strong>Dexie (IndexedDB)</strong> storage. You never need an account to study, complete 4-H modules, or play Herd Trail Quest!
        </p>

        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
          <div className="p-2.5 rounded-xl bg-white border border-stone-200">
            <div className="text-[10px] uppercase font-bold text-stone-400">Local Database</div>
            <div className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dexie Active</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-stone-200">
            <div className="text-[10px] uppercase font-bold text-stone-400">Cloud Sync (MongoDB)</div>
            <div className="font-bold text-slate-700 mt-0.5">
              {isSignedIn ? (
                <span className="text-teal-700 flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5" /> Connected
                </span>
              ) : (
                <span className="text-stone-400">Local Only (Optional)</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: CLOUD ACCOUNT & ONE-CLICK SYNC */}
      <div className="border border-stone-200 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-black text-stone-900">
              {isSignedIn ? 'Cloud Account Linked' : 'Optional Cloud Sync'}
            </h4>
            <p className="text-xs text-stone-500">
              {isSignedIn 
                ? `Signed in as ${user?.primaryEmailAddress?.emailAddress || user?.fullName || 'User'}`
                : 'Sign in to back up your progress across tablets, phones, and computers.'}
            </p>
          </div>

          {isSignedIn ? (
            <button
              onClick={handleSignOutAndClear}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          ) : null}
        </div>

        {/* If Signed In: Sync Button & Last Synced Timestamp */}
        {isSignedIn ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600 bg-teal-50/60 border border-teal-200/80 p-3 rounded-xl">
              <span>Last Cloud Backup:</span>
              <span className="font-mono font-bold text-teal-900">
                {syncMeta.lastSyncedAt ? new Date(syncMeta.lastSyncedAt).toLocaleString() : 'Never synced yet'}
              </span>
            </div>

            <button
              type="button"
              disabled={isSyncing}
              onClick={handleManualSync}
              className="w-full py-3 rounded-2xl bg-teal-700 hover:bg-teal-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing with MongoDB Cloud...' : 'Save Progress to Cloud Now'}</span>
            </button>
          </div>
        ) : (
          /* If Signed Out: Clear CTA to Create Account / Sign In */
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 space-y-3">
            <div className="text-xs text-emerald-950 font-medium leading-relaxed">
              Want to protect your achievements if you switch devices or clear browser history? Sign in with Clerk to enable cloud backups!
            </div>
            <div className="flex items-center gap-2">
              <SignUpButton mode="modal">
                <button className="flex-1 py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow transition cursor-pointer">
                  Create Cloud Account
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="flex-1 py-2.5 rounded-xl text-xs font-black bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 transition cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        )}

        {/* Sync Feedback Message */}
        {syncResultMsg && (
          <div className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 animate-fadeIn ${
            syncResultMsg.type === 'success'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-rose-50 border-rose-300 text-rose-900'
          }`}>
            {syncResultMsg.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{syncResultMsg.text}</span>
          </div>
        )}
      </div>

      {/* SECTION 3: STRONG MFA (AUTHENTICATOR APP / TOTP) MANAGEMENT */}
      <div className="border border-stone-200 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-indigo-600" />
            <div>
              <h4 className="text-sm font-black text-stone-900">
                Two-Factor Authentication (MFA)
              </h4>
              <p className="text-xs text-stone-500">
                Protect your parent controls &amp; cloud data with Google Authenticator or 1Password.
              </p>
            </div>
          </div>

          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
            user?.twoFactorEnabled
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
              : 'bg-amber-100 text-amber-800 border-amber-300'
          }`}>
            {user?.twoFactorEnabled ? '✓ MFA Active' : 'MFA Recommended'}
          </span>
        </div>

        <div className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200">
          {isSignedIn ? (
            <span>
              Clerk manages your TOTP QR codes, biometric passkeys, and emergency recovery codes securely. Click below to manage multi-factor authentication directly on your account.
            </span>
          ) : (
            <span>
              Sign in or create an account above to enroll an authenticator app and generate emergency recovery codes.
            </span>
          )}
        </div>

        {isSignedIn && (
          <button
            type="button"
            onClick={() => setShowMfaProfile(!showMfaProfile)}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>{showMfaProfile ? 'Hide Security Settings' : 'Configure Authenticator App & Recovery Codes'}</span>
          </button>
        )}

        {/* Inline Clerk User Profile Security Drawer */}
        {showMfaProfile && isSignedIn && (
          <div className="pt-3 border-t border-stone-200 animate-fadeIn">
            <UserProfile />
          </div>
        )}
      </div>
    </div>
  );
}

function LocalOnlyCloudSyncContent({ isOpen, onClose }) {
  return (
    <div className="p-6 overflow-y-auto space-y-6">
      <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-emerald-700" />
          <h4 className="text-sm font-black text-emerald-950">Local-First Storage Active (Dexie IndexedDB)</h4>
        </div>
        <p className="text-xs text-emerald-900 leading-relaxed">
          The app is running in 100% offline mode with Dexie IndexedDB. All 4-H modules, badges, quiz attempts, and trail progress are preserved locally on this device.
        </p>
        <div className="text-xs text-stone-600 pt-2 border-t border-emerald-200">
          To enable optional cross-device cloud sync and Clerk Authenticator MFA, configure <code className="bg-white px-2 py-0.5 rounded border font-mono">VITE_CLERK_PUBLISHABLE_KEY</code> in your environment.
        </div>
      </div>
    </div>
  );
}

export default function CloudSyncAndMfaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden text-stone-900 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-slate-900 p-6 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-emerald-300" />
              <span className="text-xs font-black uppercase tracking-wider text-emerald-200">
                Data Sovereignty &amp; Security
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-xl font-black mt-2 text-white">
            Local-First Progress &amp; Cloud Backup
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Offline by default with Dexie. Optionally create an account to back up badges, certificates, and trail progress.
          </p>
        </div>

        {/* Modal Body */}
        {hasClerkKey ? (
          <ClerkAwareCloudSyncContent isOpen={isOpen} onClose={onClose} />
        ) : (
          <LocalOnlyCloudSyncContent isOpen={isOpen} onClose={onClose} />
        )}

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-stone-400">
            Encrypted in-transit &amp; at-rest • Zero PII collected from Cloverbuds
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-200 hover:bg-stone-300 text-stone-700 transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
