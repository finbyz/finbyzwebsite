'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import DataAnalyticsFeatureDetails from '@/components/ai_components/DataAnalyticsFeatureDetails';

export default function Page() {
    // Button actions
    const handleContact = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/contact';
        }
    };

    // Features for grid

    // Details for feature details section
    const featureDetails = [
        {
            title: 'Business Intelligence',
            description:
                'Empower every team member with real-time, accurate insights using our advanced data analytics solutions. Leverage sophisticated data discovery, visualization tools, and intuitive UX to make faster, informed decisions. Gain a 360-degree understanding of your business, customers, and market trends.',
            // icon: <BarChart3 className="w-8 h-8 text-primary mb-2" />
            src: "/Business Intelligence.png"
        },
        {
            title: '/Data Visualizations.png',
            description:
                'Powerful data visualizations are at the heart of effective data analytics. Our custom dashboards and visuals highlight key metrics, reveal emerging patterns, and enhance CRM analytics for better customer understanding. Drive collaboration, insights, and strategic actions through clear, interactive visual narratives.',
            // icon: <AreaChart className="w-8 h-8 text-primary mb-2" />
            src: "Data Visualizations.png"
        },
        {
            title: 'Strategy',
            description:
                'Build a forward-looking data strategy with Finbyz — your partner in intelligent growth. Our consultants provide unbiased, platform-agnostic guidance to align analytics with your business vision. From CRM analytics integration to enterprise-wide solutions, we help you plan, prioritize, and implement initiatives that deliver measurable impact.',
            // icon: <Route className="w-8 h-8 text-primary mb-2" />
            src: "/Strategy.png"

        }
    ];

    return (
        <>
            <HeroSection
                headline="Data Analytics"
                highlightWords={["Data", "Analytics"]}
                description="Unlock business intelligence with Finbyz Tech’s data analytics solutions. We deliver CRM analytics, real-time dashboards, and predictive insights to drive growth."
                primaryButton={{ text: 'Request Demo', action: handleContact }}
                secondaryButton={{
                    text: 'Learn More',
                    action: "#data"
                }}
                heroImage={{
                    alt: 'Data Analytics',
                    src: '/images/banner-analysis.svg',

                }}
            />

            <Section >
                <div className="container-custom py-8 flex flex-col gap-4 animate-fade-in-up" >

                    <p >
                        Welcome to Finbyz, where data evolves into powerful business intelligence. As one of the trusted data analytics companies, we specialize in transforming complex data sets into clear, actionable strategies. Our data analytics services are designed to drive operational efficiency, support smarter decision-making, and unlock growth across multiple industries. In today’s data-driven landscape, making fast, accurate, and future-proof decisions is critical and we help customer-centric organizations achieve this by aligning the right mix of people, processes, and technology.
                    </p>
                    <p id="data">
                        Our advanced data analytics solutions go beyond traditional business intelligence. Whether you’re looking to optimize operations or integrate CRM analytics for deeper customer insights, our experienced data scientists apply cutting-edge techniques to uncover meaningful patterns and solve real-world business challenges. At Finbyz, we turn raw data into strategic advantage.
                    </p>


                    {/* <p>
            A person's capacity to make quick, predictable and full proof choices is essential in the present information-driven market. Customer focused organizations will accomplish this through the ideal mix of people, process and technology.
          </p>
          <p>
            The Cutting-Edge Data Analytics can unlock business value that is hidden in your data. The Data Scientists in our Analytics group can expertly apply a range of advanced methods to develop profound business insights and solve business problems that go past the conventional Business Intelligence area.
          </p> */}
                </div>
            </Section>

            {/* <Section useGradient>
        <div className="container-custom py-8">
          <DataAnalyticsFeatureGrid features={features} />
        </div>
      </Section> */}



            <Section useGradient>
                <div className="container-custom py-8">
                    <DataAnalyticsFeatureDetails details={featureDetails} />
                </div>
            </Section>

            <Section>
                <div className="py-8 flex flex-col items-center">
                </div>
            </Section>
        </>
    );
}
