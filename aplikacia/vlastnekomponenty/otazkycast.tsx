
"use client"
import Hybemkomponent from './komponet'
import { useState, useEffect } from "react"


type Props = {
    otazkycast:any[]
}
export function Otakza({otazkycast} : Props) {

const [count, setCount] = useState<number | false>(false);


    console.log(otazkycast);
    
    return <div className="w-full h-fit0 flex flex-col  gap-8 md:flex-row">
<div className=' h-[90px] w-[40vw] hidden md:flex'></div>
       

        <div className='w-full flex flex-col gap-3'>
            {otazkycast.map((item,i) => <Hybemkomponent
        onClick = {() => setCount(prev => prev === i ? false : i)}
        podmienka = {count === i}
        otazka = {item.otazka}
        odpvene = {item.odpoved}
        ></Hybemkomponent>)}

        </div>
        




    </div>
    
}