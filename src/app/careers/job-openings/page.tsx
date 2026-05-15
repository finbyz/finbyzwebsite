import HeroSection from '@/components/sections/dynamic-hero';
import JobOpeningsClient from './JobOpeningsClient';

export default function JobsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <HeroSection
          headline="Job Openings"
          highlightWords={['Job', 'Openings']}
          description="Join FinByz Tech and help shape the future of ERP and enterprise software. Explore open roles across engineering, consulting, and business."
          heroImage={{
            alt: 'Job Openings at FinByz Tech',
            src: '/images/Advance-Authorization-License-PageDesign.png',
          }}
        />
        <JobOpeningsClient />
      </div>
    </>
  );
}
