'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/dynamic-hero';

interface Job {
  id: number;
  title: string;
  description: string;
  department: string;
  responsibilities?: string[];
  skills?: string[];
  location?: string;
  employment_type?: string;
  job_title?: string;
  route: string;
  small_description: string;
}

// Helper function to clean HTML content
const cleanHtmlContent = (html: string): string => {
  if (!html) return 'No description available';

  // Remove any script tags and other potentially dangerous content
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '');
};

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs_opening, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [departments, setDepartments] = useState<string[]>(['All Departments']);

  // Fetch all departments once (independent of the selected filter)
  useEffect(() => {
    const fetchAllDepartments = async () => {
      try {
        const response = await fetch(`/api/jobs`);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        if (data.success) {
          const uniqueDepts = ['All Departments', ...new Set((data.data as Job[]).map((j) => j.department))];
          setDepartments(uniqueDepts as string[]);
        }
      } catch (err) {
        // Silently ignore; departments will remain default if this fails
      }
    };
    fetchAllDepartments();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (selectedCategory !== 'All Departments') params.append('department', selectedCategory);

        const response = await fetch(`/api/jobs?${params.toString()}`);
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
  }, [selectedCategory, searchQuery]);

  const filteredJobs = jobs_opening.filter((job) => {
    const matchesCategory = selectedCategory === 'All Departments' || job.department === selectedCategory;
    const matchesSearch =
      job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          headline="Jobs"
          highlightWords={["Jobs", "AI", "ERPNext"]}
          description="Unlock efficiency, automation, and growth with next-gen technology and expert talent. Join our mission to deliver cutting-edge solutions to businesses worldwide."
          heroImage={{
            alt: 'Jobs',
            src: '/images/Advance-Authorization-License-PageDesign.svg',
          }}
        />
        {/* Search and Filters Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for your dream job..."
                  className="w-full h-14 rounded-xl bg-white border border-gray-300 px-6 pr-12 text-base outline-none focus:ring-2 focus:ring-orange-400/40 placeholder:text-gray-500 text-gray-900 shadow"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>

            {/* Department Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedCategory(department)}
                  className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 border shadow-sm ${selectedCategory === department
                      ? 'bg-orange-500 text-white border-orange-500 shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-[#1A5276] hover:shadow-md'
                    }`}
                >
                  {department}
                </button>
              ))}
            </div>

            {/* Job Cards */}
            {loading ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                  <span className="text-gray-700 font-medium">Loading amazing opportunities...</span>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
                  <div className="text-red-600 text-lg font-medium mb-2">Oops! Something went wrong</div>
                  <div className="text-red-500">{error}</div>
                </div>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-md mx-auto">
                  <div className="text-gray-600 text-lg font-medium mb-2">No jobs found</div>
                  <div className="text-gray-500">Try adjusting your search criteria</div>
                </div>
              </div>
            ) : (
              <div className="grid gap-8">
                {filteredJobs.map((job, idx) => (
                  <div
                    key={(job as any).id ?? (job as any).name ?? `${job.title || job.job_title}-${idx}`}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#1A5276] hover:-translate-y-1"
                  >
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-2 group-hover:text-[#1A5276] transition-colors">
                          {job.job_title || job.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {job.location || 'Remote'}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm5-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {job.employment_type || 'Full-time'}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            {job.department}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Job Description */}
                    {/* Job Description */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          Job Description
                        </h3>
                        <div className="text-gray-700 leading-relaxed prose max-w-none">
                          {job.small_description || ''}
                        </div>
                      </div>   {/* ✅ THIS CLOSING TAG WAS MISSING */}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                        <Link
                          href={`/jobs/${job.route}`}
                          className="flex-1 px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 rounded-xl text-sm font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          View More
                        </Link>
                        <Link
                          href={`/job-application?job_title=${encodeURIComponent(job.job_title || job.title)}`}
                          className="flex-1 px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 rounded-xl text-sm font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          Apply Now
                        </Link>
                      </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
