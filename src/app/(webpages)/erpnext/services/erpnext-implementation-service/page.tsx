'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import WhyChooseFinbyzGrid from '@/components/ai_components/WhyChooseFinbyzGrid';
import ERPNextServicesGrid from '@/components/ai_components/ERPNextServicesGrid';
import ERPNextDifferenceGrid from '@/components/ai_components/ERPNextDifferenceGrid';

export default function Page() {
    return (
        <>
            <HeroSection
                headline="ERPNext Implementation Service"
                highlightWords={["Implementation", "Service"]}
                description="Unlock the full potential of your business with our professional ERPNext implementation services. From planning to go-live, we ensure a smooth transition and rapid value realization."
                primaryButton={{
                    text: 'Get Started',
                    action: "#implementation-service"
                }}
                secondaryButton={{
                    text: 'Contact Us',
                    action: () => {
                        if (typeof window !== 'undefined') {
                            window.location.href = '/contact';
                        }
                    },
                }}
                heroImage={{
                    alt: 'ERPNext Implementation Service',
                    src: '/images/Frappe-Certified-Erpnext-Partner.svg',
                }}
            />

            <Section>
                <div className="container-custom py-8" id="implementation-service">
                    <p className="text-lg text-gray-700 animate-fadeInUp">
                        Implementation is the most critical phase of your ERP journey. At Finbyz, we provide comprehensive ERPNext implementation services designed to align the system perfectly with your business processes. Our structured approach minimizes risk, ensures data integrity, and drives high user adoption, empowering your organization to achieve operational excellence.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="container-custom py-8">
                    <h2 className="text-2xl font-bold mb-8 text-center relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2 text-[#1A5276]">Why Choose Finbyz for ERPNext Implementation?</h2>
                    <WhyChooseFinbyzGrid
                        features={[
                            {
                                title: 'Proven Methodology',
                                image: '/images/92.svg',
                                alt: 'Proven Methodology',
                                description: "We utilize a time-tested implementation methodology that guides projects from discovery to deployment. Our structured process helps identify risks early and ensures that timelines and budgets are respected.",
                                bg: 'gray',
                            },
                            {
                                title: 'Certified Experts',
                                image: '/images/96.svg',
                                alt: 'Certified ERPNext Experts',
                                description: "Our implementation team consists of certified ERPNext professionals who understand both the technical and functional aspects of the system. We bring industry best practices to your implementation.",
                                bg: 'lightgray',
                            },
                            {
                                title: 'Data Integrity Focus',
                                image: '/images/178 (1).svg',
                                alt: 'Data Integrity',
                                description: "We prioritize the accuracy and security of your data. Our rigorous data migration and validation processes ensure that your historical data is preserved and accessible in the new system.",
                                bg: 'lightgray',
                            },
                            {
                                title: 'User-Centric Approach',
                                image: '/images/405.svg',
                                alt: 'User-Centric Approach',
                                description: "Successful implementation depends on user adoption. We focus on comprehensive training and change management to ensure your team is confident and proficient with ERPNext.",
                                bg: 'gray',
                            },
                        ]}
                    />
                </div>
            </Section>

            <Section>
                <div className="container-custom py-8 text-center">
                    <h2 className="text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2 text-[#1A5276]">Our Implementation Process Includes</h2>
                    <ERPNextServicesGrid
                        services={[
                            {
                                title: 'Discovery & Analysis',
                                image: '/images/1099.svg',
                                alt: 'Discovery & Analysis',
                                description: 'We start by deep-diving into your business processes to understand your unique requirements and gaps.',
                            },
                            {
                                title: 'Configuration & Setup',
                                image: '/images/blog-icon-speed-and-accuracy-by-automation.svg',
                                alt: 'Configuration & Setup',
                                description: 'Configuring ERPNext modules and workflows to match your specific operational needs.',
                            },
                            {
                                title: 'Data Migration',
                                image: '/images/185.svg',
                                alt: 'Data Migration',
                                description: 'Seamlessly transferring your legacy data into ERPNext with strict validation and reconciliation.',
                            },
                            {
                                title: 'Training & Go-Live',
                                image: '/images/go live.svg',
                                alt: 'Training & Go-Live',
                                description: 'Hands-on training for your team and dedicated support during the critical go-live phase.',
                            },
                        ]}
                    />
                </div>
            </Section>

            <Section>
                <div className="container-custom py-8 text-center">
                    <h2 className="text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2 text-[#1A5276]">Discover the Difference with Our Implementation</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Choosing the right implementation partner makes all the difference. Finbyz ensures your ERPNext investment delivers tangible business results through a focus on quality, transparency, and accountability.
                    </p>
                    <ERPNextDifferenceGrid
                        features={[
                            {
                                title: 'Minimized Business Disruption',
                                image: '/images/export.svg',
                                alt: 'Minimized Business Disruption',
                                description: "We plan our implementations to minimize downtime and disruption to your daily operations, ensuring business continuity throughout the transition.",
                            },
                            {
                                title: 'Faster Time to Value',
                                image: '/Better Process of Choice.svg',
                                alt: 'Faster Time to Value',
                                description: "Our efficient processes and expertise allow for quicker deployments, helping you realize the ROI of your ERPNext system sooner.",
                            },
                            {
                                title: 'Scalable Architecture',
                                image: '/images/185.svg',
                                alt: 'Scalable Architecture',
                                description: "We implement ERPNext with the future in mind, setting up a scalable foundation that can grow and evolve as your business expands.",
                            },
                            {
                                title: 'Continuous Optimization',
                                image: '/images/235.svg',
                                alt: 'Continuous Optimization',
                                description: "Our relationship doesn't end at go-live. We provide ongoing insights and optimization to ensure your system continues to meet your changing needs.",
                            },
                        ]}
                    />
                </div>
            </Section>

            <Section>
                <div className="container-custom py-8">
                    <h2 className="text-2xl font-bold mb-4 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2 text-[#1A5276]">Ready for a Successful Implementation?</h2>
                    <p className="text-gray-700 mb-4">
                        Don't leave your ERPNext implementation to chance. Partner with Finbyz for a structured, expert-led implementation that delivers results. Whether you are migrating from legacy software or implementing an ERP for the first time, we have the expertise to guide you to success.
                    </p>
                    <p className="text-gray-700">
                        Join the growing list of businesses that have successfully transformed their operations with Finbyz. Let's build a robust foundation for your business growth together.
                    </p>
                </div>
            </Section>

            <Section>
                <div>
                </div>
            </Section>
        </>
    );
}
