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
    quote: "Finbyz Tech helped us replace legacy ERP and launched AI workflows — all with clarity and speed.",
    author: "COO",
    company: "Manufacturing Group (Germany)",
    initials: "JD",
    rating: 5,
    palette: palette[0]
  },
  {
    quote: "The only tech partner we trust to scale with us. Their people are their superpower.",
    author: "CTO",
    company: "SaaS Startup (Canada)",
    initials: "MR",
    rating: 5,
    palette: palette[1]
  },
  {
    quote: "From concept to deployment in record time. Finbyz delivered exactly what we envisioned.",
    author: "CEO",
    company: "Fintech Platform (Australia)",
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
    <section id="testimonials" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            Trusted by Clients Globally
          </h2>
          <p className="text-xl text-[#1A5276]">
            See what our partners say about working with us
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="w-28 h-12 rounded-lg flex items-center justify-center text-sm font-bold shadow"
              style={{
                background: logo.bg,
                color: logo.color,
                border: `2px solid ${logo.color}`,
              }}
            >
              {logo.name}
            </div>
          ))}
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="bg-white h-full border border-gray-200 rounded-2xl shadow-md flex flex-col"
              style={{ borderTop: `4px solid ${testimonial.palette.color}` }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Quote Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow"
                  style={{ background: testimonial.palette.bg }}
                >
                  <Quote className="w-6 h-6" style={{ color: testimonial.palette.color }} />
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: "#FF8C00" }} fill="#FF8C00" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                {/* Author Info */}
                <div className="flex items-center mt-auto">
                  <Avatar className="mr-4" style={{ background: testimonial.palette.bg }}>
                    <AvatarFallback className="text-white font-bold" style={{ background: testimonial.palette.color }}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#1A5276]">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
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
            className="bg-[#1A5276] text-white text-lg px-8 py-4 h-auto rounded-full shadow hover:bg-[#154360] transition-all"
          >
            See How We Helped Businesses Like Yours →
          </Button>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-[#1A5276]">
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

