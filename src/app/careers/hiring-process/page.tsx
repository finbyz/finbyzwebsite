'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';

import { TrendingUp } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Transparent Hiring Process & Career Opportunities"
        highlightWords={["Transparent", "Hiring ", " Opportunities"]}
        description="Discover Finbyz Tech's structured and transparent hiring process. Learn how we recruit top talent for ERPNext, AI automation, and IT roles, ensuring a fair and engaging selection experience."
        primaryButton={{ text: 'Get Started',action: 'https://finbyz.tech/contact' }}
        secondaryButton={{ text: 'Learn More' , action: () => {
          const el = document.getElementById('hiring');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}}
        heroImage={{
          alt: 'Transparent Hiring Process & Career Opportunities',
          src: '/images/hiring-process.png',
        }}
        accentColor="orange"
        
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-semibold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify" id="hiring">
            Finbyz Tech's recruitment process embodies clarity, fairness, and innovation, ensuring a seamless and structured candidate experience. Rooted in our commitment to transparency, our approach attracts top talent in ERPNext, AI automation, and the broader IT sector. As an ISO 27001:2013 certified company and certified ERPNext Partner, we pride ourselves on our ability to deliver complex, high-impact solutions across industries while nurturing a team culture centered around continuous learning and professional growth. On this page, discover how our end-to-end hiring journey guides you—from your initial application to joining a dynamic team that values both your skills and your ideas. Whether you're a developer, technical innovator, or aspiring consultant, you'll find a supportive environment that prizes contribution, collaboration, and real business impact.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT STARTS HERE */}

      {/* Introduction Section: Your Journey with Us */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-semibold text-[#1A5276] mb-4">Your Journey with Us: Unveiling the Finbyz Tech Hiring Process</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">At Finbyz Tech, we're not just building software; we're building a future where technology empowers businesses to achieve unprecedented efficiency and innovation. Our success is directly tied to the brilliant minds that join our team – individuals who are passionate about ERPNext, AI automation, and transforming digital landscapes.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">We understand that finding the right career opportunity is a significant step, and similarly, identifying the right talent is crucial for our continued growth. That's why we've meticulously crafted a hiring process that is not only robust and efficient but also transparent, fair, and engaging. We want you to understand every step of your journey with us, ensuring a smooth and insightful experience from application to onboarding.</p>
          {/* <TextSection
            data={{
              title: '',
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* Why Consider a Career at Finbyz Tech? Feature Cards */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Why Consider a Career at Finbyz Tech?',
              cards: [
                {
                  id: 1,
                  title: 'Global Recognition',
                  description: 'Certified ERPNext Partner, ISO 27001:2013 certified, 200+ projects across 12+ countries.',
                  icon: 'Star',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Expert Team',
                  description: '30+ skilled ERP consultants, developers, and industry experts serving 7000+ users.',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Cutting-edge Projects',
                  description: 'Pioneering AI automations and complex industry modules for real-world business challenges.',
                  icon: 'Lightbulb',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Culture of Growth',
                  description: 'Environment of innovation, collaboration, and continuous learning where your contributions matter.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
              layout: 'standard'
            }}
            className=""
          />
        </div>
      </section>

      {/* Hiring Philosophy List (with icons) */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Our Hiring Philosophy: Clarity, Efficiency, Impact"
            items={[
              'Identify Best-Fit Talent: Beyond technical skills, we seek individuals who align with our values and collaborative spirit.',
              'Ensure Transparency: Candidates should always know where they stand in the process.',
              'Provide a Positive Candidate Experience: Every candidate should feel valued regardless of the outcome.',
              'Leverage Innovation: We use advanced tools, including our own AI solutions like Resume Ranker and Smarter Hiring, to focus human expertise where it counts.'
            ]}
            // Icon={Lightbulb}
            iconColor="text-[#1A5276]"
          />
        </div>
      </section>

      {/* Step-by-Step Guide as Card Grid */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'The Finbyz Tech Hiring Journey: Step-by-Step',
              cards: [
                {
                  id: 1,
                  title: 'Application Submission',
                  description: 'Submit your application via our portal or job boards with a detailed resume and a targeted cover letter.',
                  icon: 'ClipboardList',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'AI-Powered Screening',
                  description: "Your application is first reviewed by HR and enhanced with proprietary AI tools like Resume Ranker and Smarter Hiring.",
                  icon: 'Search',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Assessment or First-Round Interview',
                  description: "Either a technical challenge or an initial interview to gauge your technical skills and career ambitions.",
                  icon: 'FileText',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Functional/Managerial Interview',
                  description: 'Deeper dive into your technical/functional expertise, problem-solving, and leadership potential.',
                  icon: 'UserCheck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Leadership / Cultural Fit',
                  description: "Final step: discussion with company directors focusing on vision, core values, and long-term alignment.",
                  icon: 'HeartHandshake',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Offer & Onboarding',
                  description: 'Receive your offer and start an insightful onboarding experience with the Finbyz Tech family.',
                  icon: 'BadgeCheck',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
              layout: 'standard'
            }}
          />
        </div>
      </section>

      {/* What We Look For: Checklist */}
      <section>
        <div className="container-custom py-8">
          <List
            title="What We Look For in Our Future Innovators"
            items={[
              'Problem-Solving Acumen: Analyze complex challenges and devise efficient solutions.',
              'Continuous Learning: Stay updated with ERPNext, AI, and industry trends.',
              'Collaborative Spirit: Excel in cross-functional teamwork and communication.',
              'Integrity and Professionalism: Uphold ethical standards and professionalism.',
              'Passion for Impact: Build solutions that provide real business value.'
            ]}
            Icon={TrendingUp}
            iconColor="text-[#1A5276]"
          />
        </div>
      </section>

      {/* Final Text Invite Section */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-semibold text-[#1A5276] mb-4">Ready to Make an Impact?</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Our structured hiring process is designed to ensure a fair evaluation and a positive experience for every candidate. We are constantly seeking passionate, skilled, and forward-thinking individuals to join our growing team. If you're ready to contribute to a company that values innovation, expertise, and a human-centric approach to technology, we encourage you to explore our current openings. Your next great career chapter could start here.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        Join Finbyz Tech and be a part of a team that's shaping the future of business technology.
        </p>
          {/* <TextSection
            data={{
              title: '',
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>
    </>
  );
}
