import { BsCheckLg } from "react-icons/bs"; 
import React, { useState, useEffect, useRef } from 'react'
import Tooltip from './Tooltip'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJsBadge, DiReact } from 'react-icons/di'
import { SiBootstrap, SiExpress, SiGreensock, SiJquery, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import { IoCopyOutline, IoLogoNodejs } from 'react-icons/io5'
import SplitText from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import '../App.css'


const AboutSection = ({ reff }) => {
    const copied = useRef(false)
    useEffect(() => {
        const skills = new SplitText('#skills')
        const skillsmobile = new SplitText('#skills1')
        gsap.registerPlugin(ScrollTrigger)

        skills.lines.forEach(word => {

            gsap.from(word, {
                scrollTrigger: {
                    trigger: word,
                    start: 'top 70%',
                    end: 'bottom 50%',
                    scrub: true
                },
                backgroundPositionX: '100%',
                duration: 10,
            })

        })
        skillsmobile.lines.forEach(word => {

            gsap.from(word, {
                scrollTrigger: {
                    trigger: word,
                    start: 'top 70%',
                    end: 'bottom 50%',
                    // scrub: true
                },
                backgroundPositionX: '100%',
                duration: 0.7,
            })

        })
        const stack = new SplitText('.stack')
        const last = new SplitText('.last')

        gsap.from(stack.words, {
          scrollTrigger: {
            trigger: '.stackdiv',
            start: 'center 90%',
            end: 'center 25%',
            toggleActions: 'play reverse restart reverse'
          },
          opacity: 0,
          yPercent: 100,
          duration: 0.1,
          ease: 'back.out',
          stagger: { amount: 0.5 }
        })


        gsap.from(last.words, {
          scrollTrigger: {
            trigger: '.lastdiv',
            start: 'center 90%',
            end: 'center 25%',
            toggleActions: 'play pause pause pause'
          },
          opacity: 0,
          yPercent: 100,
          duration: 0.1,
          ease: 'back.out',
          stagger: { amount: 0.5 }
        })
    })

    const copy = () => {
        navigator.clipboard.writeText('sofelaisrael@gmail.com')
        const copytextspan = document.querySelector('.copy span')
        copytextspan.textContent = 'copied'
        copied.current = true
        setTimeout(() => {
            copytextspan.textContent = 'copy my email address'
            copied.current = false
        }, 2000);
    }

    return (
        <section className="about-me relative px-10 max-md:px-2 bg-[#0a0a0a]" id="about">
            <div className="heading text-[50px] max-md:text-[28px]">
                <span className="pl-5">//</span>
                About Me
                <span id='hash' className="text-[#ff00ff] hash relative">#</span>
            </div>
            <div className="deafult"></div>

            <div className="flex tup max-lg:flex-col">
                <div id="skills" className="skills max-md:hidden pt-16 md:pt-32 rounded-[30px] text-[60px] lg:w-[60%] max-lg:w-[100%] md:px-10 px-5 pb-10 font-extrabold leading-[65px] backdrop-blur-sm max-md:leading-[40px] border-0 max-md:text-[40px]">
                    Passionate and Creative Full Stack Developer
                    having Proficiency in MERN Stack. Attired with a variety of tools and technologies  and keen to learn a new one.
                </div>

                <div id="skills1" className="skills md:hidden pt-16 md:pt-32 rounded-[30px] px-5 pb-10 font-extrabold backdrop-blur-sm leading-[40px] border-0 text-[32px]">
                    Passionate and Creative Full Stack Developer
                    having Proficiency in MERN Stack. Attired with a variety of tools and technologies  and keen to learn a new one.
                </div>

                <div className="flex jus items-end max-lg:py-5 lg:pl-10 gap-5 lg:w-[40%]">
                    <div className="stackdiv text-[30px] rounded-[30px] flex flex-col h-[300px] w-full lg:justify-center p-5 border-[#2e2e2e] relative border">
                        <div className="text-sm text-[#ffffff7c] stack">I constantly try to improve</div>
                        <div className="d stack">My tech stack</div>
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

            <div className="flex bt lg:py-5">
                <div className="flex justify-between overflow-hidden gap-5 max-sm:flex-col">
                    <div className="border -10 text-[30px] max-md:text-[24px] p-5 text-center pt-10 font-bold relative leading-[30px] rounded-[30px] flex-grow  w-full border-[#2e2e2e] ">
                        <div className="ques text-[32px] max-md:text-[24px] grad">
                            Do you want to build a project together...?
                        </div>
                        <div className="copy text-[16px] p-4 flex gap-3 justify-center items-center border w-fit mx-auto rounded-full mt-10" onClick={copy}>
                            {
                                copied.current ? <BsCheckLg /> : <IoCopyOutline />
                            }
                            
                            <span>copy my email address</span>
                        </div>

                    </div>

                    <div className="lastdiv border text-[30px] max-md:text-[24px] rounded-[30px] flex flex-col flex-grow w-full justify-center p-5 border-[#2e2e2e] relative overflow-hidden">
                        <div className="d last font-bold max-md:text-[16px] text-center px-5 z-20">Tech Enthusiast with a passion for Development</div>
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
