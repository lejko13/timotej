

import Uvod from "./uvodRender/uvod";
import Link from "next/link";
import { client } from "@/lib/sanity";
import Druhacst from '../vlastnekomponenty/druhacast/druhacast'
import MalaCast from '../vlastnekomponenty/malacast/malacast'
import {Otakza} from '../vlastnekomponenty/otazkycast'
export default async function Page() {
  const data = await client.fetch(`*[_type == "zakladneInformacie"]`);
  const data2 = await client.fetch(`*[_type == "skusenosti"]`);
  const pozadiedata = await client.fetch(`*[_type == "Projekty"]`);



  
  return <>
  <div className="h-[700px] md:h-screen w-[full] bg-white flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
    {/* {data.map(x => x.title)} */}

    <Uvod
    data={data}
    data2 = {data2}
    pozadiedata = {pozadiedata}
    ></Uvod>
   
    </div>

    <div  className=" pt-17 h-fit md:h-fit-content w-[full] bg-black flex px-4   md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
 <Druhacst
   pozadiedata = {pozadiedata}
 ></Druhacst>
    </div>


    <div className="h-[700px] md:h-screen w-[full] bg-white flex p-4 md:pt-5  flex-col md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
<MalaCast></MalaCast>
{/* <div className="w-full h-[900px] bg-pink-400"></div> */}

      
    </div>
    <div className="h-[700px] md:h-screen w-[full] bg-red-500 flex p-4 md:pt-5 flex-col  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <MalaCast></MalaCast>
      <Otakza></Otakza>
      {/* <div className="w-full h-[900px] bg-pink-400"></div> */}
    </div>

    <div className="h-[700px] md:h-screen w-[full] bg-white flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]"></div>



     {/* <Link href="/kontakt">
  <button className="p-2 bg-blue-500 text-white">
    Kontakt
  </button>
</Link> */}
</>
  
    ;
}