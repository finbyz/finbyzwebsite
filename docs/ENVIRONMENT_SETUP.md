# Environment Configuration

## Required Environment Variables

Create a `.env.local` file in your project root with the following configuration:

```bash
# Frappe Backend Configuration
FRAPPE_URL=https://website.finbyz.com
```

## Alternative Environment Files

You can also use these file names (in order of priority):
- `.env.local` (recommended for local development)
- `.env.development` (for development environment)
- `.env.production` (for production environment)
- `.env` (fallback)

## Environment Variable Details

### FRAPPE_URL
- **Purpose**: The base URL of your Frappe backend server
- **Format**: Full URL including protocol (http:// or https://)
- **Example**: `https://website.finbyz.com`
- **Required**: Yes
- **Default**: None (will cause error if not set)

## Current Configuration

For this project, the Frappe backend is configured to use:
```
FRAPPE_URL=https://website.finbyz.com
```

## Verification

To verify your environment is properly configured:

1. Check that the `.env.local` file exists in your project root
2. Ensure `FRAPPE_URL=https://website.finbyz.com` is set
3. Restart your development server after making changes
4. Test the login API to confirm connection

## Troubleshooting

- **"Frappe backend URL not configured"**: Check your `.env.local` file exists and has `FRAPPE_URL` set
- **Connection refused**: Verify the Frappe server is running at `https://website.finbyz.com`
- **HTTPS issues**: Ensure your Frappe server has valid SSL certificates
- **Port issues**: If using a custom port, include it: `https://website.finbyz.com:8000`
