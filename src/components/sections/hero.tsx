"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#1A5276]">Steer Your Vision with</span>{" "}
              <span className="text-[#FF8C00]">Precision Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ERP, AI, Software, and Top Tech Talent — Delivered with Clarity, Speed & Strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all hover:shadow-lg"
              >
                Book a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#1A5276] text-[#1A5276] bg-white hover:bg-[#1A5276] hover:text-white text-lg px-8 py-4 h-auto transition-all"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground animate-fade-in-delayed">
              ⭐ Rated 4.9 by clients across 3 continents
            </p>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative">
              <Image 
                src="/Home Hero Image ERP AI Automation.png"
                alt="ERP AI Automation Technology Illustration"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-slide-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#FF8C00] rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-[#1A5276]">200% Efficiency Boost</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#1A5276] to-[#2E86AB] text-white p-3 rounded-full shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

