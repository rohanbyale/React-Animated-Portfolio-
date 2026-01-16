import React from 'react'

const Tilttext = (props) => {
  return (
<div  id='tiltDiv' ref={props.abc} className='mt-30' >
    <h1 className='text-[4vw] leading-[4vw] uppercase font-[anzo1]'> I AM <span className=' text-black' >DARK MODE</span> </h1>
    <h1 className='text-[8vw]  leading-[7vw]  font-[anzo1] ' >DESIGNER</h1>
    <h1 className='text-[4vw]  leading-[4vw] uppercase font-[anzo1]' > TO HIRE</h1>

 </div>
  )
}

export default Tilttext