"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { urlFor } from '../lib/ sanityImage'
import { useApp } from "@/app/providers";




import ProjectCardCenter from '../vlastnekomponenty/karta2lenkarta/karta2lenkarta'
type Props = {
  pozadiedata: any[];
};

export default function MySwiper({ pozadiedata }: Props) {

console.log(pozadiedata[0].slug);
console.log(pozadiedata[0].slug.current);


const { swiperRef } = useApp();


  const celeCislo = Math.floor(pozadiedata.length / 2);
    console.log(celeCislo);
    
    
  return (
   <Swiper
   
 modules={[Autoplay, Mousewheel]}
mousewheel={{
  forceToAxis: true,
  sensitivity: 1,
}}

  slidesPerView={3}
  spaceBetween={0}
 


  grabCursor={true}
  allowTouchMove={true}
  simulateTouch={true}

  

    breakpoints={{
    0: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 3,
    },
   
  }}
centeredSlides={true}


  initialSlide={celeCislo}
  watchSlidesProgress={true}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>
  {pozadiedata.map((item, i) => (
    <SwiperSlide key={i} className=" flex justify-center">
      {({ isActive }) => (
        <div
          className={`w-full   overflow-hidden transition-all duration-500 ${
            isActive
              ? "scale-100 opacity-100 z-10"
              : "scale-85 opacity-60"
          }`}
        >
          
         <ProjectCardCenter
            project={{
                image: urlFor(item.Fotka).url(),
                title: item.NazovProjektu,
                year: item.Rok,
                tags:item.Typ,
                    slug: item.slug.current
            }}
          
            ></ProjectCardCenter>
        
        
           

          {/* <img
            src={urlFor(item.Fotka).url()}
            className="w-full h-[300px] object-cover"
          /> */}
        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>
  );
}