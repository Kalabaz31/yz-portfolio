import React from 'react'
import Experience from './Experience'
import SectionTitle from './SectionTitle'

const Resume = () => {
    return (
        <div id='RESUME' className='py-4  flex flex-col  items-center justify-start min-h-[calc(100vh-4em)] h-fit'>
            <SectionTitle title="MY RESUME" backgroundTitle="RESUME" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit">
                <div>

                    <Experience />
                    <Experience />
                    <Experience />

                </div>
                <div>

                    <Experience />
                    <Experience />
                    <Experience />

                </div>
            </div>


        </div>
    )
}

export default Resume