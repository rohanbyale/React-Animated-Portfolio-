import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from "gsap";


const Pagebottom = () => {

  useGSAP(function(){
    gsap.to('#banner img',{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:'linear'
    })
  })


  return (
  <div className=' absolute left-0 p-20 flex  items-end justify-between bottom-0 w-full '>
<div>
    <h2 className='text-3xl  font-[anzo1] ' > BRAND DESIGN | WEBSITE DESIGN </h2>
       <h2 className='text-3xl font-[anzo3] text-gray-400 ' > BESPOKE FREELANCE  </h2>
</div>
<div id='banner' className='  -translate-x-[-50px] ' >
    <img  className='mb-8 ' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
    <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
</div>
  </div>
  )
}

export default Pagebottom 