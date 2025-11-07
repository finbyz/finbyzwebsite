
"use client"
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import ProcessWorkflow from '@/components/sections/process-workflow';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import CTA from '@/components/sections/cta';

export default function Page() {
  const seoTitle = 'Lead Intelligence: Revolutionizing Inquiry Processing';
  const seoDescription = 'Lead Intelligence automates the capture and classification of inquiry emails using AI, transforming unstructured data into actionable CRM records.';

  const workflowData = {
    component_type: 'Timeline' as const,
    title: 'Workflow Steps',
    subtitle: 'From inbox to qualified lead in minutes—fully automated and deduplicated.',
    processSteps: [
      {
        step: '01',
        title: 'Email Account Setup in ERPNext',
        description: 'Connect your mailbox to enable secure, real-time ingestion of inquiry emails.',
        icon: 'Mail',
        details: [
          'Navigate to Settings → Email Account in ERPNext',
          'Enter IMAP/SMTP credentials and verify connectivity',
          'Enable fetching for targeted folders only'
        ],
        duration: '≈ 10 min',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100'
      },
      {
        step: '02',
        title: 'Email Labeling and Filtering',
        description: 'Use provider rules to label messages so only relevant inquiries are processed.',
        icon: 'Filter',
        details: [
          "Create folders like 'Inquiry', 'Other', 'Spam', 'Internal'",
          'Auto-label by subject keywords and sender domains',
          'Expose folders via IMAP for ERPNext ingestion'
        ],
        duration: '≈ 15 min',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-100'
      },
      {
        step: '03',
        title: 'AI Email Classifier Integration',
        description: 'Tag emails via API/webhooks to distinguish qualified inquiries from noise.',
        icon: 'BrainCircuit',
        details: [
          'Integrate classifier with ERPNext using API or webhooks',
          "Assign categories: 'Inquiry', 'Other', 'Spam'",
          'Route only true inquiries for lead processing'
        ],
        duration: '≈ 30–45 min',
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-100'
      },
      {
        step: '04',
        title: 'Intelligent Data Extraction and Validation',
        description: 'Parse contacts, companies, and context; validate to ensure accuracy.',
        icon: 'FileSearch',
        details: [
          'Extract name, email, phone, company, location, and content',
          'Normalize and cleanse to remove inconsistencies',
          'Reject incomplete/ambiguous fields for recheck'
        ],
        duration: 'Continuous',
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-100'
      },
      {
        step: '05',
        title: 'Existing Record Matching and Lead Creation',
        description: 'Deduplicate against ERPNext; link or create Leads, Contacts, Addresses.',
        icon: 'Database',
        details: [
          'Search existing Customers/Leads to prevent duplicates',
          'Append inquiry to matched records to enrich context',
          'Create new records when no match is found'
        ],
        duration: 'Instant',
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-100'
      }
    ],
    stats: {
      steps: '5 steps',
      weeks: 'Under 1 day to go live',
      transparency: '100% auditable changes',
      support: 'API-first, scalable setup'
    }
  };

  const benefitsData = {
    title: 'Benefits',
    subtitle: 'Automate, deduplicate, and accelerate every inquiry-to-lead workflow.',
    cards: [
      {
        id: 1,
        title: 'Zero Missed Inquiries',
        description: 'Automatically capture and classify all inbound emails so nothing slips through.',
        icon: 'Award',
        iconBg: "#1A5276",
        iconColor: "#ffffff"
      },
      {
        id: 2,
        title: 'Streamlined Lead-to-Opportunity',
        description: 'Move from inquiry to opportunity seamlessly with clear routing and ownership.',
        icon: 'Zap',
        iconBg: "#FF8C00",
        iconColor: "#ffffff"
      },
      {
        id: 3,
        title: 'Reduced Manual Data Entry',
        description: 'AI populates CRM fields automatically, saving hours and reducing errors.',
        icon: 'Shield',
        iconBg: "#27AE60",
        iconColor: "#ffffff"
      },
      {
        id: 4,
        title: 'Clean, Current CRM Data',
        description: 'Smart deduplication and validation keep ERPNext records accurate and usable.',
        icon: 'TrendingUp',
        iconBg: "#8E44AD",
        iconColor: "#ffffff"
      },
      {
        id: 5,
        title: 'Faster Sales Response',
        description: 'Instant qualification and creation speed up outreach to hot prospects.',
        icon: 'BarChart3',
        iconBg: "#FF3333",
        iconColor: "#ffffff"
      },
      {
        id: 6,
        title: 'Configurable and Scalable',
        description: 'Works across providers, custom rules, and classifier APIs for enterprise scale.',
        icon: 'Target',
        iconBg: "#FFB347",
        iconColor: "#ffffff"
      }
    ],
    layout: 'standard' as const,
    variant: 'iconCard' as const,
    showImage: false,
    cardClassName: 'border-none hover:shadow-xl transition-all'
  };

  const ctaData = {
    component_type: 'Text' as const,
    subheading: { text: 'Get started', icon: 'Rocket' },
    title: 'Automate inquiry-to-lead in ERPNext',
    description:
      'Turn unstructured emails into clean, actionable CRM records with AI-powered classification, extraction, and deduplication.',
    primaryButton: { text: 'Request a demo', icon: 'Sparkles', action: '/contact' },
    secondaryButton: { text: 'See How it Works', 
      icon: 'Phone', 
      action: () => {
        const el = document.getElementById('lead');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } 
    },
    trustIndicator: { text: 'No lock-in • Secure • Auditable', icon: 'ShieldCheck' }
  };

  return (
    <main className="animate-in fade-in-50">
      {/* 1️⃣ HERO SECTION (Required - First) */}
      <HeroSection
        headline={seoTitle}
        description={seoDescription}
        heroImage={{ alt: seoTitle, src: "/images/Lead Intelligence.gif" }}
        highlightWords={["Lead Intelligence"]}
        primaryButton={{ text: 'Get a Demo', action:'/contact' }}

        // accentColor="blue"
      />

      {/* 2️⃣ OVERVIEW SECTION (Required) */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A5276]">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lead Intelligence leverages advanced AI technology to streamline the processing of inquiry emails by transforming them into structured CRM records. The system captures critical information and prevents duplication by cross-checking with existing customer databases. By automating the lead qualification process, it accelerates response times, enhances data accuracy, and allows sales teams to focus on closing deals rather than administration, leading to higher conversion rates.
          </p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      {/* Lead Intelligence — Deep Overview */}
      <Section>
        <div className="container-custom py-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1A5276]">Lead Intelligence</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Lead Intelligence leverages advanced artificial intelligence to revolutionize the handling and processing of inquiry emails. The system captures critical data points such as name, email, phone number, company, location, and inquiry content from incoming emails, transforming unstructured communication into structured, actionable CRM records.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4" id="lead">
            Beyond simple extraction, the AI intelligently cross-checks existing ERPNext customer and lead databases to prevent duplicates and ensure data accuracy. If a matching contact is found, the inquiry is linked directly; if not, new leads, contacts, and addresses are created according to available information, maintaining the integrity of the sales funnel and improving pipeline visibility. This automation eliminates the usual manual intervention required to capture and qualify inquiries, accelerating lead processing and enabling faster sales response times.
          </p>
        </div>
      </Section>

      {/* Workflow Steps */}
      <ProcessWorkflow data={workflowData} />

      {/* Benefits / Feature Cards */}
      <ResponsiveCardGrid
        data={benefitsData}
      />

      {/* 4️⃣ CTA SECTION (Required - Last) */}
      <CTA data={ctaData} />
    </main>
  );
}
