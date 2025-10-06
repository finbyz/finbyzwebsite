import { Separator } from "@/components/ui/separator";
import BlogTableOfContents from "@/components/ai_components/blog/BlogTableOfContents";
import BlogSection from "@/components/ai_components/blog/BlogSection";
// import BlogFeatureCard from "@/components/ai_components/blog/BlogFeatureCard";
import BlogHighlight from "@/components/ai_components/blog/BlogHighlight";
import BlogImageSection from "@/components/ai_components/blog/BlogImageSection";
import BlogCheckList from "@/components/ai_components/blog/BlogCheckList";
import BlogCTA from "@/components/ai_components/blog/BlogCTA";
import BlogParagraph from "@/components/ai_components/blog/BlogParagraph";

const BlogContent = () => {
    const tocItems = [
        { id: "introduction", title: "Introduction", isActive: true },
        { id: "benefits", title: "Key Benefits" },
        { id: "cost-efficiency", title: "Cost Efficiency" },
        { id: "flexibility", title: "Enhanced Flexibility" },
        { id: "scalability", title: "Scalability" },
        { id: "conclusion", title: "Conclusion" },
    ];

    const features = [
        {
            icon: "💰",
            title: "Reduced Total Cost of Ownership",
            description: "Cloud ERP eliminates the need for expensive hardware infrastructure, IT maintenance staff, and regular software updates. Organizations can redirect these savings towards strategic initiatives and business growth."
        },
        {
            icon: "🚀",
            title: "Rapid Deployment & Implementation",
            description: "Unlike traditional ERP systems that can take months or even years to implement, cloud ERP solutions can be deployed in a matter of weeks, allowing businesses to realize value faster."
        },
        {
            icon: "🔄",
            title: "Automatic Updates & Maintenance",
            description: "Cloud ERP providers handle all system updates, security patches, and maintenance automatically, ensuring your system is always running on the latest version with minimal disruption."
        }
    ];

    const flexibilityItems = [
        "Access critical business data and processes from any location with internet connectivity",
        "Support for mobile devices enables decision-making on the go",
        "Real-time collaboration across departments and geographic locations",
        "Seamless integration with other cloud-based business applications"
    ];

    return (
        <div className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <BlogTableOfContents items={tocItems} />

                <article className="lg:col-span-9 prose prose-lg max-w-none">
                    <BlogImageSection
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
                        alt="Cloud ERP Technology"
                    />

                    <BlogSection id="introduction" title="The Evolution of Enterprise Resource Planning">
                        <BlogParagraph>
                            In today's rapidly evolving business landscape, organizations are constantly seeking ways to optimize their operations and stay ahead of the competition. The transition from traditional on-premise ERP systems to cloud-based solutions represents a significant leap forward in enterprise technology.
                        </BlogParagraph>
                        <BlogParagraph>
                            Cloud ERP systems have emerged as the preferred choice for businesses of all sizes, offering unparalleled advantages in terms of accessibility, scalability, and cost-effectiveness. This shift is not just a trend—it's a fundamental transformation in how businesses manage their core processes.
                        </BlogParagraph>
                    </BlogSection>

                    <Separator className="my-8" />

                    {/* <BlogSection id="benefits" title="Key Benefits of Cloud ERP">
                        <div className="grid gap-6 my-8">
                            {features.map((feature, index) => (
                                <BlogFeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </BlogSection> */}

                    <BlogSection id="cost-efficiency" title="Cost Efficiency: A Game Changer">
                        <BlogParagraph>
                            One of the most compelling reasons to upgrade to cloud ERP is the significant reduction in total cost of ownership. Traditional on-premise systems require substantial upfront investments in hardware, software licenses, and IT infrastructure.
                        </BlogParagraph>
                        <BlogHighlight
                            label="Industry Insight:"
                            content="Studies show that businesses can reduce their IT infrastructure costs by up to 40% when migrating from on-premise to cloud-based ERP systems, while simultaneously improving system performance and reliability."
                        />
                    </BlogSection>

                    <BlogSection id="flexibility" title="Enhanced Flexibility & Accessibility">
                        <BlogParagraph>
                            Cloud ERP systems provide unmatched flexibility by enabling access from anywhere, at any time, on any device. This is particularly crucial in today's remote and hybrid work environments.
                        </BlogParagraph>
                        <BlogCheckList items={flexibilityItems} />
                    </BlogSection>

                    <BlogSection id="scalability" title="Scalability for Growing Businesses">
                        <BlogParagraph>
                            As your business grows, your ERP system should grow with you. Cloud ERP solutions offer unprecedented scalability, allowing you to add users, modules, and functionality as needed without major infrastructure investments.
                        </BlogParagraph>
                        <BlogImageSection
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop"
                            alt="Business Growth and Scalability"
                            height="300px"
                        />
                        <BlogParagraph>
                            Whether you're expanding to new markets, adding product lines, or increasing your workforce, cloud ERP adapts to your changing needs with minimal friction and maximum efficiency.
                        </BlogParagraph>
                    </BlogSection>

                    <Separator className="my-8" />

                    {/* <BlogSection id="conclusion" title="Making the Transition">
                        <BlogParagraph>
                            The decision to upgrade from an old ERP system to a modern cloud-based solution is more than just a technology upgrade—it's a strategic business decision that can drive growth, improve efficiency, and enhance competitive advantage.
                        </BlogParagraph>
                        <BlogCTA
                            title="Ready to Transform Your Business?"
                            description="Our team of ERP experts can help you navigate the transition to cloud ERP with minimal disruption and maximum value. Get in touch today to learn how we can help your business thrive."
                            buttonText="Schedule a Consultation"
                            onButtonClick={() => console.log("CTA clicked")}
                        />
                    </BlogSection> */}
                </article>
            </div>
        </div>
    );
};

export default BlogContent;
