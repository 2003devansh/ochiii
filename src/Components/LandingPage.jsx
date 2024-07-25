import React from 'react'

const LandingPage = () => {  
  return (
   <>
   <div className='w-full h-screen bg-zinc-900 pt-1'>
    <div className='textstructure mt-40 px-20'>
    {["we create" , "Eye Opening " , "Presentation "].map((item, index)=>{
      return <div className='masker text-9xl font-semibold'>
        <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-lighter font-Helvetica'>{item}</h1>
      </div>
    })}
    </div>
    <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
      {["see it through","i am the choosen one"].map((item,index)=>{
        return <p className='text-md font-thin tracking-tight leading-none'>{item}</p>
      })}
      <div className='start'>
        <div className='px-4 border-[1] border rounded-full'>Start the thing</div>
      </div>
    </div>
   </div>
   </>
  )
}

export default LandingPage