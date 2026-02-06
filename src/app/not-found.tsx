
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, FileText, Users, Building2, Wrench } from "lucide-react";
import Link from "next/link";

export default function NotFound() {

  return (
    <>

      <div className="min-h-screen">
        <main className="pt-4">
          {/* 404 Hero Section */}
          <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                {/* 404 Number */}
                <div className="mb-8">
                  <h1 className="text-8xl lg:text-9xl font-bold text-slate-200 select-none">
                    404
                  </h1>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    Page Not Found
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track to finding what you need.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full px-8 py-4">
                    <Link href="/" className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Go Home
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-black text-black hover:bg-gray-100 hover:border-gray-700 transition-all duration-200 rounded-full px-8 py-4 bg-white">
                    <Link href="/contact" className="flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5" />
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Helpful Links Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                    Looking for Something Specific?
                  </h3>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Here are some popular pages that might help you find what you're looking for.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Services */}
                  <div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Wrench className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">Our Services</h4>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Explore our comprehensive range of software development, web design, and technology solutions.
                    </p>
                    <Link href="/erpnext/services/erpnext-service-provider" className="text-orange-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                      View Services
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>

                  {/* About Us */}
                  <div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Building2 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">About Finbyz</h4>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Learn about our mission, values, and the team behind Finbyz Tech's innovative solutions.
                    </p>
                    <Link href="/about-us" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1">
                      About Us
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>

                  {/* Contact */}
                  <div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">Get in Touch</h4>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Ready to start your project? Contact our team for a consultation and quote.
                    </p>
                    <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1">
                      Contact Us
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>

                  {/* Blog/Resources */}
                  <div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">Resources</h4>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Browse our latest articles, case studies, and insights on technology and business.
                    </p>
                    <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1">
                      View Resources
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>

                  {/* Careers */}
                  <div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">Careers</h4>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Join our team of talented professionals and be part of innovative projects.
                    </p>
                    <Link href="/careers" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                      View Careers
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>

                  {/* Search */}
                  <div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Search className="w-6 h-6 text-slate-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">Search Site</h4>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Can't find what you're looking for? Try searching our entire website.
                    </p>
                    <Button variant="ghost" className="text-slate-600 hover:text-slate-700 font-medium inline-flex items-center gap-1 p-0 h-auto">
                      Search
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </>

  );
}
