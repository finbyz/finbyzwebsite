import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

type PageProps = {
    params: Promise<{ slug: string }>;
};


export const revalidate = 1800;

// ✅ 1) Structured Data Helper
function createJobPostingData(job: any) {
    // Escape double quotes to single quotes for safe JSON embedding
    const escapeQuotes = (text: string) => (text || '').replace(/"/g, "'");

    const descriptionHtml = escapeQuotes(job.description || '');
    const skillsHtml = escapeQuotes(job.skills || '');

    const fullDescription =
        `<h2><strong>Job Description</strong></h2><br><p>${descriptionHtml}</p><br>` +
        `<h2><strong>Key Skills</strong></h2><p>${skillsHtml}</p><br><br>` +
        `<h2><strong>About Finbyz Tech</strong></h2>` +
        `<p>At Finbyz Tech, we are passionate about revolutionizing businesses through latest technology. ` +
        `We build scalable and innovative software solutions that streamlines your business processes efficiently. ` +
        `We value collaboration and strive to create a positive working environment by celebrating innovation.` +
        `At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one. ` +
        `We create an environment where you can learn, grow, and thrive.</p>`;

    const salaryValue = job.salary
        ? typeof job.salary === 'string'
            ? parseFloat(job.salary)
            : job.salary
        : 0;

    const slug = (job.route || job.name || '').replace(/^\/?/, '');
    const canonicalUrl = `https://finbyz.tech/careers/job-openings/${slug}`;

    const jobPosting: any = {
        '@context': 'http://schema.org',
        '@type': 'JobPosting',
        '@id': canonicalUrl,
        title: job.job_title || job.name,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'FinByz Tech Pvt Ltd',
            sameAs: [
                'https://www.facebook.com/finbyz',
                'https://www.instagram.com/finbyz',
                'https://www.linkedin.com/company/finbyz',
                'https://www.youtube.com/@Finbyz',
            ],
            logo: 'https://finbyz.tech/files/FinbyzLogo.png',
            email: 'career@finbyz.tech',
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                name: 'FinByz Tech Pvt Ltd',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                addressCountry: 'India',
                postalCode: '380009',
                streetAddress:
                    '504-Addor Ambition, Nr. Navrang Circle, Navrangpura',
            },
        },
        datePosted: job.modified || job.creation || new Date().toISOString(),
        baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'INR',
            value: {
                '@type': 'QuantitativeValue',
                value: salaryValue,
                unitText: job.salary_per || 'Month',
            },
        },
        description: fullDescription,
        employmentType: 'Full-Time',
        validThrough: job.valid_till || '',
    };

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
    const jobUrl = `${siteUrl}/careers/job-openings/${slug}`;
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
                .map((s) => s.replace(/<[^>]+>/g, '').trim()) // Strip HTML tags
                .filter(Boolean);
        }
        if (typeof skills === 'string') {
            // First remove HTML tags, then split by common delimiters
            const cleanedSkills = skills.replace(/<[^>]+>/g, ' '); // Replace HTML tags with space
            return cleanedSkills
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
        <div className="container-custom mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <script
                    id="jobposting-structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
                />
                <Breadcrumbs currentTextColor='black' textColor='black' />
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
                        href={`careers/apply?job_title=${encodeURIComponent(
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
