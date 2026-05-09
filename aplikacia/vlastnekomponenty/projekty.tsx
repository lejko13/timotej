"use client"

import ProjectCardCenter from '../vlastnekomponenty/karta2lenkarta/karta2lenkarta'
import {SanityImage} from '../lib/types/sanity'

import {urlFor} from '../lib/ sanityImage'
type Projekt = {
  IDENTIFIKATOR: number;
  NazovProjektu: string;
  Popis: string;
  Rok: number;
  Typ: string;
  Fotka: SanityImage
};

type Props = {
  data:Projekt[]
}

export default  function ProjetkyStranka({data} : Props) {
  
console.log(data);


  
  return <div className="w-[full] h-fit p-4 pt-19 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 ">

{data.map((item,i) => (
  <ProjectCardCenter
    key={i}
    project={{
 image: urlFor(item.Fotka).url(),
      title: item.NazovProjektu,
      year: item.Rok,
      tags: item.Typ,
      slug: String(item.IDENTIFIKATOR),
    }}
  />
))}
    </div>
 
  </div>
}