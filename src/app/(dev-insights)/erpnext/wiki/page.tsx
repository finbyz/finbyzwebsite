import { Metadata } from 'next';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ERPNext Wiki | Comprehensive Knowledge Base',
  description: 'Explore the complete ERPNext documentation and knowledge base. Find guides, tutorials, and references for all ERPNext modules and features.',
};

async function getWikiPages() {
  try {
    // In a server component, we need the full URL if running on the server, 
    // or we can assume relative URL works if Next.js handles it, strictly better to use full path if possible or relative if same host.
    // However, usually referencing the API route works.
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/web-api/wiki-pages`, {
       next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.message || [];
  } catch (error) {
    console.error('Failed to fetch wiki pages:', error);
    return [];
  }
}

export default async function ERPNextWikiPage() {
  const wikiPages = await getWikiPages();

  return (
    <>
      <HeroSection
        headline="ERPNext Wiki"
        highlightWords={['ERPNext', 'Wiki']}
        description="Your central hub for ERPNext knowledge. Access comprehensive documentation, guides, and best practices to master your ERP system."
        heroImage={{
          alt: 'ERPNext Wiki - Knowledge Base',
          src: '/wiki-hero.png', // Assuming a placeholder or generic image available
        }}
         backgroundColor="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" 
      />

      <Section>
        <div className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Knowledge Base</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              Browse through our collection of in-depth articles and guides designed to help you get the most out of ERPNext.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wikiPages.length > 0 ? (
              wikiPages.map((page: any, index: number) => (
                <Link
                  key={index}
                  href={`/${page.route}`}
                  className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 bg-white hover:border-[#1A5276]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-[#1A5276] transition-colors">
                      <BookOpen className="w-6 h-6 text-[#1A5276] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A5276] mb-3 group-hover:text-[#1A5276] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {page.description || "Read more about this topic in our detailed wiki entry."}
                  </p>
                  <div className="text-[#1A5276] font-semibold group-hover:underline flex items-center gap-1">
                    Read Guide <span>→</span>
                  </div>
                </Link>
              ))
            ) : (
                <div className="col-span-full text-center py-12">
                    <p className="text-gray-600">No wiki pages found at the moment. Please check back later.</p>
                </div>
            )}
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-12">
            <CTA
                data={{
                subheading: { text: "Need More Help?", icon: "help-circle" },
                title: "Can't Find What You're Looking For?",
                description: "Our support team is here to assist you with specific questions and deeper insights into ERPNext.",
                primaryButton: { text: 'Contact Support', action: '/contact' },
                secondaryButton: { text: 'View Services', action: '/erpnext/services' },
                trustIndicator: { text: 'Expert assistance available', icon: 'check-circle' }
                }}
            />
        </div>
      </Section>
    </>
  );
}
