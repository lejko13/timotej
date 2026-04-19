"use client";

import FooterMain from "./zobrazzenie";
import { urlFor } from '../lib/ sanityImage'
import { SanityImage } from "../lib/types/sanity";
import MalaCast from '../vlastnekomponenty/malacast/malacast'

type Jeden = {
  fotka: SanityImage;
 BtnPocitactext:string
  Hlavnytext:string
  Malytext:string

};

type Props = {
  data: Jeden[];
};

export default function Footer2({ data }: Props) {
  console.log(data);

  return (
    <>
      <div className="w-full h-[700px]   overflow-hidden bg-pink-300 relative p-4 md:pt-5 flex-col pb-22 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

        <img
          src={urlFor(data[0].fotka).url()}
          alt="obrazok"
          className="w-full absolute  inset-0 h-full object-cover"
        />
        <div 
      style={{
  background: "linear-gradient(to bottom, black 20%, transparent 50%, black 100%)",
}}
        className="w-full absolute h-full inset-0"></div>

        <div className="relative w-full h-full flex ">


            <div className="absolute text-white  w-full h-[30px] bg-amber-400 z-40">

                {/* <MalaCast
               SluzbyUvodna = {data}
                ></MalaCast> */}


            </div>
            

        </div>
        
      </div>

      <div className="w-full h-fit bg-amber-300">
        <FooterMain />
      </div>
    </>
  );
}