"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#E3F0FF] via-white to-[#FFF7E6] overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true" />
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 xl:px-20 pt-24 lg:pt-0">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8 xl:pr-12 py-8 lg:py-0 w-full max-w-2xl lg:max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight text-[#1A5276] drop-shadow-sm">
            Empower Your Business with <span className="text-[#FF8C00]">AI & ERP</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1A5276] mb-8 lg:mb-10 max-w-xl px-4 lg:px-0">
            Unlock efficiency, automation, and growth with next-gen technology and expert talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-6 w-full sm:w-auto px-4 lg:px-0">
            <Button 
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-base lg:text-lg px-6 lg:px-10 py-3 lg:py-4 h-auto font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Book a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full border-2 border-[#1A5276] text-[#1A5276] bg-white hover:bg-[#1A5276] hover:text-white text-base lg:text-lg px-6 lg:px-10 py-3 lg:py-4 h-auto font-semibold transition-all w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        {/* Right: Image - now blended with background */}
        <div className="flex-1 flex justify-center items-center w-full mt-4 lg:mt-0 relative max-w-full">
          {/* Soft blurred gradient glow behind image */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-0 w-full max-w-full">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-[#1A5276]/30 via-[#FF8C00]/20 to-[#FFA500]/10 blur-2xl lg:blur-3xl opacity-70 max-w-full" />
          </div>
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg aspect-[5/4] flex items-center justify-center px-4 lg:px-0">
            <Image
              src="/Home Hero Image ERP AI Automation.png"
              alt="ERP AI Automation Technology Illustration"
              fill
              style={{ objectFit: "contain" }}
              className="max-w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

