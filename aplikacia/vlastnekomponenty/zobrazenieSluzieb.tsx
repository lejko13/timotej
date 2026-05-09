
"use client"
import ServicesSection from '../vlastnekomponenty/zobrazovanieslubeibkomponent'

type Jeden = {
    // Fotka:
    Typ:string
    Rok:number
    Popis:string
}

type Props = {
    TypSlubzy:any[]
}

export default function ZobrazenieSluzieb({TypSlubzy} : Props) {



    console.log(TypSlubzy);
    
    // const skusobne = [
    //     {},  {},  {},  {},

    // ]
  return (
    <div className=" text-white rounded-xl h-fit w-full flex flex-col gap-2.5">
{TypSlubzy.map((item, index) => (



  <ServicesSection
    key={index}
    index={index}
    nazov={item.Nazov}
    popis={item.Popis}
    fotka={item.Obrazok}
  />

  
))}
 {/* <div className='w-full h-[20px] bg-amber-500'></div> */}
    </div>
  );
}