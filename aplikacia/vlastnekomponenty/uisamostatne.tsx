// "use client"

type Jeden = {
  Hodnota:string,
  Nazov:string,
}

type Polozka = {
Fotka:any,
Popis:string,
NazovProjektu:string,
InterierInfo:Jeden[]
}

type Props = {
  data: Polozka
}

import { client } from "@/lib/sanity";

import Template2 from "../vlastnekomponenty/projektyweb"
import MapovanieDetail from './mapovanie'

import Druhacst from '@/vlastnekomponenty/druhacast/druhacast'

export default async function Uisamosatane({ data }: Props) {


    const pozadiedata = await client.fetch(`*[_type == "Projekty"]`);
      const projektyuvodna = await client.fetch(`*[_type == "ProjetkyUVODNA"]`);

  console.log(data?.InterierInfo);
  
  
  const formatted = [
    {
      Vrchnytext: data?.NazovProjektu,
      Spodnytext: data?.Popis,
      Fotka: data?.Fotka,
    }

  ]


  return <Template2 text={formatted}>
    <>
    <div className="w-full h-[900px] bg-black flex flex-col p-4 md:pt-5  gap-8 lg:flex-row md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

        <div className="w-full  p-2 h-fit lg:w-[40vw] bg-yellow-600  lg:h-full relative">
  <div className="w-full h-fit bg-amber-500   flex flex-col gap-1   lg:bg-pink-600 lg:sticky top-28 ">

{/* {data?.InterierInfo?.map((item, index) => (
<MapovanieDetail
nazov = {item.Nazov}
hodnota = {item.Hodnota}
ikona = 'sd'

></MapovanieDetail>
))} */}

  </div>
</div>
       
        <div className="w-full h-full bg-green-300"> </div>

    </div>

    
       <div  className=" pt-17 h-fit md:h-fit-content w-[full] bg-black flex px-4   md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
       <Druhacst
         pozadiedata = {pozadiedata}
         projektyuvodna = {projektyuvodna}
       ></Druhacst>
          </div>

    
    
    </>
    
    

  </Template2>

}