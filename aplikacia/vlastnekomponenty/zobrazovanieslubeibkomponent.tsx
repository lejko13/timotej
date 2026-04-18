"use client"
import React from "react";
import { urlFor } from '../lib/ sanityImage';
import {  SanityImage} from '../lib/types/sanity';
import { motion } from "framer-motion";



type Props = {
  nazov:string
  popis:string
  fotka:SanityImage
  index:number
}

export default function ServicesSection({nazov,popis,fotka,index} : Props) {
  return (
         <section className=" ">
      <div className=" mx-auto ">
    

        <div className="flex flex-col gap-8">
       
            <motion.div
              
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
           
            >
              <div
            
                className="group  flex flex-col  md:flex-row   items-start gap-5 md:gap-8"
              >
                <div className="cursor-pointer aspect-[16/12] md:w-[40vw]   w-full rounded-[var(--radiusInsie)] overflow-hidden bg-secondary">
                  <img
                    src={urlFor(fotka).url()}
                    // alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className=" h-full w-full flex flex-col gap-1   justify-between">

                  <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:opacity-80 transition-opacity">
                    {nazov}
                  </h3>

                  <div className="w-full flex flex-col gap-2">
                    <p className=" text-sm leading-relaxed max-w-md text-[var(--bielasvetla)]">
                    {popis}
                    </p>

                    <div className="flex  justify-between gap-6 bg-[var(--cierna)] md:pt-[1vw] ">
                      <span className="text-xs text-[var(--sivaSvetlsie)] border border-neutral-800 rounded-full px-3 py-1 font-light">
                       {nazov}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                        Zistit Viac
                        {/* <ArrowRight className="w-4 h-4" /> */}
                      </span>
                    </div>
                  </div>


                </div>


              </div>

              <div className="pt-3 pb-6 md:pt-7">
                  <div className="w-full h-[1px] bg-neutral-800"></div>
              </div>
         
            </motion.div>
 
        </div>
      </div>




    </section>
   
  );
}

