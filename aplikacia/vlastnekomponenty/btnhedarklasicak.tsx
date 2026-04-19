import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/app/providers";

import { useState ,useRef, useEffect} from 'react';
import Link from 'next/link'
type Props = {
  text: string
  rednder:boolean
  sluzba:string
}

export function BtnKlasika({text,rednder,sluzba} : Props) {



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
  


 return rednder ? (
  <div className="h-full text-white flex justify-between flex-col rounded-md transition cursor-default">
    <div className="flex h-full text-[16px] items-center gap-1 justify-center">
      <span className="whitespace-nowrap">{text}</span>

      <motion.div
        className="text-[10px]"
        animate={{ rotate: otovrenie ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </div>
  </div>
) : (
  <Link href={sluzba} className="h-full text-white flex justify-between flex-col rounded-md transition">
    <div className="flex h-full text-[16px] items-center gap-1 justify-center">
      <span className="whitespace-nowrap">{text}</span>
    </div>
  </Link>
);
}

