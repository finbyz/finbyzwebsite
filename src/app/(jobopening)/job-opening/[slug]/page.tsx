import { notFound } from 'next/navigation';
import Image from 'next/image';
import Script from 'next/script';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 1800;

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
    "image",
    "skills"
  ];

  const filters: any[][] = [
    ['publish', 'is', 'set'],
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
    // Revalidate per page setting
    next: { revalidate },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const item = Array.isArray(data?.data) && data.data.length ? data.data[0] : null;
  return item;
}

async function getJobRoutes() {
  const baseUrl = process.env.FRAPPE_URL || '';
  if (!baseUrl) return [] as string[];

  const fields = ['route'];
  const filters: any[][] = [
    ['publish', 'is', 'set'],
  ];

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

  if (!res.ok) return [] as string[];
  const data = await res.json();
  const items: Array<{ route?: string }> = data?.data || [];
  return items.map(i => i.route).filter((r): r is string => Boolean(r));
}

export default async function JobOpeningPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const job = await getJobByRoute(slug);
  if (!job) notFound();

  const imageUrl = job.image
    ? (job.image.startsWith('http') ? job.image : `${process.env.FRAPPE_URL || ''}${job.image}`)
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
      // Split on commas or new lines
      return skills
        .split(/[,\n]+/)
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return [];
  };
  const rawSkills = (job as any).skills as unknown;
  const skillsHtml = typeof rawSkills === 'string' && rawSkills.includes('<')
    ? cleanHtml(rawSkills as string)
        .replace(/<ol(\s[^>]*)?>/gi, '<ul$1>')
        .replace(/<\/ol>/gi, '</ul>')
    : null;
  const skillItems = skillsHtml ? [] : parseSkills(rawSkills);

  // Build JobPosting JSON-LD
  const plainDescription = cleanHtml(job.description || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const isRemote = (job.location || '').toLowerCase().includes('remote');
  const jobPosting: any = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    name: job.job_title || job.name,
    title: job.job_title || job.name,
    description: plainDescription,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'FinByz Tech Pvt Ltd',
      url: 'https://finbyz.tech',
      logo: 'https://finbyz.tech/files/FinbyzLogo.png'
    },
    employmentType: job.employment_type || 'Full-time',
    industry: job.department || undefined,
    datePosted: (job as any).creation || (job as any).modified || undefined,
  };
  if (isRemote) {
    jobPosting.jobLocationType = 'TELECOMMUTE';
  } else if (job.location) {
    jobPosting.jobLocation = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location
      }
    };
  }

  

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <Script
          id="jobposting-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
        />
        <div className="mb-6">
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
              <div dangerouslySetInnerHTML={{ __html: cleanHtml(job.description || '') }} />
            </div>
            {skillsHtml ? (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Skills</h3>
                <div className="prose max-w-none text-gray-800 [&_ul]:ml-6 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: skillsHtml }} />
              </div>
            ) : skillItems.length > 0 ? (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Skills</h3>
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
            href={`/job-application?job_title=${encodeURIComponent(job.job_title || job.name)}`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  try {
    const routes = await getJobRoutes();
    return routes.map((route) => {
      return {
        slug: route,
      };
    });
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
};