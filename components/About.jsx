import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
    return (
        <div className='min-h-full py-4 flex flex-col  items-center'>
            <SectionTitle title="ABOUT ME" backgroundTitle="ABOUT" />

            <div className='bg-green-400/10 p-2 relative overflow-hidden rounded w-[100%] max-w-[700px]'>
                <div className='absolute top-0 left-0 w-full h-[8px] animate-translate_x_100'>
                    <span className='absolute top-0 left-0  w-[35px] h-[8px]  rounded bg-gradient-to-r from-transparent to-green-400'></span>
                </div>

                <div className='absolute bottom-0 left-0 w-full h-[8px] animate-translate_x_100_reverse'>
                    <span className='absolute top-0 left-0 w-[35px] h-[8px]  rounded bg-gradient-to-r from-green-400 to-transparent'></span>
                </div>

                <div className='absolute top-0 right-0 h-full w-[8px] animate-translate_y_100'>
                    <span className='absolute top-0 left-0 h-[35px] w-[8px]  rounded bg-gradient-to-t from-green-400 to-transparent'></span>
                </div>

                <div className='absolute top-0 left-0 h-full w-[8px] animate-translate_y_100_reverse'>
                    <span className='absolute bottom-0 left-0 h-[35px] w-[8px]  rounded bg-gradient-to-b from-green-400 to-transparent'></span>
                </div>

                <img src="https://tf-react-bieber.vercel.app/images/about-image.jpg" alt="" 
                className='object-cover'
                />
            </div>
        </div>
    )
}

export default About