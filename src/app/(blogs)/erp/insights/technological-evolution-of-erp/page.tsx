'use client'

import BlogHero from '@/components/ai_components/blog/BlogHero';
import BlogSection from '@/components/ai_components/blog/BlogSection';
import BlogSectionWithImage from '@/components/ai_components/blog/BlogSectionWithImage';
import BlogTableOfContents from '@/components/ai_components/blog/BlogTableOfContents';
import BlogContent from '@/components/ai_components/blog/BlogContent';
import BlogParagraph from '@/components/ai_components/blog/BlogParagraph';


const heroProps = {
    title: 'ERPNext & Its Modern Tech Stack: A Deep Dive',
    description: 'Uncover the robust open-source technologies powering ERPNext. From the Frappe Framework to Python and React, discover why this stack makes ERPNext scalable, flexible, and future-proof.',
    primaryCategory: 'Technology',
    author: {
        name: 'FinByz Team',
        title: 'ERP Experts',
    },
    publishDate: '2024-05-15',
    readTime: '8 min',
};

const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'the-foundation', title: 'The Foundation: Frappe Framework' },
    { id: 'backend-power', title: 'Backend: Python & Node.js' },
    { id: 'frontend-experience', title: 'Frontend: Javascript & Vue/React' },
    { id: 'database-layer', title: 'Database: MariaDB & PostgreSQL' },
    { id: 'performance-caching', title: 'Performance: Redis & Background Jobs' },
    { id: 'conclusion', title: 'Conclusion' },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-background">
            <BlogHero {...heroProps} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 mx-auto w-full bg-muted/30 border-b container-custom">
                <BlogTableOfContents items={tocItems} />
                <BlogContent>
                    {/* Introduction */}
                    <BlogSectionWithImage
                        id="introduction"
                        title="Introduction"
                        image={{
                            src: '/images/erpnext-stack.svg',
                            alt: 'ERPNext Technology Stack',
                            title: 'ERPNext Tech Stack',
                            width: 480,
                            height: 320,
                            cover: true,
                        }}
                        imagePosition="right"
                        imageSize="large"
                    >
                        <BlogParagraph>
                            In the world of Enterprise Resource Planning (ERP), proprietary systems often come with black-box architectures that limit customization and scalability. ERPNext disrupts this norm by being fully open-source and built on a modern, transparent technology stack. At Finbyz Tech, we believe that understanding the technologies behind your ERP is crucial for long-term success. In this blog, we explore the powerful ecosystem that makes ERPNext one of the most flexible ERPs in the market.
                        </BlogParagraph>
                    </BlogSectionWithImage>

                    {/* The Foundation: Frappe Framework */}
                    <BlogSection id="the-foundation" title="The Foundation: Frappe Framework">
                        <BlogParagraph>
                            ERPNext is built on top of the &quot;Frappe Framework&quot;, a full-stack web application framework written in Python and JavaScript. Frappe provides the &quot;batteries-included&quot; architecture that handles metadata, database abstraction, authentication, and permission management.
                        </BlogParagraph>
                        <BlogParagraph>
                            Because of Frappe, ERPNext is metadata-driven. This means you can create new DocTypes (tables), fields, and forms directly from the UI without writing a single line of code—a feature that drastically reduces development time for custom applications.
                        </BlogParagraph>
                    </BlogSection>

                    {/* Backend: Python & Node.js */}
                    <BlogSectionWithImage
                        id="backend-power"
                        title="Backend: Python & Node.js"
                        image={{
                            src: '/images/python-logo.svg',
                            alt: 'Python Backend',
                            title: 'Python Powered',
                        }}
                        imagePosition="left"
                        imageSize="small"
                    >
                        <BlogParagraph>
                            **Python** is the core server-side language of ERPNext. Known for its readability and vast ecosystem, Python allows developers to write clean, maintainable business logic. Complex calculations, accounting ledgers, and inventory valuations are processed efficiently in Python.
                        </BlogParagraph>
                        <BlogParagraph>
                            Additionally, Frappe leverages **Node.js** for socket.io real-time events. This enables features like live chat, real-time notifications, and document updates without needing to refresh the page.
                        </BlogParagraph>
                    </BlogSectionWithImage>

                    {/* Frontend: Javascript & Vue/React */}
                    <BlogSectionWithImage
                        id="frontend-experience"
                        title="Frontend: Javascript & Vue/React"
                        image={{
                            src: '/images/modern-frontend.svg',
                            alt: 'Frontend Technologies',
                            title: 'Modern UI/UX',
                        }}
                        imagePosition="right"
                        imageSize="small"
                    >
                        <BlogParagraph>
                            The classic ERPNext Desk interface is built using **HTML, CSS, and jQuery**, but modern client-facing portals and new UI components are increasingly adopting **Vue.js** and **React**.
                        </BlogParagraph>
                        <BlogParagraph>
                            Frappe creates a single-page application (SPA) feel, ensuring smooth navigation between records and reports. The templating engine (Jinja) allows for server-side rendering of web pages, making it easy to build customer portals and e-commerce storefronts directly within the ERP.
                        </BlogParagraph>
                    </BlogSectionWithImage>

                    {/* Database: MariaDB & PostgreSQL */}
                    <BlogSection id="database-layer" title="Database: MariaDB & PostgreSQL">
                        <BlogParagraph>
                            For data storage, ERPNext primarily uses **MariaDB**, a robust and open-source relational database. It ensures data integrity with ACID compliance, which is non-negotiable for financial transactions.
                        </BlogParagraph>
                        <BlogParagraph>
                            Recently, support for **PostgreSQL** has been added, giving enterprises more choice in their database backend. This flexibility allows businesses to leverage existing database infrastructure or choosing the engine that best fits their performance requirements.
                        </BlogParagraph>
                    </BlogSection>

                    {/* Performance: Redis & Background Jobs */}
                    <BlogSectionWithImage
                        id="performance-caching"
                        title="Performance: Redis & Background Jobs"
                        image={{
                            src: '/images/performance-rocket.svg',
                            alt: 'High Performance',
                            title: 'Speed & Caching',
                        }}
                        imagePosition="left"
                        imageSize="small"
                    >
                        <BlogParagraph>
                            To ensure speed, ERPNext uses **Redis** for caching and managing the job queue. Frequently accessed data, such as user permissions and configuration settings, are cached in memory to reduce database load.
                        </BlogParagraph>
                        <BlogParagraph>
                            Long-running tasks—like sending bulk emails, processing payroll, or importing data—are handled by **Python RQ (Redis Queue)** workers. This asynchronous processing ensures that the user interface remains responsive even when heavy computations are running in the background.
                        </BlogParagraph>
                    </BlogSectionWithImage>

                    {/* Conclusion */}
                    <BlogSection id="conclusion" title="Conclusion">
                        <BlogParagraph>
                            The strength of ERPNext lies not just in its features, but in the modern, open-source stack it is built upon. By leveraging Python, MariaDB, Redis, and modern JavaScript, ERPNext offers a level of customizability and transparency that proprietary ERPs simply cannot match.
                        </BlogParagraph>
                        <BlogParagraph>
                            At **Finbyz Tech**, we specialize in harnessing this technology stack to build tailored solutions for your business. Whether you need standard implementation or deep customization, our team of engineers ensures your ERP architecture is robust, scalable, and secure.
                        </BlogParagraph>
                    </BlogSection>
                </BlogContent>
            </div>
        </div>
    );
}
