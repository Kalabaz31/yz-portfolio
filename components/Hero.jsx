import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import profile_image from "../public/profile.jpg"
import TypingText from './TypingText'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Hero = () => {

  return (
    <div className='
    flex flex-col gap-8 justify-center items-center h-[calc(100%-4rem)] h-[1200px]
    '>

      <div className=' relative w-52 h-52 flex justify-center items-center rounded-full relative overflow-hidden	' >
        <div className='h-full w-full absolute bg-gradient-to-b from-green-400/90 via-teal-600/60 to-green-900/40 motion-safe:animate-spin-2s'></div>
        <Image src={profile_image} width="195" height="195" className='absolute border-solid border-8 border-t-white rounded-full object-cover' />
      </div>

      <div className="animated-text text-4xl flex gap-4 font-bold">
        <div className="static-text">
          Hi, I am
        </div>
        <div className="dynamic-text text-green-400 ">
          <TypingText texts={["Younes Zahzouh", "Frontend Developer"]} fastDelay={40} slowDelay={130} />
        </div>
      </div>

      <p className='text-center w-3/4'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>

      <div className="socials flex justify-center items-center gap-4">
      <a className='group relative w-10 h-10 border-[1px] border-white/20 rounded flex overflow-hidden cursor-pointer'>
          <span className='absolute w-full h-full p-2 top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
            <AiFillLinkedin fontSize={20} />
          </span>

          <span className='absolute w-full h-full p-2 top-[100%] left-0 right-0 bottom-0 flex justify-center items-center bg-green-400  group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
            <AiFillLinkedin fontSize={20} className="text-slate-800	" />
          </span>
        </a>

        <a className='group relative w-10 h-10 border-[1px] border-white/20 rounded flex overflow-hidden cursor-pointer'>
          <span className='absolute w-full h-full p-2 top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
            <AiFillGithub fontSize={20} />
          </span>

          <span className='absolute w-full h-full p-2 top-[100%] left-0 right-0 bottom-0 flex justify-center items-center bg-green-400  group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
            <AiFillGithub fontSize={20} className="text-slate-800	" />
          </span>
        </a>
      </div>

    </div>
  )
}

export default Hero