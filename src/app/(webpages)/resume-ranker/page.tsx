
'use client'

import React from 'react'
import {
    Upload,
    FileSearch,
    FileCog,
    ListChecks,
    Gauge,
    Star,
    Timer,
    Scale,
    Target,
    CheckCircle2,
    Sparkles,
    Rocket,
    Play,
    ShieldCheck,
    ArrowRight
} from 'lucide-react'

// Types
interface ProcessStep {
    step: string
    title: string
    description: string
    icon: string
    details: string[]
    duration: string
    iconColor: string
    iconBg: string
}

interface WorkflowData {
    title: string
    subtitle: string
    processSteps: ProcessStep[]
    stats: {
        steps: string
        weeks: string
        transparency: string
        support: string
    }
}

interface Benefit {
    number: number
    suffix: string
    label: string
    header: string
    description: string
    icon: string
    palette: {
        iconBg: string
        iconColor: string
    }
}

interface BenefitsData {
    component_type: 'Card'
    title: string
    subtitle: string
    benefits: Benefit[]
}

interface PointsData {
    component_type: 'Text'
    title: string
    points: string[]
}

interface CTAData {
    subheading: {
        text: string
        icon: string
    }
    title: string
    description: string
    primaryButton: {
        text: string
        icon: string
        action: string
    }
    secondaryButton: {
        text: string
        icon: string
        action: string
    }
    trustIndicator: {
        text: string
        icon: string
    }
}

// Icon mapping
const iconMap: Record<string, any> = {
    Upload,
    FileSearch,
    FileCog,
    ListChecks,
    Gauge,
    Star,
    Timer,
    Scale,
    Target,
    CheckCircle2,
    Sparkles,
    Rocket,
    Play,
    ShieldCheck,
    ArrowRight
}

// Hero Section Component
const HeroSection = ({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc
}: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    imageSrc: string
}) => {
    return (
        <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                AI Powered <span className="text-orange-500">Resume Ranker</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={buttonLink}
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                            >
                                {buttonText}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Diagram */}
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                AI Powered Resume Ranker
                            </h3>

                            {/* Workflow Diagram */}
                            <div className="space-y-4">
                                {/* Row 1 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                            <Upload className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">Application Submitted</p>
                                        <p className="text-xs text-gray-600">Resume submitted for a job opening</p>
                                    </div>

                                    <div className="flex-shrink-0 px-2">
                                        <ArrowRight className="w-6 h-6 text-gray-400" />
                                    </div>

                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                            <FileSearch className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">JD Retrieval</p>
                                        <p className="text-xs text-gray-600">System fetches job description from ERPNext</p>
                                    </div>

                                    <div className="flex-shrink-0 px-2">
                                        <ArrowRight className="w-6 h-6 text-gray-400" />
                                    </div>

                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                            <FileCog className="w-8 h-8 text-orange-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">Resume Parsing</p>
                                        <p className="text-xs text-gray-600">AI extracts skills & experience from resume</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t-2 border-dashed border-gray-300 my-4" />

                                {/* Row 2 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                            <ListChecks className="w-8 h-8 text-orange-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">Skill Matching</p>
                                        <p className="text-xs text-gray-600">Compare candidate skills with job requirements</p>
                                    </div>

                                    <div className="flex-shrink-0 px-2">
                                        <ArrowRight className="w-6 h-6 text-gray-400" />
                                    </div>

                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                            <Gauge className="w-8 h-8 text-orange-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">Skill Scoring</p>
                                        <p className="text-xs text-gray-600">Rate each skill based on candidate's experience</p>
                                    </div>

                                    <div className="flex-shrink-0 px-2">
                                        <ArrowRight className="w-6 h-6 text-gray-400" />
                                    </div>

                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                            <Star className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900">Overall Rating</p>
                                        <p className="text-xs text-gray-600">Generate average score for easy evaluation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Section Component
const Section = ({
    children,
    className = ''
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <section className={`w-full ${className}`}>
            {children}
        </section>
    )
}

// Process Workflow Component
const ProcessWorkflow = ({ title, subtitle, processSteps, stats }: WorkflowData) => {
    return (
        <div className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-xl text-gray-600">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => {
                        const Icon = iconMap[step.icon]
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`${step.iconBg} ${step.iconColor} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        {Icon && <Icon className="w-6 h-6" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-semibold text-gray-500 mb-1">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">{step.description}</p>

                                <ul className="space-y-2 mb-4">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-gray-500">Duration:</span>
                                    <span className={`${step.iconColor} font-semibold`}>{step.duration}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Object.entries(stats).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg p-6 text-center shadow">
                            <div className="text-2xl font-bold text-orange-600 mb-1">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Benefits Component
const Benefits = ({ title, subtitle, benefits }: BenefitsData) => {
    return (
        <div className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-xl text-gray-600">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = iconMap[benefit.icon]
                        return (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-orange-200 hover:shadow-lg transition-all"
                            >
                                <div className={`${benefit.palette.iconBg} ${benefit.palette.iconColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                                    {Icon && <Icon className="w-8 h-8" />}
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-bold text-gray-900">{benefit.number}</span>
                                        <span className="text-2xl font-bold text-gray-900">{benefit.suffix}</span>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-600">{benefit.label}</div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.header}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// Points Component
const Points = ({ title, points }: PointsData) => {
    return (
        <div className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>

                    <div className="space-y-4">
                        {points.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 text-lg">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// CTA Component
const CTA = ({ subheading, title, description, primaryButton, secondaryButton, trustIndicator }: CTAData) => {
    const SubheadingIcon = iconMap[subheading.icon]
    const PrimaryIcon = iconMap[primaryButton.icon]
    const SecondaryIcon = iconMap[secondaryButton.icon]
    const TrustIcon = iconMap[trustIndicator.icon]

    return (
        <div className="w-full py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                    {SubheadingIcon && <SubheadingIcon className="w-4 h-4 text-orange-400" />}
                    <span className="text-sm font-semibold text-orange-400">{subheading.text}</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{description}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <a
                        href={primaryButton.action}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                        {primaryButton.text}
                        {PrimaryIcon && <PrimaryIcon className="w-5 h-5" />}
                    </a>

                    <a
                        href={secondaryButton.action}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/10"
                    >
                        {secondaryButton.text}
                        {SecondaryIcon && <SecondaryIcon className="w-5 h-5" />}
                    </a>
                </div>

                <div className="inline-flex items-center gap-2 text-gray-400">
                    {TrustIcon && <TrustIcon className="w-4 h-4" />}
                    <span className="text-sm">{trustIndicator.text}</span>
                </div>
            </div>
        </div>
    )
}

// Main Page Component
export default function ResumeRankerPage() {
    const seoTitle = 'AI Powered Resume Ranker'
    const seoDescription = 'Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.'

    const workflowData: WorkflowData = {
        title: 'Recruitment Workflow',
        subtitle: 'From submission to fair, data-driven decisions',
        processSteps: [
            {
                step: '01',
                title: 'Job Application Submitted',
                description: 'Candidate uploads a resume for an open role, triggering the workflow.',
                icon: 'Upload',
                details: [
                    'Resume received via portal or email',
                    'Metadata captured (role, location, source)',
                    'Workflow initiated automatically'
                ],
                duration: 'Instant',
                iconColor: 'text-orange-600',
                iconBg: 'bg-orange-50'
            },
            {
                step: '02',
                title: 'Job Description Retrieval',
                description: 'Fetches the complete JD from ERPNext or webhook for accurate requirements.',
                icon: 'FileSearch',
                details: [
                    'Pulls responsibilities and must-have skills',
                    'Extracts seniority and role context',
                    'Normalizes JD formatting'
                ],
                duration: 'Seconds',
                iconColor: 'text-emerald-600',
                iconBg: 'bg-emerald-50'
            },
            {
                step: '03',
                title: 'Resume Parsing',
                description: 'AI parses and cleans resume text into structured skills and experience.',
                icon: 'FileCog',
                details: [
                    'Extracts skills, roles, education',
                    'Deduplicates and normalizes entities',
                    'Handles PDF/DOCX variations'
                ],
                duration: 'Seconds',
                iconColor: 'text-violet-600',
                iconBg: 'bg-violet-50'
            },
            {
                step: '04',
                title: 'Skill Matching',
                description: 'Matches candidate skills to JD requirements to find alignment and gaps.',
                icon: 'ListChecks',
                details: [
                    'Identifies exact and related skills',
                    'Highlights missing competencies',
                    'Weights recency and relevance'
                ],
                duration: 'Seconds',
                iconColor: 'text-orange-600',
                iconBg: 'bg-orange-50'
            },
            {
                step: '05',
                title: 'Skill Scoring',
                description: 'Scores each skill using proficiency, experience, and relevance.',
                icon: 'Gauge',
                details: [
                    'Standardized scoring logic',
                    'Configurable weights and rules',
                    'Bias-reduction heuristics'
                ],
                duration: 'Real-time',
                iconColor: 'text-cyan-600',
                iconBg: 'bg-cyan-50'
            },
            {
                step: '06',
                title: 'Overall Rating',
                description: 'Aggregates the skill scores into a recruiter-friendly rating.',
                icon: 'Star',
                details: [
                    'Overall fit score generated',
                    'Clear explanation and feedback',
                    'Ready for fast shortlisting'
                ],
                duration: 'Real-time',
                iconColor: 'text-rose-600',
                iconBg: 'bg-rose-50'
            }
        ],
        stats: {
            steps: '6 steps',
            weeks: 'Real-time',
            transparency: 'Explainable scores',
            support: 'ERPNext-ready'
        }
    }

    const benefitsData: BenefitsData = {
        component_type: 'Card',
        title: 'Benefits',
        subtitle: 'Speed up hiring with accurate, unbiased AI ranking',
        benefits: [
            {
                number: 70,
                suffix: '%',
                label: 'Faster Screening',
                header: 'Automated parsing & matching',
                description: 'Save recruiter hours by automating resume parsing and JD matching.',
                icon: 'Timer',
                palette: {
                    iconBg: 'bg-orange-50',
                    iconColor: 'text-orange-600'
                }
            },
            {
                number: 100,
                suffix: '%',
                label: 'Fair Evaluation',
                header: 'Standardized scoring logic',
                description: 'Consistent evaluations reduce bias and improve decision quality.',
                icon: 'Scale',
                palette: {
                    iconBg: 'bg-emerald-50',
                    iconColor: 'text-emerald-600'
                }
            },
            {
                number: 95,
                suffix: '%',
                label: 'Accuracy',
                header: 'High-precision skill extraction',
                description: 'Advanced extraction lowers the chance of missing qualified candidates.',
                icon: 'Target',
                palette: {
                    iconBg: 'bg-violet-50',
                    iconColor: 'text-violet-600'
                }
            },
            {
                number: 40,
                suffix: '%',
                label: 'Better Decisions',
                header: 'Clear ratings & feedback',
                description: 'Transparent explanations enable confident shortlisting.',
                icon: 'CheckCircle2',
                palette: {
                    iconBg: 'bg-orange-50',
                    iconColor: 'text-orange-600'
                }
            }
        ]
    }

    const outputsPoints: PointsData = {
        component_type: 'Text',
        title: 'What You Get ?',
        points: [
            'Skill-by-skill scores mapped to JD requirements',
            'Overall candidate rating with rationale',
            'Actionable feedback highlighting strengths and gaps',
            'AI-driven matching accuracy for every candidate profile',
            'Ranking of candidates by job relevance and skill proficiency'
        ]
    }

    const ctaData: CTAData = {
        subheading: {
            text: 'Start Screening with AI',
            icon: 'Sparkles'
        },
        title: 'Hire faster with unbiased AI resume ranking',
        description: 'Plug into ERPNext, parse resumes automatically, and get explainable candidate scores for faster, fairer shortlisting.',
        primaryButton: {
            text: 'Request a Demo',
            icon: 'Rocket',
            action: '/contact'
        },
        secondaryButton: {
            text: 'See How It Works',
            icon: 'Play',
            action: '/resume-ranker'
        },
        trustIndicator: {
            text: 'GDPR-ready • ERPNext integration',
            icon: 'ShieldCheck'
        }
    }

    return (
        <main className="w-full min-h-screen overflow-x-hidden">
            {/* 1️⃣ HERO SECTION - Full Width */}
            <HeroSection
                title={seoTitle}
                description={seoDescription}
                buttonText="Get a Demo"
                buttonLink="#demo"
                imageSrc="/resume-ranker-workflow.png"
            />

            {/* 2️⃣ OVERVIEW SECTION - Contained Width */}
            <Section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Overview
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                            The AI Powered Resume Ranker automates the recruitment process by extracting key skills from job descriptions and resumes, comparing them using a scoring logic for fair evaluations. This system produces skill scores and overall ratings to expedite hiring decisions while ensuring unbiased assessments. Key workflows include job application submission, job description retrieval, resume parsing, skill matching, and skill scoring, leading to faster screening, improved accuracy, and better decision-making for recruiters.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 3️⃣ PROCESS WORKFLOW SECTION */}
            <ProcessWorkflow {...workflowData} />

            {/* 4️⃣ BENEFITS SECTION */}
            <Benefits {...benefitsData} />

            {/* 5️⃣ OUTPUTS/POINTS SECTION */}
            <Points {...outputsPoints} />

            {/* 6️⃣ CTA SECTION */}
            <CTA {...ctaData} />
        </main>
    )
}