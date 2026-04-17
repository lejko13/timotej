import { log } from "node:console"
import { useApp } from "@/app/providers";

import {urlFor} from '../lib/ sanityImage'
import { SanityImage } from '../lib/types/sanity'
type Celok = {
    NazovOdboru:string
  fotka: SanityImage
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
      priblizujem:boolean
      textdlhy:string
}


export const KartaTyp  = ({NazovOdboru,fotka,onMouseEnter,onMouseLeave,priblizujem,textdlhy} : Celok) => {
console.log(fotka);





    return <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="w-full h-[300px] bg-amber-700 flex relative overflow-hidden">

  <img
    src={urlFor(fotka).url()}
  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
    priblizujem ? "scale-105" : "scale-100"
  }`}
    alt=""
  />
<div className="z-10 text-white flex flex-col">
    <span>  {NazovOdboru}</span>
    <span>  {textdlhy}</span>
</div>

</div>}
