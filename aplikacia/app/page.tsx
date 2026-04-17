

import Uvod from "./uvodRender/uvod";
import Link from "next/link";
import { client } from "@/lib/sanity";

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

    <div  className="h-[700px] md:h-screen w-[full] bg-black flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      jbchsbvhbhjvb ah
    </div>



     {/* <Link href="/kontakt">
  <button className="p-2 bg-blue-500 text-white">
    Kontakt
  </button>
</Link> */}
</>
  
    ;
}