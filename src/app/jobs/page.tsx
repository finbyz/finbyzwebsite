'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  // Details are shown inline like finbyz.tech/jobs

  const jobs = [
    {
      id: 1,
      title: "ERPNext FICO Consultant",
      category: "Consulting",
      type: "Full-time",
      location: "Remote",
      experience: "3-5 years",
      description: "Act as the ERPNext FICO Consultant, handling Finance & Accounting functional consulting.",
      responsibilities: [
        "Configure ERPNext Finance modules: GL, AR, AP, Fixed Assets, multi-currency, and tax setups",
        "Design Chart of Accounts, fiscal years, workflows, and financial statements",
        "Conduct GAP analysis and prepare functional specifications",
        "Troubleshoot finance-related issues and provide timely solutions",
        "Develop dashboards and reports (Balance Sheet, P&L, MIS)"
      ],
      skills: [
        "Strong expertise in ERPNext Finance/Accounting modules",
        "Experience in troubleshooting financial discrepancies",
        "Knowledge of Frappe Framework",
        "Excellent communication skills",
        "Bachelor's in Accounting, Finance (CAs preferred)"
      ]
    },
    {
      id: 2,
      title: "SEO & Social Media Manager",
      category: "Marketing",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      description: "Manage SEO strategy, content creation, and social media presence across multiple platforms.",
      responsibilities: [
        "Keyword research, on-page optimization, video SEO",
        "Website management and technical SEO audits",
        "Convert videos into SEO-friendly blog posts",
        "Schedule content to YouTube/LinkedIn/X/Instagram",
        "Monitor and reply to comments/DMs"
      ],
      skills: [
        "YouTube + website SEO expertise",
        "Content marketing and blog writing",
        "Platform ops: YouTube Studio, LinkedIn, X, Instagram",
        "Google Analytics and Search Console",
        "AI automation and prompt writing"
      ]
    },
    {
      id: 3,
      title: "Video Editor - Youtube",
      category: "Creative",
      type: "Full-time",
      location: "Remote",
      experience: "2-5 years",
      description: "Edit and package YouTube videos for tech/B2B content with AI augmentation.",
      responsibilities: [
        "Jump cuts, silence/filler removal, audio cleanup",
        "AI augmentation using Descript, Runway/Pika",
        "Create YouTube titles, descriptions, tags, chapters",
        "Multiformat exports: 16:9, 9:16 Shorts/Reels",
        "Maintain templates and asset library"
      ],
      skills: [
        "Strong command of DaVinci Resolve / CapCut",
        "Motion graphics for explainer callouts",
        "Audio: noise reduction, EQ/comp",
        "YouTube packaging: hooks, chapters, thumbnails",
        "AI tooling: Descript, GPT, Runway/Pika"
      ]
    },
    {
      id: 4,
      title: "Sales Manager – IT Services",
      category: "Sales",
      type: "Full-time",
      location: "Hybrid",
      experience: "3+ years",
      description: "Drive sales for ERPNext implementations & workflow automation targeting corporates and IT companies.",
      responsibilities: [
        "Identify and qualify leads across LinkedIn, Freelancer, and B2B channels",
        "Manage personalized messaging campaigns to decision-makers",
        "Coordinate and deliver live demos or proof-of-concepts",
        "Generate customized proposals and manage contracts",
        "Maintain CRM records and track sales pipeline"
      ],
      skills: [
        "Minimum 3 years' B2B IT services sales experience",
        "ERP sales experience (ERPNext, SAP, Oracle)",
        "LinkedIn and Freelancer/Upwork success",
        "Global sales exposure",
        "Consultative communication and negotiation skills"
      ]
    },
    {
      id: 5,
      title: "ERPNext Functional Consultant",
      category: "Consulting",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      description: "Lead ERP implementations, conduct business process mapping, and provide functional consulting.",
      responsibilities: [
        "Conduct pre-sales sessions and propose ERP solutions",
        "Lead business process mapping and requirements gathering",
        "Oversee ERP implementation lifecycle",
        "Develop process flows, prototypes, and BRDs",
        "Provide end-user training and post-implementation support"
      ],
      skills: [
        "MBA, CA, or professional degree",
        "Minimum 2+ years ERPNext experience",
        "Expertise in Accounting, Sales, Purchase, Manufacturing",
        "ERPNext certification is a plus",
        "Strong analytical and communication skills"
      ]
    },
    {
      id: 6,
      title: "AI Automation Internship (n8n, RAG)",
      category: "Internship",
      type: "Internship",
      location: "Remote",
      experience: "Final-year students",
      description: "Design and build smart automation workflows using n8n, Zapier, and LLMs.",
      responsibilities: [
        "Build automation workflows using n8n, Zapier, Make.com",
        "Integrate APIs and connect third-party apps",
        "Use LLMs for summarization and data extraction",
        "Build RAG pipelines with vector databases",
        "Develop autonomous agents using LangChain"
      ],
      skills: [
        "Final-year CS, AI/ML, Data Science students",
        "Basic Python or JavaScript/TypeScript",
        "API knowledge: RESTful, JSON, authentication",
        "Interest in AI/LLMs and prompt engineering",
        "Problem-solving mindset"
      ]
    },
    {
      id: 7,
      title: "Software Developer Internship",
      category: "Internship",
      type: "Internship",
      location: "Remote",
      experience: "Student/Fresher",
      description: "Customize open-source ERP projects and develop Python/JavaScript functions.",
      responsibilities: [
        "Customize open-source ERP according to client specifications",
        "Develop Python and JavaScript functions",
        "Assess and troubleshoot user issues"
      ],
      skills: [
        "Strong logical reasoning",
        "Working knowledge of Python & JavaScript",
        "HTML & SQL preferred",
        "Linux command line and GitHub knowledge",
        "Out of box thinking"
      ]
    },
    {
      id: 8,
      title: "Business Analyst Internship",
      category: "Internship",
      type: "Internship",
      location: "Remote",
      experience: "MBA/Graduate",
      description: "Conduct pre-sales sessions, manage business requirements, and support ERP implementations.",
      responsibilities: [
        "Conduct personalized pre-sales sessions",
        "Manage business requirements and analysis",
        "Provide end-user training and create BRDs",
        "Design process flows and conduct testing",
        "Lead business process mapping sessions"
      ],
      skills: [
        "Master's in Business Administration",
        "Expertise in 3 business domains",
        "Analytical thinker with problem-solving skills",
        "Product demonstration experience",
        "Excellent communication skills"
      ]
    },
    {
      id: 9,
      title: "ERP Functional Consultant",
      category: "Consulting",
      type: "Full-time",
      location: "Remote/On-site",
      experience: "2+ years",
      description: "Provide ERP functional consulting with expertise in various business domains.",
      responsibilities: [
        "Provide ERP functional consulting expertise",
        "Conduct personalization sessions during pre-sales",
        "Manage business requirements and GAP analysis",
        "Design process flows and perform testing",
        "Supervise and mentor junior consultants"
      ],
      skills: [
        "2+ years in ERP systems (ERPNext, Odoo, SAP, etc.)",
        "MBA/Global Business degree",
        "Experience in 3+ business domains",
        "Master in product demonstrations",
        "Migration projects experience"
      ]
    },
    {
      id: 10,
      title: "Marketing Executive",
      category: "Marketing",
      type: "Full-time",
      location: "Field",
      experience: "1-2 years",
      description: "Source sales opportunities, visit clients, and close deals for ERP software solutions.",
      responsibilities: [
        "Source opportunities through lead follow-up and cold calls",
        "Visit clients and conduct ERP software demos",
        "Understand requirements and do GAP analysis",
        "Close sales and achieve targets",
        "Continuous follow-up with customers"
      ],
      skills: [
        "Analytical skills with logical reasoning",
        "Strong phone presence",
        "Inside sales experience preferred",
        "Strong communication skills",
        "IT Sales experience is a plus"
      ]
    },
    {
      id: 11,
      title: "ERPNext Developer",
      category: "Development",
      type: "Full-time",
      location: "Remote",
      experience: "1-3 years",
      description: "Customize ERPNext and build applications on Frappe framework.",
      responsibilities: [
        "Understand client requirements and suggest solutions",
        "Customize ERPNext through custom applications",
        "Manage updates and upgrades of ERPNext system",
        "Ensure smooth transition with upgrades",
        "Build full applications on Frappe framework"
      ],
      skills: [
        "1-3 years experience on Frappe framework",
        "Familiarity with ERPNext features",
        "Python, Javascript, and Jinja templates",
        "Live ERPNext projects experience"
      ]
    },
    {
      id: 12,
      title: "Marketing Manager",
      category: "Marketing",
      type: "Full-time",
      location: "Hybrid",
      experience: "2-5 years",
      description: "Achieve growth targets and manage sales team for software solutions.",
      responsibilities: [
        "Achieve sales targets by acquiring clients",
        "Design strategic sales plan",
        "Visit clients and conduct presentations",
        "Create business proposals and presentations",
        "Manage and coach sales representatives"
      ],
      skills: [
        "2-5 years sales experience to SMEs",
        "Self-motivated with deal closure skills",
        "Analytical skills with logical reasoning",
        "Basic IT industry knowledge",
        "Strong interpersonal skills"
      ]
    },
    {
      id: 13,
      title: "Python Developer",
      category: "Development",
      type: "Full-time",
      location: "Remote",
      experience: "1-3 years",
      description: "Create web applications in Frappe and Django framework, customize ERP software applications.",
      responsibilities: [
        "Create web applications in Frappe and Django framework",
        "Understand existing Django projects and extend functionality",
        "Customize ERP software application to achieve desired functionality",
        "Build reports using Python/SQL queries on relational database",
        "Understand client requirements and build functionality"
      ],
      skills: [
        "Strong knowledge of Core Python and programming concepts",
        "Working knowledge of NumPy and Pandas library preferred",
        "Basic understanding of JavaScript, HTML5, and CSS3",
        "Understanding of scalable application design principles",
        "Code versioning tool like Git",
        "Linux command line understanding"
      ]
    },
    {
      id: 14,
      title: "Web Designer",
      category: "Creative",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      description: "Execute visual design stages and conceptualize original website design ideas.",
      responsibilities: [
        "Execute all visual design stages from concept to final hand-off",
        "Conceptualize original website design ideas with simplicity and user friendliness",
        "Design digital assets including homepages, landing pages, ads, and emails",
        "Understand and re-arrange existing content to new design",
        "Complete projects independently or in partnership with designers"
      ],
      skills: [
        "Solid knowledge of HTML5, CSS3, jQuery, JavaScript, Bootstrap",
        "Responsive Web Design expertise",
        "Experience converting PSD to HTML with Responsive design",
        "Creative and effective problem-solving ability",
        "Up-to-date with latest web trends and technologies"
      ]
    }
  ];

  const categories = ['All', 'Consulting', 'Marketing', 'Creative', 'Sales', 'Internship', 'Development'];

  const toSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white mt-10">
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="text-sm text-gray-500 mb-2">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Jobs</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Job Openings</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {filteredJobs.map(job => (
                <div key={job.id} className="border rounded-lg p-6 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="inline-flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.type}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{job.experience}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700">{job.category}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                      <Link
                        href={`/jobs/${toSlug(job.title)}`}
                        className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded text-sm text-center"
                      >
                        Know More
                      </Link>
                      <Link
                        href={`/jobs/application?role=${encodeURIComponent(job.title)}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12 border rounded-lg bg-white">
                  <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                </div>
              )}
            </div>

            <aside className="space-y-4">
              <div className="border rounded-lg p-6 bg-white">
                <h4 className="text-lg font-semibold mb-4">Inquiry</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="text-gray-500">Phone</div>
                    <a href="tel:+919925701446" className="text-blue-600 hover:underline">+91 9925701446</a>
                  </div>
                  <div>
                    <div className="text-gray-500">HR</div>
                    <a href="tel:+919978419445" className="text-blue-600 hover:underline">+91 9978419445</a>
                  </div>
                  <div>
                    <div className="text-gray-500">Email</div>
                    <a href="mailto:inquiry@finbyz.tech" className="text-blue-600 hover:underline">inquiry@finbyz.tech</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}