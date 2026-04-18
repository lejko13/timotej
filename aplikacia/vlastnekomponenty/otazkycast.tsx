
"use client"
import Hybemkomponent from './komponet'
import { useState, useEffect } from "react"


type Props = {
    otazkycast:any[]
}
export function Otakza({otazkycast} : Props) {

const [count, setCount] = useState<number | false>(false);


    console.log(otazkycast);
    
    return <div className="w-full h-fit bg-amber-600 flex flex-col md:p-6 gap-3">
{/* <div className='w-full bg-pink-900 h-[90px]'></div> */}
        {/* {otazkycast.map((item,i) => <div className='w-full bg-pink-900 h-[90px]'></div>)} */}
        {otazkycast.map((item,i) => <Hybemkomponent
        onClick = {() => setCount(prev => prev === i ? false : i)}
        podmienka = {count === i}
        otazka = "kokokokok"
        odpvene = "llplplp"
        ></Hybemkomponent>)}




    </div>
    
}