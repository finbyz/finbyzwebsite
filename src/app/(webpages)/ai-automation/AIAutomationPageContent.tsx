'use client'
import React from 'react'
import Section from '@/components/sections/Section'
import CTA from '@/components/sections/cta'
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid'
import Benefits from '@/components/sections/benefits';
import DynamicHero from '@/components/sections/dynamic-hero'
import {
  Shield,
  Rocket,
  Brain,
  TrendingUp,
  Users,
  CheckCircle,
  BarChart,
  DollarSign,
  Zap,
  Lightbulb,
  FileText,
  Phone,
  Mail,
  MessageSquare,
  Calculator,
  UserCheck,
  Target,
  Search,
} from 'lucide-react'

export default function AIAutomationPageContent() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <Section>
        <DynamicHero
          headline="AI-Powered Automation"
          highlightWords={['Automation']}
          description="Revolutionize your workflows with Finbyz Tech’s AI-powered automation. Combine the intelligence of Artificial Intelligence with the efficiency of ERPNext to eliminate repetitive manual tasks, boost productivity, and unlock smarter, faster business decisions."
          heroImage={{
            alt: 'AI Automation Hero',
            src: '/images/ai-automation.jpeg',
          }}
          primaryButton={{
            text: 'Get Started',
            action: () => {
              const el = document.getElementById('overview')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            },
          }}
          secondaryButton={{
            text: 'Explore Solutions',
            action: () => {
              const el = document.getElementById('solutions')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            },
          }}
          accentColor="orange"
        />
      </Section>

      {/* Overview */}
      <Section id="overview">
        <div className="container-custom py-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-[#1A5276]">
            Transform Workflows with AI-Powered Automation
          </h2>

          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            In today’s competitive digital landscape, speed, precision, and adaptability define success.
            Manual processes not only consume time but also introduce human errors that slow down progress.
            At <b>Finbyz Tech</b>, we bring together deep ERPNext expertise and Artificial Intelligence
            to help you automate business operations end-to-end — from sales and finance to HR and manufacturing.
          </p>

          <p className="text-slate-700 text-base md:text-lg mb-10 text-justify">
            Our intelligent automation solutions are designed to increase process efficiency, enhance
            data-driven decision-making, and deliver measurable ROI. Whether you want to automate CRM workflows,
            sales follow-ups, or document processing, we provide the technology foundation to scale your business
            with confidence and clarity.
          </p>

          {/* --- Subsection 1 --- */}
          <h3 className="text-2xl font-semibold mb-4 text-[#154360]">
            Empowering Enterprises Through Smart Automation
          </h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
            Automation is no longer a luxury — it’s a necessity for sustainable growth.
            By integrating AI directly into ERPNext, Finbyz enables organizations to connect departments,
            unify data, and streamline repetitive tasks. From intelligent lead scoring to predictive analytics,
            every workflow becomes smarter and faster. Our AI modules adapt to your business logic,
            ensuring automation aligns with your unique goals and operational style.
          </p>

          {/* --- Subsection 2 --- */}
          <h3 className="text-2xl font-semibold mb-4 text-[#154360]">
            Turning Data into Decisions
          </h3>
          <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
            With AI-driven insights, your ERP system becomes more than just a data repository —
            it becomes a decision-making engine. Finbyz Tech leverages natural language processing,
            machine learning, and predictive algorithms to transform historical and real-time data into actionable insights.
            This empowers leaders to anticipate challenges, forecast opportunities, and make proactive business moves.
          </p>

          {/* --- Subsection 3 --- */}
          <h3 className="text-2xl font-semibold mb-4 text-[#154360]">
            Designed for Scalability and Growth
          </h3>
          <p className="text-slate-700 text-base md:text-lg text-justify">
            As your business evolves, so does your automation. Finbyz Tech’s modular architecture ensures that
            your AI solutions scale seamlessly across departments and geographies. Whether you’re automating
            a single process or your entire enterprise, our approach guarantees flexibility, security,
            and measurable performance at every step.
          </p>
        </div>
      </Section>


      {/* Why AI Automation Matters */}
      <Section className='py-8 mb-16'>
        <Benefits
          data={{
            title: 'Why AI Automation Matters',
            subtitle: 'Key advantages that drive business transformation',
            benefits: [
              {
                number: 100,
                suffix: '%',
                label: 'Workflow Efficiency',
                header: 'Automate Complex Workflows',
                description:
                  'Eliminate redundant manual work by automating end-to-end workflows across ERPNext, CRM, and core business operations. Free up your team to focus on strategy, innovation, and client success.',
                icon: 'Zap',
                palette: { iconBg: '#1A5276', iconColor: '#ffffff' },
              },
              {
                number: 5,
                suffix: 'x',
                label: 'Faster Decisions',
                header: 'Data-Driven Decisions',
                description:
                  'Turn data into actionable insights. Finbyz AI modules deliver real-time analytics and predictive insights to empower leaders to make informed business decisions — faster and with confidence.',
                icon: 'BarChart',
                palette: { iconBg: '#154360', iconColor: '#ffffff' },
              },
              {
                number: 60,
                suffix: '%',
                label: 'Cost Savings',
                header: 'Reduce Costs & Errors',
                description:
                  'Automated systems minimize human intervention, reduce operational expenses, and prevent costly errors — increasing efficiency and ensuring consistent quality in every process.',
                icon: 'DollarSign',
                palette: { iconBg: '#2471A3', iconColor: '#ffffff' },
              },
              {
                number: 10,
                suffix: 'x',
                label: 'Innovation Boost',
                header: 'Unlock Innovation',
                description:
                  'Empower your workforce to innovate. By removing manual bottlenecks, your teams gain time and clarity to experiment, strategize, and create new opportunities for growth.',
                icon: 'Lightbulb',
                palette: { iconBg: '#1A5276', iconColor: '#ffffff' },
              },
            ],
          }}
        />
      </Section>

      {/* AI Automation Offerings */}
      <Section id="solutions" className='py-8 mb-16'>
        <ResponsiveCardGrid
          data={{
            title: 'Our AI Automation Offerings',
            subtitle: 'Intelligent automation tailored for your business',
            cards: [
              {
                id: 1,
                title: 'Smart Card Scanner',
                description:
                  'Digitize business cards instantly using AI. Extract, validate, and sync contact details directly into ERPNext CRM — zero manual input required.',
                icon: 'Search',
                iconColor: '#ffffff',
                iconBg: '#1A5276',
              },
              {
                id: 2,
                title: 'Content Spark Marketing Automation',
                description:
                  'Leverage AI to generate and personalize marketing content — from emails to campaigns and social media posts.',
                icon: 'Lightbulb',
                iconColor: '#ffffff',
                iconBg: '#FF8C00',
              },
              {
                id: 3,
                title: 'Lead Intelligence',
                description:
                  'Use predictive analytics to score, segment, and prioritize leads for smarter, data-backed conversions.',
                icon: 'Target',
                iconColor: '#ffffff',
                iconBg: '#27AE60',
              },
              {
                id: 4,
                title: 'AI Outreach & Lead Generation',
                description:
                  'Automate personalized outreach using AI-driven communication timing and message relevance.',
                icon: 'Mail',
                iconColor: '#ffffff',
                iconBg: '#8E44AD',
              },
              {
                id: 5,
                title: 'AI Sales Call Analysis',
                description:
                  'Analyze customer calls with NLP to identify objections, sentiment, and conversion opportunities.',
                icon: 'Phone',
                iconColor: '#ffffff',
                iconBg: '#FF3333',
              },
              {
                id: 6,
                title: 'Email Classification',
                description:
                  'Automatically categorize and route incoming emails — support, sales, or purchase — ensuring instant action.',
                icon: 'FileText',
                iconColor: '#ffffff',
                iconBg: '#FFB347',
              },
              {
                id: 7,
                title: 'Quote Assistant',
                description:
                  'AI-driven quotation builder that recommends optimal pricing, delivery timelines, and margin protection inside ERPNext.',
                icon: 'Calculator',
                iconColor: '#ffffff',
                iconBg: '#1A5276',
              },
              {
                id: 8,
                title: 'Follow Up Buddy',
                description:
                  'AI tracks communication and reminds your team to follow up at the right time — ensuring no opportunity slips away.',
                icon: 'MessageSquare',
                iconColor: '#ffffff',
                iconBg: '#FF8C00',
              },
              {
                id: 9,
                title: 'AI-Powered Resume Ranker',
                description:
                  'Streamline recruitment — AI automatically ranks resumes by job match, skills, and experience for HR efficiency.',
                icon: 'UserCheck',
                iconColor: '#ffffff',
                iconBg: '#27AE60',
              },
            ],
            variant: 'iconCard',
          }}
        />
      </Section>

      {/* Benefits Section */}
      <Section className='py-8 mb-16'>
        <ResponsiveCardGrid
          data={{
            title: 'Benefits for Your Business',
            subtitle: 'See measurable impact across your organization',
            cards: [
              {
                id: 1,
                title: 'Efficiency & Speed',
                description:
                  'Automate repetitive work to boost throughput, shorten lead times, and enhance agility across teams.',
                icon: 'CheckCircle',
                iconColor: '#ffffff',
                iconBg: '#1A5276',
              },
              {
                id: 2,
                title: 'Cost Reduction',
                description:
                  'Reduce overhead by automating workflows, saving hours and resources daily.',
                icon: 'DollarSign',
                iconColor: '#ffffff',
                iconBg: '#FF8C00',
              },
              {
                id: 3,
                title: 'Smarter Decisions',
                description:
                  'Gain predictive insights with AI analytics, enabling smarter and faster business decisions.',
                icon: 'Brain',
                iconColor: '#ffffff',
                iconBg: '#27AE60',
              },
              {
                id: 4,
                title: 'Scalable Growth',
                description:
                  'Expand operations seamlessly with automation that grows alongside your business needs.',
                icon: 'TrendingUp',
                iconColor: '#ffffff',
                iconBg: '#8E44AD',
              },
              {
                id: 5,
                title: 'Empowered Teams',
                description:
                  'Enable employees to focus on creativity, problem-solving, and strategic initiatives.',
                icon: 'Users',
                iconColor: '#ffffff',
                iconBg: '#FF3333',
              },
              {
                id: 6,
                title: 'Reduced Errors',
                description:
                  'AI-driven processes minimize human errors, ensuring higher accuracy and reliability.',
                icon: 'Shield',
                iconColor: '#ffffff',
                iconBg: '#FFB347',
              },
            ],
            variant: 'iconCard',
          }}
        />
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          data={{
            subheading: { text: 'AI-Powered ERP Solutions', icon: 'Rocket' },
            title: 'Ready to Automate Intelligently?',
            highlightText: 'Automate Intelligently',
            description:
              'Let Finbyz Tech integrate Artificial Intelligence into your ERPNext workflows to drive efficiency, accuracy, and exponential business growth. Experience the future of automation today.',
            primaryButton: {
              text: 'Schedule Consultation',
              icon: 'MessageCircle',
              action: 'https://finbyz.tech/contact',
            },
            secondaryButton: {
              text: 'Explore Solutions',
              icon: 'Zap',
              action: () => {
                const el = document.getElementById('solutions')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              },
            },
            trustIndicator: {
              text: '200+ ERP Projects | 7000+ Users | 12+ Countries',
              icon: 'CheckCircle',
            },
          }}
        />
      </Section>
    </div>
  )
}
