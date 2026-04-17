"use client"

import { useState ,useRef, useEffect} from 'react';

import { motion, AnimatePresence } from "framer-motion";

import { useApp } from "@/app/providers";

import { ChevronDown } from "lucide-react"


type Sluzba = {
  _id: string;
  Nazov: string;
};

type Props = {
        text:string;
      
        onClick:() => void
        opacity:boolean;
         referencia?: Sluzba[];
        ano:boolean
        otvaram:boolean
}





export function BtnOtvarac({text,onClick,opacity,referencia,ano,otvaram} : Props) {
  const { open, setOpen ,okno, setOkno} = useApp();


  console.log(referencia);
  


console.log(referencia);


    return (
<motion.div 
    animate={{ height:"fit-content"}}
   className=' items-center flex flex-col'
onClick={() => {
  if (opacity === true) {
    onClick();
    setOkno(prev => !prev)
    // setAno(true)

    console.log("otovre");
    return
  }

  console.log("niczatail");
  
}}
//    initial={{ height: 64 }}
//      animate={{ height:64}}
  
>
    <div className={`flex justify-between w-full  items-center h-12`}>
        <span>  {text}</span>
        <motion.div
          animate={{ rotate: ano ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className={`
            w-fit h-fit
            ${
        opacity === true ? "opacity-100" : "opacity-0"
        }`}
        ><ChevronDown/>
        </motion.div>
      </div>


{opacity && <motion.div
  initial={{ height: 0 }}
  animate={{ height:  ano ? "fit-content" : "0px" }}
 className={` w-full overflow-hidden grid grid-rows-[auto] gap-1 ${ano ? "pb-3" : "pb-0"}`}
>
  {referencia?.map((item) => {
    return(
<div className='h-8 flex items-center pl-3'>{item.Nazov}</div>
    )

  })}
</motion.div> }
  



</motion.div>

    ) 


}