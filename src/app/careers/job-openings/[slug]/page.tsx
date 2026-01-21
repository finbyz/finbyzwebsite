import { notFound } from 'next/navigation';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

type PageProps = {
    params: Promise<{ slug: string }>;
};


export const revalidate = 1800;

// ✅ 1) Structured Data Helper
function createJobPostingData(job: any) {
    const cleanHtml = (html: string) => {
        const input = html || '';
        const withoutScripts = input.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        const withoutStyles = withoutScripts.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
        return withoutStyles
            .replace(/on\w+="[^"]*"/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/<ol(\s[^>]*)?>/gi, '<ul$1>')
            .replace(/<\/ol>/gi, '</ul>');
    };

    const plainDescription = cleanHtml(job.description || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const isRemote = (job.location || '').toLowerCase().includes('remote');
    const isHybrid = (job.location || '').toLowerCase().includes('hybrid');

    // Parse skills for structured data
    const parseSkills = (skills: unknown): string[] => {
        if (!skills) return [];
        if (Array.isArray(skills)) {
            return skills
                .map((s) => (typeof s === 'string' ? s : ''))
                .map((s) => s.trim())
                .filter(Boolean);
        }
        if (typeof skills === 'string') {
            return skills
                .split(/[,\n]+/)
                .map((s) => s.trim())
                .filter(Boolean);
        }
        return [];
    };

    const skills = parseSkills(job.skills);

    const jobPosting: any = {
        '@context': 'https://schema.org/',
        '@type': 'JobPosting',
        title: job.job_title || job.name,
        description: plainDescription,
        identifier: {
            '@type': 'PropertyValue',
            name: 'FinByz Job ID',
            value: job.name
        },
        hiringOrganization: {
            '@type': 'Organization',
            name: 'FinByz Tech Pvt Ltd',
            url: 'https://finbyz.tech',
            logo: 'https://finbyz.tech/files/FinbyzLogo.png',
            sameAs: [
                'https://www.linkedin.com/company/finbyz-tech',
                'https://twitter.com/finbyztech'
            ]
        },
        employmentType: job.employment_type || 'FULL_TIME',
        industry: job.department || 'Technology',
        datePosted: job.posted_on || job.creation || job.modified || new Date().toISOString(),
        jobBenefits: [
            'Competitive salary',
            'Health insurance',
            'Professional development opportunities',
            'Flexible work arrangements'
        ],
        workHours: '40 hours per week'
    };

    // ✅ Valid through - only include if valid_till exists
    if (job.valid_till) {
        jobPosting.validThrough = job.valid_till;
    } else {
        // Fallback to 30 days from now if not provided
        jobPosting.validThrough = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    }

    // ✅ Salary info - use actual job data if available
    if (job.lower_range && job.upper_range) {
        // Use salary range if available
        jobPosting.baseSalary = {
            '@type': 'MonetaryAmount',
            currency: job.currency || 'INR',
            value: {
                '@type': 'QuantitativeValue',
                minValue: job.lower_range,
                maxValue: job.upper_range,
                unitText: (job.salary_per || 'MONTH').toUpperCase()
            }
        };
    } else if (job.salary) {
        // Use single salary value if range not available
        const salaryValue = typeof job.salary === 'string' ? parseFloat(job.salary) : job.salary;
        if (!isNaN(salaryValue) && salaryValue > 0) {
            jobPosting.baseSalary = {
                '@type': 'MonetaryAmount',
                currency: job.currency || 'INR',
                value: {
                    '@type': 'QuantitativeValue',
                    value: salaryValue,
                    unitText: (job.salary_per || 'MONTH').toUpperCase()
                }
            };
        }
    } else {
        // Default fallback if no salary data
        jobPosting.baseSalary = {
            '@type': 'MonetaryAmount',
            currency: 'INR',
            value: {
                '@type': 'QuantitativeValue',
                minValue: 0,
                maxValue: 1000000,
                unitText: 'MONTH'
            }
        };
    }

    // Add job location
    if (isRemote) {
        jobPosting.jobLocationType = 'TELECOMMUTE';
    } else if (isHybrid) {
        jobPosting.jobLocationType = 'TELECOMMUTE';
        jobPosting.jobLocation = {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: job.location,
                addressRegion: 'India',
                addressCountry: 'IN',
                postalCode: '110001',
                streetAddress: job.location
            }
        };
    } else {
        jobPosting.jobLocation = {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: job.location || 'India',
                addressRegion: 'India',
                addressCountry: 'IN',
                postalCode: '380009',
                streetAddress: job.location || 'India'
            }
        };
    }

    // Add skills if available
    if (skills.length > 0) {
        jobPosting.skills = skills;
    }

    // Add qualifications
    if (job.qualifications) {
        jobPosting.qualifications = job.qualifications;
    }

    // Add responsibilities
    if (job.responsibilities) {
        jobPosting.responsibilities = job.responsibilities;
    }

    return jobPosting;
}

// ✅ 2) Data Fetching Functions
async function getJobByRoute(route: string) {
    const baseUrl = process.env.FRAPPE_URL || '';
    if (!baseUrl) return null;

    const fields = [
        'name',
        'job_title',
        'description',
        'department',
        'location',
        'employment_type',
        'creation',
        'modified',
        'route',
        'image',
        'skills',
        'salary',
        'valid_till',
        'posted_on',
        'lower_range',
        'upper_range',
        'salary_per',
        'currency',
    ];

    const filters: any[][] = [
        ['publish', 'is', 'set'],
        ['status', '=', 'Open'],
        ['route', '=', route],
    ];

    const url = `${baseUrl}/api/resource/Job Opening?filters=${encodeURIComponent(
        JSON.stringify(filters)
    )}&fields=${encodeURIComponent(JSON.stringify(fields))}&limit_page_length=1`;

    const res = await fetch(url, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
            'Content-Type': 'application/json',
        },
        next: { revalidate },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data?.data) && data.data.length ? data.data[0] : null;
}

async function getJobRoutes() {
    const baseUrl = process.env.FRAPPE_URL || '';
    if (!baseUrl) return [] as string[];

    const fields = ['route'];
    const filters: any[][] = [['publish', 'is', 'set']];

    const url = `${baseUrl}/api/resource/Job Opening?filters=${encodeURIComponent(
        JSON.stringify(filters)
    )}&fields=${encodeURIComponent(JSON.stringify(fields))}&limit_page_length=200`;

    const res = await fetch(url, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
            'Content-Type': 'application/json',
        },
        next: { revalidate },
    });

    if (!res.ok) return [];
    const data = await res.json();
    return (data?.data || [])
        .map((i: { route?: string }) => i.route)
        .filter((r: unknown): r is string => Boolean(r));
}

// ✅ 3) Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    if (!slug) {
        return {
            title: 'Job Not Found',
            description: 'The requested job opening could not be found.',
        };
    }

    const job = await getJobByRoute(slug);
    if (!job) {
        return {
            title: 'Job Not Found',
            description: 'The requested job opening could not be found.',
        };
    }

    const cleanHtml = (html: string) => {
        const input = html || '';
        const withoutScripts = input.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        const withoutStyles = withoutScripts.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
        return withoutStyles
            .replace(/on\w+="[^"]*"/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/<ol(\s[^>]*)?>/gi, '<ul$1>')
            .replace(/<\/ol>/gi, '</ul>');
    };

    const plainDescription = cleanHtml(job.description || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 160);

    const jobTitle = job.job_title || job.name;
    const siteUrl = 'https://finbyz.tech';
    const jobUrl = `${siteUrl}/jobs/${slug}`;
    const imageUrl = job.image
        ? job.image.startsWith('http')
            ? job.image
            : `${process.env.FRAPPE_URL || ''}${job.image}`
        : `${siteUrl}/files/FinbyzLogo.png`;

    return {
        title: `${jobTitle} - FinByz Tech Careers`,
        description: plainDescription,
        keywords: [
            jobTitle,
            job.department || 'Technology',
            job.location || 'India',
            job.employment_type || 'Full-time',
            'FinByz Tech',
            'careers',
            'job opening',
            'hiring'
        ],
        authors: [{ name: 'FinByz Tech Pvt Ltd' }],
        creator: 'FinByz Tech Pvt Ltd',
        publisher: 'FinByz Tech Pvt Ltd',
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            type: 'website',
            locale: 'en_IN',
            url: jobUrl,
            title: `${jobTitle} - FinByz Tech Careers`,
            description: plainDescription,
            siteName: 'FinByz Tech',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${jobTitle} at FinByz Tech`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${jobTitle} - FinByz Tech Careers`,
            description: plainDescription,
            images: [imageUrl],
            creator: '@finbyztech',
            site: '@finbyztech',
        },
        alternates: {
            canonical: jobUrl,
        },
        other: {
            'application-name': 'FinByz Tech',
            'apple-mobile-web-app-title': 'FinByz Tech',
            'msapplication-TileColor': '#f97316',
            'theme-color': '#f97316',
        },
    };
}

// ✅ 4) Page Component (FIXED params)
export default async function JobOpeningPage({ params }: PageProps) {
    const { slug } = await params;
    if (!slug) notFound();

    const job = await getJobByRoute(slug);
    if (!job) notFound();

    const imageUrl = job.image
        ? job.image.startsWith('http')
            ? job.image
            : `${process.env.FRAPPE_URL || ''}${job.image}`
        : null;

    const cleanHtml = (html: string) => {
        const input = html || '';
        const withoutScripts = input.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        const withoutStyles = withoutScripts.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
        return withoutStyles
            .replace(/on\w+="[^"]*"/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/<ol(\s[^>]*)?>/gi, '<ul$1>')
            .replace(/<\/ol>/gi, '</ul>');
    };

    const parseSkills = (skills: unknown): string[] => {
        if (!skills) return [];
        if (Array.isArray(skills)) {
            return skills
                .map((s) => (typeof s === 'string' ? s : ''))
                .map((s) => s.trim())
                .filter(Boolean);
        }
        if (typeof skills === 'string') {
            return skills
                .split(/[,\n]+/)
                .map((s) => s.trim())
                .filter(Boolean);
        }
        return [];
    };

    const rawSkills = job.skills as unknown;
    const skillsHtml =
        typeof rawSkills === 'string' && rawSkills.includes('<')
            ? cleanHtml(rawSkills as string)
                .replace(/<ol(\s[^>]*)?>/gi, '<ul$1>')
                .replace(/<\/ol>/gi, '</ul>')
            : null;
    const skillItems = skillsHtml ? [] : parseSkills(rawSkills);

    const jobPosting = createJobPostingData(job);

    return (
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <Script
                    id="jobposting-structured-data"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
                />
                <Breadcrumbs />
                <div className="mb-6 mt-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {job.job_title || job.name}
                    </h1>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                            {job.department || 'General'}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                            {job.location || 'Location Flexible'}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                            {job.employment_type || 'Full-time'}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="prose max-w-none text-gray-800 [&_p]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ol]:ml-6 [&_ol]:list-disc">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: cleanHtml(job.description || ''),
                                }}
                            />
                        </div>
                        {skillsHtml ? (
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Key Skills
                                </h3>
                                <div
                                    className="prose max-w-none text-gray-800 [&_ul]:ml-6 [&_ul]:list-disc"
                                    dangerouslySetInnerHTML={{ __html: skillsHtml }}
                                />
                            </div>
                        ) : skillItems.length > 0 ? (
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Key Skills
                                </h3>
                                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                                    {skillItems.map((s, i) => (
                                        <li key={`${s}-${i}`}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        {imageUrl ? (
                            <div className="relative mx-auto lg:ml-auto w-full max-w-md">
                                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6">
                                    <Image
                                        src={imageUrl}
                                        alt={job.job_title || job.name}
                                        width={640}
                                        height={480}
                                        className="rounded-lg w-full h-auto object-contain max-h-[320px]"
                                        sizes="(max-width: 300px) 100vw, (max-width: 1024px) 35vw, 100px"
                                        priority
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className="mt-10 py-6 border-t border-gray-200">
                    <a
                        href={`/job-application?job_title=${encodeURIComponent(
                            job.job_title || job.name
                        )}`}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
}

// ✅ 5) Static Params (no semicolon at end)
export async function generateStaticParams() {
    try {
        const routes = await getJobRoutes();
        return routes.map((route: any) => ({
            slug: route,
        }));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}
