import React from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
const Work = () => {
    return (
        <div className='min-h-full py-4 flex flex-col  items-center justify-center  min-h-[calc(100vh-4em)]'>
            <SectionTitle title="MY PROJECTS" backgroundTitle="PROJECTS" />

            <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>


        </div>
    )
}

export default Work