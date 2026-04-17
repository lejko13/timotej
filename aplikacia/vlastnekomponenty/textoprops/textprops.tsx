"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useApp } from "@/app/providers";

export default function ProjectsHeader() {
  const { swiperRef } = useApp();

  return (
    <div className="grid grid-cols-1 bg-amber-600 md:grid-cols-3 gap-2 md:gap-6 mb-12 md:mb-20 items-start">
      
      {/* Left */}
      <div className="pt-1 flex justify-center md:justify-start">
        <div className="flex items-center gap-2.5 w-fit">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-[pulse_2s_ease-in-out_infinite]" />
          
          <span className="text-neutral-300 text-sm tracking-widest uppercase font-light">
            Exclusive Projects
          </span>
        </div>
      </div>

      {/* Center */}
      <div className="w-full flex justify-center">
        <h2 className="text-white text-3xl md:text-[2.75rem] leading-tight font-light tracking-tight text-center">
          Boldly Rooted in Vision.
        </h2>
      </div>

      {/* Right */}
      <div className="flex flex-col items-start md:items-end gap-5">
        
        <p className="text-neutral-500 w-fit mx-auto md:mx-0 text-sm md:text-base leading-relaxed max-w-xs text-center md:text-left">
          A visual library of interiors brought to life from blueprint to beauty.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}