// WarrenWise Animal Academy - Root Administrator Authentication Service
// Manages dedicated credentials and sessions for the Root Administrator Command Dashboard.
// Restricted exclusively to Jmounts (JakylieRabbitry4388).

export const ADMIN_CREDENTIALS = {
  username: 'Jmounts',
  password: 'JakylieRabbitry4388',
  displayName: 'Jmounts',
  role: 'root_admin',
  title: 'Lead Administrator & Root',
  email: 'jmounts@warrenwise.internal',
  securityLevel: 'Level 5 Full Authority'
};

const SESSION_STORAGE_KEY = 'ww_root_admin_session';

// In-memory fallback for test runners / environments without sessionStorage
let inMemorySession = null;

export class AdminAuthService {
  /**
   * Validates provided username and password strictly.
   */
  static validateCredentials(username, password) {
    if (!username || !password) return false;
    return (
      String(username).trim() === ADMIN_CREDENTIALS.username &&
      String(password) === ADMIN_CREDENTIALS.password
    );
  }

  /**
   * Attempts login and establishes authenticated session.
   */
  static login(username, password) {
    if (!this.validateCredentials(username, password)) {
      return {
        success: false,
        error: 'Invalid Administrator credentials. Access restricted to authorized root personnel.'
      };
    }

    const sessionData = {
      username: ADMIN_CREDENTIALS.username,
      displayName: ADMIN_CREDENTIALS.displayName,
      title: ADMIN_CREDENTIALS.title,
      role: ADMIN_CREDENTIALS.role,
      email: ADMIN_CREDENTIALS.email,
      securityLevel: ADMIN_CREDENTIALS.securityLevel,
      authenticatedAt: new Date().toISOString()
    };

    inMemorySession = sessionData;

    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
      } catch (e) {
        console.warn('SessionStorage unavailable:', e);
      }
    }

    return {
      success: true,
      user: sessionData
    };
  }

  /**
   * Checks if an active root admin session is established.
   */
  static isAuthenticated() {
    if (inMemorySession && inMemorySession.username === ADMIN_CREDENTIALS.username) {
      return true;
    }

    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        const item = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (item) {
          const parsed = JSON.parse(item);
          if (parsed && parsed.username === ADMIN_CREDENTIALS.username) {
            inMemorySession = parsed;
            return true;
          }
        }
      } catch (e) {
        // Fall through
      }
    }

    return false;
  }

  /**
   * Retrieves the current authenticated admin user profile or null.
   */
  static getCurrentAdmin() {
    if (this.isAuthenticated()) {
      return inMemorySession;
    }
    return null;
  }

  /**
   * Terminates the active administrator session and locks the dashboard.
   */
  static logout() {
    inMemorySession = null;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
      } catch (e) {
        // Fall through
      }
    }
    return { success: true };
  }
}
