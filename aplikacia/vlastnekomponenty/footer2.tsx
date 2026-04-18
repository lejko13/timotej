"use client";

import FooterMain from "./zobrazzenie";
import { urlFor } from '../lib/ sanityImage'
import { SanityImage } from "../lib/types/sanity";
import MalaCast from '../vlastnekomponenty/malacast/malacast'

type Jeden = {
  fotka: SanityImage;
};

type Props = {
  data: Jeden[];
};

export default function Footer2({ data }: Props) {
  console.log(data);

  return (
    <>
      <div className="w-full h-[400px]  md:h-[550px] lg:h-[700px] bg-pink-300 relative">
        <div className="relative ">


            <div className="absolute text-white z-40">
{/* 
                <MalaCast></MalaCast> */}


            </div>
            <img
          src={urlFor(data[0].fotka).url()}
          alt="obrazok"
          className="w-full h-full object-cover"
        />
        <div 
      style={{
  background: "linear-gradient(to bottom, black 0%, transparent 50%, black 100%)",
}}
        className="w-full absolute h-full inset-0"></div>

        </div>
        
      </div>

      <div className="w-full h-fit bg-amber-300">
        <FooterMain />
      </div>
    </>
  );
}