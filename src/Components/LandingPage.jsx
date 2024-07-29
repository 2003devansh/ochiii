import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {  
  return (
   <>
   <div className='w-full h-screen bg-zinc-900 pt-1'>
    <div className='textstructure mt-40 px-20'>
    {["we create" , "Eye Opening " , "Presentation "].map((item, index)=>{
      return (
        <div className='masker'>
        <div className='w-fit flex '>
          {index === 1  && (<div className='w-[9vw] h-[vw] relative -top-[1vw] bg-red-500'></div>)}
          <h1 className=" flex items-center uppercase text-[9vw] h-full leading-[7vw] font-serif">{item}</h1>
        </div>
      </div>
      ); 
    })}
    </div>
    <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
      {["see it through","i am the choosen one"].map((item,index)=>{
        return <p className='text-md font-thin tracking-tight leading-none'>{item}</p>
      })}
      <div className='start flex items-center gap-5'>
        <button className='px-4 border-[1] border rounded-full'>Start the thing</button>
        <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
        <span className='rotate-[90deg]'>
        <FaArrowUp />
        </span>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default LandingPage