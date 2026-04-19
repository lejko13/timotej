

import Uvod from "./uvodRender/uvod";
import Link from "next/link";
import { client } from "@/lib/sanity";
import Druhacst from '../vlastnekomponenty/druhacast/druhacast'
import MalaCast from '../vlastnekomponenty/malacast/malacast'
import {Otakza} from '../vlastnekomponenty/otazkycast'
import ZobrazenieSluzieb  from '../vlastnekomponenty/zobrazenieSluzieb';



import {useApp} from '../app/providers'
export default async function Page() {
  const data = await client.fetch(`*[_type == "zakladneInformacie"]`);
  const data2 = await client.fetch(`*[_type == "skusenosti"]`);
  const pozadiedata = await client.fetch(`*[_type == "Projekty"]`);
  const projektyuvodna = await client.fetch(`*[_type == "ProjetkyUVODNA"]`);
  const SluzbyUvodna = await client.fetch(`*[_type == "SluzbyUvodna"]`);
   const TypSlubzy = await client.fetch(`*[_type == "sluzba"]`);
   const Otazky = await client.fetch(`*[_type == "Otazky"]`);
   const otazkycast = await client.fetch(`*[_type == "otazkycast"]`);




  



  
  
  return <>
  <div className="h-[700px]   md:h-screen w-[full] bg-black flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
    

    <Uvod
    data={data}
    data2 = {data2}
    pozadiedata = {pozadiedata}
    ></Uvod>
   
    </div>

    <div  className=" pt-17 h-fit md:h-fit-content w-[full] bg-black flex px-4   md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
 <Druhacst
   pozadiedata = {pozadiedata}
   projektyuvodna = {projektyuvodna}
 ></Druhacst>
    </div>


    <div className="h-fit  bg-black w-[full] flex p-4 md:pt-5  flex-col md:px-[var(--stred)] lg:px-[var(--pcokrej)] pb-12 md:pb-15">
<MalaCast
SluzbyUvodna = {SluzbyUvodna}
></MalaCast>
<div className="w-full h-fit ">

  <ZobrazenieSluzieb
  TypSlubzy = {TypSlubzy}
  ></ZobrazenieSluzieb>
</div>

      
    </div>
    <div className="h-fit md:h-fit w-[full] bg-black flex p-4 md:pt-5 flex-col pb-22 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <MalaCast
      SluzbyUvodna={Otazky}
      ></MalaCast>
      <Otakza
      otazkycast = {otazkycast}
      
      ></Otakza>
    
    </div>

  



   
</>
  
    ;
}