import React, { useEffect } from 'react'
import SectionTitle from './SectionTitle'

const skills = [
    { href: "#_", title: "Git" },
    { href: "#_", title: "HTML" },
    { href: "#_", title: "CSS" },
    { href: "#_", title: "SASS" },
    { href: "#_", title: "Redux" },
    { href: "#_", title: "Redux Toolkit" },
    { href: "#_", title: "Rtk Query" },
    { href: "#_", title: "ReactJs" },
    { href: "#_", title: "Javascript" },
    { href: "#_", title: "Framer-Motion" },
    { href: "#_", title: "TailwindCss" },
    { href: "#_", title: "Socket.io" },
    { href: "#_", title: "Axios" },
    { href: "#_", title: "REST" },
    { href: "#_", title: "NPM" },
    { href: "#_", title: "Yarn" },
    { href: "#_", title: "Webpack" },
    { href: "#_", title: "Vite" },
    { href: "#_", title: "SQL" },
    { href: "#_", title: "NextJs" },
    { href: "#_", title: "NodeJs" },
    { href: "#_", title: "ExpressJs" },
];



const Skills = () => {


    useEffect(() => {
        console.log("Loading TagCanvas...");

        TagCanvas.wheelZoom = false;
        TagCanvas.textFont = "Raleway, sans-serif";
        TagCanvas.textColour = "#34D399";
        TagCanvas.textHeight = 26;
        TagCanvas.outlineMethod = "size";
        TagCanvas.outlineIncrease = 10;
        TagCanvas.maxSpeed = 0.03;
        TagCanvas.minBrightness = 0.2;
        TagCanvas.depth = 0.92;
        TagCanvas.pulsateTo = 0.6;
        TagCanvas.initial = [0.1, -0.1];
        TagCanvas.decel = 0.98;
        TagCanvas.reverse = true;
        TagCanvas.hideTags = false;
        TagCanvas.shadow = false;
        TagCanvas.shadowBlur = 3;
        TagCanvas.weight = false;
        TagCanvas.imageScale = null;
        TagCanvas.fadeIn = 1000;
        TagCanvas.clickToFront = 600;
        TagCanvas.width = window.innerWidth;
        TagCanvas.height = window.innerHeight;

        try {
            TagCanvas.Start("tagcanvas", "taglist");
        } catch (e) {
            console.log("Canvas error.");
            console.log(e);
        }
    }, [])





    return (
        <div id="SKILLS" className='py-4 flex flex-col  items-center justify-center  min-h-[calc(100vh-4em)] '>
            <SectionTitle title="MY SKILLS" backgroundTitle="SKILLS" />


            <div className='w-[100%] flex gap-8 flex-wrap h-fit  '>
                <div className='basis-[300px] flex-1  flex flex-col justify-center gap-8 '>
                    <div className='flex flex-col gap-2 '>
                        <span> HTML & CSS / SASS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-emerald-400 before:content-[''] before:w-[90%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> React Js </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-emerald-400 before:content-[''] before:w-[85%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> NEXT JS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-emerald-400 before:content-[''] before:w-[80%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> Redux / Rtk Query </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-emerald-400 before:content-[''] before:w-[85%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                </div>


                <div className='basis-[300px] flex-1  flex flex-col gap-4'>

                    <div id="skill-sphere" className={`flex`}>
                        <canvas
                            id="tagcanvas"
                            width="820"
                            height="600"
                            style={{
                                maxWidth: '1000px',
                                width: '100%',
                                zIndex: '10',
                                position: 'relative',
                                margin: '0 auto',
                                color: "green"
                            }}
                            className="to-fade-in fast-anim"
                        >
                        </canvas>
                    </div>
                    <div id="taglist" style={{ display: 'none' }}>
                        <ul>
                            {skills.map(skill => (
                                <li key={skill.title} ><a c href={skill.href}>{skill.title}</a></li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Skills