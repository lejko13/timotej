import ProjectsHeader from '../../vlastnekomponenty/textoprops/textprops'


type Props = {
        SluzbyUvodna:any[]
    }

export default async function MalaCast({SluzbyUvodna} : Props) {

    

return(<div className='md:pb-4'>
    <ProjectsHeader
    SluzbyUvodna = {SluzbyUvodna}
    
    ></ProjectsHeader>

</div>)
}