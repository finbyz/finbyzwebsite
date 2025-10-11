'use client';

import ClientLogos from '@/components/sections/client-logos';

export default function TestClientLogosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Client Logos API Test</h1>
        
        {/* Test with API enabled */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With API (finbyzweb.api.get_customer_details)</h2>
          <ClientLogos 
            data={{
              title: "Our Clients (API Data)",
              subtitle: "Fetched from finbyzweb.api.get_customer_details",
              useAPI: true,
              apiEndpoint: '/web-api/client-logos',
              carousel: {
                autoPlay: true,
                interval: 4000,
                showArrows: true,
                showIndicators: true
              }
            }}
          />
        </div>

        {/* Test with hardcoded data */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Hardcoded Data (Fallback)</h2>
          <ClientLogos 
            data={{
              title: "Our Clients (Hardcoded)",
              subtitle: "Using default hardcoded data",
              useAPI: false,
              carousel: {
                autoPlay: true,
                interval: 3000,
                showArrows: true,
                showIndicators: true
              }
            }}
          />
        </div>

        {/* API Test Button */}
        <div className="text-center">
          <button 
            onClick={async () => {
              try {
                const response = await fetch('/web-api/client-logos?limit=6&page=1');
                const data = await response.json();
                console.log('API Response:', data);
                alert('Check console for API response');
              } catch (error) {
                console.error('API Error:', error);
                alert('API Error - Check console');
              }
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Test API Directly
          </button>
        </div>
      </div>
    </div>
  );
}
