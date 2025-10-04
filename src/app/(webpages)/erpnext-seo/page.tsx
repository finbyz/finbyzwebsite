'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import SeoImprovementGrid from '@/components/ai_components/SeoImprovementGrid';
import { CheckCircle } from 'lucide-react';

const seoBenefits = [
  {
    title: 'More online visibility',
    image: 'api/fb/n/files/pythondevloper.svg',
    alt: 'More online visibility',
    description:
      'Optimizing your ERPNext platform for search engines can make your company easier to find online. This means more potential customers will see your products or services when searching for related terms.',
  },
  {
    title: 'More website visitors',
    image: 'api/fb/n/files/3939ac579.svg',
    alt: 'More website visitors',
    description:
      'SEO brings in more organic (free) traffic to your website. With ERPNext, you can handle this extra traffic smoothly and ensure visitors have a good experience.',
  },
  {
    title: 'Cost effective',
    image: 'api/fb/n/files/135.svg',
    alt: 'Cost effective',
    description:
      'Compared to regular advertising, investing in SEO gives long-term results at a lower cost. Integrating SEO with ERPNext helps streamline operations and use resources better, reducing overhead costs.',
  },
  {
    title: 'Target specific audiences',
    image: 'api/fb/n/files/icon-supplier-management.svg',
    alt: 'Target specific audiences',
    description:
      'SEO allows you to focus your marketing on particular groups of people. ERPNext can help identify your ideal customers and deliver personalized content to them.',
  },
  {
    title: 'Beat competitors',
    image: 'api/fb/n/files/33.svg',
    alt: 'Beat competitors',
    description:
      'Making your ERPNext platform search engine optimized can help you outrank competitors in search results. With a well-executed SEO plan, you can position your brand as a leader in your industry.',
  },
  {
    title: 'Better control and analysis of data',
    image: 'api/fb/n/files/Better control and analysis of data.svg',
    alt: 'Better control and analysis of data',
    description:
      "ERPNext has effective features for managing data and making reports. Businesses can learn a lot about how well their online marketing is working by adding SEO data (like keyword ranks, website traffic sources, and popular content) to ERPNext.",
  },
];

const improvementItems = [
  {
    title: 'Use the right keywords',
    image: 'api/fb/n/files/49.svg',
    alt: 'Use the right keywords',
    description:
      'Research terms your target customers are searching for. Thoughtfully use these keywords in product descriptions, blog posts, and website tags on your ERPNext platform.',
  },
  {
    title: 'Create quality content',
    image: 'api/fb/n/files/Customization.svg',
    alt: 'Create quality content',
    description:
      'Provide valuable, well-written information like how-to videos, blog articles, or product guides. Regularly adding new content improves SEO and attracts visitors.',
  },
  {
    title: 'Optimize for mobile',
    image: 'api/fb/n/files/Optimize for mobile.svg',
    alt: 'Optimize for mobile',
    description:
      'With more customers using mobile devices, ensure your ERPNext website is mobile-friendly and responsive across devices. This improves search rankings and user experience.',
  },
];

const gettingStartedList = [
  'Audit current performance by analyzing website data like traffic, rankings, and conversions. This reveals areas needing improvement.',
  'Set clear SEO goals and metrics to track progress, like increasing organic traffic or improving keyword rankings.',
  
  "Use ERPNext's flexibility to integrate SEO practices directly into your platform, optimizing product pages, tags, URLs, and site structure.",
  'Monitor performance using analytics tools. Refine your SEO strategy over time based on data.',
];

const otherTipsList = [
  'Optimize every aspect of your website like titles, descriptions, headers, and image tags using relevant keywords and structured data.',
  'Prioritize user experience with fast load times, easy navigation, and clear calls-to-action.',
  'For local businesses, use local SEO tactics like Google My Business listings and local keyword optimization.',
  'Integrate social media to increase visibility, engage your audience, and get social signals that can boost rankings.',
  'SEO requires continuous optimization as search algorithms change.',
  'Consider expert guidance if implementing an effective ERPNext SEO plan seems too complex.',
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext SEO"
        highlightWords={["SEO", "ERPNext"]}
        description="Optimize your ERPNext platform with SEO to increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!"
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          },
        }}
        secondaryButton={{
          text: 'Learn More',
          action: () => {
            const el = document.getElementById('benefits-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'ERPNext SEO',
          src: '/files/seo.png',
          videoSrc: null,
        }}
      />

      <Section>
        <div className="container-custom py-8" id="benefits-section">
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits of using ERPNext with SEO</h2>
          <SeoImprovementGrid items={seoBenefits} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Getting started with ERPNext SEO</h2>
          <List
            title=""
            items={gettingStartedList}
            style={{
              listStyleType: 'none',
              paddingLeft: 0,
            }}
            icon={<CheckCircle className="text-green-500 w-5 h-5 mr-2" />}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Improving ERPNext SEO</h2>
          <SeoImprovementGrid items={improvementItems} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Other Tips</h2>
          <List
            title=""
            items={otherTipsList}
            style={{
              listStyleType: 'none',
              paddingLeft: 0,
            }}
            icon={<CheckCircle className="text-green-500 w-5 h-5 mr-2" />}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Unlock ERPNext SEO's full potential to drive sustainable growth for your business in the digital world. Get started optimizing your platform today!</h3>
        </div>
      </Section>

      <CTA
        data={{
          subheading: {
            text: 'Ready to boost your ERPNext SEO?',
            icon: 'rocket',
          },
          title: 'Start Your SEO Journey with ERPNext',
          description: 'Contact us to discover how we can help you optimize your ERPNext platform for maximum online visibility and growth.',
          primaryButton: {
            text: 'Get Started',
            icon: 'arrow-right',
            action: () => {
              window.location.href = '/contact';
            },
          },
          secondaryButton: {
            text: 'Learn More',
            icon: 'info',
            action: () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            },
          },
          trustIndicator: {
            text: 'Trusted by leading businesses',
            icon: 'star',
          },
        }}
      />
    </>
  );
}
