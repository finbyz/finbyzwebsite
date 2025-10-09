'use client';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureGrid from '@/components/ai_components/FeatureGrid';
import ProductifyImageSection from '@/components/ai_components/ProductifyImageSection';
import ProductifyDualImageSection from '@/components/ai_components/ProductifyDualImageSection';
import CTA from '@/components/sections/cta';
import List from '@/components/sections/list';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Productify"
        highlightWords={["Productivity", "Monitoring", "Insights"]}
        description="Boost your team's efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance."
        primaryButton={{
          text: 'Get Productify',
          action: () => window.open('https://frappecloud.com/marketplace/apps/productivity_next', '_blank'),
        }}
        secondaryButton={{
          text: 'Learn More',
          action: () => {
            const el = document.getElementById('features-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'Productify',
          src: '/files/Productify%20image%20(1).svg',
          videoSrc: undefined,
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <QuoteBlock
            text="At FinByz, we firmly believe that efficiency grows with strategic time allocation. That’s why we developed Productify – an all-in-one Employee Monitoring Software crafted to enhance work patterns and elevate overall team output."
            isHeading={true}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 flex flex-col gap-8">
          <p className="text-lg text-muted-foreground animate-fadeInUp">
            Productify is a powerful Staff Monitoring Software, available both as a desktop app and a browser extension. Supporting Google Chrome, Microsoft Edge, and Brave, it ensures effective employee supervision regardless of location. Whether your workforce is remote or office-based, this time tracking software delivers actionable insights and secure activity monitoring to maximize productivity while maintaining data integrity.
          </p>
          <ProductifyImageSection
            src="/api/fb/n/files/Productify%20Activity%20Analysis%20Overall.jpg"
            alt="Productify Activity Analysis Overall"
            caption="Productify Activity Analysis Overall"
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
          <p className="text-lg text-muted-foreground animate-fadeInUp">
            Productify includes two primary modules – the Activity Analysis dashboard and Summary Reports. Both are integrated with ERP, allowing employees and leadership to monitor and evaluate productivity. This Employee Monitoring Software supports transparency, boosts accountability, and aligns employee efforts with organizational objectives.
          </p>
        </div>
      </Section>

      <Section id="features-section" useGradient>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fadeInUp">Features</h2>
          <FeatureGrid
            features={[
              {
                title: 'Activity Summary',
                image: '/api/fb/n/files/295.svg',
                alt: 'Activity Summary',
                description:
                  'The Activity Summary module presents employee engagement using a Gantt chart, reflecting active and idle periods across applications, websites, and meetings. This time tracking software empowers teams to improve time utilization and overall performance.',
              },
              {
                title: 'System Activity',
                image: '/api/fb/n/files/49.svg',
                alt: 'System Activity',
                description:
                  'System Activity offers real-time insights into keystrokes and mouse movements, forming a heatmap that pinpoints periods of intense activity. This feature of our Staff Monitoring Software is ideal for analyzing employee engagement and improving time planning and mentoring.',
              },
              {
                title: 'Web Browsing',
                image: '/api/fb/n/files/Devopps.svg',
                alt: 'Web Browsing',
                description:
                  'Monitor web activity with domain-level Pie Chart analytics. Daily, weekly, and monthly summaries assist managers in refining digital focus and ensuring productive use of time with our Employee Monitoring Software.',
              },
              {
                title: 'Phone Calls Analysis',
                image: '/api/fb/n/files/Supoort.svg',
                alt: 'Phone Calls Analysis',
                description:
                  'Productify’s mobile tracking component enhances the functionality of time tracking software by logging calls and connecting them with ERP records. Track details like call type, contacts, and duration to assess communication efficiency effectively.',
              },
              {
                title: 'Meeting Analysis',
                image: '/api/fb/n/files/lack-of-participation.svg',
                alt: 'Meeting Analysis',
                description:
                  'Optimize meeting schedules with detailed logs of all internal and external discussions. This feature of our Staff Monitoring Software helps your team evaluate time invested in meetings and ensures they contribute to measurable outcomes.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">Activity Summary</h2>
          <ProductifyImageSection
            src="/api/fb/n/files/Productify%20Activity%20Summary.jpg"
            alt="Productify Activity Summary"
            caption="Visual breakdown of employee actions through a Gantt chart."
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <p className="text-lg text-muted-foreground animate-fadeInUp bg-white rounded-lg shadow p-6">
            As an advanced Employee Monitoring Software, the Activity Summary delivers a clear visual overview of an employee’s workday through a user-friendly Gantt chart. It highlights both active and inactive periods across applications, websites, and meetings. Integrated with a progress bar chart, it provides detailed metrics on meeting hours and call types — including incoming, outgoing, missed, and rejected calls — offering powerful insights to improve time management and productivity.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">Activity Summary Report</h2>
          <ProductifyImageSection
            src="/api/fb/n/files/Productify%20Activity%20Summary%20Report.png"
            alt="Productify Activity Summary Report"
            caption="Line Chart tracking Total Hours, Active Hours, Call Hours, and Meeting Hours."
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <p className="text-lg text-muted-foreground animate-fadeInUp bg-white rounded-lg shadow p-6">
            This report, part of our comprehensive time tracking software, displays a Line Chart that monitors Total Hours, Active Hours, Call Hours, and Meeting Hours over time. Users can filter results by employee, timeframe, and frequency (Daily, Weekly, Monthly). A supporting table offers deep insights into user behavior, including keystrokes, mouse clicks, communication breakdowns, and idle periods — all vital for effective Staff Monitoring Software.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">System Activity</h2>
          <ProductifyImageSection
            src="/api/fb/n/files/Productify%20Work%20Intensity.jpg"
            alt="Productify Work Intensity"
            caption="Work Intensity Heatmap for keystrokes and mouse clicks."
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <p className="text-lg text-muted-foreground animate-fadeInUp bg-white rounded-lg shadow p-6">
            Our Work Intensity module, a vital part of any modern Employee Monitoring Software, analyzes keystrokes and mouse clicks to measure engagement. The real-time Heatmap highlights peak productivity periods by the hour across the week, helping organizations optimize workflows with precise Staff Monitoring Software tools.
          </p>
        </div>
      </Section>

      <Section>
      <div className="container-custom py-8">
        <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">
          Applications and Web Browsing Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="/api/fb/n/files/Productify%20Applications%20Used.jpg"
                alt="Productify Applications Used"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-muted-foreground text-sm">
              Our Doughnut Chart breaks down employee software usage, showcasing how much time is spent per application.
            </p>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="/api/fb/n/files/Productify%20Web%20Browsing%20Time.jpg"
                alt="Productify Web Browsing Time"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-muted-foreground text-sm">
              Track all web activity with Productify's Pie Chart, categorizing browsing time by domain.
            </p>
          </div>
        </div>
      </div>
    </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">Domain Analysis Report</h2>
          <ProductifyImageSection
            src="/api/fb/n/files/Report%20Domain%20Analysis.png"
            alt="Report Domain Analysis"
            caption="Browser usage by user and date for complete transparency."
          />
          <div className="mt-6 bg-white rounded-lg shadow p-6 animate-fadeInUp">
            <p className="mb-2 text-base text-muted-foreground">
              The Domains Analysis Report — essential to our Staff Monitoring Software — displays browser usage by user and date, giving complete transparency into digital behavior.
            </p>
            <p className="mb-2 text-base text-muted-foreground">
              Using a bar chart, this module shows domain visit frequency with corresponding data like employee name, visit time, session length, and source application.
            </p>
            <p className="mb-2 text-base text-muted-foreground">
              A <span className="font-semibold text-primary">'Rebuild'</span> button updates the latest domain activity for accurate trend analysis.
            </p>
          </div>
        </div>
      </Section>

      <Section>
  <div className="container-custom py-8">
    <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">Top Phone Calls and Types of Calls</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* First Image */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-white p-4">
          <img
            src="/api/fb/n/files/Productify%20Top%20Phone%20Calls.jpg"
            alt="Productify Top Phone Calls"
            className="w-full h-auto object-contain"
          />
        </div>
        <p className="mt-4 text-center text-muted-foreground text-sm">
          Top Phone Calls in the Productify app, visualized using a Pie-in-a-Doughnut chart.
        </p>
      </div>

      {/* Second Image */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-white p-4">
          <img
            src="/api/fb/n/files/Type%20of%20Calls.png"
            alt="Type of Calls"
            className="w-full h-auto object-contain"
          />
        </div>
        <p className="mt-4 text-center text-muted-foreground text-sm">
          Categorizes internal and external communications to enhance strategic decisions.
        </p>
      </div>
    </div>
  </div>
</Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">Hourly Calls Analysis</h2>
          <ProductifyImageSection
            src="/api/fb/n/files/Productify%20Hourly%20Calls.jpg"
            alt="Productify Hourly Calls"
            caption="Hourly Calls help organizations optimize team schedules by revealing detailed call patterns."
          />
          <div className="mt-6 bg-white rounded-lg shadow p-6 animate-fadeInUp">
            <p className="text-base text-muted-foreground">
              Hourly Calls help organizations optimize team schedules by revealing detailed call patterns — a valuable addition to any Employee Monitoring Software.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fadeInUp">Consolidated Analysis</h2>
          <ProductifyImageSection
            src="/api/fb/n/files/Consolidated%20table.png"
            alt="Productify Consolidated Analysis"
            caption="The User Analysis dashboard consolidates all core productivity metrics."
          />
          <div className="mt-6 bg-white rounded-lg shadow p-6 animate-fadeInUp">
            <p className="text-base text-muted-foreground">
              The User Analysis dashboard consolidates all core productivity metrics — including total and active hours, call logs, work intensity, and meetings — making Productify a complete Staff Monitoring Software suite for workforce oversight.
            </p>
          </div>
        </div>
      </Section>

      {/* <Section>
        <div className="container-custom py-8 flex flex-col items-center gap-4 animate-fadeInUp">
          <h4 className="text-lg font-semibold">Download:</h4>
          <a
            href="https://frappecloud.com/marketplace/apps/productivity_next"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white font-medium shadow hover:bg-primary/90 transition-colors"
          >
            <FaDownload className="w-5 h-5" /> Productify
          </a>
        </div>
      </Section> */}

    <Section>
    <div className="container-custom py-12 flex flex-col items-center gap-6 animate-fadeInUp">
      <h2 className="text-2xl font-semibold text-center">Download:</h2>
      <a
        href="https://frappecloud.com/marketplace/apps/productivity_next"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-white text-black font-semibold text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
      >
        <FaDownload className="w-5 h-5" /> Productivity Next
      </a>
    </div>
  </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to boost your team’s productivity?',
                icon: 'rocket',
              },
              title: 'Start with Productify Today',
              description: 'Empower your workforce with actionable insights and seamless monitoring. Try Productify and transform your productivity management.',
              primaryButton: {
                text: 'Get Productify',
                icon: 'download',
                action: () => window.open('https://frappecloud.com/marketplace/apps/productivity_next', '_blank'),
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'mail',
                action: () => window.location.href = '/contact',
              },
              trustIndicator: {
                text: 'Trusted by leading teams',
                icon: 'users',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
