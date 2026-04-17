
"use client"


import { motion, AnimatePresence } from "framer-motion";
import {StatItem} from '../../vlastnekomponenty/uvodhore'

import Tusucisla from '../../vlastnekomponenty/pocitanie'

import { SanityImage } from '../../lib/types/sanity'
import MySwiper from '../../vlastnekomponenty/posunobrazok'

type Ukazka = {
  cislo: number;
  popis: string;
  specialnyZnak?: string | null;
};
 
type Obrazte = {
  Fotka:SanityImage
}
  //  src={urlFor(fotka).url()}

type Props = {
    data:any[]
    data2:Ukazka[]
    pozadiedata:Obrazte[]
}
export default  function Uvod({data,data2,pozadiedata} : Props) {
 

    // console.log(data[0]);
    // console.log(data[0].cislo);

    console.log(pozadiedata);
    
    
  return (
    <div className=" w-full h-full ">

<div className="absolute h-[700px] md:h-screen  flex  z-0 inset-x-0 top-0">
  <MySwiper
  items = {pozadiedata}
  ></MySwiper>

</div>


<div
  className="w-full h-full absolute inset-x-0"
  style={{
    background:
      "linear-gradient(to bottom, transparent 0%, transparent 0%, transparent 10%, black 100%)",
  }}
></div>

         <div className="w-full h-full  text-white flex items-end  md:items-center lg:items-center  ">


        <div className="   gap-15 lg:gap-22 
  
        h-full  relative  flex flex-col justify-end lg:justify-center  mx-auto px-3 md:px-0 w-full lg:gap-14">
        {/* Heading */}

        <div className="flex flex-col  gap-6  lg:pt-[110px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex items-center justify-center"
        >
          {/* <h1 className="font-heading text-4xl  md:text-6xl lg:text-8xl text-foreground leading-[1.1] tracking-tight">
            Navrhneme a postavíme
            <br />
            váš vysnívaný dom
          </h1> */}
          <h1 className="max-w-[300px] bg-amber-500  text-4xl  md:text-6xl  md:max-w-[700px] lg:text-7xl text-foreground leading-[1.1] tracking-tight">
           {data[0].UvodnyText}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
          max-w-[300px]  text-lg  bg-amber-700 text-center text-foreground/60   md:max-w-xl mx-auto lg:text-xl "
        >
         {data[0].NizzsieText}
        </motion.p>
        </div>

        {/* Stats */}
        <motion.div
     
          className="hidden md:grid   grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6  w-full"
        >
            
         {data2.map((polozka, i) => (
          <Tusucisla
            key={i}
            index = {i}
            maxx = {polozka.cislo}
            text = {polozka.popis}
            specialZnak = {polozka.specialnyZnak}
           
          />
        ))}
        </motion.div>
      </div>




      </div>


    
    </div>
  );
}



// import { client } from "@/lib/sanity"


// export default  function Home(){



//   // const movies = await client.fetch(`*[_type == "movie"]`)

//   // console.log("MOVIES:", movies)

//   const stats = [
//   { value: '300+', desc: 'Úspešne zrealizovaných projektov na Slovensku a v Česku.' },
//   { value: '21+', desc: 'Odborníkov z rôznych profesií spojených pod jednou strechou.' },
//   { value: '2018', desc: 'Rok, odkedy pomáhame klientom premeniť vízie na realitu.' },
//   { value: '100%', desc: 'Transparentnosť v komunikácii, rozpočte aj termínoch.' },
// ];


//   return (
//     <>
//     <div className="h-[700px] md:h-screen w-[full] bg-pink-400 flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
//       <div className="w-full h-full bg-amber-300 flex items-end  md:items-center lg:items-center  ">


//         <div className=" gap-6 h-fit relative  flex flex-col justify-center bg-amber-50 mx-auto px-3 md:px-0 w-full lg:gap-14">
//         {/* Heading */}

//         <div className="flex flex-col  gap-6 ">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center flex items-center justify-center"
//         >
//           {/* <h1 className="font-heading text-4xl  md:text-6xl lg:text-8xl text-foreground leading-[1.1] tracking-tight">
//             Navrhneme a postavíme
//             <br />
//             váš vysnívaný dom
//           </h1> */}
//           <h1 className="max-w-[300px] bg-amber-500  text-4xl  md:text-6xl  md:max-w-[700px] lg:text-7xl text-foreground leading-[1.1] tracking-tight">
//             Navrhneme a postavíme
//             <br />
//             váš vysnívaný dom
//           </h1>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="
//           max-w-[300px]  text-lg  bg-amber-700 text-center text-foreground/60   md:max-w-xl mx-auto lg:text-xl "
//         >
//           Od prvého náčrtu až po odovzdanie kľúčov – všetko pod jednou strechou.
//           Tvoríme nadčasovo, s citom pre detail a dôrazom na kvalitu.
//         </motion.p>
//         </div>

//         {/* Stats */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="hidden md:grid bg-green-400  grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6  w-full"
//         >
//          {stats.map((stat, i) => (
//           <StatItem
//             key={i}
//             value={stat.value}
//             desc={stat.desc}
//             index={i}
//           />
//         ))}
//         </motion.div> */}
//       </div>




//       </div>
//     </div>
//     <div className="h-[500px] w-[full] bg-pink-400"></div>
//     <div className="h-[500px] w-[full] bg-pink-400"></div>
//     <div className="h-[500px] w-[full] bg-pink-400"></div>
//     <div className="h-[500px] w-[full] bg-pink-400"></div>
   

   
//     </>
  
//   )
// }


// //  --pcokrej