import { NextRequest, NextResponse } from 'next/server';

// ============================================================================
// CLIENT LOGOS API ROUTE
// ============================================================================

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '12';
    const category = searchParams.get('category') || 'all';

    // Example: Fetch from your external API or database
    const clientLogos = await fetchClientLogosFromAPI({
      page: parseInt(page),
      limit: parseInt(limit),
      category
    });

    return NextResponse.json({
      success: true,
      data: {
        clients: clientLogos,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: clientLogos.length
        },
        carousel: {
          autoPlay: true,
          interval: 3000,
          showArrows: true,
          showIndicators: true
        }
      }
    });

  } catch (error) {
    console.error('Error fetching client logos:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch client logos',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// ============================================================================
// API FETCHING FUNCTION
// ============================================================================

async function fetchClientLogosFromAPI(params: {
  page: number;
  limit: number;
  category: string;
}) {
  // Option 1: Fetch from Frappe/ERPNext API (prioritized)
  if (process.env.FRAPPE_URL && process.env.FRAPPE_API_KEY && process.env.FRAPPE_API_SECRET) {
    try {
      return await fetchFromFrappeAPI(params);
    } catch (error) {
      console.error('Frappe API failed, falling back to local data:', error);
      // Fall back to local data if Frappe API fails
      return await fetchFromLocalData(params);
    }
  }
  
  // Option 2: Fetch from external API
  if (process.env.CLIENT_LOGOS_API_URL) {
    try {
      return await fetchFromExternalAPI(params);
    } catch (error) {
      console.error('External API failed, falling back to local data:', error);
      return await fetchFromLocalData(params);
    }
  }
  
  // Option 3: Fetch from local database/JSON file (fallback)
  return await fetchFromLocalData(params);
}

// Frappe/ERPNext API Integration using your specific endpoint
async function fetchFromFrappeAPI(params: any) {
  const baseUrl = process.env.FRAPPE_URL;
  const apiKey = process.env.FRAPPE_API_KEY;
  const apiSecret = process.env.FRAPPE_API_SECRET;

  if (!baseUrl || !apiKey || !apiSecret) {
    throw new Error('Frappe API credentials not configured');
  }

  // Use your specific API endpoint
  const url = `${baseUrl}/api/method/finbyzweb.api.get_customer_details`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `token ${apiKey}:${apiSecret}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      limit: params.limit,
      page: params.page,
      category: params.category
    }),
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`Frappe API error: ${response.status}`);
  }

  const data = await response.json();
  
  // Handle Frappe method response format
  if (data.message && Array.isArray(data.message)) {
    // Transform Frappe method response to component format
    return data.message.map((item: any) => ({
      name: item.customer_name || item.name || item.company_name,
      location: item.city || item.location || item.address || '',
      logo: item.logo || item.company_logo || (item.customer_name || item.name)?.substring(0, 3).toUpperCase(),
      colors: {
        primary: item.primary_color || item.brand_color || '#6B7280',
        secondary: item.secondary_color || '#9CA3AF',
        accent: item.accent_color || '#3B82F6',
        text: '#FFFFFF'
      },
      description: item.description || `${item.customer_name || item.name} client logo`
    }));
  }

  // Fallback if response format is different
  if (data.data && Array.isArray(data.data)) {
    return data.data.map((item: any) => ({
      name: item.customer_name || item.name || item.company_name,
      location: item.city || item.location || item.address || '',
      logo: item.logo || item.company_logo || (item.customer_name || item.name)?.substring(0, 3).toUpperCase(),
      colors: {
        primary: item.primary_color || item.brand_color || '#6B7280',
        secondary: item.secondary_color || '#9CA3AF',
        accent: item.accent_color || '#3B82F6',
        text: '#FFFFFF'
      },
      description: item.description || `${item.customer_name || item.name} client logo`
    }));
  }

  // If no data found, return empty array
  return [];
}

// External API Integration
async function fetchFromExternalAPI(params: any) {
  const apiUrl = process.env.CLIENT_LOGOS_API_URL;
  const apiKey = process.env.CLIENT_LOGOS_API_KEY;

  const url = new URL(apiUrl!);
  url.searchParams.append('page', params.page.toString());
  url.searchParams.append('limit', params.limit.toString());
  url.searchParams.append('category', params.category);

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 1800 } // Cache for 30 minutes
  });

  if (!response.ok) {
    throw new Error(`External API error: ${response.status}`);
  }

  const data = await response.json();
  return data.clients || [];
}

// Local data fallback
async function fetchFromLocalData(params: any) {
  // This is your current hardcoded data as fallback
  const defaultClientLogos = [
    {
      name: "South India Trading Co.",
      location: "DELHI, INDIA",
      logo: "SJC",
      colors: {
        primary: "#FFD700",
        secondary: "#FF6B35",
        accent: "#4CAF50"
      },
      description: "Multi-colored map of India with bold yellow text"
    },
    {
      name: "Elkins Trade Link Ltd.",
      location: "TRADE LINK LTD.",
      logo: "elkins",
      colors: {
        primary: "#87CEEB",
        secondary: "#808080"
      },
      description: "Light blue text with stylized 'k' as shopping bag"
    },
    {
      name: "G.M.'s Tulsi Tea",
      location: "TEA",
      logo: "Tulsi",
      colors: {
        primary: "#8A2BE2",
        secondary: "#FFD700",
        text: "#FFFFFF"
      },
      description: "Purple background with yellow banner and white text"
    },
    {
      name: "Farmindia Impex Pvt. Ltd.",
      location: "IMPEX PVT. LTD.",
      logo: "FARMINDIA",
      colors: {
        primary: "#228B22",
        secondary: "#808080"
      },
      description: "Dark green leaf with bold company name"
    },
    {
      name: "Raymond",
      location: "",
      logo: "R",
      colors: {
        primary: "#DC143C",
        secondary: "#DC143C"
      },
      description: "Mirrored red 'R's with script text"
    },
    {
      name: "Aditya Birla Tanfac",
      location: "TANFAC",
      logo: "ABT",
      colors: {
        primary: "#FF4500",
        secondary: "#FFD700",
        accent: "#008080"
      },
      description: "Geometric sunburst pattern with teal band"
    }
  ];

  // Simulate pagination
  const startIndex = (params.page - 1) * params.limit;
  const endIndex = startIndex + params.limit;
  return defaultClientLogos.slice(startIndex, endIndex);
}
