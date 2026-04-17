"use client"
import Buttonheader from '../btn'
import { useState ,useRef, useEffect} from 'react';

import { motion, AnimatePresence } from "framer-motion";
import {BtnOtvarac} from '../btnotovrenei'

import { useApp } from "@/app/providers";

import {BtnKlasika} from "../btnhedarklasicak"

import { SanityImage } from '../../lib/types/sanity'
import { useMediaQuery } from "react-responsive";
import {KartaTyp} from '../kartatyp'


type Sluzba = {
  _id: string;
  Popis:string
  Nazov: string;
 Obrazok: SanityImage
};

type HeaderItem = {
  Nazov: string;
  Referecnie?: Sluzba[];
  _id:string
  isActive:boolean


};

type Props = {
  data: HeaderItem[];
  data2:any[]
};

// const [openIndex, setOpenIndex] = useState<number | null>(null);






export function Header({ data ,data2}: Props) {

  //  const isMobile = useMediaQuery({ mWidth: 768 });

// console.log(data2[0].LogoNazovWebu);

//   console.log(data);
  

  const [otvaram,setOtvram] = useState(false)

const [skusam, setSkusam] = useState<string>("");



const [priblizujem, setPriblizujem] = useState<string>("");


const [informacia, setInformacia] = useState<Sluzba[] | undefined>(undefined);

  const referencia = useRef<HTMLDivElement | null>(null)
  const referencia2 = useRef<HTMLDivElement | null>(null)
  const referencia3 = useRef<HTMLDivElement | null>(null)
  const refs = useRef<(HTMLDivElement | null)[]>([]);

const { open, setOpen ,okno, setOkno,otovrenie, setOtvorenie} = useApp();


useEffect(() => {
  const klik = (e: MouseEvent) => {
    const target = e.target as Node;

    const jeVRef1 = referencia.current?.contains(target);
    const jeVRef2 = referencia2.current?.contains(target);

    if (!jeVRef1 && !jeVRef2) {
      setOtvram(false);
      setOkno(false)
      setSkusam("")
    }
  };

  document.addEventListener("mousedown", klik);

  return () => {
    document.removeEventListener("mousedown", klik);
  };
}, []);




useEffect(() => {
  if (otvaram) {
      document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

    
  }
  if (!otvaram) {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    
  }


},[otvaram])



useEffect(() => {
  const handleMove = (e: MouseEvent) => {
    const target = e.target as Node;

    const inMain = referencia3.current?.contains(target);
    const inList = refs.current.some((el) => el?.contains(target));

    if (inMain || inList) {
      setOtvorenie(true);
    } else {
      setOtvorenie(false);
    }
  };

  document.addEventListener("mousemove", handleMove);

  return () => {
    document.removeEventListener("mousemove", handleMove);
  };
}, []);





  return (

    <>

    
    {/* pc */}
    <motion.div  
      initial={{ height: 66 }}
       animate={{ height: "fit-content"}}
     className=" 
     text-white 
     rounded-[var(--radius)]
     bg-black/10
     z-50 hidden top-5 left-[var(--pcokrej)] right-[var(--pcokrej)] lg:block   backdrop-blur-xl px-4 py-2  flex items-center  flex-col  fixed   ">
<div className='h-[50px] flex  justify-between '>

{/* <div className='w-fit bg-amber-200 h-full flex items-center justify-center'>{data2[0].LogoNazovWebu}</div> */}
<div className='w-fit h-full flex items-center justify-center font-medium text-[17px]'>{data2[0].LogoNazovWebu}</div>

<div 
// ref={sirka}
className='w-fit h-full flex gap-4 items-center ' >
  {data.map((item,i) => 
  <div 
    ref={(el) => {
      if (item.isActive) {
        refs.current[i] = el;
        // console.log(item.Referecnie);
      
        setInformacia(item.Referecnie)
      }

    }}
  className=' h-full  items-center justify-center flex'>
  <BtnKlasika
 text={item.Nazov}
 rednder = {item.isActive}
  ></BtnKlasika>
  </div>
  )}
<div className=' h-10 w-full  px-4 bg-[var(--biela)] rounded-[var(--radiusInsie)] flex items-center justify-center text-[var(--cierna)]'>Kontaktovať</div>
  
  
</div>

{/* <div className='w-[400px] bg-amber-200 h-full'></div> */}

</div>

        <motion.div 
        ref={referencia3}
        initial ={{ height: 0 }}
        animate={{ 
          height:  otovrenie ? "fit-content" : "0px",
          paddingTop: otovrenie ? "7px" : "0px",
          paddingBottom: otovrenie ? "15px" : "0px",
         }}
        className='w-full  overflow-hidden flex gap-6'>
       {informacia?.map((polozka) => {
  return   <KartaTyp
  NazovOdboru = {polozka.Nazov}
  fotka = {polozka.Obrazok}
  onMouseLeave={() => setPriblizujem("")}
  onMouseEnter={() => setPriblizujem(polozka.Nazov )}
  priblizujem = {priblizujem === polozka.Nazov }
  textdlhy = {polozka.Popis}
  ></KartaTyp> 

})}




        </motion.div>
     </motion.div>

    {/* pc */}
{/* md:px-[var(--pcokrej)] */}


 {/* mobil */}
    <motion.div 
   initial={{ height: 64 }}
  animate={{ height: otvaram ? "fit-content"  : 64}}
 
   className="z-50 
top-4 left-4 right-4 
md:top-5 md:right-[var(--pcokrej)] md:left-[var(--pcokrej)]
md:top-5 md:right-[var(--stred)] md:left-[var(--stred)]
block px-4 py-3 flex items-center flex-col fixed 
h-16 
lg:flex-row
lg:hidden
gap-[12px] backdrop-blur-xl text-white overflow-hidden
rounded-[var(--radius)]
     bg-black/10

     text-[16px]
">
    
        <div className='
        flex

        flex justify-between items-center
        w-full lg:hidden'>
                 <div>{data2[0].LogoNazovWebu}</div>

                 <div 
                 ref = {referencia}
                 className='w-fit h-[40px] '>
                  <Buttonheader
        pohyb = {otvaram}
        onClick = {() => {setOtvram(prev => !prev);setSkusam("")}}
        ></Buttonheader>
                  
                 </div>    
                 
          </div>

        <motion.div 
        ref={referencia2}
        className='w-full h-fit  flex flex-col lg:hidden '>

          {data.map((item) =>
          
          
<>
<BtnOtvarac

         

           opacity = {item.isActive}
           
           onClick={() => {setOpen(prev => !prev),console.log(open),setSkusam(prev => prev === item._id ? "" : item._id)}}
          text={item.Nazov}

            ano={ skusam === item._id}

          referencia = {item.Referecnie}
otvaram = {otvaram}
          ></BtnOtvarac>

   <div className="w-full h-[1px] bg-[var(--sivaSvetlsie)]"></div>
</>
           
          )}


       
        
        </motion.div >
        <div className=' mt-6 mb-3 h-12 w-full lg:hidden bg-[var(--biela)] rounded-[var(--radiusInsie)] flex items-center justify-center text-[var(--cierna)]'>Kontaktovať</div>

           

        

  
    </motion.div>
 {/* mobil */}

{/* pc */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: otovrenie ? 1 : 0,
    pointerEvents: otovrenie ? "auto" : "none",
  }}
  transition={{ duration: 0.3 }}
  className="hidden w-screen h-screen  bg-black/70 z-10 lg:block fixed"
/>
{/* pc */}

{/* mobil */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: otvaram ? 1 : 0,
    pointerEvents: otvaram ? "auto" : "none",
  }}
  transition={{ duration: 0.3 }}
  className="fixed w-screen h-screen  bg-black/70 z-10 lg:hidden "
/>
{/* mobil */}

       </>
  );
}

// px-[var(--mobilKraj)] md:px-[var(--pcokrej)]