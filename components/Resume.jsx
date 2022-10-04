import React from 'react'
import Experience from './Experience'
import SectionTitle from './SectionTitle'
import SkillBar from './SkillBar'

const Resume = () => {
    return (
        <div className='min-h-full py-4 flex flex-col  items-center justify-center'>
            <SectionTitle title="MY RESUME" backgroundTitle="RESUME" />

            <div className="flex gap-4">
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