import {
    Building2, Package, FileText, Star, BarChart3, Factory, AlertTriangle, Info,
    Workflow, ListChecks, TrendingUp, Rocket, LineChart, Settings, Calendar,
    Blocks, Users, UserPlus, Wrench, Cpu, Database, CodeSquare, Code, AppWindow,
    FileCheck, Receipt, DollarSign, Lock, ClipboardCheck, Repeat, FlaskConical,
    Cog, Hammer, GraduationCap, Zap, Heart, Truck, ShoppingCart, Lightbulb,
    Globe, BookOpen, Globe2, Code2, Bot, MailPlus, Sparkles, PhoneCall, Scale,
    Puzzle, Box, HeartHandshake, ClipboardList, Send, Compass, MessageSquareQuote,
    Handshake, Briefcase, LucideIcon, Search, Pill, Mail, Atom, Image, Tablet, Headphones, ShieldCheck,
    PenTool, Radio, TreeDeciduous, MessageCircle, UserCheck, CreditCard, FileSearch, MessageSquare, Brain,
    Leaf
} from "lucide-react";

export type NavNode = {
    name: string;
    icon: LucideIcon;
    href?: string;
    description?: string;
    children?: NavNode[];
};

// Generator Functions
async function getOpenPositions(): Promise<NavNode[]> {
    try {
        const res = await fetch('/web-api/jobs');
        const data = await res.json();
        const positions = data.data || [];
        return positions.map((pos: any) => ({
            name: pos.job_title,
            icon: Briefcase, // Default icon
            href: `/careers/job-openings/${pos.route}`, // Adjust if route usage differs
            description: pos.job_title
        }));
    } catch (e) {
        console.error("Failed to fetch open positions", e);
        return [];
    }
}


async function getGalleryItems(): Promise<NavNode[]> {
    try {
        const res = await fetch(`/web-api/gallery`);
        const data = await res.json();
        const items = data.data || [];
        return items.map((item: any) => ({
            name: item.title,
            icon: Image,
            href: `${item.route}`,
            description: item.description
        }));
    } catch (e) {
        console.error("Failed to fetch gallery items", e);
        return [];
    }
}

async function getWikiPages(): Promise<NavNode[]> {
    try {
        const res = await fetch(`/web-api/wiki-pages`);
        const data = await res.json();
        const items = data.message || [];
        return items.map((item: any) => ({
            name: item.title,
            icon: BookOpen,
            href: `/${item.route}`,
            description: item.description
        }));
    } catch (e) {
        console.error("Failed to fetch wiki pages", e);
        return [];
    }
}

async function getBlogPosts(): Promise<NavNode[]> {
    try {
        const res = await fetch(`/web-api/blog-posts`);
        const data = await res.json();
        const items = data.data || [];
        return items.map((item: any) => ({
            name: item.title,
            icon: BookOpen,
            href: `/${item.route}`,
            description: item.description
        }));
    } catch (e) {
        console.error("Failed to fetch blogs", e);
        return [];
    }
}

const navigationItems: NavNode[] = [
    {
        name: "ERPNext",
        icon: Building2,
        href: "/erpnext",
        children: [
            { name: "Certified Partner", icon: Star, href: "/erpnext/certified-partner", description: "Certified ERPNext partner" },

            // ================= MODULES =================
            {
                name: "Modules",
                icon: Blocks,
                children: [
                    { name: "CRM Software", icon: Users, href: "/erpnext/modules/crm-software", description: "Customer Relationship Management" },
                    { name: "Human Resource System", icon: UserPlus, href: "/erpnext/modules/human-resource-system", description: "HRMS Module" }
                ]
            },

            // ================= SERVICES =================
            {
                name: "Services",
                icon: Wrench,
                href: "/erpnext/services",
                children: [
                    { name: "Opening Balance Reconciliation", icon: Scale, href: "/erpnext/services/opening-balance-reconciliation", description: "Opening balance reconciliation services" },
                    { name: "Accounting Transaction Audit", icon: ClipboardCheck, href: "/erpnext/services/erpnext-accounting-transaction-audit", description: "ERPNext transaction audit services" },
                    { name: "API Development Services", icon: CodeSquare, href: "/erpnext/services/api-development-services", description: "ERPNext API development" },
                    { name: "Data Analytics", icon: BarChart3, href: "/erpnext/services/data-analytics", description: "Data analytics services" },
                    { name: "Custom CMS Development", icon: Code, href: "/erpnext/services/develop-custom-erp-software", description: "Develop custom ERP software" },
                    { name: "ERP Migration", icon: Database, href: "/erpnext/services/erp-migration", description: "ERPNext data migration" },
                    { name: "ERP Software Developers", icon: Code2, href: "/erp/services/erp-software-development", description: "Hire expert ERP developers" },
                    { name: "ERPNext Implementation in UAE", icon: Building2, href: "/erpnext/services/ERPNext-impelementation-in-uae", description: "Implementation services in UAE" },
                    { name: "ERPNext SEO Optimization", icon: Search, href: "/erpnext/services/erpnext-seo-optimization", description: "SEO optimization" },
                    { name: "ERPNext Service Provider", icon: Briefcase, href: "/erpnext/services/erpnext-service-provider", description: "Full-service ERPNext provider" },
                    { name: "Implementation Partner in Canada", icon: Globe, href: "/erpnext/services/implementation-partner-in-canada", description: "Partner services in Canada" },
                    { name: "IT Consulting", icon: Lightbulb, href: "/erpnext/services/it-consulting", description: "Strategic IT consulting" },
                    { name: "Mobile App Development", icon: Tablet, href: "/erpnext/services/mobile-app-development", description: "Mobile apps for ERPNext" },
                    { name: "Performance Optimization", icon: Zap, href: "/erpnext/services/performance-optimization", description: "Optimize ERPNext performance" },
                    { name: "Process Consulting", icon: Workflow, href: "/erpnext/services/process-consulting", description: "Business process consulting" },
                    { name: "Resource Augmentation", icon: Users, href: "/erpnext/services/resource-augmentation", description: "Scale your team" },
                    { name: "Start Your ERP Journey", icon: Rocket, href: "/erpnext/services/start-your-erp-journey", description: "Begin your transformation" },
                    { name: "Support", icon: Headphones, href: "/erpnext/services/support", description: "ERPNext support services" },
                    { name: "Support AMC", icon: ShieldCheck, href: "/erpnext/services/support-amc", description: "Annual maintenance contracts" },
                    { name: "System Maintenance AMC", icon: Wrench, href: "/erpnext/services/system-maintenance-amc", description: "System maintenance services" },
                    { name: "ERPNext v16 Migration", icon: TrendingUp, href: "/erpnext/services/erpnext-v16-migration", description: "Upgrade from ERPNext v15 to v16 safely" },
                    { name: "Website Development", icon: Globe, href: "/erpnext/services/website-development-on-erpnext", description: "ERPNext website development" }
                ]
            },

            // ================= APPS =================
            {
                name: "Apps",
                icon: AppWindow,
                children: [
                    { name: "Advanced Authorisation Licence", icon: FileCheck, href: "/erpnext/apps/advanced-authorisation-licence-erpnext", description: "Advance authorisation licence management" },
                    { name: "Argentina E-Invoicing", icon: Receipt, href: "/erpnext/apps/argentina-electronic-invoicing-erpnext-afip-compliance-automation", description: "AFIP compliant Argentina invoicing" },
                    { name: "EMD Management", icon: DollarSign, href: "/erpnext/apps/emd-management-erpnext", description: "Earnest money deposit management" },
                    { name: "FD Management", icon: Lock, href: "/erpnext/apps/fd-management-erpnext", description: "Fixed deposit management" },
                    { name: "Forward Contract", icon: TrendingUp, href: "/erpnext/apps/forward-contract-erpnext", description: "Forward contract & hedging management" },
                    { name: "Investment Portfolio", icon: BarChart3, href: "/erpnext/apps/investment-portfolio-erpnext", description: "Portfolio & investment management" },
                    { name: "Meeting Management", icon: Calendar, href: "/erpnext/apps/meeting-management-erpnext", description: "Meeting & calendar management" },
                    { name: "RODTEP Claim", icon: ClipboardCheck, href: "/erpnext/apps/rodtep-claim-erpnext", description: "Export incentive claim automation" },
                    { name: "Workflow Transitions", icon: Repeat, href: "/erpnext/apps/workflow-transition", description: "Workflow automation & transitions" }
                ]
            },

            // ================= AI =================
            {
                name: "AI",
                icon: Brain,
                href: "/erpnext/ai",
                description: "AI-powered features for ERPNext",
                children: [
                    { name: "Smart Card Scanner", icon: CreditCard, href: "/erpnext/ai/ai-powered-smart-card-scanner", description: "Scan and extract business card details instantly" },
                    { name: "Lead Intelligence", icon: Brain, href: "/erpnext/ai/lead-intelligence", description: "Gain insights and prioritize your leads with AI" },
                    { name: "Quote Assistant", icon: MessageSquare, href: "/erpnext/ai/ai-powered-quote-assistant", description: "Streamline quotation creation and management" },
                    { name: "Follow Up Buddy", icon: Users, href: "/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process", description: "Automated follow-up reminders and tracking" },
                    { name: "Resume Ranker", icon: FileSearch, href: "/erpnext/ai/ai-powered-resume-ranker", description: "Rank resumes and find the best candidates instantly" },
                    { name: "Content Spark Marketing Automation", icon: Sparkles, href: "/erpnext/ai/content-spark-marketing-automation", description: "AI-powered content and marketing automation" }
                ]
            },

            // ================= INDUSTRIES =================
            {
                name: "Industries",
                icon: Factory,
                children: [
                    { name: "Manufacturing", icon: Factory, href: "/erpnext/manufacturing", description: "Manufacturing ERP" },


                    {
                        name: "Chemical",
                        icon: FlaskConical,
                        href: "/erpnext/chemical",
                        description: "Chemical Industry ERP",
                        children: [
                            { name: "Certificate of Analysis (COA)", icon: FileCheck, href: "/erpnext/chemical/certificate-of-analysis-coa-pharma-chemicals" },
                            { name: "Chemical Engineering ERP", icon: Cog, href: "/erpnext/chemical/chemical-engineering-software-transforming-processes-and-innovations" },
                            { name: "ERP ROI Analysis", icon: TrendingUp, href: "/erpnext/chemical/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector" },
                            { name: "Dyechem ERP", icon: Atom, href: "/erpnext/chemical/erp-software-dyechem-industry" },
                            { name: "Benefits of ERP for Chemical Industry", icon: Star, href: "/erpnext/chemical/top-5-benefits-of-erp-for-chemical-industry" }
                        ]
                    },

                    { name: "Construction", icon: Hammer, href: "/erpnext/construction" },
                    { name: "Education", icon: GraduationCap, href: "/erpnext/education" },
                    { name: "Electronics", icon: Zap, href: "/erpnext/electronics" },
                    { name: "Engineering", icon: Cog, href: "/erpnext/engineering" },
                    { name: "Fintech", icon: DollarSign, href: "/erpnext/fintech" },
                    { name: "Healthcare", icon: Heart, href: "/erpnext/healthcare" },
                    { name: "Agriculture", icon: Leaf, href: "/erpnext/agro/erp-for-commodity-trading" },
                    { name: "Hospitality", icon: Building2, href: "/erpnext/hospitality" },
                    { name: "Logistics", icon: Truck, href: "/erpnext/logistics" },
                    {
                        name: "Trading",
                        icon: ShoppingCart,
                        href: "/erpnext/trading",
                        children: [
                            { name: "Commodities Trading ERP", icon: TrendingUp, href: "/erpnext/trading/erp-for-commodities-trading-business" }
                        ]
                    },
                    { name: "Mining", icon: Truck, href: "/erpnext/mining" },
                    { name: "Pharmaceutical", icon: Pill, href: "/erpnext/pharmaceutical" },
                    { name: "Retail", icon: ShoppingCart, href: "/erpnext/retail" },
                    { name: "Textile", icon: ShoppingCart, href: "/erpnext/textile" }
                ]
            },

            // ================= INSIGHTS =================
            {
                name: "Insights",
                icon: Lightbulb,
                children: [
                    { name: "What's New in ERPNext v16", icon: Sparkles, href: "/erpnext/insights/whats-new-erpnext-version-16", description: "Features, improvements & updates in ERPNext Version 16" },
                    { name: "ERPNext v16 Performance Guide", icon: Zap, href: "/erpnext/insights/erpnext-v16-frappe-caffeine-performance-guide", description: "Frappe Caffeine performance improvements explained" },
                    { name: "How to Choose ERP Software", icon: FileText, href: "/erpnext/insights/how-to-choose-the-right-erp-software-for-your-company" },
                    { name: "How Website Benefits Business", icon: Globe, href: "/erpnext/insights/how-website-benefits-a-business" },
                    { name: "Industry-specific vs Generic ERP", icon: BarChart3, href: "/erpnext/insights/industry-specific-vs-generic-erp" },
                    { name: "Manufacturing Software Selection", icon: Factory, href: "/erpnext/insights/tips-for-selecting-the-right-manufacturing-software" },
                    { name: "ERP Go-Live Plan", icon: Rocket, href: "/erpnext/insights/ultimate-erp-go-live-plan" },
                    { name: "Upgrade Old ERP to Cloud", icon: TrendingUp, href: "/erpnext/insights/upgrade-olderp-with-clouderp" },
                    { name: "Create BOM Without Operations", icon: ListChecks, href: "/how-to-create-bill-of-materials-without-operations-in-erpnext", description: "Step-by-step guide to create BOM without operations" },
                ]
            },

            // ================= WIKI =================
            {
                name: "Wiki",
                icon: BookOpen,
                children: [] // Will be populated by getNavigationItems
            },
            {
                name: "Case Studies",
                icon: Briefcase,
                href: "/erpnext/case-studies",
            }
        ]
    },





    {
        name: "AI Automation",
        icon: Bot,
        href: "/ai-automation",
        children: [
            {
                name: "Apps",
                icon: Package,
                children: [
                    { name: "AI-powered Lead Generation & Email Outreach", icon: MailPlus, href: "/ai-automation/apps/ai-powered-lead-generation-and-email-outreach", description: "AI-driven lead generation and automated email outreach" },
                    { name: "Content Spark Marketing Automation", icon: Sparkles, href: "/erpnext/ai/content-spark-marketing-automation", description: "AI-powered content and marketing automation" },
                    { name: "Sales Call Recording & Analysis", icon: PhoneCall, href: "/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext", description: "AI-based sales call recording and analysis in ERPNext" }
                ]
            },
            {
                name: "Guides",
                icon: BookOpen,
                children: [
                    { name: "Proactive AI Assistant - Moltbot", icon: Bot, href: "/ai-automation/guides/proactive-ai-assistant-moltbot", description: "Complete guide to Moltbot AI assistant" },
                    { name: "How to Install Clawdbot", icon: BookOpen, href: "/ai-automation/guides/how-to-install-clawdbot", description: "Step-by-step Clawdbot installation guide" },
                    { name: "Moltbot vs Claude Code", icon: Code2, href: "/ai-automation/guides/moltbot-vs-claude-code", description: "Comprehensive comparison between Moltbot and Claude Code" }
                ]
            },
            {
                name: "n8n",
                icon: Zap,
                children: [
                    {
                        name: "Apps",
                        icon: Package,
                        children: [
                            { name: "Smart Card Scanner", icon: CreditCard, href: "/erpnext/ai/ai-powered-smart-card-scanner", description: "Scan and extract business card details instantly." },
                            { name: "Content Spark Marketing Automation", icon: Sparkles, href: "/erpnext/ai/content-spark-marketing-automation", description: "Automate and personalize your marketing campaigns." },
                            { name: "Lead Intelligence", icon: Brain, href: "/erpnext/ai/lead-intelligence", description: "Gain insights and prioritize your leads with AI." },
                            { name: "AI Outreach & Lead Generation Research", icon: Rocket, href: "/ai-automation/apps/ai-powered-lead-generation-and-email-outreach", description: "Discover and connect with potential leads intelligently." },
                            { name: "AI Sales Call Analysis for ERPNext", icon: PhoneCall, href: "/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext", description: "Analyze and summarize sales calls automatically." },
                            { name: "Email Classification", icon: Mail, href: "/n8n/workflows/ai-driven-email-classification-for-businesses", description: "Classify and route emails automatically using AI." },
                            { name: "Quote Assistant Overview", icon: MessageSquare, href: "/erpnext/ai/ai-powered-quote-assistant", description: "Streamline quotation creation and management." },
                            { name: "Follow Up Buddy", icon: Users, href: "/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process", description: "Automated follow-up reminders and tracking." },
                            { name: "AI Powered Resume Ranker", icon: FileSearch, href: "/erpnext/ai/ai-powered-resume-ranker", description: "Rank resumes and find the best candidates instantly." }
                        ]
                    },
                    {
                        name: "Workflows",
                        icon: Factory,
                        children: [
                            { name: "AI-driven Email Classification for Businesses", icon: Mail, href: "/n8n/workflows/ai-driven-email-classification-for-businesses", description: "Automate email classification using AI-driven workflows in n8n" }
                        ]
                    },
                    {
                        name: "Insights",
                        icon: Lightbulb,
                        children: [
                            { name: "n8n 2.0 Langchain Agentic Workflows", icon: Brain, href: "/n8n/insights/n8n-2-0-langchain-agentic-workflows", description: "Building agentic workflows with n8n 2.0 and Langchain" }
                        ]
                    }
                ]
            },
            {
                name: "Insights",
                icon: Lightbulb,
                children: [
                    { name: "AI Revolutionizing Global Communication", icon: Globe2, href: "/ai-automation/insights/ai-revolutionizing-global-communication-a-hint-of-change", description: "How AI is transforming global communication" },
                    { name: "Google's AI Paywall Debate", icon: Scale, href: "/ai-automation/insights/googles-potential-paywall-balancing-innovation-and-access", description: "Balancing AI innovation and access in Google's paywall strategy" },
                    { name: "January 2026 Workflow Automation News", icon: Sparkles, href: "/ai-automation/insights/january-2026-workflow-automation-news", description: "Latest workflow automation trends and updates" }
                ]
            },
            {
                name: "Services",
                icon: Wrench,
                children: [
                    { name: "Digital Transformation Services", icon: Cpu, href: "/ai-automation/services/digital-transformation-services", description: "AI-led digital transformation services" }
                ]
            }
        ]
    },



    {
        name: "Solutions",
        icon: Puzzle,
        href: "/solutions/erp",
        children: [
            // ================= ERP =================
            {
                name: "ERP",
                icon: Building2,
                children: [
                    {
                        name: "Insights",
                        icon: Package,
                        children: [
                            { name: "What is ERP Software?", icon: FileText, href: "/erp/insights/What-is-ERP-software", description: "Introduction to ERP software and its core concepts" },
                            { name: "Benefits of ERP", icon: Star, href: "/erp/insights/benefits-of-erp", description: "Key benefits of implementing ERP systems" },
                            { name: "ERP & CRM Integration Benefits", icon: BarChart3, href: "/erp/insights/benefits-of-erp-and-crm-integration", description: "Benefits of integrating ERP and CRM" },
                            { name: "ERP for Manufacturing", icon: Factory, href: "/erp/insights/benefits-of-erp-for-manufacturing", description: "How ERP benefits manufacturing businesses" },
                            { name: "ERP Implementation Challenges", icon: AlertTriangle, href: "/erp/insights/challenges-of-erp-implementation", description: "Major challenges faced during ERP implementation" },
                            { name: "Common Myths of ERP", icon: Info, href: "/erp/insights/common-myths-of-erp", description: "Common misconceptions about ERP systems" },
                            { name: "ERP Implementation Methodology", icon: Workflow, href: "/erp/insights/erp-implementation-methodology", description: "ERP implementation methodologies explained" },
                            { name: "ERP Implementation Steps", icon: ListChecks, href: "/erp/insights/erp-implementation-steps", description: "Step-by-step ERP implementation guide" },
                            { name: "Evolution of ERP", icon: TrendingUp, href: "/erp/insights/evolution-of-erp", description: "Evolution and growth of ERP systems" },
                            { name: "ERP Business Transformation", icon: Rocket, href: "/erp/insights/how-erp-software-can-change-your-business", description: "How ERP software transforms businesses" },
                            { name: "ERP Business Performance", icon: LineChart, href: "/erp/insights/how-erp-improves-business-performance", description: "How ERP improves overall business performance" },
                            { name: "Importance of Systems & Processes", icon: Settings, href: "/erp/insights/significance-of-system-and-process", description: "Why systems and processes are critical for growth" },
                            { name: "Master Production Schedule (MPS)", icon: Calendar, href: "/erp/insights/what-is-a-master-production-schedule", description: "Understanding Master Production Scheduling" }
                        ]
                    }
                ]
            },
            {
                name: "Productify",
                icon: Box,
                href: "/solutions/productify",
                description: "Productify – productivity and product management solution",
                children: [
                    { name: "Privacy Policy", icon: BookOpen, href: "/solutions/productify/privacy-policy", description: "Privacy policy for Productify" }
                ]
            },
            {
                name: "EMS Software",
                icon: Radio,
                description: "Emergency Management System solutions",
                children: [
                    { name: "Two-Way Communication", icon: MessageCircle, href: "/two-way-communication-in-ems", description: "EMS software with two-way communication features" },
                    { name: "Volunteer Tree Structure", icon: TreeDeciduous, href: "/volunteer-tree-structure-in-ems", description: "Manage EMS volunteers with tree-based hierarchy" }
                ]
            }
        ]
    },
    // ================= HIRE TEAM =================
    {
        name: "Hire Team",
        icon: UserCheck,
        href: "/staff-augmentation/experts",
        children: [
            { name: "Hire Expert Developers", icon: Users, href: "/staff-augmentation/experts", description: "Hire skilled developers for ERP, AI, web, and software projects" },
            { name: "Hire ERPNext Accountant", icon: UserPlus, href: "/erpnext/services/hire-erpnext-accountant", description: "Hire dedicated ERPNext accountants" },
            { name: "Hire ERPNext Implementer", icon: UserPlus, href: "/erpnext/services/hire-erpnext-implementer", description: "Hire dedicated implementers" },
            { name: "Hire JavaScript Developer", icon: UserPlus, href: "/staff-augmentation/hire-javascript-developers", description: "Hire dedicated javascript developers" },
            { name: "Hire Python Developer", icon: UserPlus, href: "/staff-augmentation/hire-python-developers", description: "Hire dedicated python developers" },
            { name: "Hire Web Application Developers", icon: UserPlus, href: "/staff-augmentation/web-application-developers", description: "Hire dedicated web app developers" },
        ]
    },


    {
        name: "Company",
        icon: Briefcase,
        href: "/careers",
        children: [

            {
                name: "About Us",
                icon: Info,
                href: "/about-us",
                children: [
                    { name: "Our Story", icon: BookOpen, href: "/about-us/our-story", description: "The journey, vision, and evolution of Finbyz" },
                    { name: "Steer Your Vision", icon: Compass, href: "/about-us/steer-your-vision", description: "Helping businesses steer their long-term vision" },
                    { name: "Core Values", icon: Heart, href: "/about-us/core-values", description: "Our core values and culture" },
                    { name: "Life at Finbyz", icon: Users, href: "/about-us/life-at-finbyz", description: "Work culture and life at Finbyz" },
                    { name: "Clients", icon: Building2, href: "/about-us/clients", description: "Our clients and success stories" },
                    { name: "Testimonials", icon: MessageSquareQuote, href: "/about-us/testimonials", description: "What our clients say about us" },
                    { name: "Partnership Programs", icon: Handshake, href: "/about-us/partnership-programs", description: "Partner with Finbyz for mutual growth" },
                    { name: "WhatsApp Privacy Policy", icon: ShieldCheck, href: "/whatsapp-privacy-policy", description: "WhatsApp data usage and privacy policy" },
                    { name: "ERP Solutions in Ahmedabad", icon: Building2, href: "/erp-solutions-ahmedabad", description: "ERP solutions and services in Ahmedabad" },
                    { name: "IT Services in Ahmedabad", icon: Cpu, href: "/it-services-ahmedabad", description: "IT services and consulting in Ahmedabad" }
                ]
            },
            {
                name: "Blogs",
                icon: PenTool, href: "/blogs",
                description: "ERPNext, AI, software & technology blogs",
                children: [] // Will be populated by getNavigationItems
            },

            {
                name: "Gallery",
                icon: Image,
                href: "/gallery",
                description: "",
                children: [] // Will be populated by getNavigationItems
            },

            // ================= CAREER =================
            {
                name: "Career",
                icon: Briefcase,
                href: "/careers",
                description: "Join the Finbyz team",
                children: [
                    {
                        name: "Job Openings",
                        icon: ClipboardList,
                        href: "/careers/job-openings",
                        description: "Explore current job openings at Finbyz",
                        children: [] // Will be populated by getNavigationItems
                    },
                    { name: "Apply Now", icon: Send, href: "/careers/apply", description: "Apply for open positions" },
                    { name: "Why Join Finbyz", icon: HeartHandshake, href: "/careers/why-join-finbyz", description: "Why Finbyz is a great place to grow your career" },
                    { name: "Hiring Process", icon: Workflow, href: "/careers/hiring-process", description: "Step-by-step hiring process at Finbyz" },
                    {
                        name: "Career Insights",
                        icon: Lightbulb,
                        children: [
                            { name: "How to Become a Software Engineer", icon: Code2, href: "/careers/insights/how-to-become-a-software-engineer-the-path-to-success", description: "Career roadmap to become a successful software engineer" }
                        ]
                    }
                ]
            },

            {
                name: "Login",
                icon: Lock,
                href: "/login",
                description: "Login to your account"
            },
        ]
    },


    // ================= BLOGS =================
    // {
    //     name: "Blogs",
    //     icon: PenTool,
    //     href: "/blogs",
    //     description: "ERPNext, AI, software & technology blogs"
    // },
];

// Helper to find and update a node by path
function findAndUpdateNode(nodes: NavNode[], path: string[], children: NavNode[]): void {
    if (path.length === 0) return;

    const [current, ...rest] = path;
    const node = nodes.find(n => n.name === current);

    if (!node) return;

    if (rest.length === 0) {
        // Found the target node, update its children
        node.children = [...(node.children || []), ...children];
    } else if (node.children) {
        findAndUpdateNode(node.children, rest, children);
    }
}

// Async function to get navigation items with all dynamic children resolved
export async function getNavigationItems(): Promise<NavNode[]> {
    // Deep clone the navigation items to avoid mutating the original
    const items: NavNode[] = JSON.parse(JSON.stringify(navigationItems));

    // Restore icon references (lost during JSON stringify)
    const restoreIcons = (nodes: NavNode[], originals: NavNode[]) => {
        nodes.forEach((node, i) => {
            node.icon = originals[i].icon;
            if (node.children && originals[i].children) {
                restoreIcons(node.children, originals[i].children);
            }
        });
    };
    restoreIcons(items, navigationItems);

    // Fetch all dynamic data in parallel
    const [wikiPages, blogPosts, galleryItems, openPositions] = await Promise.all([
        getWikiPages(),
        getBlogPosts(),
        getGalleryItems(),
        getOpenPositions()
    ]);

    // Update navigation with fetched data
    findAndUpdateNode(items, ["ERPNext", "Wiki"], wikiPages);
    findAndUpdateNode(items, ["Company", "Blogs"], blogPosts);
    findAndUpdateNode(items, ["Company", "Gallery"], galleryItems);
    findAndUpdateNode(items, ["Company", "Career", "Job Openings"], openPositions);

    return items;
}

// Sync version that returns static navigation (for initial render)
export function getStaticNavigationItems(): NavNode[] {
    return navigationItems;
}
