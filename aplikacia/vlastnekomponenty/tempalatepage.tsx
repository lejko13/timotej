type Props = {
  children?: React.ReactNode;
  text:any[]

};

export default function Template({ children,text }: Props) {

    console.log(text);
    
  return (
    <>
    <div className="h-[700px] relative overflow-hidden md:h-screen w-[full] bg-pink-500 flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
<div className="w-full h-full bg-amber-500 absolute inset-0"></div>


  
    </div>
    <div className="w-full h-fit">
                {children}

    </div>

    </>
  );
}