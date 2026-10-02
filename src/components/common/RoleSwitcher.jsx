// WarrenWise Youth Animal Training Academy - Role Switcher

import React from 'react';
import { USER_ROLES } from '../../config/constants';
import { User, Users, GraduationCap, ShieldCheck } from 'lucide-react';

export default function RoleSwitcher({ activeRole, onSelectRole }) {
  const getRoleIcon = (roleId) => {
    switch (roleId) {
      case 'youth': return <User className="w-4 h-4 text-emerald-600" />;
      case 'parent': return <Users className="w-4 h-4 text-amber-600" />;
      case 'coach': return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case 'admin': return <ShieldCheck className="w-4 h-4 text-purple-600" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
      {Object.values(USER_ROLES).map((role) => {
        const isActive = activeRole === role.id;
        return (
          <button
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isActive
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 ring-1 ring-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title={role.description}
          >
            {getRoleIcon(role.id)}
            <span className="hidden sm:inline">{role.title}</span>
            <span className="sm:hidden">{role.id.charAt(0).toUpperCase() + role.id.slice(1)}</span>
          </button>
        );
      })}
    </div>
  );
}
