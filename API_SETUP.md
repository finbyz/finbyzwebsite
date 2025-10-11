# Client Logos API Setup Guide

## 🎯 Using Your Frappe API: `finbyzweb.api.get_customer_details`

### 1. Environment Variables Setup

Create or update your `.env.local` file:

```bash
# Frappe/ERPNext API Configuration
FRAPPE_URL=https://your-frappe-instance.com
FRAPPE_API_KEY=your_api_key
FRAPPE_API_SECRET=your_api_secret
```

### 2. API Endpoint Details

- **Endpoint**: `/web-api/method/finbyzweb.api.get_customer_details`
- **Method**: POST
- **Authentication**: Token-based (API Key + Secret)

### 3. Expected API Response Format

Your Frappe API should return data in this format:

```json
{
  "message": [
    {
      "customer_name": "Company Name",
      "city": "City Name",
      "logo": "LOGO_URL_OR_TEXT",
      "primary_color": "#FFD700",
      "secondary_color": "#FF6B35",
      "description": "Company description"
    }
  ]
}
```

### 4. How to Use in Your Components

#### Option A: In Page Data JSON
```json
{
  "type": "client-logos",
  "data": {
    "title": "Our Clients",
    "useAPI": true,
    "apiEndpoint": "/web-api/client-logos"
  }
}
```

#### Option B: In React Component
```tsx
<ClientLogos 
  data={{
    title: "Our Clients",
    useAPI: true,
    apiEndpoint: "/web-api/client-logos"
  }}
/>
```

### 5. Testing

1. **Test Page**: Visit `/test-client-logos` to see both API and fallback data
2. **Direct API Test**: Visit `/web-api/client-logos?limit=6&page=1` to test API directly
3. **Console Logs**: Check browser console for API responses and errors

### 6. API Parameters

The API accepts these parameters:
- `limit`: Number of logos to fetch (default: 12)
- `page`: Page number for pagination (default: 1)
- `category`: Filter by category (default: 'all')

### 7. Fallback Behavior

- If API fails → Falls back to hardcoded data
- If no environment variables → Uses hardcoded data
- If API returns empty → Shows hardcoded data

### 8. Caching

- API responses are cached for 1 hour
- Use `revalidate: 0` in fetch options to disable caching during development

## 🚀 Ready to Use!

Once you set the environment variables, the component will automatically fetch data from your Frappe API endpoint!
