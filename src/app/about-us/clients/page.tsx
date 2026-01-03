'use client'

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ClientLogos from '@/components/sections/client-logos';

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-4">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">Our Clients</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            We are trusted by forward-thinking businesses across industries. Here are a few of the
            organizations we have partnered with.
          </p>
          <ClientLogos data={{ title: 'Some of The Loyal Clients of FinByz', subtitle: 'Trusted by leading companies worldwide', useAPI: true, apiEndpoint: '/api/client-logos' }} />
        </section>
      </main>

    </div>
  );
}


