"use client";

import { TrendingUp, Users, DollarSign, Clock, Target, Award, Star, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/client-success-stories.css";

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "SaaS Platform",
    logo: "TC",
    challenge: "Scaling their platform to handle 10x user growth while maintaining performance",
    solution: "Implemented microservices architecture with auto-scaling and caching strategies",
    results: {
      performance: "300%",
      users: "50K+",
      revenue: "200%",
      uptime: "99.9%"
    },
    duration: "6 months",
    rating: 5,
    testimonial: "The team delivered exceptional results, exceeding our expectations in every aspect.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    company: "Global Retail Inc",
    industry: "E-commerce",
    logo: "GR",
    challenge: "Modernizing legacy systems and improving customer experience",
    solution: "Built a modern e-commerce platform with AI-powered recommendations",
    results: {
      performance: "250%",
      users: "100K+",
      revenue: "180%",
      uptime: "99.8%"
    },
    duration: "8 months",
    rating: 5,
    testimonial: "Transformative results that revolutionized our online business operations.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    company: "HealthTech Pro",
    industry: "Healthcare",
    logo: "HP",
    challenge: "Building a secure, HIPAA-compliant patient management system",
    solution: "Developed a comprehensive healthcare platform with advanced security features",
    results: {
      performance: "400%",
      users: "25K+",
      revenue: "150%",
      uptime: "99.95%"
    },
    duration: "10 months",
    rating: 5,
    testimonial: "Outstanding security implementation and seamless user experience.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    company: "FinTech Innovations",
    industry: "Financial Services",
    logo: "FI",
    challenge: "Creating a real-time trading platform with millisecond latency",
    solution: "Built a high-frequency trading system with advanced algorithms",
    results: {
      performance: "500%",
      users: "75K+",
      revenue: "300%",
      uptime: "99.99%"
    },
    duration: "12 months",
    rating: 5,
    testimonial: "Revolutionary performance improvements that gave us a competitive edge.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    company: "EduTech Solutions",
    industry: "Education",
    logo: "ES",
    challenge: "Scaling online learning platform for millions of students",
    solution: "Developed a scalable LMS with AI-powered content recommendations",
    results: {
      performance: "200%",
      users: "500K+",
      revenue: "120%",
      uptime: "99.9%"
    },
    duration: "9 months",
    rating: 5,
    testimonial: "Exceptional scalability and user experience for our global student base.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    company: "Manufacturing Plus",
    industry: "Manufacturing",
    logo: "MP",
    challenge: "Implementing IoT and automation for smart manufacturing",
    solution: "Built an IoT platform with real-time monitoring and predictive analytics",
    results: {
      performance: "350%",
      users: "10K+",
      revenue: "250%",
      uptime: "99.8%"
    },
    duration: "7 months",
    rating: 5,
    testimonial: "Game-changing automation that transformed our manufacturing processes.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  }
];

export default function ClientSuccessStories({ data = {} }: { data?: Record<string, any> }) {
  const [sectionRef, inView] = useInView(0.3);

  // Use provided data or fallback to defaults
  const {
    title = "Client Success Stories",
    subtitle = "Real results from real clients. Discover how we've transformed businesses across industries",
    stories = successStories
  } = data;

  return (
    <section ref={sectionRef} className="py-20 bg-white w-full relative">
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-finbyz-blue">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story: any, index: number) => (
            <div
              key={story.company || story.client || index}
              className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: inView ? `${index * 0.1}s` : '0s',
                animationDelay: inView ? `${index * 0.1}s` : '0s'
              }}
            >
              <div className="bg-white rounded-2xl border border-finbyz-blue/15 p-6 lg:p-8 flex flex-col h-full transition-all duration-500 hover:shadow-xl group">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl font-bold text-finbyz-blue text-lg"
                      style={{ background: (story as any).iconBg || "#EAF1F8" }}
                    >
                      {story.logo || story.client?.charAt(0) || "C"}
                    </div>
                    <div>
                      <h3 className="font-bold text-finbyz-blue">{story.company || story.client}</h3>
                      <p className="text-sm text-gray-500">{story.industry || story.summary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(story.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-finbyz-orange text-finbyz-orange" />
                    ))}
                  </div>
                </div>
                
                {/* Challenge & Solution */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{story.challenge || "Business transformation and optimization"}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{story.solution || story.summary || "Custom solution implementation"}</p>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-gray-800">Results:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-finbyz-blue-light rounded-lg">
                      <div className="text-lg font-bold text-finbyz-blue">{story.results?.performance || story.result || "60%"}</div>
                      <div className="text-xs text-gray-600">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-finbyz-blue-light rounded-lg">
                      <div className="text-lg font-bold text-finbyz-blue">{story.results?.users || "10K+"}</div>
                      <div className="text-xs text-gray-600">Users</div>
                    </div>
                    <div className="text-center p-3 bg-finbyz-blue-light rounded-lg">
                      <div className="text-lg font-bold text-finbyz-blue">{story.results?.revenue || "150%"}</div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center p-3 bg-finbyz-blue-light rounded-lg">
                      <div className="text-lg font-bold text-finbyz-blue">{story.results?.uptime || "99.9%"}</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="mt-6 p-4 bg-finbyz-blue-light rounded-lg">
                  <p className="text-sm text-gray-700 italic">"{story.testimonial || `Amazing results with ${story.result || 'significant improvements'}!`}"</p>
                </div>
                
                {/* Duration */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Duration: {story.duration || "6 months"}</span>
                  <ArrowRight className="w-4 h-4 text-finbyz-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Success Metrics */}
        <div className={`mt-16 grid md:grid-cols-4 gap-8 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-finbyz-blue mb-2">500+</div>
            <div className="text-gray-700">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-finbyz-blue mb-2">98%</div>
            <div className="text-gray-700">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-finbyz-blue mb-2">250%</div>
            <div className="text-gray-700">Average Performance Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-finbyz-blue mb-2">99.9%</div>
            <div className="text-gray-700">Average Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
