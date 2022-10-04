import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
    return (
        <div className='min-h-full py-4 flex flex-col  items-center justify-center'>
            <SectionTitle title="ABOUT ME" backgroundTitle="ABOUT" />

            <div className='flex-col lg:flex-row px-4 flex gap-12 w-[100%]  items-center justify-center'>
                <div className=' bg-green-400/10 p-2 relative overflow-hidden rounded w-[100%] lg:max-w-[700px]'>
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
                        className='object-cover w-[100%] h-[100%]'
                    />
                </div>

                <div className="personal-details w-[100%] flex flex-col gap-8 justify-center tracking-wider">
                    <h2 className='text-2xl ' >Hi, I am <span className='text-green-400'> Younes Zahzouh </span> </h2>
                    <ul className='list-disc list-blue-800 text-xl flex flex-col gap-2 ml-6'>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> First name</span> <span className='text-gray-400'>: Younes</span> </li>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> Last name</span> <span className='text-gray-400'>: Zahzouh</span> </li>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> Age</span> <span className='text-gray-400'>: 26</span> </li>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> Nationality</span> <span className='text-gray-400'>: Algerian</span> </li>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> Languages</span> <span className='text-gray-400'>: Arabic, English</span> </li>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> Address</span> <span className='text-gray-400'>: Oran, Algeria</span> </li>
                        <li className='text-green-400' ><span className='text-gray-400 inline-flex w-[120px] '> First name</span> <span className='text-gray-400'>: Younes</span> </li>
                    </ul>
                    <a className='flex relative font-bold text-sm bg-green-400 rounded px-6 py-4 max-w-[fit-content] text-stone-900 overflow-hidden cursor-pointer
      after:content-[""] after:w-full after:h-full after:bg-white/90 after:absolute 
      after:top-0 after:left-0 after:scale-y-0 after:origin-bottom
      after:transition after:duration-500 after:ease-in-out
      hover:after:scale-y-100 hover:after:origin-top
      z-0
      '>
                        <span className='z-10 relative text-md'>DOWNLOAD RESUME </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About