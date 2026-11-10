// WarrenWise Animal Academy - Universal Error Boundary
// Catches unexpected runtime crashes, prevents white-screens, and provides instant self-healing recovery.

import React from 'react';
import { AlertTriangle, RefreshCw, Home, Compass } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('WarrenWise Error Boundary caught an exception:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  handleResetStorage = () => {
    try {
      if (typeof localStorage !== 'undefined') {
        // Clear trail quest states to clear corrupted caches
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('ww_trail_quest_') || key.startsWith('ww_living_herd_')) {
            localStorage.removeItem(key);
          }
        });
      }
    } catch (e) {
      console.warn('Error clearing storage:', e);
    }
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-slate-900 rounded-3xl border border-slate-800 text-white text-center">
          <div className="max-w-md w-full space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mx-auto text-amber-400 shadow-inner">
              <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/60 px-3 py-1 rounded-full">
                Trail Calamity Recovered
              </span>
              <h2 className="text-xl font-black text-white mt-2">
                A Trail Bump Occurred!
              </h2>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                The wagon hit a rough patch in the road, but your companion and supplies are safe. You can reload cleanly or return to the main academy.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[11px] font-mono text-rose-300 text-left max-h-24 overflow-y-auto">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Loading Trail</span>
              </button>

              <button
                type="button"
                onClick={this.handleResetStorage}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Reset Trail Cache</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
