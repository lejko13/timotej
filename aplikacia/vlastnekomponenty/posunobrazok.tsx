"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { urlFor } from './../lib/ sanityImage';
import { SanityImage } from "../lib/types/sanity";

type Projekt = {
  Fotka: SanityImage;
};

type Props = {
  items: Projekt[];
};

export default function MySwiper({ items }: Props) {
  return (
    <Swiper
      className="w-full h-full"
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000} // 👈 plynulosť prechodu
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={urlFor(item.Fotka).url()}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}