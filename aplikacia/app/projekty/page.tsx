


import ProjetkyStranka from '../../vlastnekomponenty/projekty'
import Tempalte from '../../vlastnekomponenty/tempalatepage'
import { client } from "@/lib/sanity";

export default async function Page() {




  const projektytext = await client.fetch(`*[_type == "projektytext"]`);
  const Projekty = await client.fetch(`*[_type == "Projekty"]`);


  
  return (
    <Tempalte 
   
    text={projektytext}>

      <ProjetkyStranka data={Projekty} />
    </Tempalte>
  );
}