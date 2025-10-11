export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: string;
  error?: string;
  details?: any;
}

export interface UserInfo {
  success: boolean;
  user: string;
  details: any;
  error?: string;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Login user with Frappe backend
 */
export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await fetch('/web-api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include', // Include cookies
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        message: data.error || 'Login failed',
        error: data.error,
        details: data.details,
      };
    }

    return data;
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'Network error occurred',
      error: 'Network error',
    };
  }
}

/**
 * Logout user from Frappe backend
 */
export async function logout(): Promise<LogoutResponse> {
  try {
    const response = await fetch('/web-api/auth/logout', {
      method: 'POST',
      credentials: 'include', // Include cookies
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        message: data.error || 'Logout failed',
        error: data.error,
      };
    }

    return data;
  } catch (error) {
    console.error('Logout error:', error);
    return {
      success: false,
      message: 'Network error occurred',
      error: 'Network error',
    };
  }
}

/**
 * Get current user information
 */
export async function getUserInfo(): Promise<UserInfo> {
  try {
    const response = await fetch('/web-api/auth/user', {
      method: 'GET',
      credentials: 'include', // Include cookies
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        user: '',
        details: {},
        error: data.error || 'Failed to get user info',
      };
    }

    return data;
  } catch (error) {
    console.error('Get user info error:', error);
    return {
      success: false,
      user: '',
      details: {},
      error: 'Network error occurred',
    };
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  try {
    const userInfo = await getUserInfo();
    return userInfo.success;
  } catch {
    return false;
  }
}
