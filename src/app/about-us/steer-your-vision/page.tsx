'use client';
import HeroSection from '@/components/sections/dynamic-hero';

export default function Page() {
  const heroProps = {
    headline: "Steer Your Vision",
    highlightWords: ['Steer', 'Your'],
    description:
      "“Steer Your Vision” is our signature approach to your digital transformation.",
    heroImage: {
      alt: "Software Development",
      src: "/images/Steer_Your_Vision_Mobile.svg",
    },
  };

  const ctaData = {
    subheading: {
      text: "Ready to Transform Your Business?",
      icon: "Rocket",
    },
    title: "Let's Get It Started",
    description:
      "Partner with a leading software development company with years of experience in delivering world-class custom software development. Let's explore how our solutions can be crafted to meet your specific needs and unlock new opportunities for your business.",
    primaryButton: {
      text: "Request a Consultation",
      icon: 'ArrowRight',
      action: () => {
        window.location.href = '/contact';
      },
    },
    secondaryButton: {
      text: "See Our Work",
      icon: 'Eye',
      action: () => {
        window.location.href = '/erpnext/case-studies';
      },
    },
    trustIndicator: {
      text: "Trusted by 100+ Businesses",
      icon: 'CheckCircle',
    },
  };

  return (
    <>
      <HeroSection {...heroProps} />

      {/* Quote Block Section */}
      <section>
      <div className="container-custom py-8">
        <h2 className="text-2xl font-bold text-[#1A5276] mb-6 text-center">
          Solutions built to navigate you towards your Goals faster.
        </h2>

        <div className="mt-6 space-y-4 text-gray-700 text-justify">
          <p>
            "We believe technology acts both as a lighthouse guiding your direction and as the vessel that drives progress. Through our expertise in digital transformation consulting, we navigate clients from their current challenges toward their future vision. Leveraging advanced technologies, we help you optimize operations and innovate faster through automation and strategic process reengineering."
          </p>
        </div>

        <div className="mt-6 space-y-4 text-gray-700 text-justify">
          <p>
            In today's hyper-competitive business environment, technology is no longer optional—it’s essential. Organizations that embrace digital transformation gain a critical edge. Our approach, grounded in Agile principles, surpasses conventional delivery models. We empower businesses through a robust framework that prioritizes speed, adaptability, and sustainable growth by integrating business intelligent systems.
          </p>
          <p>
            Through our “Steer Your Vision” model, we assist enterprises in implementing real-time transformation strategies. Our experience in digital transformation consulting has shown that staying ahead means continuously evolving how your organization functions—from customer interactions to internal processes. We provide actionable data insights, automate routine workflows, and apply business process reengineering to streamline operations. This positions our clients as digital-first leaders capable of thriving in an ever-changing technological landscape.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
