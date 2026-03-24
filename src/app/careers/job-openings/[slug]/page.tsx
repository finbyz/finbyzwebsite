import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import { ShareButton } from './ShareButton';
import {
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Users,
  Star,
  Mail,
  CheckCircle2,
  BadgeIndianRupee,
  GraduationCap,
  Zap,
} from 'lucide-react';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 1800;

// ── helpers ──────────────────────────────────────────────────────────────────

function createJobPostingData(job: any) {
  const escapeQ = (t: string) => (t || '').replace(/"/g, "'");
  const fullDesc =
    `<h2><strong>Job Description</strong></h2><br><p>${escapeQ(job.description || '')}</p><br>` +
    `<h2><strong>Key Skills</strong></h2><p>${escapeQ(job.skills || '')}</p><br><br>` +
    `<h2><strong>About Finbyz Tech</strong></h2>` +
    `<p>At Finbyz Tech, we are passionate about revolutionizing businesses through latest technology.</p>`;

  const slug = (job.route || job.name || '').split('/').pop() || '';
  const canonicalUrl = `https://finbyz.tech/careers/job-openings/${slug}`;

  return {
    '@context': 'http://schema.org',
    '@type': 'JobPosting',
    '@id': canonicalUrl,
    title: job.job_title || job.name,
    identifier: { '@type': 'PropertyValue', name: 'FinByz Tech Pvt Ltd', value: job.name },
    hiringOrganization: {
      '@type': 'Organization',
      name: 'FinByz Tech Pvt Ltd',
      '@id': 'https://finbyz.tech/#organization',
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
        streetAddress: '504-Addor Ambition, Nr. Navrang Circle, Navrangpura',
      },
    },
    datePosted: job.posted_on || job.creation || new Date().toISOString(),
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.lower_range,
        maxValue: job.upper_range,
        unitText: job.salary_per || 'Month',
      },
    },
    description: fullDesc,
    employmentType: job.employment_type || 'FULL_TIME',
    validThrough: job.closes_on || '',
  };
}

// ── data fetching ─────────────────────────────────────────────────────────────

async function getJobBySlug(slug: string) {
  const baseUrl = process.env.FRAPPE_URL || '';
  if (!baseUrl) return null;

  const fields = [
    'name', 'job_title', 'designation', 'description', 'department', 'location',
    'employment_type', 'creation', 'modified', 'route', 'image', 'skills',
    'salary', 'posted_on', 'lower_range', 'upper_range', 'salary_per', 'currency',
    'closes_on', 'company', 'planned_vacancies', 'vacancies', 'small_description',
    'publish_salary_range', 'required_skills',
  ];

  // Try exact match first, then like match (handles both clean slugs and full path routes)
  for (const filterVal of [slug, `%/${slug}`, `%${slug}`]) {
    const op = filterVal.startsWith('%') ? 'like' : '=';
    const filters: any[][] = [
      ['publish', 'is', 'set'],
      ['status', '=', 'Open'],
      ['route', op, filterVal],
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
    if (!res.ok) continue;
    const data = await res.json();
    if (Array.isArray(data?.data) && data.data.length) return data.data[0];
  }
  return null;
}

async function getJobRoutes() {
  const baseUrl = process.env.FRAPPE_URL || '';
  if (!baseUrl) return [] as string[];
  const filters: any[][] = [['publish', 'is', 'set'], ['status', '=', 'Open']];
  const url = `${baseUrl}/api/resource/Job Opening?filters=${encodeURIComponent(
    JSON.stringify(filters)
  )}&fields=${encodeURIComponent(JSON.stringify(['route']))}&limit_page_length=200`;
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
    .map((i: { route?: string }) => i.route?.split('/').pop())
    .filter((r: unknown): r is string => Boolean(r));
}

// ── metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: 'Job Not Found', description: 'The requested job opening could not be found.' };

  const job = await getJobBySlug(slug);
  if (!job) return { title: 'Job Not Found', description: 'The requested job opening could not be found.' };

  const stripHtml = (html: string) =>
    (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 160);

  const jobTitle = job.job_title || job.name;
  const siteUrl = 'https://finbyz.tech';
  const jobUrl = `${siteUrl}/careers/job-openings/${slug}`;
  const plainDesc = stripHtml(job.description || '') || stripHtml(job.small_description || '');
  const imageUrl = job.image
    ? job.image.startsWith('http') ? job.image : `${process.env.FRAPPE_URL || ''}${job.image}`
    : `${siteUrl}/files/FinbyzLogo.png`;

  return {
    title: `${jobTitle} - FinByz Tech Careers`,
    description: plainDesc,
    keywords: [jobTitle, job.department || 'Technology', job.location || 'India', job.employment_type || 'Full-time', 'FinByz Tech', 'careers', 'job opening', 'hiring'],
    authors: [{ name: 'FinByz Tech Pvt Ltd' }],
    creator: 'FinByz Tech Pvt Ltd',
    publisher: 'FinByz Tech Pvt Ltd',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: { type: 'website', locale: 'en_IN', url: jobUrl, title: `${jobTitle} - FinByz Tech Careers`, description: plainDesc, siteName: 'FinByz Tech', images: [{ url: imageUrl, width: 1200, height: 630, alt: `${jobTitle} at FinByz Tech` }] },
    twitter: { card: 'summary_large_image', title: `${jobTitle} - FinByz Tech Careers`, description: plainDesc, images: [imageUrl], creator: '@finbyztech', site: '@finbyztech' },
    alternates: { canonical: jobUrl },
    other: { 'application-name': 'FinByz Tech', 'theme-color': '#f97316' },
  };
}

// ── helpers ───────────────────────────────────────────────────────────────────

function cleanHtml(html: string) {
  const input = html || '';
  return input
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<ol(\s[^>]*)?>|<li data-list="ordered"[^>]*>/gi, (m) =>
      m.includes('<ol') ? '<ul$1>' : '<li>'
    )
    .replace(/<\/ol>/gi, '</ul>');
}

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function formatSalary(lower: number, upper: number, currency: string, per: string) {
  const fmt = (n: number) =>
    n >= 100000
      ? `${(n / 100000).toFixed(1).replace(/\.0$/, '')}L`
      : n >= 1000
        ? `${(n / 1000).toFixed(0)}K`
        : `${n}`;
  const cur = currency === 'INR' ? '₹' : currency;
  const period = per === 'Month' ? '/mo' : per === 'Year' ? '/yr' : `/${per}`;
  if (lower && upper && lower !== upper) return `${cur}${fmt(lower)} – ${cur}${fmt(upper)}${period}`;
  if (upper) return `${cur}${fmt(upper)}${period}`;
  if (lower) return `${cur}${fmt(lower)}${period}`;
  return null;
}

const COMPANY_STATS = [
  { icon: Star, label: 'Trusted ERPNext Partner' },
  { icon: Users, label: '10+ years experience' },
  { icon: Zap, label: '100+ implementations' },
];

// ── page ──────────────────────────────────────────────────────────────────────

export default async function JobOpeningPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const job = await getJobBySlug(slug);
  if (!job) notFound();

  const jobTitle = job.job_title || job.name;
  const applyUrl = `/careers/apply?job_title=${encodeURIComponent(jobTitle)}`;
  const imageUrl = job.image
    ? job.image.startsWith('http') ? job.image : `${process.env.FRAPPE_URL || ''}${job.image}`
    : null;

  const salaryText = job.publish_salary_range
    ? formatSalary(job.lower_range, job.upper_range, job.currency || 'INR', job.salary_per || 'Month')
    : null;

  const requiredSkills: { skill: string }[] = Array.isArray(job.required_skills)
    ? job.required_skills
    : [];

  const postedDate = formatDate(job.posted_on);
  const closesDate = formatDate(job.closes_on);

  const jobPosting = createJobPostingData(job);

  // Meta info rows for sidebar
  const sidebarMeta = [
    job.location && { icon: MapPin, label: job.location },
    job.employment_type && { icon: Briefcase, label: job.employment_type.replace(/_/g, ' ') },
    job.department && { icon: Building2, label: job.department.replace(/ - FT$/, '') },
    salaryText && { icon: BadgeIndianRupee, label: salaryText },
    closesDate && { icon: Clock, label: `Apply by ${closesDate}` },
    job.designation && { icon: GraduationCap, label: job.designation },
  ].filter(Boolean) as { icon: any; label: string }[];

  return (
    <div className='space-y-6'>
      <script
        id="jobposting-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />

      {/* ── Hero Strip ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 space-y-6">
        <div className="container-custom py-6 md:py-10 space-y-6">
          <Breadcrumbs currentTextColor="black" textColor="black" />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: title + meta — matches body lg:col-span-8 */}
            <div className={imageUrl ? 'lg:col-span-8' : 'lg:col-span-12'}>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A5276] leading-tight">
                {jobTitle}
              </h1>
              {job.designation && (
                <p className="mt-1 text-base text-gray-500 font-medium">{job.designation}</p>
              )}

              {/* Meta badges */}
              <div className="mt-1 flex flex-wrap gap-2">
                {job.location && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm text-[#1A5276] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                )}
                {job.employment_type && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm text-orange-700 font-medium">
                    <Briefcase className="w-3.5 h-3.5" />
                    {job.employment_type.replace(/_/g, ' ')}
                  </span>
                )}
                {job.department && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    {job.department.replace(/ - FT$/, '')}
                  </span>
                )}
                {salaryText && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-sm text-green-700 font-medium">
                    <BadgeIndianRupee className="w-3.5 h-3.5" />
                    {salaryText}
                  </span>
                )}
              </div>

              {/* Company badge */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {job.company || 'FinByz Tech'}
                </span>
              </div>
            </div>

            {/* Right: image — matches body lg:col-span-4 */}
            {imageUrl && (
              <div className="lg:col-span-4">
                <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white p-3">
                  <Image
                    src={imageUrl}
                    alt={jobTitle}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain rounded-lg max-h-[220px]"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────── */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Left: Job Content ─────────────────────────── */}
          <div className="lg:col-span-8 space-y-6">

            {/* Role Overview */}
            {job.small_description && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#1A5276] mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#1A5276] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </span>
                  Role Overview
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                  {job.small_description}
                </p>
              </div>
            )}

            {/* Description */}
            {job.description && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#1A5276] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </span>
                  Job Description
                </h2>
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: cleanHtml(job.description) }}
                />
              </div>
            )}

            {/* Skills */}
            {job.skills && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#1A5276] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </span>
                  Key Skills & Requirements
                </h2>
                <div
                  className="prose prose-sm max-w-none text-gray-700
                    [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#1A5276] [&_h2]:mt-5 [&_h2]:mb-3
                    [&_ul]:space-y-2 [&_ul]:ml-0 [&_li]:flex [&_li]:items-start [&_li]:gap-2
                    [&_.ql-ui]:hidden
                    [&_strong]:text-gray-900
                    [&_p]:mb-3 [&_p]:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: cleanHtml(job.skills) }}
                />
              </div>
            )}

            {/* Required Skills Tags */}
            {requiredSkills.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#1A5276] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </span>
                  Required Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((s, i) => (
                    <span
                      key={`${s.skill}-${i}`}
                      className="px-3 py-1.5 rounded-full bg-[#1A5276]/8 border border-[#1A5276]/20 text-[#1A5276] text-sm font-medium hover:bg-[#1A5276]/15 transition-colors"
                    >
                      {s.skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* About Finbyz */}
            <div className="bg-gradient-to-br from-[#1A5276] to-[#154360] rounded-2xl p-6 text-white">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </span>
                About FinByz Tech
              </h2>
              <p className="text-white/85 text-[15px] leading-relaxed">
                At FinByz Tech, we are passionate about revolutionizing businesses through the latest
                technology. We build scalable and innovative software solutions that streamline your
                business processes efficiently. We value collaboration and strive to create a positive
                working environment by celebrating innovation. We believe the team builds the company —
                there is a space for each one of us.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
                {COMPANY_STATS.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-orange-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Sticky Sidebar ─────────────────────── */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">

              {/* Apply Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Apply for this job</h3>

                {/* Sidebar meta */}
                <ul className="space-y-3 mb-5">
                  {sidebarMeta.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Icon className="w-4 h-4 text-[#1A5276] mt-0.5 shrink-0" />
                      <span>{label}</span>
                    </li>
                  ))}
                  {postedDate && (
                    <li className="flex items-start gap-2.5 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Posted {postedDate}</span>
                    </li>
                  )}
                </ul>

                <Link
                  href={applyUrl}
                  className="block w-full text-center px-5 py-3.5 rounded-xl bg-orange-500 text-white font-bold text-base hover:bg-orange-600 active:scale-95 transition-all shadow-md hover:shadow-lg"
                >
                  Apply Now
                </Link>

                <div className="mt-4 space-y-2 pt-4 border-t border-gray-100">
                  <a
                    href="mailto:career@finbyz.tech"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    career@finbyz.tech
                  </a>
                  <ShareButton title={jobTitle} />
                </div>

                {/* Company stats mini */}
                <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                  {COMPANY_STATS.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-gray-500">
                      <Icon className="w-3.5 h-3.5 text-orange-400" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* What you'll gain (if we have more info) */}
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
                <h3 className="text-base font-bold text-[#1A5276] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  Why Join FinByz?
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Real production-level projects',
                    'Mentorship from expert team',
                    'Growth & leadership opportunities',
                    'Collaborative, innovation-first culture',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dates */}
              {(postedDate || closesDate) && (
                <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-2">
                  {postedDate && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Posted</span>
                      <span className="font-medium text-gray-800">{postedDate}</span>
                    </div>
                  )}
                  {closesDate && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-red-400" /> Closes</span>
                      <span className="font-medium text-red-600">{closesDate}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Sticky CTA ─────────────────────────────────────── */}
      <div className="sticky bottom-0 z-50 bg-[#0f2337] border-t border-white/10 shadow-2xl">
        <div className="container-custom py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-6 text-sm text-white/70">
            {COMPANY_STATS.map(({ icon: Icon, label }) => (
              <span key={label} className="hidden sm:flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-orange-400" />
                {label}
              </span>
            ))}
            <span className="sm:hidden text-white font-semibold truncate max-w-[200px]">{jobTitle}</span>
          </div>
          <Link
            href={applyUrl}
            className="shrink-0 px-6 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-95 transition-all shadow-lg"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const routes = await getJobRoutes();
    return routes.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}
