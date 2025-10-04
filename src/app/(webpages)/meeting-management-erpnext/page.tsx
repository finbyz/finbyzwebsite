'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import CTA from '@/components/sections/cta';
import MeetingGifImage from '@/components/ai_components/MeetingGifImage';
import { FaDownload } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Meeting Management In ERPNext"
        highlightWords={["Meeting", "ERPNext"]}
        description="Optimize your meeting processes with ERPNext's Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM."
        primaryButton={{
          text: 'Download App',
          action: () => window.open('https://frappecloud.com/marketplace/apps/meeting_management', '_blank'),
        }}
        secondaryButton={{
          text: 'Watch Video',
          action: () => {
            const el = document.getElementById('meeting-video');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'Meeting Management In ERPNext',
          src: 'api/fb/n/files/Meeting-Management-PageDesign-SVG.avif',
          videoSrc: null,
        }}
      />

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-4">
            The ERPNext for Meeting Management app enables users to manage meeting discussions, action items, and expenses in a structured and consistent format. All meeting summaries and notes are saved under the scheduled meeting and are automatically logged in the history of related Lead, Opportunity, or Customer documents. A video tutorial is provided to guide users through the process of creating a meeting note.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <List
            title="What does the App do"
            items={[
              'This app simplifies ERPNext meeting scheduling by allowing you to plan meetings and directly add notes within Lead, Opportunity, and Customer DocTypes in ERPNext.',
              'It integrates seamlessly into ERPNext without requiring external tools or complicated setups.',
              'You can view the number of meetings linked to a specific Lead, Opportunity, or Customer in the Connection (Dashboard) section—making it easier to track meeting summary ERPNext history.'
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up" id="meeting-video">
          <YouTubeEmbed
            url="https://www.youtube.com/embed/u3WYIUx5TD0"
            title="ERPNext Meeting Management App Video Tutorial"
            className="rounded-lg shadow-lg w-full aspect-video"
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4">How to use ERPNext Meeting Scheduling</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Previously, you might have relied on external calendars like Email or Google Calendar to schedule meetings with Leads, Opportunities, or Customers.</li>
            <li>Drafting emails manually often led to inconsistent formats and missed details for meeting invites.</li>
            <li>With this app, ERPNext meeting scheduling becomes smooth and unified—send invites and manage meetings from a single ERP platform.</li>
            <li>Each scheduled meeting is automatically linked and visible in the history of the respective Lead, Opportunity, or Customer document.</li>
            <li>Quick video tutorial to understand the Meeting Schedule document process:</li>
          </ul>
          <MeetingGifImage src="api/fb/n/files/1_AdobeExpress.gif" alt="Meeting Schedule Demo" />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4">How to use Meeting Notes</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Traditionally, meeting notes were maintained in Word or Excel, which lacked standardization and tracking.</li>
            <li>This outdated method often made it hard to maintain consistency or trace action items later.</li>
            <li>With the ERPNext Meeting Notes feature, you can now document discussions, assign actionable items, and even log expenses all in one place.</li>
            <li>These notes are directly linked to your scheduled meetings and associated with Leads, Opportunities, or Customer records.</li>
            <li>Each meeting summary in ERPNext is stored in the document’s history for easy future reference.</li>
            <li>Quick Video to understand the Meeting Note (Create Meeting) Document Process:</li>
          </ul>
          <MeetingGifImage src="api/fb/n/files/2_AdobeExpress.gif" alt="Meeting Notes Demo" />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center animate-fade-in-up">
          <h4 className="text-lg font-semibold mb-2">Download:</h4>
          <a
            href="https://frappecloud.com/marketplace/apps/meeting_management"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
          >
            <FaDownload className="w-5 h-5" />
            Meeting Management
          </a>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fade-in-up">
          <CTA
            data={{
              subheading: {
                text: 'Ready to streamline your meetings?',
                icon: 'calendar-check',
              },
              title: 'Get Started with ERPNext Meeting Management',
              description: 'Download the app now and experience seamless meeting scheduling, note-taking, and action tracking—all within ERPNext.',
              primaryButton: {
                text: 'Download Now',
                icon: 'download',
                action: () => window.open('https://frappecloud.com/marketplace/apps/meeting_management', '_blank'),
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'mail',
                action: () => window.location.href = '/contact',
              },
              trustIndicator: {
                text: 'Trusted by ERPNext users',
                icon: 'star',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
