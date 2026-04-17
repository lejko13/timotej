import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/app/providers";

import { useState ,useRef, useEffect} from 'react';

type Props = {
  text: string
  rednder:boolean
}

export function BtnKlasika({text,rednder} : Props) {



  const { open, setOpen ,okno, setOkno,otovrenie, setOtvorenie} = useApp();
  

  useEffect(() => {
    if (otovrenie) {
        document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  
      
    }
    if (!otovrenie) {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      
    }
  
  
  },[otovrenie])
  


  return (
    <button className=" h-full text-white flex justify-between flex-col  rounded-md  transition">
 
<div className="flex h-full  text-[16px] items-center w-[80px]  gap-1 justify-center ">
  <span className="whitespace-nowrap ">{text}</span>
{rednder &&  
<motion.div
className=" text-[10px]  "
          animate={{ rotate: otovrenie ? 180 : 0 }}
        transition={{ duration: 0.3 }}
       
        ><ChevronDown size={20}/>
        </motion.div>
}
 
{/* <div className="hidden  lg:block fixed top-0 left-0 w-full h-9 bg-amber-500"></div> */}
</div>
    </button>
  );
}

