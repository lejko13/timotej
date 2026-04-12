"use client"
import Buttonheader from './btn'
import { useState ,useRef, useEffect} from 'react';

import { motion, AnimatePresence } from "framer-motion";
export function Header() {

  const [otvaram,setOtvram] = useState(false)
  const referencia = useRef<HTMLDivElement | null>(null)
  const referencia2 = useRef<HTMLDivElement | null>(null)


useEffect(() => {
  const klik = (e: MouseEvent) => {
    const target = e.target as Node;

    const jeVRef1 = referencia.current?.contains(target);
    const jeVRef2 = referencia2.current?.contains(target);

    if (!jeVRef1 && !jeVRef2) {
      setOtvram(false);
    }
  };

  document.addEventListener("mousedown", klik);

  return () => {
    document.removeEventListener("mousedown", klik);
  };
}, []);


useEffect(() => {

  console.log(referencia);
  console.log(referencia2);
  
},[])


  return (
    <motion.div 
   initial={{ height: 64 }}
  animate={{ height: otvaram ? "fit-content"  : 64}}

    className="px-[var(--mobilKraj)] md:px-[var(--pcokrej)] pt-3 pb-3 flex items-center  flex-col fixed top-0 left-0 w-full h-16 gap-[12px] bg-red-500 text-white overflow-hidden">
    
        <div className='
        flex justify-between items-center
        w-full bg-amber-300'>
                 <div>kok</div>

                 <div 
                 ref = {referencia}
                 className='w-fit h-[40px] bg-amber-800'>
                  <Buttonheader
        pohyb = {otvaram}
        onClick = {() => setOtvram(prev => !prev)}
        ></Buttonheader>
                  
                 </div>
                  
        </div>

        <div 
        ref={referencia2}
        className='w-full h-[200px] bg-pink-500'>
          kok
        </div>
    </motion.div>
  );
}