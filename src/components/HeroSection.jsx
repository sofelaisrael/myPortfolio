import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tooltip from './Tooltip'
import sukuna from '../assets/sukuna.jfif'
import { ReactTyped } from 'react-typed'
import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import SplitText from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const HeroSection = () => {
    useEffect(() => {
        setInterval(() => {
            var dispt = new Date().toTimeString().split(':')
            document.querySelector('.hour').textContent = dispt[0]
            document.querySelector('.mins').textContent = dispt[1]
        }, 100);

    })
    useEffect(() => {
        setInterval(() => {
            var disp = new Date().toDateString()
            document.querySelector('.date').textContent = disp
        }, 100);

        const nav = document.querySelector('.nav')
        // const nav = document.querySelector('.nav')
        window.onscroll = () => {
            if (scrollY <= 50) {
                if (window.innerWidth >= 1024) {
                    nav.style.top = '40px'
                } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
                    nav.style.top = '90px'
                } else {
                    nav.style.top = '80px'
                }
            } else {
                if (window.innerWidth >= 1024) {
                    nav.style.top = '40px'

                } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
                    nav.style.top = '20px'
                } else {
                    nav.style.top = '10px'

                }

            }
        }
    })
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const line = document.querySelectorAll(".line")
        line.forEach(li => {
            li.style.display = 'inline-block'
            li.style.textAlign = 'left'
        })
    })
    return (
        <section id="home" className="hero-section top-0 md:h-[100vh] relative px-20 max-md:p-5 lg:pr-0 flex max-lg:flex-col py-40 bg-[#0a0a0a] overflow-hidden max-lg:justify-center max-md:py-40 max-lg:gap-5 max-lg:items-center z-[10000]">

            <div className="radgrad absolute top-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-md:w-[100vh] max-md:h-[100vh] left-0 bg-opacity-5" ></div>

            <div className="absolute h-[100vh] max-md:h-[100%] w-[100vw] z-[1] bgdrop top-0"></div>

            <div className="absolute max-md:h-[100%] w-[100vw] z-[1] bgdrop2 top-0"></div>

            <div className="tad absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] flex flex-col justify-center gap-1 z-[100] max-lg:hidden" >
                <span className="leading-[50px] text-center hour"></span>
                <span className="leading-[50px] mins text-center"></span>
            </div>

            <div className="left w-1/3 z-2 max-lg:w-full relative z-[1000] max-lg:text-center self-center">
                <div className="tell hand backdrop-blur-[5px] border border-[#2d2d2d]">
                    <span>This developer has no pictures</span>
                </div>
                <div className="w-36 max-md:w-28 max-md:h-28 photo h-36 z-[10000000] rounded-full my-5 max-lg:mx-auto overflow-hidden">
                    <img src={sukuna} className="h-[100%] object-cover" alt="" />
                </div>


                <div className="flex max-lg:w-fit max-lg:mx-auto relative md:items-end gap-7 text-[50px] font-bold max-md:text-[30px] join max-md:py-2">

                    Hello! I'm Sofela Israel
                </div>
                <ReactTyped strings={[
                    'Web Developer',
                    'Chess Enthusiast',
                    'MERN Stack Developer',
                    'Freelancer',
                    'Otaku'
                ]} loop backSpeed={30} typeSpeed={50} />
            </div>

            <div className="check max-md:pb-10 flex gap-5 mt-3 lg:absolute top-[70%] max-lg:justify-center left-1/2 z-[1000] lg:-translate-x-1/2 max-md:pt-5">
                <Link to={'https://github.com/sofelaisrael'} target='_blank'>
                    <Tooltip name={'Github'} bg='black' border={true}>
                        <FaGithub />
                    </Tooltip>
                </Link>

                <Link to={'https://x.com/Sofelaa1?s=09'} target='_blank'>
                    <Tooltip name={'Twitter'} bg='[#1da1f2]' border={true}>
                        <AiFillTwitterSquare />
                    </Tooltip>
                </Link>
                <Link to={'https://www.linkedin.com/in/sofela-israel-570851263?utm_source&utm_source=share&utm_content=profile7utm_medium=android_app'} target='_blank'>
                    <Tooltip name={'LinkedIn'} bg='[#0e76a8]' border={true}>
                        <BsLinkedin />
                    </Tooltip>
                </Link>
            </div>

            <div className="right max-lg:text-center max-lg:w-full max-md:gap-5 w-2/3 flex flex-col items-end z-[200] relative self-center p-5">
                <div className="leading-[40px] text-[40px] flex grad max-md:text-[24px] max-md:leading-[20px] py-5 w-1/2 max-lg:w-[80vw] max-md:mx-auto max-lg:flex max-lg:px-20 max-md:p-0 justify-center">
                    A MERN stack developer based in Lagos, Nigeria
                </div>
                <div className="text-[16px] max-md:text-[12px] w-1/2 max-lg:w-full max-lg:px-20 max-md:p-0">
                    Transforming Concepts into Seamless User Experiences, I prioritize client collaboration, fostering open communications
                </div>
            </div>
        </section>
    )
}

export default HeroSection
