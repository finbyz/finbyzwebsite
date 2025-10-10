'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import WhyChooseFinbyzGrid from '@/components/ai_components/WhyChooseFinbyzGrid';
import ERPNextServicesGrid from '@/components/ai_components/ERPNextServicesGrid';
import ERPNextDifferenceGrid from '@/components/ai_components/ERPNextDifferenceGrid';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Service Provider"
        highlightWords={["Service", "Provider"]}
        description="Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          },
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: () => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          },
        }}
        heroImage={{
          alt: 'ERPNext Service Provider',
          src: '/files/Frappe-Certified-Erpnext-Partner.svg',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <p className="text-lg text-gray-700 animate-fadeInUp">
            Welcome to Finbyz, your premier ERPNext service provider. Our specialty is providing complete ERP solutions that address the complex requirements of companies seeking expansion and efficiency. Our expertise with ERPNext, an open-source enterprise resource planning tool, establishes us as a top choice for businesses seeking to optimize their processes.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8 text-center relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Why Choose Finbyz as Your ERPNext Service Provider?</h2>
          <WhyChooseFinbyzGrid
            features={[
              {
                title: 'Modified Solutions',
                image: '/images/92.svg',
                alt: 'Modified Solutions for ERPNext',
                description: "We recognize that every business is different. For this reason, we tailor ERPNext solutions specifically for your company's objectives and workflows. We make sure ERPNext Partners perfectly suits your demands, whether they are manufacturing, retail, or something else entirely.",
                bg: 'gray',
              },
              {
                title: 'Expert Team',
                image: '/images/96.svg',
                alt: 'Expert Team for ERPNext',
                description: "We have the best ERPNext specialists on staff. Our professionals have years of expertise with ERP systems and have the in-depth technical knowledge and industry insights necessary to completely change the way your firm operates.",
                bg: 'lightgray',
              },
              {
                title: 'Complete Facilities',
                image: '/files/178 (1).svg',
                alt: 'Complete Facilities for ERPNext',
                description: "We cover all the bases as a full-service ERPNext solution provider, from system customization and early consultation to implementation, training, and continuous maintenance. Our goal is to provide your team with a stress-free and seamless ERP integration.",
                bg: 'lightgray',
              },
              {
                title: 'Cost-effective Implementations',
                image: '/images/405.svg',
                alt: 'Cost-effective Implementations for ERPNext',
                description: "We think that value should be provided. Our ERPNext solutions are reasonably priced in addition to being scalable and reliable. By doing this, you can be confident that you're getting the most out of your investment without sacrificing functionality or quality.",
                bg: 'gray',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 text-center">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Our ERPNext Services Includes</h2>
          <ERPNextServicesGrid
            services={[
              {
                title: 'Advice & Strategy Planning',
                image: '/images/1099.svg',
                alt: 'Flawless UI with Real-time information',
                description: 'For best results, match your corporate strategy with ERPNext.',
              },
              {
                title: 'Customization and Development',
                image: '/images/blog-icon-speed-and-accuracy-by-automation.svg',
                alt: 'Higher Productivity',
                description: 'Adapting ERPNext functionalities to your own business needs',
              },
              {
                title: 'Integration Services',
                image: '/images/185.svg',
                alt: 'Improved Collaboration',
                description: 'Integrating ERPNext with other programs and systems in your company without any problems.',
              },
              {
                title: 'Training & Support',
                image: '/images/go live.svg',
                alt: 'support & maintenance',
                description: 'Providing in-depth instruction and assistance to guarantee that your staff is prepared to make the most of ERPNext.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 text-center">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Discover the Difference with Our ERPNext Solutions</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Finbyz, we transform corporate processes rather than just set up ERP systems. Our all-inclusive ERPNext solutions are made to give you the efficiency, control, and clarity you need to make wise decisions and grow your company. What defines us is this:
          </p>
          <ERPNextDifferenceGrid
            features={[
              {
                title: 'Scalability for Growth',
                image: '/images/export.svg',
                alt: 'Scalability for Growth for ERPNext',
                description: "Our ERPNext solutions expand together with your company. ERPNext's adaptable architecture makes sure that your ERP system grows with your company, regardless of whether you're adding more employees, expanding into new markets, or extending your product lines.",
              },
              {
                title: 'Better Process of Choice',
                image: '/images/426 (2).svg',
                alt: 'Better Process of Choice for ERPNext',
                description: "ERPNext provides your team with instant access to data and analytics, enabling them to make well-informed decisions quickly. A unified view of your operations, finances, and customer interactions can be achieved by bidding bye to data walls.",
              },
              {
                title: 'Efficiency of Operations',
                image: '/images/185.svg',
                alt: 'Efficiency of Operations for ERPNext',
                description: "ERPNext helps you automate repetitive processes, optimize company processes, and get away of errors. Our goal is to streamline your business processes so you can free up important resources and focus on strategic development projects.",
              },
              {
                title: 'Compliance and Risk Management',
                image: '/images/235.svg',
                alt: 'Compliance and Risk Management for ERPNext',
                description: "With ERPNext's compliance tools, you can efficiently manage risks and stay ahead of regulatory changes. By reducing risks and building trust, our solutions assist in making sure that your company complies with standards and processes.",
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Ready to Transform Your Business with ERPNext?</h2>
          <p className="text-gray-700 mb-4">
            One step is all it takes to achieve operational excellence and digital transformation. Get in touch with Finbyz right now to find out how our ERPNext solutions can revolutionize your company. Every stage of your ERP journey, from initial planning and customisation to deployment and beyond, is something our team is prepared to help you with.
          </p>
          <p className="text-gray-700">
            Include successful businesses that have selected Finbyz as their ERPNext service provider, and begin enjoying the advantages of an ERP system that is scalable, effective, and completely connected. Together, let's develop your company's future.
          </p>
        </div>
      </Section>

      <Section>
        <div>
          <CTA
            data={{
              subheading: {
                text: 'Get in Touch',
                icon: 'Mail',
              },
              title: 'Start Your ERPNext Journey with Finbyz',
              highlightText: "ERPNext",
              description: 'Contact us today to discover how our ERPNext solutions can drive your business forward. Our team is ready to assist you at every step.',
              primaryButton: {
                text: 'Request a Consultation',
                icon: 'ArrowRight',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                },
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'Info',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/erpnext';
                  }
                },
              },
              trustIndicator: {
                text: 'Trusted by leading businesses',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
