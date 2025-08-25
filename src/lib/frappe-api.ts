export interface FrappeApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
}

export interface FrappeApiResponse<T = any> {
  data?: T;
  message?: string;
  error?: string;
  status: number;
  success: boolean;
}

/**
 * Make authenticated API call to Frappe backend
 * This automatically includes session cookies for authentication
 */
export async function frappeApi<T = any>(
  endpoint: string,
  options: FrappeApiOptions = {}
): Promise<FrappeApiResponse<T>> {
  try {
    const { method = 'GET', body, headers = {} } = options;

    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      credentials: 'include', // Include cookies for authentication
    };

    if (body && method !== 'GET') {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`/api/fb/${endpoint}`, requestOptions);
    const responseData = await response.json();

    if (!response.ok) {
      return {
        data: responseData,
        error: responseData.error || `HTTP ${response.status}`,
        status: response.status,
        success: false,
      };
    }

    return {
      data: responseData,
      status: response.status,
      success: true,
    };
  } catch (error) {
    console.error('Frappe API error:', error);
    return {
      error: 'Network error occurred',
      status: 500,
      success: false,
    };
  }
}

/**
 * GET request to Frappe backend
 */
export async function frappeGet<T = any>(endpoint: string, headers?: Record<string, string>) {
  return frappeApi<T>(endpoint, { method: 'GET', headers });
}

/**
 * POST request to Frappe backend
 */
export async function frappePost<T = any>(endpoint: string, body: any, headers?: Record<string, string>) {
  return frappeApi<T>(endpoint, { method: 'POST', body, headers });
}

/**
 * PUT request to Frappe backend
 */
export async function frappePut<T = any>(endpoint: string, body: any, headers?: Record<string, string>) {
  return frappeApi<T>(endpoint, { method: 'PUT', body, headers });
}

/**
 * DELETE request to Frappe backend
 */
export async function frappeDelete<T = any>(endpoint: string, headers?: Record<string, string>) {
  return frappeApi<T>(endpoint, { method: 'DELETE', headers });
}

/**
 * PATCH request to Frappe backend
 */
export async function frappePatch<T = any>(endpoint: string, body: any, headers?: Record<string, string>) {
  return frappeApi<T>(endpoint, { method: 'PATCH', body, headers });
}

/**
 * Common Frappe API endpoints
 */
export const frappeEndpoints = {
  // User related
  user: (username: string) => `resource/User/${username}`,
  userProfile: (username: string) => `resource/User/${username}`,
  
  // Document related
  document: (doctype: string, name: string) => `resource/${doctype}/${name}`,
  documents: (doctype: string) => `resource/${doctype}`,
  
  // Method calls
  method: (method: string) => `method/${method}`,
  
  // File related
  file: (fileUrl: string) => `method/frappe.utils.file_manager.get_file?file_url=${encodeURIComponent(fileUrl)}`,
  
  // Search
  search: (doctype: string, query: string) => `method/frappe.desk.reportview.get?doctype=${doctype}&query=${encodeURIComponent(query)}`,
};

/**
 * Example usage functions
 */
export const frappeExamples = {
  // Get user details
  getUserDetails: (username: string) => frappeGet(frappeEndpoints.user(username)),
  
  // Create a new document
  createDocument: (doctype: string, data: any) => frappePost(frappeEndpoints.documents(doctype), data),
  
  // Update a document
  updateDocument: (doctype: string, name: string, data: any) => frappePut(frappeEndpoints.document(doctype, name), data),
  
  // Delete a document
  deleteDocument: (doctype: string, name: string) => frappeDelete(frappeEndpoints.document(doctype, name)),
  
  // Call a custom method
  callMethod: (method: string, params?: any) => frappePost(frappeEndpoints.method(method), params || {}),
};
