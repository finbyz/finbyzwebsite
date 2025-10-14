import { NextRequest, NextResponse } from 'next/server';

export interface ClientLogo {
  name: string;
  customer: string;
  image?: string;
}

interface CustomerDetail {
  customer?: string;
  image?: string;
}

interface CustomerDetailsDoctype {
  name: string;
  customer_details_list?: CustomerDetail[];
  [key: string]: any;
}

interface FrappeSingleResponse {
  data: CustomerDetailsDoctype;
}

async function getClientLogos(): Promise<ClientLogo[]> {
  try {
    // Check environment variables
    if (!process.env.FRAPPE_URL || !process.env.FRAPPE_API_KEY || !process.env.FRAPPE_API_SECRET) {
      throw new Error('Missing Frappe environment variables');
    }

    // Fetch the single Customer Details doctype
    const apiUrl = `${process.env.FRAPPE_URL}/api/resource/Customer%20Details/Customer%20Details`;
    

    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    });


    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch client logos: ${response.status}`);
    }

    const responseData: FrappeSingleResponse = await response.json();

    // Access the single document
    const customerDetailsDoc = responseData.data;
    
    if (!customerDetailsDoc) {
      return [];
    }

    
    // Extract child table records
    const allClientLogos: ClientLogo[] = [];
    
    if (customerDetailsDoc.customer_details_list && Array.isArray(customerDetailsDoc.customer_details_list)) {
      
      customerDetailsDoc.customer_details_list.forEach((child: CustomerDetail, childIndex) => {
        
        if (child.customer) {
          const imageUrl = child.image
            ? child.image.startsWith('http')
              ? child.image
              : `${process.env.FRAPPE_URL}${child.image}`
            : undefined;

          allClientLogos.push({
            name: child.customer,
            customer: child.customer,
            image: imageUrl,
          });
        } 
      });
    }

    
    
    return allClientLogos;
    
  } catch (error) {
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '39', 10);
    const search = searchParams.get('search') || '';

    // Validate pagination parameters
    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid pagination parameters',
          message: 'Page must be >= 1 and limit must be between 1 and 100',
        },
        { status: 400 }
      );
    }


    // Fetch all client logos from the single doctype
    let clientLogos = await getClientLogos();

    // Apply search filter if provided
    if (search) {
      const searchLower = search.toLowerCase();
      clientLogos = clientLogos.filter(client => 
        client.customer.toLowerCase().includes(searchLower) ||
        client.name.toLowerCase().includes(searchLower)
      );
    }


    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedClients = clientLogos


    return NextResponse.json({
      success: true,
      data: {
        clients: paginatedClients,
      },
      pagination: {
        page,
        limit,
        total: clientLogos.length,
        totalPages: Math.ceil(clientLogos.length / limit),
        hasMore: endIndex < clientLogos.length,
      },
    });
    
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch client logos',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}