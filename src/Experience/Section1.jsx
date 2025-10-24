import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Section1 = () => {
  const divRef = useRef(null)
  const textRef = useRef(null)
  useGSAP(() =>{
    const tl = gsap.timeline();
    // tl.to(divRef.current,{
    //   backgroundColor: "#bdbcbc",
    //   duration:1.5,
    //   delay:0.2
    // });
    tl.fromTo(textRef.current,{
      opacity: 0,
    }, {
      opacity: 1,
      duration:1.5
    },"0.5")
  },[])
  return (
    <div ref={divRef} className='w-full h-screen bg-[#1e1e1e] flex justify-center items-center'>
      <h2 ref={textRef} className='text-7xl font-semibold font-[orbitron]'>Initializing Realm<span className='animate-ping duration-200'>...</span></h2>
    </div>
  )
}

export default Section1