// WarrenWise Youth Animal Training Academy - Mandatory Legal & Accuracy Disclaimer Banner

import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { LEGAL_DISCLAIMERS } from '../../config/constants';

export default function LegalDisclaimerBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>
            <strong>Official Educational Notice:</strong> Independent training platform. Not affiliated with, endorsed by, or an official replacement for National 4-H, USDA NIFA, ARBA, or YQCA.
          </span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-amber-800 hover:text-amber-950 font-semibold underline flex items-center gap-1 text-xs ml-auto md:ml-0"
        >
          {expanded ? 'Hide Legal Details' : 'View Accuracy & Veterinary Policy'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-amber-200/60 text-xs text-amber-850 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white/80 p-2.5 rounded border border-amber-200">
              <strong className="block text-amber-900 mb-1">1. Educational Training App First</strong>
              <p>{LEGAL_DISCLAIMERS.general}</p>
            </div>
            <div className="bg-white/80 p-2.5 rounded border border-amber-200">
              <strong className="block text-amber-900 mb-1">2. Veterinary Boundary</strong>
              <p>{LEGAL_DISCLAIMERS.veterinary}</p>
            </div>
            <div className="bg-white/80 p-2.5 rounded border border-amber-200">
              <strong className="block text-amber-900 mb-1">3. Local Rules & Certificates</strong>
              <p>{LEGAL_DISCLAIMERS.localRules} {LEGAL_DISCLAIMERS.certificates}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
