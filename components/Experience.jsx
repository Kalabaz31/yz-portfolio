import React from 'react'

const Experience = () => {
    return (

        <div className='flex '>

            <span className="flex text-sm m-5 ml-0 px-2 py-1 rounded-full bg-white/10 h-full min-w-fit">
                2008 - 2010
            </span>
            <div className="flex relative py-8 items-start justify-center">

                <span className='w-24 h-1 bg-white/20 rounded'></span>
                <span className='w-1 h-[100%] bg-white/20 rounded absolute top-0'></span>


                <span className='w-6 h-6 border-4 bg-slate-900 border-gray-600 rounded-full absolute top-6'></span>

            </div>

            <div className='px-6 h-44 py-4'>
                <h2 className='text-xl text-green-400'>Higher School Graduation</h2>
                <p>Abc College.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
            </div>


        </div>


    )
}

export default Experience