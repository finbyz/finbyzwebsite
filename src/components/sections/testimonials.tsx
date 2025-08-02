"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

// Palette
const palette = [
  { color: "#1A5276", bg: "#EAF1F8" }, // Blue
  { color: "#FF8C00", bg: "#FFF4E5" }, // Orange
  { color: "#8E44AD", bg: "#F3EAF8" }, // Purple
  { color: "#16A085", bg: "#E6F7F4" }, // Teal
];

const testimonials = [
  {
    quote: "We've had an excellent experience working with this software service provider. Their innovative approach to solving complex technical challenges has significantly improved our product. The addition of a dedicated developer to our team ensured seamless communication and consistent progress. They consistently deliver high-quality solutions, demonstrating both technical expertise and a strong commitment to client success. We highly recommend them to anyone seeking reliable, forward-thinking development support.",
    author: "CEO & Founder",
    company: "Millennium Vitrified Tiles Pvt. Ltd. (India)",
    initials: "DP",
    rating: 5,
    palette: palette[0]
  },
  {
    quote: "We at Construction Pillars Company, have been lucky to work with Finbyz Tech. Pvt.LTD for the past few months.And, I personally think they go far and beyond in their delivery and commitments. As well as insuring that their clients are happy and well informed with there needs.I am looking forward to work every day with a such a professional team and a dedicated company.",
    author: "CTO",
    company: "Construction Pillars Company (Saudi Arabia)",
    initials: "ALI",
    rating: 5,
    palette: palette[1]
  },
  {
    quote: "Great and professional software solutions, with a team very focused on client satisfaction.",
    author: "Chief Executive Officer",
    company: "COOPERATIVA DE TRABAJO APICOLA PAMPERO (Argentina)",
    initials: "SL",
    rating: 5,
    palette: palette[2]
  }
];

const clientLogos = [
  { name: "TechCorp", color: "#1A5276", bg: "#EAF1F8" },
  { name: "InnovateLab", color: "#FF8C00", bg: "#FFF4E5" },
  { name: "DataFlow", color: "#8E44AD", bg: "#F3EAF8" },
  { name: "CloudSync", color: "#1A5276", bg: "#EAF1F8" },
  { name: "SmartTech", color: "#FF8C00", bg: "#FFF4E5" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#FAFBFC] w-full min-h-screen flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A5276] mb-4">
            Trusted by Clients Globally
          </h2>
          <p className="text-lg md:text-xl text-[#1A5276] max-w-3xl mx-auto">
            See what our partners say about working with us
          </p>
        </div>
        
        {/* Client Logos */}
        {/* <div className="flex justify-center items-center space-x-4 lg:space-x-6 mb-10">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="w-20 h-10 lg:w-28 lg:h-12 rounded-lg flex items-center justify-center text-xs lg:text-sm font-bold shadow-sm"
              style={{
                background: logo.bg,
                color: logo.color,
                border: `2px solid ${logo.color}`,
              }}
            >
              {logo.name}
            </div>
          ))}
        </div> */}
        
        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.author}-${testimonial.company}`}
              className="bg-white h-full border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl flex flex-col transition-all duration-300 hover:scale-105"
              style={{ borderTop: `4px solid ${testimonial.palette.color}` }}
            >
              <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                {/* Quote Icon */}
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-4 lg:mb-6 shadow-sm"
                  style={{ background: testimonial.palette.bg }}
                >
                  <Quote className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: testimonial.palette.color }} />
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: "#FF8C00" }} fill="#FF8C00" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-base lg:text-lg text-gray-700 mb-4 lg:mb-6 italic leading-relaxed flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                {/* Author Info */}
                <div className="flex items-center mt-auto">
                  <Avatar className="mr-3 lg:mr-4" style={{ background: testimonial.palette.bg }}>
                    <AvatarFallback className="text-white font-bold text-sm lg:text-base" style={{ background: testimonial.palette.color }}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#1A5276] text-sm lg:text-base">{testimonial.author}</p>
                    <p className="text-gray-500 text-xs lg:text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-delayed">
          <Button 
            size="lg"
            className="bg-[#1A5276] text-white text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto rounded-full shadow-lg hover:shadow-xl hover:bg-[#154360] transition-all duration-300"
          >
            See How We Helped Businesses Like Yours →
          </Button>
          
          {/* Trust Indicators */}
          <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs lg:text-sm text-[#1A5276]">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#1A5276] rounded-full"></div>
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#8E44AD] rounded-full"></div>
              <span>15+ Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

