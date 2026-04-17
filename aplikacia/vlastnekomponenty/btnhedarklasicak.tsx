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
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">

<div className="flex justify-between">
  <span className="whitespace-nowrap">{text}</span>
{rednder &&  
<motion.div
          animate={{ rotate: otovrenie ? 180 : 0 }}
        transition={{ duration: 0.3 }}
       
        ><ChevronDown/>
        </motion.div>
}
 
{/* <div className="hidden  lg:block fixed top-0 left-0 w-full h-9 bg-amber-500"></div> */}
</div>
    </button>
  );
}

