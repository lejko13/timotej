"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


import ProjectsHeader from '../textt2/text2'

import { useApp } from "@/app/providers";
import MySwiper from '../swiperdruhy'
const projects = [
  {
    id: 1,
    title: "Oceanic Retreat",
    year: "2024",
    tags: ["Oceanic", "Natural Light"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 2,
    title: "Coastal Serenity",
    year: "2024",
    tags: ["Coastal Calm", "Nature"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 3,
    title: "Urban Tranquility",
    year: "2024",
    tags: ["Modern", "Minimal"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 4,
    title: "Serene Minimalism",
    year: "2025",
    tags: ["Warm Tones", "Elegant"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: 5,
    title: "Golden Hour Villa",
    year: "2025",
    tags: ["Luxury", "Sunlit"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
];

type Props = {
  pozadiedata:any[],
  projektyuvodna:any[]
}


export default function ExclusiveProjects({pozadiedata,projektyuvodna} : Props) {
  const [currentIndex, setCurrentIndex] = useState(1);


  const { swiperRef } = useApp();


  return (
    <div className="w-full  h-fit flex flex-col">
        <ProjectsHeader
        goNext = {() => console.log("okoko")}
        goPrev = {() => console.log("okoko")}
        projektyuvodna = {projektyuvodna}
        ></ProjectsHeader>

        <div className="w-full">
            <MySwiper
            pozadiedata = {pozadiedata}
            ></MySwiper>



        </div>


        <div className="mt-7 flex gap-3 flex md:hidden items-end justify-end  w-full ">
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


   
  );
}

