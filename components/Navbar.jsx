import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import MovileMenuModal from './MobileMenuModal'
import MobileMenuModal from './MobileMenuModal'

const sections = [
  "HOME", "ABOUT", "RESUME", "WORKS", "CONTACT"
]


// translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) 
const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className=' sticky top-0 flex justify-between items-center w-100 p-4 h-16'>
        <div className='text-green-400 font-extrabold	text-3xl'>
          Younes.
        </div>
        <ul className='hidden lg:flex justify-between items-center gap-2'>
          {sections.map((section, index) => (
            <li key={index} className='group px-2 text-sm relative overflow-x-clip  overflow-y-visible	'>
              <a href={`#${section}`} className="relative after:content-[''] after:bg-green-400 after:absolute after:bottom-[-6px] after:left-0  after:w-full after:h-0.5
             after:scale-x-0 after:origin-top-right after:transition after:ease-in after:duration-300 after:opacity-0
             group-hover:after:origin-top-left group-hover:after:scale-100 group-hover:after:opacity-100
             "> <span className='text-green-400'>0{++index}. </span>{section}</a>
            </li>
          ))}
        </ul>

        <a className='hidden lg:flex relative font-bold text-sm bg-green-400 rounded px-3 py-2 text-stone-900 overflow-hidden cursor-pointer
      after:content-[""] after:w-full after:h-full after:bg-white/90 after:absolute 
      after:top-0 after:left-0 after:scale-y-0 after:origin-bottom
      after:transition after:duration-500 after:ease-in-out
      hover:after:scale-y-100 hover:after:origin-top
      z-0
      '>
          <span className='z-10 relative'>Hire ME</span>
        </a>


        <button onClick={() => setMobileMenuOpen(true)} className='flex lg:hidden relative font-bold text-sm bg-green-400/5 rounded px-3 py-2 text-green-400 overflow-hidden cursor-pointer
      after:content-[""] after:w-full after:h-full after:bg-white/90 after:absolute 
      after:top-0 after:left-0 after:scale-y-0 after:origin-bottom
      after:transition after:duration-500 after:ease-in-out
      hover:after:scale-y-100 hover:after:origin-top hover:text-stone-900 transition duration-500 ease-in-out
      z-0
      '>
          <span className=' z-10 relative'>  <AiOutlineMenu fontSize={24} /> </span>
        </button>


      </div>

      {/* <div className={`${mobileMenuOpen ? " scale-y-100  origin-bottom-right" : "scale-y-0 origin-top-left"}  z-20 absolute top-0 left-0 h-full w-full bg-slate-900 flex flex-col justify-center items-center gap-10 transition duration-300 ease-in-out opacity:100`}>
        <button onClick={() => setMobileMenuOpen(false)} className='absolute top-5 right-10'>Close</button>
        <ul className='flex flex-col justify-between items-center gap-5'>
          {sections.map((section, index) => (
            <li key={index} className='group px-2 text-lg relative overflow-x-clip  overflow-y-visible	'>
              <a href={`#${section}`} className="relative after:content-[''] after:bg-green-400 after:absolute after:bottom-[-6px] after:left-0  after:w-full after:h-0.5
             after:scale-x-0 after:origin-top-right after:transition after:ease-in after:duration-300 after:opacity-0
             group-hover:after:origin-top-left group-hover:after:scale-100 group-hover:after:opacity-100
             "> <span className='text-green-400'>0{++index}. </span>{section}</a>
            </li>
          ))}
        </ul>
        <a className='flex relative font-bold text-sm bg-green-400 rounded px-3 py-2 text-stone-900 overflow-hidden cursor-pointer
      after:content-[""] after:w-full after:h-full after:bg-white/90 after:absolute 
      after:top-0 after:left-0 after:scale-y-0 after:origin-bottom
      after:transition after:duration-500 after:ease-in-out
      hover:after:scale-y-100 hover:after:origin-top
      z-0
      '>
          <span className='z-10 relative'>Hire ME</span>
        </a>
      </div> */}


      <MobileMenuModal selector="#__next">
        <div className={`${mobileMenuOpen ? " scale-y-100 opacity-100 origin-bottom-right" : "scale-y-0 opacity-0 origin-top-left"}  text-white z-20 fixed top-0 left-0 h-full w-full bg-slate-900 flex flex-col justify-center items-center gap-10 transition duration-300 ease-in-out opacity:100`}>
          <button onClick={() => setMobileMenuOpen(false)} className='absolute top-5 right-10'>Close</button>
          <ul className='flex flex-col justify-between items-center gap-5'>
            {sections.map((section, index) => (
              <li key={index} className='group px-2 text-lg relative overflow-x-clip  overflow-y-visible	'>
                <a href={`#${section}`} className="relative after:content-[''] after:bg-green-400 after:absolute after:bottom-[-6px] after:left-0  after:w-full after:h-0.5
                 after:scale-x-0 after:origin-top-right after:transition after:ease-in after:duration-300 after:opacity-0
                 group-hover:after:origin-top-left group-hover:after:scale-100 group-hover:after:opacity-100
                 "> <span className='text-green-400'>0{++index}. </span>{section}</a>
              </li>
            ))}
          </ul>
          <a className='flex relative font-bold text-sm bg-green-400 rounded px-3 py-2 text-stone-900 overflow-hidden cursor-pointer
          after:content-[""] after:w-full after:h-full after:bg-white/90 after:absolute 
          after:top-0 after:left-0 after:scale-y-0 after:origin-bottom
          after:transition after:duration-500 after:ease-in-out
          hover:after:scale-y-100 hover:after:origin-top
          z-0
          '>
            <span className='z-10 relative'>Hire ME</span>
          </a>
        </div>



      </MobileMenuModal>
    </>
  )
}

export default Navbar