import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='w-full py-4 border-t border-gray-700 '>
            <div className='container mx-auto flex justify-between items-center'>
                <div className="socials flex justify-center items-center gap-4">
                    <a className='group relative w-10 h-10 border-[1px] border-white/20 rounded flex overflow-hidden cursor-pointer'>
                        <span className='absolute w-full h-full p-2 top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
                            <AiFillLinkedin fontSize={20} />
                        </span>

                        <span className='absolute w-full h-full p-2 top-[100%] left-0 right-0 bottom-0 flex justify-center items-center bg-emerald-400  group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
                            <AiFillLinkedin fontSize={20} className="text-slate-800	" />
                        </span>
                    </a>

                    <a className='group relative w-10 h-10 border-[1px] border-white/20 rounded flex overflow-hidden cursor-pointer'>
                        <span className='absolute w-full h-full p-2 top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
                            <AiFillGithub fontSize={20} />
                        </span>

                        <span className='absolute w-full h-full p-2 top-[100%] left-0 right-0 bottom-0 flex justify-center items-center bg-emerald-400  group-hover:translate-y-[-100%] transition ease-in-out duration-300'>
                            <AiFillGithub fontSize={20} className="text-slate-800	" />
                        </span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer