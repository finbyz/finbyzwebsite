"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyFAQSection } from "@/lib/lazy-components";
import { 
  Users, 
  Lightbulb, 
  Target, 
  Star, 
  ArrowRight, 
  Quote,
  Rocket,
  Heart,
  Zap,
  Mail,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCareerPage() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const whyJoinItems = [
    {
      icon: Lightbulb,
      title: "Freedom of Ideas",
      description: "Have a breakthrough? Let's build it. Innovation isn't just welcome — it's expected."
    },
    {
      icon: Target,
      title: "Ownership Culture",
      description: "We trust you to own your role and create value. Autonomy with accountability is our default."
    },
    {
      icon: Rocket,
      title: "Growth That Sticks",
      description: "We invest in your learning — through projects, mentorship, and real-world challenges."
    },
    {
      icon: Heart,
      title: "People First",
      description: "From cross-functional teamwork to personal support, we're in this together."
    }
  ];

  const workCultureItems = [
    {
      label: "Individual Talent",
      content: "Your unique strengths and interests are your superpowers. We help you sharpen and apply them to meaningful work."
    },
    {
      label: "Team Spirit",
      content: "Collaboration is core — you'll work across functions and roles, always supported by teammates who care."
    },
    {
      label: "Work with Purpose",
      content: "We partner with real businesses solving real problems. Your work makes an impact — not just in code, but in results."
    }
  ];

  const relatedPages = [
    {
      title: "Life at Finbyz",
      description: "See what makes our culture vibrant and what a typical day looks like at Finbyz.",
      url: "/life-at-finbyz"
    },
    {
      title: "Our Team",
      description: "Meet the minds behind our work. Developers, consultants, thinkers, doers.",
      url: "/our-team"
    },
    {
      title: "About Us",
      description: "Discover our journey, vision, and what drives us forward.",
      url: "/about"
    }
  ];

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <>
      {/* Hero Section */}
     
      {/* Why Join Finbyz Tech */}
      <section 
        id="why-join"
        ref={(el) => { sectionRefs.current['why-join'] = el; }}
        className="py-24  relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container-custom">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['why-join'] ? 'animate-fade-in-up' : ''}`}>
            {/* <Badge className="mb-6 bg-gradient-to-r  from-orange-400 to-orange-500 border-0 animate-fade-in-up-delayed">
              Why Choose Us
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Why Join Finbyz Tech?
            </h2>
            <div className="container-custom">
              <p className="text-xl md:text-2xl text-gray-600  leading-relaxed animate-fade-in-up-delayed-3">
              We're not just another tech company. We're a place where your ideas matter, your growth is prioritized, and your impact is real.
            </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinItems.map((item, index) => {
              const gradients = [
                "from-blue-500 to-purple-600",
                "from-orange-500 to-red-500", 
                "from-green-500 to-teal-600",
                "from-purple-500 to-pink-600"
              ];
              return (
                
                  
                <Card 
                    key={index} 
                    className={`w-79 h-96  border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105 flex flex-col ${
                      isVisible['why-join'] 
                        ? 'animate-fade-in-up opacity-100 translate-y-0' 
                        : ''
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardHeader className="text-center pb-4 flex-shrink-0">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#1A5276]">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow flex items-center justify-center">
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        id="quote-section"
        ref={(el) => { sectionRefs.current['quote-section'] = el; }}
        className="py-24  relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32  rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible['quote-section'] ? 'animate-fade-in-up' : ''}`}>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Quote className="w-10 h-10 text-black" />
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-[#1A5276] mb-6 leading-relaxed animate-fade-in-up-delayed">
              "You bring the vision; we'll help you build the roadmap — not just for tech, but for your career."
            </blockquote>
            <p className="text-lg text-gray-600 font-medium animate-fade-in-up-delayed-2">— Team Finbyz</p>
          </div>
        </div>
      </section>

      {/* Who Thrives Here */}
      <section 
        id="who-thrives"
        ref={(el) => { sectionRefs.current['who-thrives'] = el; }}
        className="py-24  relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container-custom">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['who-thrives'] ? 'animate-fade-in-up' : ''}`}>
            {/* <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white border-0 animate-fade-in-up-delayed">
              Perfect Match
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Who Thrives Here?
            </h2>
            <div className="container-custom">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-up-delayed-3">
                We're drawn to self-starters. People who are curious, driven, and willing to stretch beyond job descriptions. If you're someone who asks 'why not?', prefers clarity over chaos, and enjoys solving real problems — we want you on the team.
              </p>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Recruitment experience is optional. What we value more is intent: the attitude to learn, the motivation to deliver, and the drive to grow with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture Accordion */}
      <section 
        id="work-culture"
        ref={(el) => { sectionRefs.current['work-culture'] = el; }}
        className="py-24 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full blur-3xl animate-float" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full blur-3xl animate-float" style={{animationDelay: '1.3s'}}></div>
        </div>
        
        <div className="container-custom">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['work-culture'] ? 'animate-fade-in-up' : ''}`}>
            {/* <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white border-0 animate-fade-in-up-delayed">
              Our Culture
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Our Work Culture
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
              Discover what makes working at Finbyz Tech unique and rewarding.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {workCultureItems.map((item, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden ${
                  isVisible['work-culture'] 
                    ? 'animate-fade-in-up opacity-100 translate-y-0' 
                    : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <button
                  onClick={() => toggleAccordion(item.label)}
                  className="w-full p-6 text-left hover:bg-gray-50/50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#1A5276]">{item.label}</h3>
                    {openAccordion === item.label ? (
                      <ChevronUp className="w-6 h-6 text-[#FF8C00] transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#FF8C00] transition-transform duration-300" />
                    )}
                  </div>
                </button>
                {openAccordion === item.label && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Come Flaunt Your Skills */}
      <section 
        id="apply-section"
        ref={(el) => { sectionRefs.current['apply-section'] = el; }}
        className="py-24  relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32  rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24  rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['apply-section'] ? 'animate-fade-in-up' : ''}`}>
            {/* <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white border-0 animate-fade-in-up-delayed">
              Apply Now
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Come Flaunt Your Skills
            </h2>
            <div className="container-custom">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-up-delayed-3">
                Ready to steer your career with us?
              </p>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Email your resume to{' '}
                 {/* className="text-[#FF8C00] hover:text-[#FFA500] font-medium transition-colors" */}
                <a href="mailto:career@finbyz.tech">
                  career@finbyz.tech
                </a>

                . Bonus points for portfolios, GitHub links, or anything that showcases what you've built or solved. Don't forget to share your LinkedIn/Instagram — we love seeing the human behind the skills.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/job-application">
              <Button 
                size="lg"
                className="rounded-full  text-white bg-[#f97316] text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:bg-orange-500 hover:shadow-xl transition-all"
              >
                {/* <Mail className="mr-2 w-5 h-5" /> */}
                Send Your Resume
              </Button>
            </Link>
                <Link href="/jobs">
              <Button 
                size="lg"
                className="rounded-full  text-white bg-[#1A5276] text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:bg-[#1A5276] hover:shadow-xl transition-all"
              >
                {/* <Mail className="mr-2 w-5 h-5" /> */}
                See Open Roles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Lazy loaded for performance */}
      <LazyFAQSection />

      {/* Related Pages */}
      <section className="py-24  relative overflow-hidden w-full">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-40 h-40  rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom">
          <div className="text-center mb-20">
            {/* <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-green-600 text-white border-0">
              Explore More
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
              Explore More
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Ready to dive deeper into the Finbyz story? Explore these pages to learn more about our team, journey, and approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPages.map((page, index) => {
              const gradients = [
                "from-teal-500 to-green-600",
                "from-blue-500 to-purple-600",
                "from-orange-500 to-red-600"
              ];
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group cursor-pointer hover:scale-105">
                  <CardHeader>
                    <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center`}>
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1A5276] group-hover:text-[#FF8C00] transition-colors duration-300">
                      {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{page.description}</p>
                    <Link href={page.url} className="inline-flex items-center text-[#FF8C00] hover:text-[#FFA500] font-medium group-hover:translate-x-1 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden w-full">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's build something meaningful together.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/job-application">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Your Resume
                </Button>
              </Link>
              <Link href="/jobs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-2 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-300 hover:text-gray-900 text-lg px-8 py-4 h-auto font-semibold transition-all"
                >
                  <Briefcase className="mr-2 w-5 h-5" />
                  See Open Roles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 