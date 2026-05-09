"use client"
import {Mainbtn} from './btny/mainbtn'
type Props = {
    nazov:string
    hodnota:string
    ikona?:string
}

export default function MapovanieDetail({nazov,hodnota,ikona}:Props) {
      return (
        <div className="w-full h-fit bg-amber-700 flex justify-between border-t-2 border-white" >

            <div className='w-fit bg-pink-400 h-full flex items-center justify-center gap-2'>   
            <Mainbtn></Mainbtn>
            <div>{nazov}</div>
            </div>
            <div className='w-fit bg-amber-50 flex items-center justify-center'>
                <div>{hodnota}</div>

            </div>
         
            

        </div>
      )

}

 
  

