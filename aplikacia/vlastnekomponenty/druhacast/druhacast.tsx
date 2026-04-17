import ExclusiveProjects from '../karta2/karta2'
import { SanityImage } from '../../lib/types/sanity'


type Props = {
    pozadiedata:any[]
}

export default async function Druhacst({pozadiedata} : Props) 

{
    return<div className="w-full h-full pb-18">

        <ExclusiveProjects
        pozadiedata = {pozadiedata}
        ></ExclusiveProjects>
    </div>
}