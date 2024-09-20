import { CgArrowLongRight } from "react-icons/cg";
import { IoCopyOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiJquery, SiBootstrap, SiGreensock } from "react-icons/si";
import { DiCss3, DiReact, DiJsBadge } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsLinkedin, BsGit } from "react-icons/bs";
import React, { useEffect, useRef, useState } from 'react'
import SplitText from 'split-type'
import gsap from 'gsap'
import { ReactTyped } from 'react-typed'
import { ScrollTrigger } from "gsap/all";
import Tooltip from "./Tooltip";
import mount from '../assets/proj.png'

const Home = () => {
    // useEffect(() => {
    //     let bg = document.querySelector('.para')
    //     const mount = document.querySelector('.mount')
    //     mount.onmousemove = (e) => {
    //         const rect = bg.getBoundingClientRect()

    //         const x = e.clientX - rect.left
    //         const y = e.clientY - rect.top

    //         const xp = x / rect.width * 100
    //         const yp = y / rect.height * 100

    //         mount.style.transformOrigin = `${xp}% ${yp}%`
    //         mount.style.transform = 'scale(1.2)'
    //     }
    //     // let dark = document.querySelector('.dar')
    //     window.addEventListener('scroll', function () {
    //         let val = this.window.scrollY
    //         bg.style.top = val * 0.25 + 'px'
    //         // dark.style.top = val * 0.25 + 'px'
    //     })
    // })

    // useEffect(() => {
    //     let width = 145;
    //     let height = 28;

    //     let fireChars = " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@"
    //     let maxCharIndex = fireChars.length

    //     let firePixelsArray = [];

    //     for (let i = 0; i < width * height + 1; i++) {
    //         firePixelsArray[i] = 0;
    //     }

    //     const generateFire = () => {
    //         let fireString = "";

    //         for (let i = 0; i < width; i++) {
    //             let randomCol = Math.floor(Math.random() * width);
    //             let index = randomCol + width * (height - 1);
    //             firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
    //         }

    //         for (let i = 0; i < width; i++) {
    //             let randomCol = Math.floor(Math.random() * width);
    //             let index = randomCol + width * (height - 1);
    //             firePixelsArray[index] = 0;
    //         }

    //         for (let i = 0; i < width * (height - 1); i++) {
    //             let averageValue =
    //                 (firePixelsArray[i] +
    //                     firePixelsArray[i + 1] +
    //                     firePixelsArray[i + width] +
    //                     firePixelsArray[i + width + 1]) /
    //                 4;

    //             firePixelsArray[i] = Math.floor(averageValue);

    //             fireString += fireChars[firePixelsArray[i]];
    //             if (i % width === 0) fireString += `\n`;
    //         }

    //         document.getElementById("fire").innerText = fireString;
    //         setTimeout(generateFire, 30);
    //     };

    //     generateFire();
    // }, [])
    useEffect(() => {
        const text = new SplitText('#name', { type: 'chars' })
        gsap.to(text.chars, {
            opacity: 1,
            y: 0,
            ease: 'back',
            duration: 0.12,
            stagger: 0.03,
            delay: 0.5
        })
        gsap.to(text.chars, {
            opacity: 0,
            y: 400,
            delay: 5,
            duration: 0.12,
            stagger: 0.03,
        })
        const text2 = new SplitText('#name2', { type: 'chars' })
        gsap.to(text2.chars, {
            opacity: 1,
            y: 0,
            ease: 'back',
            duration: 0.12,
            stagger: 0.03,
            delay: 5,
        })
        setTimeout(() => {
            text2.revert()
        }, 10000);
        const cont = new SplitText(".content", { type: 'chars' })
        gsap.from(cont.chars, {
            opacity: 0.4,
            duration: 0.02,
            stagger: 0.02,
            delay: 0
        })


        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.marq', {
            scrollTrigger: {
                start: 'center 60%',
                scrub: true,
                end: 'bottom 30%',
                trigger: '.marq',

            },
            x: '170%',
            opacity: 1,
            ease: 'linear',
            duration: 2
        })

        gsap.fromTo('.one div', {
            y: '0px',
            // top: '100%',
            duration: 12,
            repeat: -1
        }, {
            y: '-1180px',
            ease: 'linear',
            // top: 0,
            duration: 12,
            repeat: -1
        })
        gsap.fromTo('.two div', {
            y: '-1190px',
            ease: 'linear',
            // top: 0,
            duration: 12,
            repeat: -1
        }, {
            y: '0px',
            // top: '100%',
            ease: 'linear',
            duration: 12,
            repeat: -1
        })

        // gsap.fromTo('.top', {
        //     scrollTrigger: {
        //         trigger: '.naag',
        //         start: 'center bottom',
        //         end: 'center 60%',
        //         scrub: true,
        //     },
        //     x: '400%',
        //     opacity: 0,
        //     ease: 'linear',
        //     duration: 2
        // }, {
        //     scrollTrigger: {
        //         trigger: '.naag',
        //         start: 'center bottom',
        //         end: 'center 60%',
        //         scrub: true,
        //     },
        //     x: '0%',
        //     ease: 'linear',
        //     opacity: 1,
        //     duration: 2
        // })
        // gsap.fromTo('.bottom', {
        //     scrollTrigger: {
        //         trigger: '.naag',
        //         start: 'center bottom',
        //         end: 'center 60%',
        //         scrub: true,
        //     },
        //     x: '-250%',
        //     opacity: 0,
        //     ease: 'power2.in',
        //     duration: 2
        // }, {
        //     scrollTrigger: {
        //         trigger: '.naag',
        //         start: 'center bottom',
        //         end: 'center 60%',
        //         scrub: true,
        //     },
        //     x: '0%',
        //     ease: 'power2.in',
        //     opacity: 1,
        //     duration: 2
        // })

        const runAnim = () => {
            const lines = document.querySelectorAll('#skills .line')
            lines.forEach(line => {
                const target = line.querySelector('.line-mask')

                gsap.to('#skills .line .line-mask', {
                    scrollTrigger: {
                        trigger: `#skills`,
                        start: 'top center',
                        end: '500px center',
                        scrub: true,
                    },
                    width: '0%',
                    duration: 4,
                    // delay: 1,
                    stagger: 1
                })

                // let tl = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: `#skills .line`,
                //         start: 'top center',
                //         end: '500px center',
                //         scrub: true,
                //         // toggleActions: 'play reverse play pause',
                //         markers: true
                //     }
                // })
                // tl.to(`#skills .${target.classList.value}`, {
                //     width: '0%',
                //     duration: 4,
                //     // delay: 1,
                //     stagger: 0.3
                // })

            })
        }
        let skills;
        const runSplit = () => {
            skills = new SplitText('#skills', { type: 'lines, words' })

            const lines = document.querySelectorAll('.line')
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

        let tar = gsap.utils.toArray('.reveal')
        tar.forEach((obj, i) => {
            gsap.from(obj, {
                ScrollTrigger: {
                    trigger: obj,
                    start: 'top center',
                },
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 2,
                ease: 'power4.out'
            })
        })


        // gsap.from('.hero-section', {
        //     y: 300,
        //     opacity: 0,
        //     duration: 1,
        //     ease: 'back',
        //     delay: 0.1
        // })

        const line = document.querySelectorAll(".line")
        line.forEach(li => {
            li.style.display = 'inline-block'
            li.style.textAlign = 'left'
        })
    })
    useEffect(() => {
        // const cursor = document.querySelector('#magicMouseCursor')
        // cursor.style.visibility = 'hidden'


        // window.onmousemove = () => {
        //     cursor.style.visibility = 'visible'
        // }

        const icon = document.querySelectorAll('.icons')
        icon.forEach(ic => {
            ic.onmouseover = () => {
                ic.classList.add('active')
            }
            ic.onmouseout = () => {
                ic.classList.remove('active')
            }
        })
    })
    // useEffect(() => {
    //     document.getElementById('card').onmousemove = (e) => {
    //         for (const card of document.querySelectorAll('.card')) {
    //             const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top

    //             card.style.setProperty('--mouse-x', `${x}px`)
    //             card.style.setProperty('--mouse-y', `${y}px`)
    //         }
    //     }
    // })
    useEffect(() => {
        window.onmousemove = () => {
            for (const card of document.querySelectorAll('.naag in')) {
                card.style.setProperty('--cp', `0%`)
            }
        }

        document.querySelector('.naag').onmousemove = (e) => {
            for (const card of document.querySelectorAll('.naag div')) {
                const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top

                setTimeout(() => {
                    card.style.transition = 'none'
                }, 400);
                card.style.setProperty('--cp', `15%`)
                card.style.setProperty('--cx', `${x}px`)
                card.style.setProperty('--cy', `${y}px`)
            }
        }
        document.querySelector('.naag').onmouseleave = (e) => {
            for (const card of document.querySelectorAll('.naag div')) {
                card.style.transition = 'all 100ms'

                card.style.setProperty('--cp', `0%`)
            }
        }

    })
    useEffect(() => {
        setInterval(() => {
            var dispt = new Date().toTimeString().split(':')
            document.querySelector('.hour').textContent = dispt[0]
            document.querySelector('.mins').textContent = dispt[1]
        }, 100);

    })
    // useEffect(() => {
    //     const img = document.querySelector('.bimg')
    //     img.onmousemove = (e) => {
    //         const rect = img.getBoundingClientRect()
    //         const x = e.clientX - rect.left
    //         const y = e.clientY - rect.top

    //         const xPer = x / rect.width * 100
    //         const yPer = y / rect.height * 100

    //         img.style.transformOrigin = `${xPer}% ${yPer}%`
    //         img.style.transform = 'scale(1.1)'
    //     }
    // })
    // useEffect(() => {

    //     let proxy = {
    //         skew: 2
    //     },
    //         skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
    //         clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees. 

    //     ScrollTrigger.create({
    //         onUpdate: (self) => {
    //             let skew = clamp(self.getVelocity() / -1000);
    //             if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //                 proxy.skew = skew;
    //                 gsap.to(proxy, {
    //                     skew: 0,
    //                     duration: 1,
    //                     ease: "power3",
    //                     overwrite: true,
    //                     onUpdate: () => skewSetter(proxy.skew)
    //                 });
    //             }
    //         }
    //     });

    //     // make the right edge "stick" to the scroll bar. force3D: true improves performance
    //     // gsap.set(".skew", {
    //     //     transformOrigin: "right center",
    //     //     force3D: true
    //     // });


    // })

    return (
        <div className='relative text-white overflow-hidden top-0 bg-transparent'>

            <section className="hero-section top-0 h-[100vh] relative px-20 max-md:p-5 lg:pr-0 flex max-lg:flex-col py-40 bg-[#0a0a0a] overflow-hidden max-lg:justify-center">

                <div className="radgrad absolute top-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-md:w-[100vh] max-md:h-[100vh] left-0 bg-opacity-5" ></div>
                <div className="absolute h-[100vh] w-[100vw] z-[1] bgdrop top-0"></div>

                <div className="absolute h[100vh] w-[100vw] z-[1] bgdrop2 top-0"></div>

                <div className="tad absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] flex flex-col justify-center gap-1 z-[100] max-lg:hidden" >
                    <span className="leading-[50px] hour"></span>
                    <span className="leading-[50px] mins"></span>
                </div>

                <div className="left w-1/3 z-2 max-lg:w-full relative z-[1000] max-lg:text-center self-center">
                    <div className="w-16 h-16 bg-white rounded-full my-5 max-lg:mx-auto"></div>
                    <div className="join flex max-lg:w-fit max-lg:mx-auto max-md:flex-col relative md:items-end gap-7 text-[50px] font-bold max-md:text-[30px]">

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

                <div className="check max-md:pb-10 flex gap-5 mt-3 lg:absolute top-[70%] max-lg:justify-center left-1/2 z-[1000] lg:-translate-x-1/2">
                    <div className="github flex justify-center icons rounded-full magic-hover magic-hover_square text-xl items-center border border-[#fff3] w-12 h-12  hover:bg-black" style={{ transform: 'translate3d(0px, 0px, 0px)' }} ><FaGithubAlt /></div>
                    <div className="facebook  flex justify-center icons rounded-full magic-hover magic-hover__square text-xl items-center border border-[#fff3] w-12 h-12  hover:bg-[#1da1f2]" style={{ transform: 'translate3d(0px, 0px, 0px)' }} ><AiFillTwitterSquare /></div>
                    {/* <div className="Phone flex justify-center icons rounded-full magic-hover magic-hover__square text-xl items-center border border-[#fff3] w-12 h-12  hover:bg-[#a4c639]" style={{ transform: 'translate3d(0px, 0px, 0px)' }} ><MdLocalPhone /><span className="spac text-lg">Number</span></div> */}
                    <div className="email flex justify-center icons rounded-full magic-hover magic-hover__square text-xl items-center border border-[#fff3] w-12 h-12  hover:bg-[#c71610]" style={{ transform: 'translate3d(0px, 0px, 0px)' }} ><CiMail /></div>
                    <div className="LinkedIn flex justify-center icons rounded-full magic-hover magic-hover__square text-xl items-center border border-[#fff3] w-12 h-12  hover:bg-[#0e76a8]" style={{ transform: 'translate3d(0px, 0px, 0px)' }} ><BsLinkedin /></div>
                </div>

                <div className="right max-lg:text-center max-lg:w-full max-md:gap-5 w-2/3 flex flex-col items-end z-[200] relative self-center p-5">
                    <div className="leading-[40px] text-[40px] flex grad max-md:text-[24px] max-md:leading-[20px] py-5 w-1/2 max-lg:w-[80vw] max-md:mx-auto max-lg:flex max-lg:px-20 max-md:p-0 justify-center">
                        A MERN stack developer based in Lagos, Nigeria
                    </div>
                    <div className="text-[16px] max-md:text-[12px] w-1/2 max-lg:w-full max-lg:px-20 max-md:p-0">
                        Transforming Concepts into Seamless User Experiences, I prioritize client collaboration, fostering open communications
                    </div>
                </div>
                {/* <div className="fire absolute -top-32 -z-10 p-0 w-[100vw] Right-10 opacity-70 blur-lg">
                    <div className="element1"></div>
                    <div className="element2"></div>
                    <pre className="w-[100vw]" id="fire"></pre>
                </div> */}
            </section>

            <section className="about-me relative px-10 max-md:px-2 bg-[#0a0a0a]" id="about">
                {/* <div className="absolute marq -top-28 max-md:hidden -left-[130%] z-[3] blur-sm opacity-0">ABOUT ME</div> */}

                <div className="heading text-[50px] max-md:text-[28px]">
                    <span className="px-5">/ /</span>
                    About Me
                    <span id='hash' className="text-[#ff00ff] hash relative">#</span>
                </div>

                <div className="flex max-lg:flex-col">
                    <div id="skills" className="skills pt-32 rounded-[30px] text-[60px] lg:w-[60%] md:px-10 px-5 pb-10 font-extrabold leading-[60px] border-[#2e2e2e] backdrop-blur-sm max-md:leading-[40px] max-md:text-[40px]">
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
                            <div className="copy text-[16px] p-3 flex gap-3 justify-center items-center border w-fit mx-auto rounded-full mt-10">
                                <IoCopyOutline />copy my email address
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
            <div className="naag flex flex-col justify-center items-center h-[300px] relative text-[100px] font-[900] -gap-10 max-lg:hidden">
                <div className="absolute top-1/2 w-full in flex justify-center left-1/2 items-center h-[300px]">
                    <span className="w-[800px] leading-[100px] text-center">
                        Just a lazy web developer
                    </span>
                </div>
                <div className="relative p-0 bott w-[400px] leading-[100px] text-center">SOFELA ISRAEL</div>
            </div>

            <section className="projects p-10 overflow-x-hidden" id="projects">
                <div className="heading text-[50px] max-md:text-[28px] pb-10">
                    <span className="px-2">/ /</span>
                    My Projects
                    <span id='hash' className="text-[#ff00ff] hash relative">#</span>
                </div>
                <div id="card">
                    <div className="card max-md:w-full max-md:h-[300px]">
                        <div className="projectimg h-[100%] rounded-[inherit] w-[100%] overflow-hidden" id="noise">
                            <img src={mount} className="object-cover max-xl:h-full max-md:w-full rounded-[inherit]" alt="" />
                            <svg style={{ display: 'none' }}>
                                <defs>
                                    <filter id="noise">
                                        <feTurbulence
                                            baseFrequency="0.7,0.8"
                                            seed="0"
                                            type="fractalNoise"
                                            result="static"
                                        >
                                            <animate
                                                attributeName="seed"
                                                values="1000"
                                                dur="800ms"
                                                repeatCount="1"
                                                begin="noise.mouseenter"
                                            />
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="static">
                                            <animate
                                                attributeName="scale"
                                                values="200;0"
                                                dur="800ms"
                                                repeatCount="1"
                                                begin="noise.mouseenter"
                                            />
                                        </feDisplacementMap>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-content flex flex-col relative gap-2 p-5">

                            <div className="flex justify-between items-center">

                                <div className="projectname text-[32px] max-md:text-[16px]">Real Rent</div>
                                <div className="border flex justify-center items-center icons p-1 max-md:text-[16px] text-[24px] rounded-full">
                                    <DiReact />
                                </div>
                            </div>
                            <div className="projectcontent text-[#a0a0a070] max-md:text-[12px]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </div>
                            <div className="btns ">
                                <div className="visit flex gap-2 relative z-[100000] items-center border  rounded-lg p-2 w-24 justify-evenly border-[#a0a0a050] bg-[#000]">Visit <CgArrowLongRight /></div>
                            </div>
                            <div className="projectlang flex">

                            </div>
                        </div>
                    </div>
                    <div className="card skew">
                        <div className="projectimg h-[100%] rounded-[inherit] w-[100%] overflow-hidden" id="noise">
                            <img src={mount} className="object-cover w-full rounded-[inherit]" alt="" />
                            <svg style={{ display: 'none' }}>
                                <defs>
                                    <filter id="noise">
                                        <feTurbulence
                                            baseFrequency="0.7,0.8"
                                            seed="0"
                                            type="fractalNoise"
                                            result="static"
                                        >
                                            <animate
                                                attributeName="seed"
                                                values="1000"
                                                dur="800ms"
                                                repeatCount="1"
                                                begin="noise.mouseenter"
                                            />
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="static">
                                            <animate
                                                attributeName="scale"
                                                values="200;0"
                                                dur="800ms"
                                                repeatCount="1"
                                                begin="noise.mouseenter"
                                            />
                                        </feDisplacementMap>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-content flex flex-col relative gap-2 p-5">

                            <div className="projectname text-[32px]">Real Rent</div>
                            <div className="projectcontent text-[#a0a0a070]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </div>
                            <div className="btns ">
                                <div className="visit flex gap-2 relative z-[100000] items-center border  rounded-lg p-2 w-24 justify-evenly border-[#a0a0a050] bg-[#000]">Visit <CgArrowLongRight /></div>
                            </div>
                            <div className="projectlang flex">
                                <div className="border flex justify-center items-center icons w-8 h-8 text-[24px] rounded-full">
                                    <DiReact />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card skew">
                        <div className="projectimg h-[100%] rounded-[inherit] w-[100%] overflow-hidden" id="noise">
                            <img src={mount} className="object-cover w-full rounded-[inherit]" alt="" />
                            <svg style={{ display: 'none' }}>
                                <defs>
                                    <filter id="noise">
                                        <feTurbulence
                                            baseFrequency="0.7,0.8"
                                            seed="0"
                                            type="fractalNoise"
                                            result="static"
                                        >
                                            <animate
                                                attributeName="seed"
                                                values="1000"
                                                dur="800ms"
                                                repeatCount="1"
                                                begin="noise.mouseenter"
                                            />
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="static">
                                            <animate
                                                attributeName="scale"
                                                values="200;0"
                                                dur="800ms"
                                                repeatCount="1"
                                                begin="noise.mouseenter"
                                            />
                                        </feDisplacementMap>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-content flex flex-col relative gap-2 p-5">

                            <div className="projectname text-[32px]">Real Rent</div>
                            <div className="projectcontent text-[#a0a0a070]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </div>
                            <div className="btns ">
                                <div className="visit flex gap-2 relative z-[100000] items-center border  rounded-lg p-2 w-24 justify-evenly border-[#a0a0a050] bg-[#000]">Visit <CgArrowLongRight /></div>
                            </div>
                            <div className="projectlang flex">
                                <div className="border flex justify-center items-center icons w-8 h-8 text-[24px] rounded-full">
                                    <DiReact />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="more w-[200px] h-[50px] mx-auto font-bold my-10 flex justify-center items-center bg-white text-black rounded-lg z-[10]">
                        Show More
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-me overflow-hidden h-[100vh] flex flex-col p-10">
                <div className="heading text-[50px] max-md:text-[28px] pb-10 z-[100000]">
                    <span className="px-2">/ /</span>
                    Contact Me
                    <span id='hash' className="text-[#ff00ff] hash relative">#</span>

                </div>
                {/* <div className="flex">
                    <div className="send w-[65%] rounded-lg backdrop-blur-md flex border h-[500px]">
                        <form action="">

                        </form>
                    </div>
                </div> */}
                {/* <HomeSide /> */}

            </section>

        </div>
    )
}

export default Home
