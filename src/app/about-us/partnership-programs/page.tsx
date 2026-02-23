'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import { List } from '@/components/sections/list';


export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <DynamicHero
          headline="Grow Your Business Strategic Technology Partnership Programs"
          highlightWords={["Grow", "Business", "Technology", "Partnership"]}
          description="Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth."
          accentColor="orange"
          heroImage={{
            alt: 'Grow Your Business Strategic Technology Partnership Programs',
            // src: '/web-api/fb/n/files/placeholder.jpg',
            src:'/images/partnership-programs.png',
            
          }}
          primaryButton={{
            text: 'Get Started',
            action: 'https://finbyz.tech/contact',
          }}
          secondaryButton={{
            text: 'Learn More',
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            },
          }}
        />
      </section>

      {/* Overview Section */}
      <section id="overview">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Overview</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
             Discover comprehensive partnership programs designed for mutual growth and innovation in the technology sector. Collaborate with Finbyz Tech, an ISO 27001:2013 certified leader in ERPNext, AI automation, and custom software development. Our partnership opportunities empower businesses to expand their portfolio, leverage leading-edge technologies, and maximize value for clients. By joining our global network, you can drive meaningful business impact, accelerate digital transformation, and achieve shared success in today's competitive market. Our team is dedicated to fostering alliances that go beyond transactional arrangements, nurturing long-term, strategic relationships dedicated to co-creation, excellence, and market expansion
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
               
              ]
            }}
          /> */}
        </div>
      </section>

      {/* Introduction - Strategic Partnership Programs */}
      <section>
        <div className="container-custom py-8">
           <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Strategic Partnership Programs: Innovate and Grow Together</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            In today's dynamic business landscape, collaboration is the cornerstone of accelerated growth and sustained innovation. At Finbyz Tech, we believe in forging powerful alliances that leverage collective strengths to deliver unparalleled value to clients worldwide. Our strategic partnership programs are meticulously crafted to create synergistic opportunities, enabling businesses like yours to expand capabilities, tap into new markets, and drive significant impact.
           </p>
          {/* <TextSection data={{
            title: "Strategic Partnership Programs: Innovate and Grow Together",
            paragraphs: [
             
            ]
          }}/> */}
        </div>
      </section>

      {/* Why Partner with a Leader in Business Technology */}
      <section>
        <div className="container-custom py-8">
           <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Why Partner with a Leader in Business Technology?</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Partnering with Finbyz Tech means aligning with an ISO 27001:2013 Certified IT Consulting & Software Development Company renowned for its deep expertise and unwavering commitment to excellence. With over a decade of experience in ERP implementation and consulting, we bring a proven track record of over 200 successful ERPNext projects and a global footprint spanning 12+ countries. Our 30+ skilled resources, comprising ERP consultants, developers, and functional experts, are dedicated to delivering cutting-edge solutions.
           </p>
          {/* <TextSection
            data={{
              title: "Why Partner with a Leader in Business Technology?",
              paragraphs: [
                
              ]
            }}
          /> */}

         
        </div>
         <ResponsiveCardGrid
            data={{
              title: 'Your Advantage',
              cards: [
                {
                  id: 1,
                  title: 'Deep Domain Expertise',
                  description: 'Leverage specialized knowledge in Chemical, Pharma, Metal Casting, Engineering, Ceramic, Education, and Logistics. Our team delivers tailored solutions for diverse industries.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 2,
                  title: 'Innovative Solutions Portfolio',
                  description: 'Access proprietary ERPNext modules (Chemical, EXIM, Metal Foundry, Logistics) and AI-driven tools like Productify, AI-CRM Integration, Resume Ranker, and Follow-up Buddy.',
                  icon: 'LayoutGrid',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 3,
                  title: 'Certified ERPNext Partner',
                  description: 'Enjoy trusted, end-to-end ERP deployment, customization, and ongoing support from an officially certified ERPNext Partner.',
                  icon: 'CheckCircle',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 4,
                  title: 'Commitment to Quality & Security',
                  description: 'ISO 27001:2013 certification assures the highest standards for information security and quality management throughout all collaborations.',
                  icon: 'ShieldCheck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 5,
                  title: 'Culture of Innovation',
                  description: 'Driven by innovation, scalability, and agile digital transformation, we simplify processes to foster sustainable growth.',
                  icon: 'Activity',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 6,
                  title: 'Global Reach & Experience',
                  description: 'With a decade of domain experience and successful projects across 12+ countries, we are ready to support your expansion.',
                  icon: 'Globe',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all',
                }
              ],
              variant: 'iconCard'
            }}
          
          />
      </section>

      {/* Our Partnership Models */}
      <section>
        <div className="container-custom py-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Our Partnership Models: Designed for Mutual Success</h3>
          
        </div>
        <ResponsiveCardGrid
            data={{
              cards: [
                {
                  id: 1,
                  title: 'Referral Partners',
                  description: 'Recommend Finbyz Tech’s services to clients and contacts. Ideal for consultants, advisors, agencies, and influencers. Earn referral fees while your clients access world-class technology.',
                  icon: 'UserPlus',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 2,
                  title: 'Technology Integration Partners',
                  description: 'Collaborate on integrated solutions with software vendors, hardware, or specialized developers. Expand reach by integrating with our ERP and AI platforms.',
                  icon: 'Puzzle',
                   iconColor: "#ffffff",
                   iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 3,
                  title: 'Implementation & Reseller Partners',
                  description: 'Deliver ERPNext implementations and our proprietary solutions. Get comprehensive training, support, and resources to deploy and manage for your clients.',
                  icon: 'Briefcase',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 4,
                  title: 'Strategic Alliances',
                  description: 'Partner for long-term collaborations or joint ventures. Suitable for enterprises, associations, and tech innovators seeking significant, industry-shaping initiatives.',
                  icon: 'Handshake',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                }
              ],
              variant: 'iconCard',
              title: ''
            }}
          />
      </section>

      {/* Benefits of Joining */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: "Benefits of Joining the Finbyz Tech Partner Network",
              component_type: "Card",
              benefits: [
                {
                  // number: 1,
                  suffix: '',
                  // label: 'Increased Revenue Opportunities',

                  label:'',
                  header: 'Earn, Resell & Partner',
                  description: 'Unlock new income streams via referral fees, solution reselling, and joint project ventures.',
                  icon: 'TrendingUp',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  // number: 2,
                  suffix: '',
                  // label: 'Enhanced Service Portfolio',
                  label:'',
                  header: 'Expand Offerings',
                  description: 'Impress your clients by integrating advanced ERP and AI solutions for greater value.',
                  icon: 'Layers',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  // number: 3,
                  suffix: '',
                  // label: 'Access to Expert Resources',
                  label:'',
                  header: 'Skilled Partner Support',
                  description: 'Receive training, dedicated support, and deep technical knowledge for project success.',
                  icon: 'Users',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  // number: 4,
                  suffix: '',
                  // label: 'Market Expansion',
                  label:'',
                  header: 'Expand Your Reach',
                  description: 'Leverage our global presence and reputation to enter new geographies and market segments.',
                  icon: 'Globe',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  // number: 5,
                  suffix: '',
                  // label: 'Collaborative Innovation',
                  label:'',
                  header: 'Co-Create Solutions',
                  description: 'Work with a team valuing new ideas to address real-world business challenges together.',
                  icon: 'Lightbulb',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  // number: 6,
                  suffix: '',
                  // label: 'Quality & Security Commitment',
                  label:'',
                  header: 'ISO 27001:2013',
                  description: 'Rely on our certified processes for information security and service excellence.',
                  icon: 'ShieldCheck',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                }
              ]
            }}
          />
        </div>
      </section>

      {/* How to Become a Partner */}
      <section>
        <div className="container-custom py-8">
           <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">How to Become a Partner</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Joining our esteemed network is a straightforward process. We are always eager to connect with like-minded organizations and individuals who are passionate about driving digital transformation.
           </p>
          {/* <TextSection
            data={{
              title: 'How to Become a Partner',
              paragraphs: [
               
              ]
            }}
          /> */}
          <List
            title="Partner Onboarding Steps"
            items={[
              'Express Your Interest: Fill out our partnership inquiry form or contact us directly.',
              'Discovery Call: Join a discussion to align on business goals and mutually beneficial value.',
              'Program Selection & Agreement: Agree upon the most suitable partnership model and finalize an agreement.',
              'Onboarding & Support: Receive onboarding, training, and ongoing support to ensure partnership success.'
            ]}
            iconColor="text-[#1A5276]"
            accentColor="orange"
          />
        </div>
      </section>

    </>
  );
}
