import React, { useEffect } from 'react'
import SectionTitle from './SectionTitle'
import SkillBar from './SkillBar'

const skills = [
    { href: "#git_", title: "Git" },
    { href: "#git_", title: "HTML" },
    { href: "#git_", title: "CSS" },
    { href: "#git_", title: "SASS" },
    { href: "#git_", title: "Redux" },
    { href: "#git_", title: "Redux Toolkit" },
    { href: "#git_", title: "Rtk Query" },
    { href: "#git_", title: "ReactJs" },
    { href: "#git_", title: "Javascript" },
    { href: "#git_", title: "Framer-Motion" },
    { href: "#git_", title: "TailwindCss" },
    { href: "#git_", title: "Socket.io" },
    { href: "#git_", title: "Axios" },
    { href: "#git_", title: "REST" },
    { href: "#git_", title: "NPM" },
    { href: "#git_", title: "Yarn" },
    { href: "#git_", title: "Webpack" },
    { href: "#git_", title: "Vite" },
    { href: "#git_", title: "SQL" },
    { href: "#git_", title: "NextJs" },
    { href: "#git_", title: "NodeJs" },
    { href: "#git_", title: "ExpressJs" },
];



const Skills = () => {


    useEffect(() => {
        console.log("Loading TagCanvas...");

        TagCanvas.wheelZoom = false;
        TagCanvas.textFont = "Raleway, sans-serif";
        TagCanvas.textColour = "white";
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
        <div className='min-h-full py-4 flex flex-col  items-center justify-center'>
            <SectionTitle title="MY SKILLS" backgroundTitle="SKILLS" />


            <div className='w-[100%] flex gap-8 flex-wrap h-full'>
                <div className='basis-[300px] flex-1  flex flex-col justify-evenly gap-4'>
                    <div className='flex flex-col gap-2 '>
                        <span> HTML & CSS / SASS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[90%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> React Js </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[85%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> NEXT JS </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[80%] before:h-1 before:rounded-full`}>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <span> Redux / Rtk Query </span>
                        <div className={`flex bg-gray-100/10 w-[100%] h-1 rounded-full relative 
    before:bg-green-400 before:content-[''] before:w-[85%] before:h-1 before:rounded-full`}>
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
                                zIndex: '99',
                                position: 'relative',
                                margin: '0 auto'
                            }}
                            className="to-fade-in fast-anim"
                        >
                        </canvas>
                    </div>
                    <div id="taglist" style={{ display: 'none' }}>
                        <ul>
                            {skills.map(skill => (
                                <li key={skill.title}><a href={skill.href}>{skill.title}</a></li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Skills