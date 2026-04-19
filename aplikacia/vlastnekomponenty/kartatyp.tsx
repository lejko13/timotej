import { log } from "node:console"
import { useApp } from "@/app/providers";

import {urlFor} from '../lib/ sanityImage'
import { SanityImage } from '../lib/types/sanity'


import { motion, AnimatePresence } from "framer-motion";


type Celok = {
    NazovOdboru:string
  fotka: SanityImage
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
      priblizujem:boolean
      textdlhy:string
}


export const KartaTyp  = ({NazovOdboru,fotka,onMouseEnter,onMouseLeave,priblizujem,textdlhy} : Celok) => {
// console.log(fotka);





    return <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="w-full h-[300px] bg-amber-700 flex   cursor-pointer relative overflow-hidden  rounded-[var(--radius)]  ">

  <img src={urlFor(fotka).url()}
  className={`
    cursor-pointer

    relative inset-0 w-full h-full object-cover transition-transform duration-300 ${
    priblizujem ? "scale-105" : "scale-100"
  }`}
    alt=""
  />

{/* <div className=" z-20 cursor-pointer absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div> */}


<motion.div 
  animate={{
    height: priblizujem ? "fit-content" : "50px"
  }}
  transition={{ duration: 0.3 }}
className="absolute flex flex-col bottom-0 p-3 overflow-hidden">
  <h3 className="text-white text-lg md:text-xl font-light tracking-tight font-medium">{NazovOdboru}</h3>


<p  className={`
    ${priblizujem ? "opacity-100" : "opacity-0"}
    text-white text-sm mt-0.5
  `}>
     {textdlhy}
          </p>

</motion.div>
{/* <div className="z-10 text-white flex flex-col">
    <span>  {NazovOdboru}</span>
    <span>  {textdlhy}</span>
</div> */}

</div>}



  // <div className="flex items-end justify-between mt-4 px-1 pb-1">
  //       <div>
  //         <h3 className="text-white text-lg md:text-xl font-light tracking-tight">
  //           {project.title}
  //         </h3>
  //         <p className="text-[var(--sivaSvetlsie)] text-sm mt-0.5">
  //           {project.year}
  //         </p>
  //       </div>

  //       <div className="flex gap-2">
        
  //           <span
        
  //             className="text-xs text-[var(--sivaSvetlsie)] border border-neutral-800 rounded-full px-3 py-1 font-light"
  //           >
  //             {project.tags}
  //           </span>
         
  //       </div>
  //     </div>