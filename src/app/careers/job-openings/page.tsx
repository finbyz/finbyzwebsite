'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/sections/dynamic-hero';
import {
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Search,
  ChevronRight,
  BadgeIndianRupee,
  Users,
} from 'lucide-react';
import { Job } from '@/lib/jobs';

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

function getJobSlug(route: string | undefined, name: string | undefined) {
  if (!route) return name || '';
  return route.split('/').pop() || name || '';
}

type JobExt = Job & {
  closes_on?: string;
  employment_type?: string;
  location?: string;
  publish_salary_range?: number;
};

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Departments');
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs_opening, setJobs] = useState<JobExt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [departments, setDepartments] = useState<string[]>(['All Departments']);
  const [empTypes, setEmpTypes] = useState<string[]>(['All Types']);

  // Fetch all jobs once to populate filter options
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('/web-api/jobs');
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        if (data.success) {
          const jobs = data.data as JobExt[];
          setDepartments(['All Departments', ...Array.from(new Set(jobs.map((j) => j.department).filter(Boolean)))]);
          setEmpTypes(['All Types', ...Array.from(new Set(jobs.map((j) => j.employment_type).filter(Boolean)))]);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {}
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (selectedCategory !== 'All Departments') params.append('department', selectedCategory);
        if (selectedType !== 'All Types') params.append('employment_type', selectedType);

        const response = await fetch(`/web-api/jobs?${params.toString()}`);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        if (data.success) {
          setJobs(data.data);
        } else {
          throw new Error(data.error || 'Failed to fetch jobs');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [selectedCategory, selectedType, searchQuery]);

  const filteredJobs = jobs_opening.filter((job) => {
    const matchesCat = selectedCategory === 'All Departments' || job.department === selectedCategory;
    const matchesType = selectedType === 'All Types' || job.employment_type === selectedType;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      (job.job_title || job.title || '').toLowerCase().includes(q) ||
      (job.small_description || '').toLowerCase().includes(q) ||
      (job.department || '').toLowerCase().includes(q);
    return matchesCat && matchesType && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <HeroSection
          headline="Job Openings"
          highlightWords={['Job', 'Openings']}
          description="Join FinByz Tech and help shape the future of ERP and enterprise software. Explore open roles across engineering, consulting, and business."
          heroImage={{
            alt: 'Job Openings at FinByz Tech',
            src: '/images/Advance-Authorization-License-PageDesign.png',
          }}
        />

        {/* Search + Filters */}
        <section className="container-custom pt-8 pb-4">
          <div className="max-w-6xl mx-auto">

            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, department…"
                className="w-full h-13 rounded-xl bg-white border border-gray-200 px-5 pl-12 text-base outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 placeholder:text-gray-400 text-gray-900 shadow-sm transition"
              />
            </div>

            {/* Department filters */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">Department</p>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedCategory(dept)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border ${
                      selectedCategory === dept
                        ? 'bg-[#1A5276] text-white border-[#1A5276] shadow'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#1A5276] hover:text-[#1A5276]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Employment type filters */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">Type</p>
              <div className="flex flex-wrap gap-2">
                {empTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border ${
                      selectedType === type
                        ? 'bg-orange-500 text-white border-orange-500 shadow'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            {!loading && !error && (
              <p className="text-sm text-gray-500 mb-4">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'opening' : 'openings'} found
              </p>
            )}

            {/* Cards */}
            {loading ? (
              <div className="py-16 flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#1A5276]" />
                <span className="text-gray-600 font-medium">Loading openings…</span>
              </div>
            ) : error ? (
              <div className="py-16 text-center">
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
                  <p className="text-red-600 font-medium">Something went wrong</p>
                  <p className="text-red-400 text-sm mt-1">{error}</p>
                </div>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="py-16 text-center">
                <div className="bg-white border border-gray-200 rounded-xl p-10 max-w-md mx-auto shadow-sm">
                  <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-700 font-semibold text-lg">No openings found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your filters or search term.</p>
                </div>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-1">
                {filteredJobs.map((job, idx) => {
                  const slug = getJobSlug(job.route, (job as any).name);
                  const salaryText =
                    job.publish_salary_range
                      ? formatSalary(job.lower_range, job.upper_range, job.currency || 'INR', job.salary_per || 'Month')
                      : null;
                  const closesDate = formatDate((job as any).closes_on);
                  const postedDate = formatDate(job.posted_on);

                  return (
                    <div
                      key={(job as any).name ?? `${job.job_title}-${idx}`}
                      className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#1A5276]/30 transition-all duration-300 overflow-hidden"
                    >
                      {/* Top accent bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#1A5276] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          {/* Left */}
                          <div className="flex-1 min-w-0">
                            {/* Title */}
                            <h2 className="text-xl font-bold text-[#1A5276] group-hover:text-[#1A5276] leading-tight mb-1 truncate-title">
                              {job.job_title || job.title}
                            </h2>

                            {/* Meta row */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-sm text-gray-500">
                              {job.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                  {job.location}
                                </span>
                              )}
                              {job.employment_type && (
                                <span className="flex items-center gap-1">
                                  <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                                  {job.employment_type.replace(/_/g, ' ')}
                                </span>
                              )}
                              {job.department && (
                                <span className="flex items-center gap-1">
                                  <Building2 className="w-3.5 h-3.5 text-gray-400" />
                                  {job.department.replace(/ - FT$/, '')}
                                </span>
                              )}
                              {salaryText && (
                                <span className="flex items-center gap-1 text-green-600 font-medium">
                                  <BadgeIndianRupee className="w-3.5 h-3.5" />
                                  {salaryText}
                                </span>
                              )}
                            </div>

                            {/* Tags row */}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {job.employment_type && (
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                                  job.employment_type === 'INTERN'
                                    ? 'bg-purple-50 border-purple-200 text-purple-700'
                                    : job.employment_type === 'Full-time'
                                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                                    : 'bg-orange-50 border-orange-200 text-orange-700'
                                }`}>
                                  {job.employment_type.replace(/_/g, ' ')}
                                </span>
                              )}
                              {job.department && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1A5276]/8 border border-[#1A5276]/15 text-[#1A5276]">
                                  {job.department.replace(/ - FT$/, '')}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            {job.small_description && (
                              <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-2">
                                {job.small_description}
                              </p>
                            )}
                          </div>

                          {/* Right: Dates + CTA */}
                          <div className="sm:shrink-0 sm:text-right flex sm:flex-col items-center sm:items-end justify-between gap-3">
                            <div className="space-y-1 text-xs text-gray-400">
                              {postedDate && (
                                <div className="flex items-center gap-1 sm:justify-end">
                                  <Calendar className="w-3 h-3" />
                                  <span>Posted {postedDate}</span>
                                </div>
                              )}
                              {closesDate && (
                                <div className="flex items-center gap-1 sm:justify-end text-red-400">
                                  <Clock className="w-3 h-3" />
                                  <span>Closes {closesDate}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-5 flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                          <Link
                            href={`/careers/job-openings/${slug}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#1A5276] text-[#1A5276] hover:bg-[#1A5276] hover:text-white text-sm font-semibold transition-all duration-200 group/btn"
                          >
                            View Details
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Link>
                          <Link
                            href={`/careers/apply?job_title=${encodeURIComponent(job.job_title || job.title || '')}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
