import React from 'react'
import SectionTitle from './SectionTitle'
import SkillBar from './SkillBar'

const Skills = () => {
    return (
        <div className='min-h-full py-4 flex flex-col  items-center justify-center'>
            <SectionTitle title="MY SKILLS" backgroundTitle="SKILLS" />


            <div className='w-[100%] flex gap-8 flex-wrap '>
                <div className='basis-[300px] flex-1  flex flex-col gap-4'>

                    <div className='flex flex-col gap-2 '>
                        <span> Javascript </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[85%] before:h-4 before:rounded-full`}>
                        </div>
                    </div>


                    <div className='flex flex-col gap-2 '>
                        <span> REACT JS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[80%] before:h-4 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> NEXT JS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[60%] before:h-4 before:rounded-full`}>
                        </div>
                    </div>

                </div>


                <div className='basis-[300px] flex-1  flex flex-col gap-4'>

                    <div className='flex flex-col gap-2 '>
                        <span> Javascript </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[85%] before:h-4 before:rounded-full`}>
                        </div>
                    </div>


                    <div className='flex flex-col gap-2 '>
                        <span> REACT JS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[80%] before:h-4 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> NEXT JS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[60%] before:h-4 before:rounded-full`}>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Skills