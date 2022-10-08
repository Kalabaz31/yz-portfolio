import React from 'react'

import { GoLinkExternal } from "react-icons/go"
import { AiFillGithub } from "react-icons/ai"

const ProjectCard = () => {
    return (
        <div className='group flex flex-col  p-4 bg-slate-800 rounded-xl max-w-[300px] border border-gray-700 hover:translate-y-[-10px] transition duration-300 ease-in-out '>

            <div className=' mb-4 overflow-hidden relative'>
                <img className='group-hover:blur-sm' src="https://tf-react-bieber.vercel.app/images/portfolios/portfolio-image-lg-18.jpg" alt="" />
                <div className='absolute top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-slate-900/70 flex gap-2 justify-center items-center translate-x-[-100%] group-hover:translate-x-0 transition ease-in-out duration-300'>
                    <button className='w-10 h-10 rounded-full bg-emerald-400 flex justify-center items-center text-slate-900 text-xl'>
                        <AiFillGithub />
                    </button>

                    <button className='w-10 h-10 rounded-full bg-emerald-400 flex justify-center items-center text-slate-900 text-xl'>
                        <GoLinkExternal />
                    </button>
                </div>
            </div>

            <h2 className='text-gray-300'>Candle</h2>
            <p className='text-sm text-gray-400'>Creative Candle Light</p>

        </div>
    )
}

export default ProjectCard