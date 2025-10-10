'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const router = useRouter();

  const handleApplyNow = () => {
    router.push('/job_application?new=1');
  };

  const handleViewOpenings = () => {
    router.push('/jobs');
  };

  return (
    <>
      <HeroSection
        headline="Career"
        highlightWords={["team", "builds", "company"]}
        description="At FinByz, we believe the team builds the company. Initiator or leader, Technical or Creative—there is a space for each one."
        primaryButton={{
          text: 'Apply Now',
          action: handleApplyNow,
        }}
        secondaryButton={{
          text: 'View All Openings',
          action: handleViewOpenings,
        }}
        heroImage={{
          alt: 'Career',
          src: '/images/banner-career.svg',
          videoSrc: undefined,
        }}
      />

      <Section>
        <div className="container-custom py-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8 animate-fade-in">
            <div className="flex-1 space-y-4">
              <p>
                At Finbyz Tech, we are passionate about revolutionizing businesses through the latest technology. We do scalable and innovative <a href="/software-development" target="_blank" className="text-blue-600 underline hover:text-blue-800 transition-colors">software development</a> that streamlines your business processes efficiently. We value collaboration and strive to create a positive working environment by celebrating innovation.
              </p>
              <QuoteBlock text="Imagine What We Can Build Together" isHeading={false} />
              <p>
                We create an environment where you can learn, grow, and thrive.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <Image src="/images/Quotation_marks.svg" alt="Quotation marks" width={64} height={64} className="opacity-70 animate-fade-in-up" />
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold">What are we looking for when we hire for the team?</h2>
            <p>
              We like people who are resourceful, ambitious and self-driven to succeed. People who always go the extra mile (or three) to do a great job, people who want to add value to team, company and clients.
            </p>
            <p>
              It is certainly not necessary to have previous recruitment experience—just the main facets which are the right attitude and motivation. You must have a clear focus and direction coupled with an understanding of your personal motivation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
            <FeatureCard
              title="INDIVIDUAL TALENT"
              image="/images/icon-individual-talent.svg"
              alt="Individual Talent"
              description="Focus on your special talents and interests."
            />
            <FeatureCard
              title="TEAM SPIRIT"
              image="/images/icon-team-spirit.svg"
              alt="Team Spirit"
              description="Inspire and be inspired by your coworkers!"
            />
            <FeatureCard
              title="FREEDOM OF IDEAS"
              image="/images/icon-freedom-of-ideas.svg"
              alt="Freedom of Ideas"
              description="We listen to you and support your innovative ideas."
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <QuoteBlock text="Come Flaunt Your Skills at FinByz Tech" isHeading={false} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 flex flex-col gap-6 animate-fade-in">
          <p>
            Email us your CV <a href="mailto:career@finbyz.tech?Subject=Job%20Application%20at%20FinByz%20Tech" target="_top" className="text-blue-600 underline hover:text-blue-800 transition-colors">career@finbyz.tech</a> with links that best showcase the things you have built and done. It would also help to include your Linkedin/Instagram handles – we'd love to get a sense of you as a full person.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 flex flex-col items-center animate-fade-in-up">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-lg"
            onClick={handleApplyNow}
            aria-label="Apply Now"
          >
            Apply Now <FaArrowRight className="ml-2" />
          </button>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold shadow hover:bg-blue-50 transition-colors text-lg mt-4"
            onClick={handleViewOpenings}
            aria-label="View All Openings"
          >
            View All Openings <FaArrowRight className="ml-2" />
          </button>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center animate-fade-in">
          <CTA
            data={{
              subheading: {
                text: 'Ready to join our team?',
                icon: 'users',
              },
              title: 'Build Your Career at FinByz Tech',
              description: 'Take the next step in your professional journey. Apply now or view all our open positions to find your fit.',
              primaryButton: {
                text: 'Apply Now',
                icon: 'arrow-right',
                action: handleApplyNow,
              },
              secondaryButton: {
                text: 'View All Openings',
                icon: 'search',
                action: handleViewOpenings,
              },
              trustIndicator: {
                text: 'Trusted by passionate professionals',
                icon: 'star',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
