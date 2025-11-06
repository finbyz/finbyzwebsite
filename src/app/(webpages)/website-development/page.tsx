'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureGrid from '@/components/ai_components/FeatureGrid';
import ProcessStepCard from '@/components/ai_components/ProcessStepCard';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Design',
    image: '/images/design.svg',
    alt: 'Design',
    description:
      "We offer you a comprehensive design for your website with impressive layouts. Unlike many other website development companies, we don’t use themes, but we create a website from scratch to ensure uniqueness of design aesthetics. By following the client’s requirements and ongoing market trends, we give you a user-friendly solution that depicts your brand."
  },
  {
    title: 'Content',
    image: '/images/content.svg',
    alt: 'Content',
    description:
      "Content is the key element that attracts the attention of the customers, we provide you with a relevant and strong creative content that speaks aloud for your operations and expertise. Giving attention to details we structure the content to highlight key pointers to readers."
  },
  {
    title: 'Graphics',
    image: '/images/graphics.svg',
    alt: 'Graphics',
    description:
      "Instead of images and icons we prefer to use premium vector graphics for a website wherever it’s possible. These are robust and scalable light-weight image types, which remain crystal clear irrespective of screen size. We combine these advanced technologies with the user-friendly interface to create robust, scalable and multifunctional websites."
  },
  {
    title: 'On page SEO',
    image: '/images/on-page-seo.svg',
    alt: 'On page SEO',
    description:
      "We provide structure for on-page SEO for all pages which includes SEO Title, keyword, and meta-description. We build website that ensure structural elements like Structure and structured Data schema as per Google Requirements are optimized for SEO ranking."
  },
  {
    title: 'Speed',
    image: '/images/speed.svg',
    alt: 'Speed',
    description:
      "Slow speed can kill your page traffic and disappoint the visitor. Do you know the page loading speed is not only dependent on your server performance but also on the code written for it? We optimize website performance by using advanced techniques to ensure GT Matrix Page speed test score is above 90."
  },
  {
    title: 'Animations',
    image: '/images/animation.svg',
    alt: 'Animations',
    description:
      "Animated websites are one of the hot website design trends of recent times. Animations make the website come alive and it has become an indispensable part of user experience. We use the latest animation techniques to ensure smooth transitions with optimum speeds giving the website a premium feel."
  },
  {
    title: 'Maintenance',
    image: '/images/maintain.svg',
    alt: 'Maintenance',
    description:
      "We also provide website maintenance service which ensures the regular updating of content as well as the technology. Periodic backups and performance enhancements are also included in the website development service offered by us."
  }
];

const processSteps = [
  {
    title: 'Planning',
    image: '/images/step-1.svg',
    alt: 'Planning',
    description: 'Understand the requirements and market study.'
  },
  {
    title: 'Design',
    image: '/images/step-2.svg',
    alt: 'Design',
    description: 'Develop blueprint, layouts, and prototypes.'
  },
  {
    title: 'Development',
    image: '/images/step-3.svg',
    alt: 'Development',
    description: 'Content, coding, and implementation.'
  },
  {
    title: 'Launch',
    image: '/images/step-4.svg',
    alt: 'Launch',
    description: 'Quality checks, testing, and acceptance.'
  },
  {
    title: 'Support',
    image: '/images/step-5.svg',
    alt: 'Support',
    description: 'Feedbacks, updates, and support.'
  }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Website Development"
        highlightWords={["Website", "Development"]}
        description="Boost your presence with our premier website development company. We offer expert web development services, specializing in web design & development."
        primaryButton={{
          text: 'Get a Free Consultation',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        secondaryButton={{
          text: 'View Our Clients',
          action: () => {
            if (typeof window !== 'undefined') {
              window.open('/clients', '_blank');
            }
          }
        }}
        heroImage={{
          alt: 'Website Development',
          src: '/images/web-development.svg',
          // src:'/web-development.png'
          
        }}
      />

      <Section>
        <div className="container-custom py-8 flex flex-col items-center">
          {/* <QuoteBlock text="Your website deserves the best; after all, it is the internet advertising billboard for you and your company" isHeading={false} /> */}
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 space-y-4">
          <p>Your website is the first impression that every person gets when they search for your company’s name. It has to be the most interesting and informative part of your business if you wish to retain your prospective clients. The visitors should get an enlightening experience while they scroll through the website. We continue to provide growth and excellence to your business with our development expertise.</p>
          <p id="website">As an experienced website development company in Ahmedabad, Gujrat, India. We build dynamic websites with robust technology, tailored solutions as per your company needs. Don’t just become a domain on the internet use it as a powerful tool for marketing your brand.</p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-center mb-8 relative inline-block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary after:rounded-full text-[#1A5276]">What we focus on for Website Development?</h2>
          <FeatureGrid features={features} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-center mb-4 relative inline-block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary after:rounded-full text-[#1A5276]">Website Development Process Flow</h2>
          <p className="text-center mb-8">In order to customize the website as per business needs and requirements, we follow a systematic process to develop a website and combine it with our creative expertise.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {processSteps.slice(0, 3).map((step, idx) => (
              <ProcessStepCard key={step.title} {...step} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center mt-8">
            {processSteps.slice(3).map((step, idx) => (
              <ProcessStepCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A5276]">Website Development Company in Ahmedabad, Gujarat, India</h2>
          <p>
            <Link href="/clients" target="_blank" className="text-primary underline">Our clients</Link> speak for our work. Our passion to develop websites and using expertise and excellence to provide a diverse range of technical services that are customized as per client’s need has helped us achieve the time specific and desired results. We offer powerful design solutions maintaining the utmost quality and speed. Our high-quality service through an extensive and talented team allows us to develop a stunning website for your business. Our experienced developers and testing team help us to deliver our projects in time to the client’s satisfaction. We don’t just build you a website, we create it for you.
          </p>
          <div className="flex flex-col items-center mt-8">
            <QuoteBlock text="Building a website is easy, designing one takes skill - Paul Scrivens" isHeading={false} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="py-8 flex flex-col items-center">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Grow?',
                icon: 'Rocket',
              },
              title: 'Let’s Build Your Next Website!',
              highlightText:"Website",
              description: 'Contact us today for a free consultation and see how we can help you grow your business online.',
              primaryButton: {
                text: 'Get Started',
                icon: 'ArrowRight',
                action: "#website"
              },
              secondaryButton: {
                text: 'See Our Work',
                icon: 'Eye',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.open('/clients', '_blank');
                  }
                }
              },
              trustIndicator: {
                text: 'Trusted by 100+ Businesses',
                icon: 'ShieldCheck',
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
