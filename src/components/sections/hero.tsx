"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
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
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 xl:px-20 pt-24 lg:pt-0">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8 xl:pr-12 py-8 lg:py-0 w-full max-w-2xl lg:max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight text-white drop-shadow-sm">
            Empower Your Business with <span className="text-[#FF8C00]">AI & ERP</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-10 max-w-xl px-4 lg:px-0">
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
              className="rounded-full border-2 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-300 hover:text-gray-900 text-base lg:text-lg px-6 lg:px-10 py-3 lg:py-4 h-auto font-semibold transition-all w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        {/* Right: Image - now blended with background */}
        <div className="flex-1 flex justify-center items-center w-full mt-4 lg:mt-0 relative max-w-full">
          {/* Soft blurred gradient glow behind image */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-0 w-full max-w-full">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/15 to-orange-400/10 blur-2xl lg:blur-3xl opacity-80 max-w-full" />
          </div>
          <div className="relative z-10 w-full max-w-[350px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl aspect-[5/4] flex items-center justify-center px-4 lg:px-0">
            <Image
              src="/Hero Brain 2.png"
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

