'use client'

import { useRouter } from "next/navigation"

export default function NavBar()
{
    const page=["Home","Members","Course"]
    const router=useRouter()

    function ToPage(targetPage:string)
    {
        if(targetPage==="Home")
        {
            router.push('/')
        }
        else{
            router.push(targetPage)
        }
    }
    
    return(
        <nav className=" w-full h-[10vh] bg-gray-400 flex justify-between items-center">
            <div className=" px-5">
                <h1 className="text-[25px] font-bold">LIABSI</h1>
            </div>
            <div className=" grid grid-cols-3 gap-2 mx-5">
                {page.map((item,index)=><JumpButton text={item} ToPage={ToPage} key={index}></JumpButton>)}
            </div>
        </nav>
    )
}

interface JumpButtonProps
{
    text:string,
    ToPage:(targetPage:string)=>void

}

function JumpButton({text, ToPage}:JumpButtonProps)
{
    return(
        <div className=" w-full flex justify-center hover:scale-110 hover:text-amber-50 duration-300 ease-in-out border-r-white border-r p-3 last:border-r-0" onClick={()=>ToPage(text)}>
            {text}
        </div>
    )
}