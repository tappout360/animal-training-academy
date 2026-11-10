// WarrenWise Animal Academy - PWA & Offline Connectivity Service
// Manages one-tap home screen installation, offline sync indicators, and barn connectivity state.

let deferredPrompt = null;
const listeners = new Set();

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent immediate mini-infobar on mobile
    e.preventDefault();
    deferredPrompt = e;
    notifyListeners();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notifyListeners();
    console.log('WarrenWise installed to device home screen successfully.');
  });

  window.addEventListener('online', () => {
    window.dispatchEvent(new CustomEvent('ww_connectivity_changed', { detail: { online: true } }));
  });

  window.addEventListener('offline', () => {
    window.dispatchEvent(new CustomEvent('ww_connectivity_changed', { detail: { online: false } }));
  });
}

function notifyListeners() {
  listeners.forEach((callback) => {
    try {
      callback({ canInstall: !!deferredPrompt });
    } catch (e) {
      // Ignore
    }
  });
}

export class PwaService {
  /**
   * Returns true if the device can prompt for PWA installation.
   */
  static canInstall() {
    return !!deferredPrompt;
  }

  /**
   * Triggers the native "Add to Home Screen" prompt for barn offline use.
   */
  static async promptInstall() {
    if (!deferredPrompt) {
      return { success: false, reason: 'Install prompt not ready or already installed' };
    }

    try {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      deferredPrompt = null;
      notifyListeners();
      return {
        success: choiceResult.outcome === 'accepted',
        outcome: choiceResult.outcome
      };
    } catch (err) {
      console.warn('Install prompt error:', err);
      return { success: false, error: err.message };
    }
  }

  /**
   * Subscribes to changes in installability state.
   */
  static onInstallStateChange(callback) {
    listeners.add(callback);
    callback({ canInstall: !!deferredPrompt });
    return () => listeners.delete(callback);
  }

  /**
   * Checks current device network connectivity status.
   */
  static isOnline() {
    if (typeof navigator !== 'undefined') {
      return navigator.onLine;
    }
    return true;
  }
}
