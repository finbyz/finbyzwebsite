'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import StatusIndicatorsGrid from '@/components/ai_components/StatusIndicatorsGrid';
import BenefitsGrid from '@/components/ai_components/BenefitsGrid';
import Image from 'next/image';
import { CheckCircle, HelpCircle, XCircle } from 'lucide-react';
import React from 'react';

export default function Page() {
  // Button actions
  const handleGetStarted = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Workflow Transition"
        highlightWords={["Workflow", "Transition"]}
        description="Track document state changes with visual indicators, automated reminders, and comprehensive reports. Ensure accountability and transparency in your workflow with real-time insights and notifications."
        primaryButton={{ text: 'Get Started', action: handleGetStarted }}
        secondaryButton={{ text: 'Contact Us', action: handleContact }}
        heroImage={{
          alt: 'Workflow Transition',
          src: '/images/workflow-transition.png'
        }}
      />

      {/* Introduction */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            This document describes the workflow transition system that tracks document state changes, sends automated reminders, and generates reports on workflow performance.
          </p>
          <div className="flex justify-center animate-fade-in">
            <Image src="/images/so.jpg" alt="Workflow Example" width={800} height={400} className="rounded-lg shadow-lg object-contain" style={{ width: '65%', height: 'auto' }} />
          </div>
        </div>
      </Section>

      {/* 1. Workflow State Tracking */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">1. Workflow State Tracking</h2>
          <h3 className="text-lg font-semibold mb-2">Visual Indicators</h3>
          <p className="text-gray-700 mb-4">
            When a document moves through different workflow states, the system displays visual status indicators:
          </p>
          <StatusIndicatorsGrid
            indicators={[
              {
                icon: <CheckCircle className="w-8 h-8 text-green-600" />, title: 'Checkmark', description: 'Indicates the document has successfully transitioned to the next state', color: 'green'
              },
              {
                icon: <HelpCircle className="w-8 h-8 text-yellow-500" />, title: 'Question Mark', description: 'Appears when the document is in a pending or intermediate state', color: 'yellow'
              },
              {
                icon: <XCircle className="w-8 h-8 text-red-600" />, title: 'Cross Mark', description: 'Shows when the document is in a cancelled state', color: 'red'
              },
            ]}
          />
          <p className="text-gray-700 mt-6">
            These indicators appear in a checkbox section within any DocType that has workflow states enabled, providing immediate visual feedback on document status.
          </p>
          <div className="flex justify-center mt-8 animate-fade-in">
            <Image src="/images/ws.jpg" alt="Workflow State Tracking" width={800} height={400} className="rounded-lg shadow-lg object-contain" style={{ width: '65%', height: 'auto' }} />
          </div>
        </div>
      </Section>

      {/* 2. Automated Reminder System */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">2. Automated Reminder System</h2>
          <h3 className="text-lg font-semibold mb-2">Configuration</h3>
          <p className="text-gray-700 mb-4">
            The reminder system is activated by checking the <strong>Reminder</strong> checkbox in the workflow configuration.
          </p>
          <h3 className="text-lg font-semibold mb-2">Functionality</h3>
          <List
            title="When the reminder checkbox is enabled:"
            items={[
              'The system monitors documents based on the Shift Details DocType',
              'Automated email notifications are sent according to specified time intervals',
              'Reminders are triggered when no state changes occur within the defined timeframe',
            ]}
          />
          <h4 className="text-md font-semibold mt-6 mb-2">Overdue Notifications</h4>
          <List
            title=''
            items={[
              'Emails are sent based on Role assignments',
              'Only users with the specified role receive overdue notifications',
              'The system runs daily at 12:00 AM to check for overdue items',
            ]}
          />
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 animate-fade-in">
            <Image src="/images/so_1.jpg" alt="Reminder Config 1" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
           </div>
           <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 animate-fade-in">
            <Image src="/images/ds.jpg" alt="Reminder Config 2" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 animate-fade-in">

            <Image src="/images/so_2.jpg" alt="Reminder Config 3" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
            </div>
         
          <h4 className="text-md font-semibold mt-8 mb-2">Project-Based Permissions</h4>
          <p className="text-gray-700 mb-4">
            When the <strong>Sales Mail Project Condition</strong> checkbox is enabled:
          </p>
          <List
            title=''
            items={[
              'The system respects project-level permissions in addition to role assignments',
              'Example: If 100 users have the "Sales Invoice" role, but only 10 users have permissions for a specific project, only those 10 users will receive the notification',
              'This ensures users only receive emails for documents they have access to',
            ]}
          />
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 animate-fade-in">
            <Image src="/images/ps.jpg" alt="Project Permission 1" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 animate-fade-in">
            <Image src="/images/po.jpg" alt="Project Permission 2" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
          </div>
        </div>
      </Section>

      {/* 3. Workflow Performance Reports */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">3. Workflow Performance Reports</h2>
          <p className="text-gray-700 mb-6">The system provides three comprehensive reports to track workflow efficiency and user activity.</p>
          <div className="flex justify-center animate-fade-in mb-8">
            <Image src="/images/state_change.jpg" alt="State Change Overview" width={800} height={400} className="rounded-lg shadow-lg object-contain" style={{ width: '65%', height: 'auto' }} />
          </div>
          {/* 3.1 State Transition Time Report */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">3.1 State Transition Time Report</h3>
            <p className="mb-2"><strong>Purpose:</strong> Tracks the time taken for documents to move from one state to another.</p>
            <p className="mb-2"><strong>Details:</strong></p>
            <List
              title=''
              items={[
                'Shows how long each document spent in different workflow states',
                'Displays time duration for individual entries',
                'Useful for identifying bottlenecks in the workflow process',
              ]}
            />
            <div className="bg-gray-50 rounded-lg p-4 mt-4 mb-4 animate-fade-in">
              <strong>Use Case:</strong> <span className="text-gray-800">Determine if specific documents are taking unusually long to progress through certain states.</span>
            </div>
            <div className="flex justify-center animate-fade-in mb-8">
              <Image src="/images/state_change-1.jpg" alt="State Transition Time Report" width={800} height={400} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
            </div>
          </div>
          {/* 3.2 Average State Transition Time Report */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">3.2 Average State Transition Time Report</h3>
            <p className="mb-2"><strong>Purpose:</strong> Provides average time statistics for state transitions across all documents.</p>
            <p className="mb-2"><strong>Details:</strong></p>
            <List
              title=''
              items={[
                'Calculates average duration for transitions between specific states',
                'Example: "Draft to Approve" might show an average of 31 days',
                'User-wise breakdown showing how long each user typically takes to complete transitions',
                'Helps establish baseline metrics for workflow performance',
              ]}
            />
            <div className="bg-gray-50 rounded-lg p-4 mt-4 mb-4 animate-fade-in">
              <strong>Use Case:</strong> <span className="text-gray-800">Identify which workflow stages typically take the longest and set realistic expectations for document processing times.</span>
            </div>
          </div>
          {/* 3.3 State Change Report */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">3.3 State Change Report</h3>
            <p className="mb-2"><strong>Purpose:</strong> Comprehensive audit trail of all workflow state changes.</p>
            <p className="mb-2"><strong>Key Features:</strong></p>
            <List
              title=''
              items={[
                'User Activity Tracking: Shows which user changed which workflow state',
                'Document-Level Details: Filter by specific document to see its complete state change history',
                'Complete Information: Displays all relevant information about each state transition including user, timestamp, previous state, new state, and document reference',
              ]}
            />
            <div className="bg-gray-50 rounded-lg p-4 mt-4 mb-4 animate-fade-in">
              <strong>Use Cases:</strong>
              <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
                <li>Audit workflow changes for compliance purposes</li>
                <li>Track individual user activity and productivity</li>
                <li>Investigate workflow delays or issues with specific documents</li>
                <li>Generate accountability reports</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in">
            <Image src="/images/state_change_report.jpg" alt="State Change Report 1" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
            </div>
            <br></br>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in">
            <Image src="/images/state_change_report_1.jpg" alt="State Change Report 2" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
            </div>
            <br></br>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in">
            <Image src="/images/expence_claim.jpg" alt="Expense Claim Report" width={400} height={250} className="rounded-lg shadow object-contain" style={{ width: '65%', height: 'auto' }} />
          </div>
        </div>
      </Section>

      {/* 4. System Requirements */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">4. System Requirements</h2>
          <List
            title='Daily Operations'
            items={[
              'The reminder system executes daily at 12:00 AM',
              'No manual intervention required once configured',
              'Automatically processes all active workflows',
            ]}
          />
          <List
            title='User Permissions'
            items={[
              'Role-based access controls determine email recipients',
              'Project permissions further refine notification distribution',
              'Users only receive notifications for documents they have access to',
            ]}
          />
        </div>
      </Section>

      {/* 5. Benefits */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">5. Benefits</h2>
          <BenefitsGrid
            benefits={[
              {
                title: 'For Management',
                items: [
                  'Clear visibility into workflow bottlenecks',
                  'Performance metrics for team evaluation',
                  'Automated compliance and audit trails',
                ],
              },
              {
                title: 'For Users',
                items: [
                  'Timely reminders prevent missed deadlines',
                  'Reduced manual follow-up required',
                  'Clear status indicators for document progress',
                ],
              },
              {
                title: 'For Organizations',
                items: [
                  'Improved workflow efficiency',
                  'Better resource allocation based on data',
                  'Enhanced accountability and transparency',
                ],
              },
            ]}
          />
        </div>
      </Section>

      {/* Conclusion & CTA */}
      <Section>
        <div className="py-8">
          <h2 className="container-custom text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6 container-custom">
            This workflow transition system provides comprehensive tracking, automated notifications, and detailed reporting to ensure smooth document processing and accountability across the organization. By leveraging role-based permissions and project-specific access controls, the system ensures relevant stakeholders stay informed while maintaining data security.
          </p>
          <CTA
            data={{
              subheading: {
                text: 'Ready to streamline your workflow?',
                icon: 'CheckCircle',
              },
              title: 'Get Started with Workflow Transition',
              highlightText:"Workflow Transition",
              description: 'Experience seamless document tracking, automated reminders, and actionable insights. Empower your team with accountability and transparency.',
              primaryButton: {
                text: 'Request Demo',
                icon: 'ArrowRight',
                action: handleGetStarted,
              },
              secondaryButton: {
                text: 'Contact Sales',
                icon: 'Mail',
                action: handleContact,
              },
              trustIndicator: {
                text: 'Trusted by leading organizations',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
