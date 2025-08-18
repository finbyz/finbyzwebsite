"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQSection } from "@/components/ui/ComponentShowcase3";
import { 
  Users, 
  Lightbulb, 
  GraduationCap, 
  Heart, 
  Clock, 
  Target, 
  Star, 
  ArrowRight, 
  Quote,
  Calendar,
  Coffee,
  Gamepad2,
  Cake,
  Trophy,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AnimatedLifeAtFinbyz() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
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

  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      content: "We champion new ideas and challenge the status quo to solve real-world problems."
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      content: "Whether it's tech upskilling or mentorship, continuous learning is in our DNA."
    },
    {
      icon: Users,
      title: "Collaboration",
      content: "We work as one — sharing insights, owning outcomes, and celebrating wins together."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      content: "We believe sustainable growth requires a balance of passion, rest, and personal time."
    }
  ];

  const growthItems = [
    {
      image: "/images/growth1.jpg",
      alt: "Peer training session in progress",
      title: "Learning Never Stops",
      text: "Internal tech talks, mentorships, and hands-on experience ensure you grow with every project."
    },
    {
      image: "/images/growth2.jpg",
      alt: "Whiteboard brainstorming session",
      title: "Problem-Solving Culture",
      text: "We co-create solutions through design thinking, customer feedback, and team retros."
    },
    {
      image: "/images/growth3.jpg",
      alt: "Team member presenting ideas",
      title: "Idea Showcases",
      text: "We hold monthly idea fairs where anyone can pitch improvements or product concepts."
    }
  ];

  const funGallery = [
    { src: "/images/fun1.jpg", alt: "Team Finbyz celebrating Diwali" },
    { src: "/images/fun2.jpg", alt: "Casual Friday with board games and brainstorming" },
    { src: "/images/fun3.jpg", alt: "Mid-week coffee and quiz break" },
    { src: "/images/fun4.jpg", alt: "Birthday celebrations at work" },
    { src: "/images/fun5.jpg", alt: "Group photo after hackathon" }
  ];



  const relatedPages = [
    {
      title: "Our Team",
      description: "Meet the minds behind Finbyz Tech — where expertise meets ownership.",
      url: "/our-team"
    },
    {
      title: "About Finbyz",
      description: "Explore our journey, values, and how we help businesses scale with clarity.",
      url: "/about"
    },
    {
      title: "Steer Your Vision",
      description: "Learn how we drive transformation with the right blend of tech and strategy.",
      url: "/steer-your-vision"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {/* Subtle geometric pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]">
            <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-orange-400 rounded-full"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-blue-400 rounded-full"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-orange-400 rounded-full"></div>
          </div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800 opacity-40"></div>
        </div>
        
        <div className="relative z-10 w-full flex items-center justify-center pt-24 lg:pt-0">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="flex flex-col justify-center text-left">
                <Badge className="mb-6 bg-[#FF8C00]/20 text-[#FF8C00] border-[#FF8C00]/30 w-fit">
                  Culture & Values
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-sm animate-fade-in-up">
                  Life at <span className="text-[#FF8C00] animate-fade-in-up-delayed">Finbyz</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium animate-fade-in-up-delayed-2">
                  Innovate. Learn. Create. Celebrate.
                </p>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed animate-fade-in-up-delayed-3">
                  At Finbyz Tech, we're not just building software — we're building an environment where people grow, collaborate, and genuinely enjoy showing up. Our culture blends innovation with celebration and strategy with laughter — making every workday feel impactful and energizing.
                </p>
                <Button 
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all animate-fade-in-up-delayed-3 w-fit"
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              {/* Right Side - Hero Image */}
              <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden" 
                     style={{
                       backgroundImage: "url('/Life at Finbyz.png')"
                     }}>
                  {/* Optional overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Core Values */}
      <section 
        id="culture-values"
        ref={(el) => { sectionRefs.current['culture-values'] = el; }}
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['culture-values'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white border-0 animate-fade-in-up-delayed">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Our Culture & Core Values
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
              These aren't just words on a wall — they're the principles that guide every decision, every interaction, and every project we take on.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => {
              const gradients = [
                "from-blue-500 to-purple-600",
                "from-orange-500 to-red-500", 
                "from-green-500 to-teal-600",
                "from-purple-500 to-pink-600"
              ];
              return (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105 ${
                    isVisible['culture-values'] 
                      ? 'animate-fade-in-up opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1A5276]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">{value.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* A Place to Grow — Together */}
      <section 
        id="growth-section"
        ref={(el) => { sectionRefs.current['growth-section'] = el; }}
        className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['growth-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 animate-fade-in-up-delayed">
              Growth & Development
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              A Place to Grow — Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
              We foster a culture where every voice is heard, and every challenge is an opportunity to learn. From knowledge-sharing sessions and open brainstorming to peer learning and product demos, growth at Finbyz is a team sport.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthItems.map((item, index) => {
              const gradients = [
                "from-green-500 to-teal-600",
                "from-blue-500 to-purple-600",
                "from-orange-500 to-red-500"
              ];
              const bgGradients = [
                "from-green-100/50 to-teal-100/50",
                "from-blue-100/50 to-purple-100/50", 
                "from-orange-100/50 to-red-100/50"
              ];
              return (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105 ${
                    isVisible['growth-section'] 
                      ? 'animate-fade-in-up opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div className={`h-48 bg-gradient-to-br ${bgGradients[index]} flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-${gradients[index].split('-')[1]}-200/70 group-hover:to-${gradients[index].split('-')[3]}-200/70 transition-all duration-300`}>
                    <div className={`text-4xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${gradients[index]} bg-clip-text text-transparent animate-bounce`} style={{animationDelay: `${index * 0.5}s`}}>
                      {index === 0 && <GraduationCap className="w-16 h-16" />}
                      {index === 1 && <Target className="w-16 h-16" />}
                      {index === 2 && <Lightbulb className="w-16 h-16" />}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#1A5276]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fun at Finbyz */}
      <section 
        id="fun-section"
        ref={(el) => { sectionRefs.current['fun-section'] = el; }}
        className="py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.3s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['fun-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 animate-fade-in-up-delayed">
              Fun & Celebration
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Fun at Finbyz
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
              We believe that a happy, connected team is a productive one. From birthdays and festivals to impromptu games and team lunches, we make space for shared joy. Our scrolling gallery below captures moments that matter — the in-between smiles, the spontaneous laughter, the high-fives after shipping code.
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {funGallery.map((image, index) => {
              const gradients = [
                "from-yellow-400 to-orange-500",
                "from-pink-400 to-purple-500",
                "from-blue-400 to-cyan-500",
                "from-green-400 to-teal-500",
                "from-red-400 to-pink-500"
              ];
              return (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 ${
                    isVisible['fun-section'] 
                      ? 'animate-fade-in-up opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`aspect-square bg-gradient-to-br ${gradients[index]} flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-${gradients[index].split('-')[1]}-500 group-hover:to-${gradients[index].split('-')[3]}-600 transition-all duration-300`}>
                    <div className="text-white text-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse" style={{animationDelay: `${index * 0.3}s`}}>
                      {index === 0 && <Star className="w-8 h-8" />}
                      {index === 1 && <Gamepad2 className="w-8 h-8" />}
                      {index === 2 && <Coffee className="w-8 h-8" />}
                      {index === 3 && <Cake className="w-8 h-8" />}
                      {index === 4 && <Trophy className="w-8 h-8" />}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm text-center px-2 font-medium">{image.alt}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 italic">
              We add new photos regularly to reflect real team moments. Keep checking back!
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        id="quote-section"
        ref={(el) => { sectionRefs.current['quote-section'] = el; }}
        className="py-24 bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible['quote-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#FF8C00] to-[#FFA500] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Quote className="w-10 h-10 text-white" />
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-[#1A5276] mb-6 leading-relaxed animate-fade-in-up-delayed">
              "You'll join Finbyz for the work—but you'll stay for the people, the energy, and the fun."
            </blockquote>
            <p className="text-lg text-gray-600 font-medium animate-fade-in-up-delayed-2">— Team Reflection</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Related Pages */}
      <section className="py-24 bg-gray-50 relative overflow-hidden w-full">
        <div className="w-full relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
              Get to Know Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Ready to dive deeper into the Finbyz story? Explore these pages to learn more about our team, journey, and approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPages.map((page, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer">
                <CardHeader>
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
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden w-full">
        <div className="w-full relative">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Want to see what it's like to work, learn, and grow with a future-focused team?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              >
                Meet the Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-2 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-300 hover:text-gray-900 text-lg px-8 py-4 h-auto font-semibold transition-all"
              >
                Explore Our Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 