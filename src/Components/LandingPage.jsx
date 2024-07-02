import React from 'react'

const LandingPage = () => {
  return (
   <>
   <div className='w-full h-screen bg-zinc-900 pt-1'>
    <div className='textstructure mt-40 px-20'>
    {["we create" , "Eye Opening " , "Presentation "].map((item, index)=>{
      return <div className='masker'>
        <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-lighter font-sans'>{item}</h1>
      </div>
    })}
    </div>
   </div>
   </>
  )
}

export default LandingPage