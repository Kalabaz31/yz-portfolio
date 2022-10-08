import React from 'react'
import SectionTitle from './SectionTitle'
const Contact = () => {
    return (
        <div id="CONTACT" className=' py-4 flex flex-col  items-center justify-center  min-h-[calc(100vh-4em)] '>
            <SectionTitle title="CONTACT US" backgroundTitle="CONTACT" />


            <form className='bg-slate-800/50 p-4 rounded-md w-full max-w-[600px] flex flex-col gap-6'>

                <div className="flex flex-col gap-2 text-gray-300  w-full">
                    <label htmlFor="name" className='text-sm'>Name</label>
                    <input name="name" type="text" placeholder='Enter your name...' className='bg-slate-600/10 p-2 text-gray-300 outline-0 rounded border border-slate-700  focus:border-emerald-400' />
                </div>

                <div className="flex flex-col gap-2 text-gray-300 w-full">
                    <label htmlFor="name" className='text-sm'>Email</label>
                    <input name="name" type="text" placeholder='Enter your email...' className='bg-slate-600/10 p-2 text-gray-300 outline-0 rounded border border-slate-700  focus:border-emerald-400' />
                </div>
                <div className="flex flex-col gap-2 text-gray-300 w-full">
                    <label htmlFor="name" className='text-sm'>Subject</label>
                    <input name="name" type="text" placeholder='Enter subject...' className='bg-slate-600/10 p-2 text-gray-300 outline-0 rounded border border-slate-700  focus:border-emerald-400' />
                </div>

                <div className="flex flex-col gap-2 text-gray-300 w-full">
                    <label htmlFor="name" className='text-sm'>Message</label>
                    <textarea name="name" type="textarea" placeholder='Enter your message...' className='min-h-44 bg-slate-600/10 p-2 text-gray-300 outline-0 rounded border border-slate-700  focus:border-emerald-400' />
                </div>

                <button type="submit" className='max-w-fit flex relative font-bold text-sm bg-emerald-400 rounded px-3 py-2 text-stone-900 overflow-hidden cursor-pointer
                            after:content-[""] after:w-full after:h-full after:bg-white/90 after:absolute 
                            after:top-0 after:left-0 after:scale-y-0 after:origin-bottom
                            after:transition after:duration-500 after:ease-in-out
                            hover:after:scale-y-100 hover:after:origin-top
                            z-0
                '>
                    <span className='z-10 relative px-2 py-1'>Send Mail</span>
                </button>

            </form>


        </div>
    )
}

export default Contact