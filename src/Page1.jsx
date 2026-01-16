import React, { useRef, useState } from 'react'
// import Tilttext from './components/Tilttext'
import Pagebottom from './components/Pagebottom'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import Tilttext from './components/Tilttext';


const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)

  const mouseMoving=(e)=>{
// console.log(tiltRef.current.getBoundingClientRect());

setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2)/20);
setyVal((-e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2)/60);

// tiltRef.current.style.transform=`rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }

useGSAP(function(){
  gsap.to(tiltRef.current,{
    transform:`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
    duration:3,
    ease:'power4.out'
  })
},[xVal,yVal])

  return (
<div onMouseMove={(e)=>{
  mouseMoving(e)
}}  className='h-screen p-7 bg-white'>

  <div id='page1-in' className=' relative  bg-cover h-full w-full  p-24 shadow-xl shadow-gray-800 rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1863,h_933,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] '>
    <img  className='h-15  '  src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_49,h_39,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/LOGO%20WHITE_edited.png" alt="" />

<Tilttext abc={tiltRef} />
    <Pagebottom />
  </div>
</div>

  )
}

export default Page1