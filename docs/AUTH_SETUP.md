# Authentication Setup with Frappe Backend

This project includes a complete authentication system that integrates with a Frappe backend.

## Environment Configuration

Create a `.env.local` file in your project root with the following configuration:

```bash
# Frappe Backend Configuration
FRAPPE_URL=https://finbyz.tech

# For local development (if needed)
# FRAPPE_URL=http://localhost:8000
```

## API Endpoints

### 1. Login API
- **Endpoint**: `POST /api/auth/login`
- **Body**: 
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Login successful",
    "user": "username"
  }
  ```

### 2. Logout API
- **Endpoint**: `POST /api/auth/logout`
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Logout successful"
  }
  ```

### 3. User Info API
- **Endpoint**: `GET /api/auth/user`
- **Response**: 
  ```json
  {
    "success": true,
    "user": "username",
    "details": {
      "full_name": "User Full Name",
      "email": "user@example.com"
    }
  }
  ```

### 4. Authenticated Frappe API Forwarding
- **Base Endpoint**: `/api/fb/*`
- **Description**: All requests to `/api/fb/` are automatically forwarded to the Frappe backend with authentication
- **Authentication**: Automatically includes session cookies from login
- **Methods**: Supports GET, POST, PUT, DELETE, PATCH

### 5. Home Page
- **Endpoint**: `/`
- **Description**: Simple home page that shows login status and allows logout
- **Features**: Displays username when logged in, shows authentication status

## Frontend Usage

### Basic Authentication
Import the authentication utilities from `src/lib/auth.ts`:

```typescript
import { login, logout, getUserInfo, isAuthenticated } from '@/lib/auth';

// Login
const loginResult = await login({
  username: 'admin',
  password: 'password'
});

if (loginResult.success) {
  console.log('Logged in as:', loginResult.user);
} else {
  console.error('Login failed:', loginResult.error);
}

// Check authentication status
const isLoggedIn = await isAuthenticated();

// Get user info
const userInfo = await getUserInfo();

// Logout
const logoutResult = await logout();
```

### Authenticated Frappe API Calls
Import the Frappe API utilities from `src/lib/frappe-api.ts`:

```typescript
import { frappeApi, frappeGet, frappePost, frappeEndpoints } from '@/lib/frappe-api';

// Get user details (automatically authenticated)
const userResponse = await frappeGet(frappeEndpoints.user('admin'));

// Create a new document
const createResponse = await frappePost(frappeEndpoints.documents('Customer'), {
  customer_name: 'John Doe',
  customer_type: 'Individual'
});

// Call a custom method
const methodResponse = await frappeApi(frappeEndpoints.method('custom.method'), {
  method: 'POST',
  body: { param1: 'value1' }
});

// Get documents list
const customersResponse = await frappeGet(frappeEndpoints.documents('Customer'));
```

## How It Works

1. **Login Flow**:
   - User calls `/api/auth/login` with credentials
   - Frontend receives Frappe session cookies
   - Session is now established
   - User is redirected to home page

2. **Home Page**:
   - Shows login status and username if authenticated
   - Provides logout functionality
   - Displays authentication status

3. **Authenticated API Calls**:
   - All calls to `/api/fb/*` automatically include session cookies
   - Requests are forwarded to Frappe backend with authentication
   - Responses are returned to frontend with proper status codes

4. **Session Management**:
   - Cookies are automatically managed by the browser
   - New session cookies from Frappe are automatically forwarded
   - Authentication state persists across page refreshes

## Features

- **Session Management**: Automatically handles Frappe session cookies
- **Error Handling**: Comprehensive error handling for network and authentication failures
- **Type Safety**: Full TypeScript support with proper interfaces
- **Cookie Forwarding**: Properly forwards session cookies between frontend and Frappe backend
- **Security**: Uses HttpOnly cookies for session management
- **Automatic Authentication**: All `/api/fb/*` calls are automatically authenticated
- **Flexible API**: Supports all HTTP methods and custom endpoints

## Security Notes

- Session cookies are automatically managed and forwarded
- Passwords are never stored in the frontend
- All authentication requests go through the secure API endpoints
- Uses proper HTTP status codes for different error scenarios
- `/api/fb/*` endpoints require valid session cookies

## Troubleshooting

1. **"Frappe backend URL not configured"**: Check your `.env.local` file has `FRAPPE_URL` set
2. **"Authentication failed"**: Verify your Frappe backend is running and accessible
3. **"No session cookies found"**: Ensure you're logged in before calling protected endpoints
4. **"Authentication required"**: Make sure you're calling `/api/fb/*` after successful login
5. **CORS issues**: Make sure your Frappe backend allows requests from your frontend domain

## Example Workflow

```typescript
// 1. Login first
const loginResult = await login({ username: 'admin', password: 'password' });

if (loginResult.success) {
  // 2. User is redirected to home page with cookies set
  // 3. Now you can make authenticated API calls
  const userInfo = await frappeGet(frappeEndpoints.user('admin'));
  
  // 4. Create documents
  const customer = await frappePost(frappeEndpoints.documents('Customer'), {
    customer_name: 'New Customer'
  });
  
  // 5. All calls automatically include authentication
  const customers = await frappeGet(frappeEndpoints.documents('Customer'));
}
```
