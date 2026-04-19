import ProjectCardCenter from '../vlastnekomponenty/karta2lenkarta/karta2lenkarta'

type Props = {
  data:any[]
}

export default async function ProjetkyStranka({data} : Props) {
  


  
  return <div className="w-[full] h-[300px] bg-pink-800 p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
    {data.map((item,i) => <div>chuj</div>)}
  </div>
}