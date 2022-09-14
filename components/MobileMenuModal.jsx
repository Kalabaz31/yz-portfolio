import React from 'react'

const MobileMenuModal = ({ isModalOpen, }) => {

    if (!!isModalOpen) return null;
    
    return ReactDOM.createPortal(

        <div className={`${mobileMenuOpen ? " scale-y-100  origin-bottom-right" : "scale-y-0 origin-top-left"}  z-20 absolute top-0 left-0 h-full w-full bg-slate-900 flex flex-col justify-center items-center gap-10 transition duration-300 ease-in-out opacity:100`}>
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
        </div>,
        document.getElementById("modal")
    );
};


export default MobileMenuModal