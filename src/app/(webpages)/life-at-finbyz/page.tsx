'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import CultureValuesGrid from '@/components/ai_components/CultureValuesGrid';
import AboutSection from '@/components/ai_components/AboutSection';
import GrowthSection from '@/components/ai_components/GrowthSection';
import FunGallery from '@/components/ai_components/FunGallery';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Life at Finbyz"
        highlightWords={["Life", "Finbyz"]}
        description="Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance."
        primaryButton={{
          text: 'Explore Openings',
          action: () => window.location.assign('/jobs'),
        }}
        heroImage={{
          alt: 'Life at Finbyz',
          src: '/life-at-finbyz.jpg',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <AboutSection />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-primary">Our Culture & Values</h2>
          <CultureValuesGrid
            items={[
              {
                title: 'Innovation',
                image: '/images/264.png',
                alt: 'Innovation',
                description: 'We encourage fresh ideas and creative solutions.'
              },
              {
                title: 'Learning & Growth',
                image: '/images/127.png',
                alt: 'Learning & Growth',
                description: 'Continuous learning is part of our DNA.'
              },
              {
                title: 'Collaboration',
                image: '/images/240.png',
                alt: 'Collaboration',
                description: 'Teamwork makes the dream work.'
              },
              {
                title: 'Work-Life Balance',
                image: '/images/Resource Limitations .png',
                alt: 'Work-Life Balance',
                description: 'We support a healthy, balanced life.'
              }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">Professional Growth & Development</h2>
          <GrowthSection />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">Fun at Finbyz</h2>
          <FunGallery />
        </div>
      </Section>

      <Section>
        <div className="py-8 ">
          <p className="text-center text-lg text-gray-700 leading-relaxed mb-8 animate-fadeInUp">
            At Finbyz, we take things forward with a mindset that blends creativity and a futuristic approach. We believe that a happy team is a productive team, so we make sure to keep our workplace lively and engaging. Brainstorming sessions are often paired with coffee and laughter, and celebrating successes is a team sport. We embrace challenges with enthusiasm, always looking for innovative solutions and encouraging each other to think outside the box. At Finbyz, your ideas matter, your growth is our priority, and every day is an opportunity to create something amazing together.
          </p>
          <CTA
            data={{
              title: 'Ready to Join Our Team?',
              description: 'Explore open positions and become a part of our vibrant, innovative culture.',
              primaryButton: {
                text: 'Explore Openings',
                icon: 'ArrowRight',
                action: () => window.location.assign('/jobs'),
              },
              trustIndicator: {
                text: 'Trusted by passionate professionals',
                icon: 'Smile',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
