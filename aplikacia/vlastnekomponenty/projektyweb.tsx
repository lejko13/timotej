"use client"

import { urlFor } from "@/lib/ sanityImage"
import { motion } from "framer-motion"



type Props = {
  children?: React.ReactNode
  text: {
    Vrchnytext?: string
    Spodnytext?: string
    Fotka?: any
    

  }[]
}

export default function Template2({ children, text }: Props) {

  const item = text?.[0]

  console.log(item);
  

  return (
    <>
      <div className="h-[700px] relative  md:h-screen w-full bg-pink-500 flex p-4 md:pt-5 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

        {/* IMAGE */}
        {item?.Fotka && (
          <img
            src={urlFor(item.Fotka).url()}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* OVERLAY */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, black 0%, transparent 10%, transparent 70%, black 100%)",
          }}
        />

        {/* CONTENT */}
        <div className="w-full h-full relative flex items-end md:items-end justify-center">

          <div className="flex flex-col gap-6 lg:pt-[110px]">

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center flex items-center justify-center"
            >
              <h1 className="max-w-[300px] text-4xl md:text-6xl text-white md:max-w-[800px] lg:text-7xl tracking-tight">
                {item?.Vrchnytext}
              </h1>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[300px] text-lg text-center text-[var(--bielasvetla)] md:max-w-xl mx-auto lg:text-xl"
            >
              {item?.Spodnytext}
            </motion.p>

          </div>
        </div>
      </div>

      {/* CHILD CONTENT */}
      <div className="w-full h-fit">
        {children}
      </div>
    </>
  )
}