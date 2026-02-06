import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import Link from 'next/link';
import { BookOpen, FileText, Code, Users, Search, ArrowRight, ExternalLink, Workflow, Brain, ShoppingCart, CreditCard, MessageSquare, Truck } from 'lucide-react';

async function getFeaturedWikiPages() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/web-api/wiki-pages`, {
            next: { revalidate: 3600 }
        });
        if (!res.ok) return [];
        const data = await res.json();
        const pages = data.message || [];
        // Return first 6 for featured section
        return pages.slice(0, 6);
    } catch (error) {
        console.error('Failed to fetch wiki pages:', error);
        return [];
    }
}

export default async function DocsPage() {
    const featuredPages = await getFeaturedWikiPages();

    const categories = [
        {
            title: "ERPNext Wiki",
            description: "Comprehensive guides for modules, configuration, and standard features.",
            icon: BookOpen,
            href: "/erpnext/wiki",
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            title: "n8n Automation",
            description: "Workflow templates, node references, and automation guides.",
            icon: Workflow,
            href: "/n8n/docs", // Assuming this path or similar exists/will exist
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            title: "AI Solutions",
            description: "LLM integration, chatbots, and predictive analytics docs.",
            icon: Brain,
            href: "/ai/docs", // Assuming this path
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Resources Library",
            description: "Brochures, whitepapers, and downloadable assets.",
            icon: FileText,
            href: "/resources",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Developer Docs",
            description: "API references, customization guides, and technical internals.",
            icon: Code,
            href: "/erpnext/wiki",
            color: "text-gray-600",
            bg: "bg-gray-50"
        },
        {
            title: "User Guides",
            description: "Step-by-step manuals for daily operations and workflows.",
            icon: Users,
            href: "/erpnext/wiki",
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    return (
        <>
            <HeroSection
                headline="Documentation & Knowledge Hub"
                highlightWords={['Knowledge', 'Hub']}
                description="Your central source for ERPNext guides, technical documentation, and business resources."
                heroImage={{
                    alt: "Documentation Hub",
                    src: "/images/documentation.svg", // Reusing generic image
                }}
                primaryButton={{
                    text: "Browse Wiki",
                    action: '/erpnext/wiki' // Direct string path
                }}
            />

            {/* Categories Section */}
            <Section>
                <div className="container-custom py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Explore by Category</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Navigate through our organized documentation to find exactly what you need.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat.title}
                                href={cat.href}
                                className="group p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 ${cat.bg} rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:scale-110 duration-300`}>
                                    <cat.icon className={`w-6 h-6 ${cat.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A5276] mb-2 group-hover:text-orange-600 transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {cat.description}
                                </p>
                                <div className="flex items-center text-sm font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Featured Articles Section */}
            <Section className="bg-gray-50">
                <div className="container-custom py-16">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1A5276] mb-2">Featured Articles</h2>
                            <p className="text-muted-foreground">Latest updates from our knowledge base.</p>
                        </div>
                        <Link href="/erpnext/wiki" className="text-orange-600 font-semibold hover:underline flex items-center">
                            View All Articles <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredPages.length > 0 ? (
                            featuredPages.map((page: any, index: number) => (
                                <Link
                                    key={index}
                                    href={`/${page.route}`}
                                    className="block p-5 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all hover:border-blue-100"
                                >
                                    <h3 className="font-bold text-[#1A5276] mb-2 line-clamp-1 group-hover:text-orange-600">
                                        {page.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                                        {page.description || "Read this detailed guide in our wiki."}
                                    </p>
                                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                                        Wiki
                                    </span>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-8 text-gray-500">
                                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                <p>Loading articles or no content available...</p>
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            {/* Getting Started Guide */}
            <Section>
                <div className="container-custom py-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Getting Started with ERPNext</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Follow our step-by-step path to successfully implement and master your ERP system.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "1", title: "Installation", desc: "Set up your ERPNext instance on cloud or premise." },
                                { step: "2", title: "Configuration", desc: "Configure company details, masters, and users." },
                                { step: "3", title: "Data Import", desc: "Migrate your legacy data into the new system." },
                                { step: "4", title: "Go Live", desc: "Launch to production and start operations." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center relative">
                                    <div className="w-10 h-10 bg-[#1A5276] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-white shadow-sm">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/erpnext/wiki" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                            Start the Guide <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Integration Hub */}
            <Section className="bg-white">
                <div className="container-custom py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Integration Hub</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Connect your ERP with the tools you use every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "E-Commerce", icon: ShoppingCart, desc: "Shopify, WooCommerce, Magento", color: "text-green-600", bg: "bg-green-50" },
                            { title: "Payments", icon: CreditCard, desc: "Stripe, Razorpay, PayPal", color: "text-blue-600", bg: "bg-blue-50" },
                            { title: "Communication", icon: MessageSquare, desc: "WhatsApp, Slack, Email", color: "text-purple-600", bg: "bg-purple-50" },
                            { title: "Logistics", icon: Truck, desc: "Shiprocket, FedEx, DHL", color: "text-orange-600", bg: "bg-orange-50" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all group cursor-pointer hover:border-blue-100">
                                <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <h3 className="font-bold text-lg text-[#1A5276] mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                                <span className="text-xs font-semibold text-blue-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Integrations <ArrowRight className="w-3 h-3 ml-1" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Community Resources */}
            <Section className="bg-orange-50/50">
                <div className="container-custom py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Community & Support</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Join the conversation and get help from the global ERPNext community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <a href="https://discuss.frappe.io" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                            <div className="w-12 h-12 bg-blue-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-[#1A5276] mb-2">Community Forum</h3>
                            <p className="text-sm text-gray-500 mb-4">Ask questions and share knowledge with thousands of users.</p>
                            <span className="text-orange-600 font-semibold text-sm flex items-center justify-center">
                                Visit Forum <ExternalLink className="w-3 h-3 ml-1" />
                            </span>
                        </a>

                        <a href="https://github.com/frappe/erpnext" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                            <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                                <Code className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-[#1A5276] mb-2">GitHub Repository</h3>
                            <p className="text-sm text-gray-500 mb-4">Contribute code, report bugs, and follow development.</p>
                            <span className="text-orange-600 font-semibold text-sm flex items-center justify-center">
                                View Source <ExternalLink className="w-3 h-3 ml-1" />
                            </span>
                        </a>

                        <Link href="/contact" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-[#1A5276] mb-2">Get Expert Help</h3>
                            <p className="text-sm text-gray-500 mb-4">Need professional assistance? Our team is here to help.</p>
                            <span className="text-orange-600 font-semibold text-sm flex items-center justify-center">
                                Contact Us <ArrowRight className="w-3 h-3 ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </Section>

            <CTA
                data={{
                    subheading: { text: "Still need help?", icon: "HelpCircle" },
                    title: "Contact Support",
                    description: "Can't find the documentation you're looking for? Our team is available to assist you.",
                    primaryButton: {
                        text: "Get Support",
                        icon: "MessageCircle",
                        action: '/contact'
                    },
                    secondaryButton: {
                        text: "ERP Services",
                        icon: "Server",
                        action: '/erpnext/services'
                    },
                    trustIndicator: { text: "Dedicated support team", icon: "ShieldCheck" }
                }}
            />
        </>
    );
}
