"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useApp } from "@/app/providers";
type Props = {
  goNext: () => void;
  goPrev: () => void;
};



export default function ProjectsHeader({ goNext, goPrev }: Props) {


  const { swiperRef } = useApp();

  return (
    <div className=" gap-2 pt-1   grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-3 md:mb-20 items-start">

        <div className="pt-1  flex justify-center md:justify-start">
              <div className="flex items-center gap-2.5  w-fit ">
<span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-[pulse_2s_ease-in-out_infinite] inline-block" />


        <span className="text-neutral-300 text-sm tracking-widest uppercase font-light">
          Exclusive Projects
        </span>
      </div>

        </div>
    
        <div className="w-full h-fit  flex justify-center">
            <h2 className="text-white  w-fit  text-3xl md:text-[2.75rem] leading-tight font-light tracking-tight">
                Boldly Rooted in Vision.
            
            </h2>

        </div>
      

      <div className="flex flex-col items-start md:items-end gap-5 ">
<p className="text-neutral-500 hidden lg:block w-fit mx-auto md:mx-0 text-sm md:text-base leading-relaxed max-w-xs text-center md:text-left">
  A visual library of interiors brought to life from blueprint to beauty.
</p>
     
       

        <div className="flex gap-3 hidden md:flex items-end justify-end  w-full   ">
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