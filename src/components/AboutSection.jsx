import React, { useEffect } from 'react'
import Tooltip from './Tooltip'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJsBadge, DiReact } from 'react-icons/di'
import { SiBootstrap, SiExpress, SiGreensock, SiJquery, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import { IoCopyOutline, IoLogoNodejs } from 'react-icons/io5'
import SplitText from 'split-type'
import gsap from 'gsap'


const AboutSection = () => {
    useEffect(() => {
        const runAnim = () => {
            const lines = document.querySelectorAll('#skills > .line')
            lines.forEach(line => {
                gsap.to(`#skills .line .line-mask`, {
                    scrollTrigger: {
                        trigger: `#skills`,
                        start: 'clamp(top 20%)',
                        end: 'clamp(600px center)',
                        scrub: true,
                    },
                    width: '0%',
                    duration: 4,
                    stagger: 1
                })
            })
        }
        let skills;
        const runSplit = () => {
            skills = new SplitText('#skills', { type: 'lines, words' })

            const lines = document.querySelectorAll('#skills .line')
            lines.forEach(line => {
                const newDiv = document.createElement('div')
                newDiv.classList.add('line-mask')
                line.append(newDiv)
            })
            runAnim()
        }
        runSplit()
        window.addEventListener('resize', () => {
            skills.revert()
            runSplit()
        })

    })
    const copy = () => {
        navigator.clipboard.writeText('sofelaisrael@gmail.com')
        const copytextspan = document.querySelector('.copy span')
        copytextspan.textContent = 'copied'
        setTimeout(() => {
            copytextspan.textContent = 'copy my email address'
        }, 2000);
    }
    return (
        <section className="about-me relative px-10 max-md:px-2 bg-[#0a0a0a]" id="about">
            {/* <div className="absolute marq -top-28 max-md:hidden -left-[130%] z-[3] blur-sm opacity-0">ABOUT ME</div> */}

            <div className="heading text-[50px] max-md:text-[28px]">
                <span className="pl-5">//</span>
                About Me
                <span id='hash' className="text-[#ff00ff] hash relative">#</span>
            </div>

            <div className="flex max-lg:flex-col">
                <div id="skills" className="skills pt-32 rounded-[30px] text-[60px] lg:w-[60%] max-lg:w-[90%] md:px-10 px-5 pb-10 font-extrabold leading-[65px] backdrop-blur-sm max-md:leading-[40px] border-0 max-md:text-[40px]">
                    Passionate and Creative Full Stack Developer
                    having Proficiency in MERN Stack. Attired with a variety of tools and technologies  and keen to learn a new one.
                </div>

                <div className="flex jus items-end max-lg:py-5 lg:pl-10 gap-5 lg:w-[40%]">
                    <div className="tool text-[30px] rounded-[30px] flex flex-col h-[300px] w-full lg:justify-center p-5 border-[#2e2e2e] relative border">
                        <div className="text-sm text-[#ffffff7c]">I constantly try to improve</div>
                        <div className="d">My tech stack</div>
                        <div className="languages flex flex-wrap py-2 pt-4 gap-3">
                            <Tooltip name='HTML'>
                                <AiFillHtml5 />
                            </Tooltip>
                            <Tooltip name='CSS'>
                                <DiCss3 />
                            </Tooltip>
                            <Tooltip name='Javascript'>
                                <DiJsBadge />
                            </Tooltip>
                            <Tooltip name='Redux'>
                                <SiRedux />
                            </Tooltip>
                            <Tooltip name='GSAP'>
                                <SiGreensock />
                            </Tooltip>
                            <Tooltip name='NextJS'>
                                <TbBrandNextjs />
                            </Tooltip>
                            <Tooltip name='ReactJS'>
                                <DiReact />
                            </Tooltip>
                            <Tooltip name='Git'>
                                <BsGit />
                            </Tooltip>
                            <Tooltip name='Bootstrap'>
                                <SiBootstrap />
                            </Tooltip>
                            <Tooltip name='JQuery'>
                                <SiJquery />
                            </Tooltip>
                            <Tooltip name='TailwindCSS'>
                                <SiTailwindcss />
                            </Tooltip>
                            <Tooltip name='MongoDB'>
                                <SiMongodb />
                            </Tooltip>
                            <Tooltip name='ExpressJS'>
                                <SiExpress />
                            </Tooltip>
                            <Tooltip name='NodeJS'>
                                <IoLogoNodejs />
                            </Tooltip>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex lg:py-5">
                <div className="flex justify-between gap-5 max-sm:flex-col">
                    <div className="tool border -10 text-[30px] max-md:text-[24px] p-5 text-center pt-10 font-bold leading-[30px] rounded-[30px] flex-grow  w-full border-[#2e2e2e] ">
                        <div className="ques text-[32px] max-md:text-[24px] grad">
                            Do you want to build a project together...?
                        </div>
                        <div className="copy text-[16px] p-3 flex gap-3 justify-center items-center border w-fit mx-auto rounded-full mt-10" onClick={copy}>
                            <IoCopyOutline />
                            <span>copy my email address</span>
                        </div>

                    </div>

                    <div className="last border text-[30px] max-md:text-[24px] rounded-[30px] flex flex-col flex-grow w-full justify-center p-5 border-[#2e2e2e] relative overflow-hidden">
                        <div className="d font-bold text-center px-5 z-20">Tech Enthusiast with a passion for Development</div>
                        <div className="spinner absolute left-[90%]">
                            <div className="spinner1"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection
