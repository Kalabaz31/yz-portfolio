import React from 'react'

const SkillBar = ({ name, percentage }) => {
    return (
        <div className='flex flex-col gap-2 '>
            <span> {name} </span>
            <div className={`flex bg-gray-100/10 w-[100%] h-4 rounded-full relative 
                        before:bg-green-400 before:content-[''] before:w-[] before:h-4 before:rounded-full`}>
            </div>
        </div>
    )
}

export default SkillBar