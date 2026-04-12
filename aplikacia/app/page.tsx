import { client } from "@/lib/sanity"

export default async function Home() {
  const movies = await client.fetch(`*[_type == "movie"]`)

  console.log("MOVIES:", movies)

  return (
    <>
      <div className="h-[700px] bg-amber-600 w-full flex pb-[var(--mobilKraj)]  pt-[72px] md:h-screen md:pb-[10px]">
        <div className="flex-1 bg-amber-900 flex gap-1 justify-between flex-col md:flex-row">



        <div className="w-full h-[20px] bg-pink-400"></div>
        <div className="w-full h-[60vw] bg-pink-400"></div>
      </div>
    
      
    </div>
      <div className="h-[800px] bg-amber-600 w-full">
      {/* {movies?.map((item) => (
        <h2 key={item._id}>{item.title}</h2>
      ))} */}
    </div>
    
    </>
  
  )
}