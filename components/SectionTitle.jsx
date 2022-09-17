import React from 'react'

const SectionTitle = ({ title, backgroundTitle }) => {
    return (
        <div className="relative text-4xl relative w-[75%] h-[150px] flex-col flex justify-center items-center ">
            <div className='relative z-10 font-bold'>
                <h1> {title} </h1>
                <span className='relative mx-4 my-4  inset-x-0	w-[150px] h-[8px] rounded-full bg-green-400/20 overflow-hidden
                flex justify-center
                after:content-[""] after:w-[8px] after:h-[8px] after:bg-green-400 after:absolute after:left-0 after:top-0 after:rounded after:animate-translateXAnimation
                '>

                </span>
            </div>
            <span className='absolute left-0 right-0 z-0  w-full text-[120px] font-bold  text-center  text-white/5'>
                {backgroundTitle}
            </span>
        </div>
    )
}

export default SectionTitle