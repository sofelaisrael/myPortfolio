import React, { useEffect, useRef, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import emailjs from '@emailjs/browser';

// icon imports
import { HiPhone } from "react-icons/hi";
import { VscLocation } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoNodejs, IoIosAdd } from "react-icons/io";
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiJquery, SiBootstrap, SiGreensock } from "react-icons/si";
import { DiCss3, DiReact, DiJsBadge } from "react-icons/di";
import { CiMail } from "react-icons/ci";
import { BiCopyright } from "react-icons/bi";
import { AiFillTwitterSquare, AiFillHtml5, AiOutlineUser } from "react-icons/ai";
import { BsLinkedin, BsGit, BsCheckLg } from "react-icons/bs";

//  animation packages imports
import SplitText from 'split-type'
import gsap from 'gsap'
import { ReactTyped } from 'react-typed'
import { ScrollTrigger } from "gsap/all";

// component & data imports
import Tooltip from "./Tooltip";
import Project from "./Project";
import { projects } from "../lists/projects";

// images import
import logo from '../assets/logo.png'
import sukuna from '../assets/sukuna.jfif'
import { Link } from 'react-router-dom';

const Home = () => {
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
            const lines = document.querySelectorAll('#skills > .line')
            lines.forEach(line => {
                const target = line.querySelector('.line-mask')

                gsap.to('#skills .line .line-mask', {
                    scrollTrigger: {
                        trigger: `#skills`,
                        start: 'clamp(top center)',
                        end: 'clamp(500px center)',
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
    useEffect(() => {
        document.querySelector('.naag').onmousemove = (e) => {
            const clippath = document.querySelector('.naag .in')
            const rect = clippath.getBoundingClientRect()
            console.log(e.x, e.y);

            gsap.to(clippath, .3, {
                visibility: 'visible',
                clipPath: `circle(15% at ${e.x - rect.left}px ${e.y - rect.top}px)`
            })
        }
        document.querySelector('.naag').onmouseleave = (e) => {
            const clippath = document.querySelector('.naag .in')
            const rect = clippath.getBoundingClientRect()

            gsap.to(clippath, .3, {
                clipPath: `circle(0% at ${e.x - rect.left}px ${e.y - rect.top}px)`,
            })
            setTimeout(() => {
                clippath.style.visibility = 'hidden'
            }, 1000);
        }

    })
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
        const circ = document.querySelector('.circ')
        const hand = document.querySelector('.hand')
        const photo = document.querySelector('.photo')

        hand.style.opacity = 0
        // const circ2 = document.querySelector('.circ2')
        const mouse = { x: 0, y: 0 }
        const prevMouse = { x: 0, y: 0 }
        const circle = { x: 0, y: 0 }
        let curscale = 0
        let curangle = 0

        window.onmousemove = (e) => {
            mouse.x = e.x
            mouse.y = e.y
            const home = document.querySelector('.nav')
            const slide = home.getBoundingClientRect()
            for (const link of document.querySelectorAll('.links')) {
                link.onmouseenter = () => {
                    const rect = link.getBoundingClientRect()
                    const slider = document.querySelector('.slider')
                    slider.style.opacity = 1
                    gsap.to('.slider', 0.3, { left: `${rect.left - slide.left - 100}px`, width: `${rect.width}`, ease: 'expo.out' })
                }
            }

            photo.onmousemove = () => {
                hand.style.opacity = 1
                gsap.to(hand, 1.5, { x: mouse.x, y: mouse.y })
            }
        }
        for (const link of document.querySelectorAll('.links')) {
            link.onmouseleave = () => {
                gsap.to('.slider', 0, { opacity: 0 })
            }
        }


        photo.onmouseleave = () => {
            hand.style.opacity = 0
        }

        const speed = 0.3

        const tick = () => {
            circle.x += (mouse.x - circle.x) * speed
            circle.y += (mouse.y - circle.y) * speed

            const translatetransform = `translate(${circle.x - 15}px, ${circle.y - 15}px)`
            // circ2.style.transform = `translate(${circle.x}px, ${circle.y}px)`

            const deltax = mouse.x - prevMouse.x
            const deltay = mouse.y - prevMouse.y

            prevMouse.x = mouse.x
            prevMouse.y = mouse.y

            const vel = Math.min(Math.sqrt(deltax ** 2 + deltay ** 2) * 4, 150)

            const scale = (vel / 150) * 0.5

            curscale += (scale - curscale) * speed

            const scaleTransform = `scale(${1 + curscale}, ${1 - curscale})`

            const angle = Math.atan2(deltay, deltax) * 180 / Math.PI
            if (vel > 20) curangle = angle
            const rotTransform = `rotate(${curangle}deg)`



            circ.style.transform = `${translatetransform} ${rotTransform} ${scaleTransform}`

            window.requestAnimationFrame(tick)
        }
        tick()
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [more, setMore] = useState(true)
    const [sent, setSent] = useState(false)
    const form = useRef()

    const validate = (email) => {
        const regex = /^[^@]+@[^@]+\.[^@]{2,4}$/
        return regex.test(email)
    }
    const shoot = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => {
            setSent(false)
        }, 3000);
        emailjs.sendForm('service_9012igt', 'template_lqpiefk', '#form', {
            publicKey: '8ipRC7AQhlFJ8sBRb',
        })
    }
    const copy = () => {
        navigator.clipboard.writeText('sofelaisrael@gmail.com')
        const copytextspan = document.querySelector('.copy span')
        copytextspan.textContent = 'copied'
        setTimeout(() => {
            copytextspan.textContent = 'copy my email address'
        }, 2000);
    }

    return (
        <div className='relative text-white overflow-hidden top-0 bg-transparent'>

            <div className="circ max-md:hidden z-[10000000000000] rounded-full"></div>

            <div className='text-white h-[120px] overflow-hidden p-5 bg-transparent z-[100000]  absolute flex justify-between w-full items-center'>
                <div className="nav-brand flex relative bg-transparent">
                    <img src={logo} className='max-md:h-[50px]' alt="" />
                </div>
                <div className="fixed md:w-[500px] max-lg:w-[90%] transition-all duration-200 h-[50px] top-10 max-md:top-20 left-1/2 border-[#505050] border max-md:text-[12px] -translate-x-1/2 rounded-full backdrop-blur-[2px] flex justify-evenly items-center nav uppercase gap-5">
                    <span className='links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center'>
                        <HashLink scroll={el => {
                            const yOffset = -100; // Adjust this based on your header height
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }} smooth to="/#home">
                            Home
                        </HashLink>
                    </span>
                    <span className='links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center'>

                        <HashLink scroll={el => {
                            const yOffset = -100; // Adjust this based on your header height
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }} smooth to="/#about">
                            About
                        </HashLink>
                    </span>
                    <span className='links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center'>
                        <HashLink scroll={el => {
                            const yOffset = -50; // Adjust this based on your header height
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }} smooth to="/#projects">
                            Projects
                        </HashLink>
                    </span>
                    <span className='links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center'>
                        <HashLink scroll={el => {
                            const yOffset = -80; // Adjust this based on your header height
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }} smooth to="/#contact">
                            Contact
                        </HashLink>
                    </span>

                    <div className="slider max-md:hidden bg-white z-10 w-10 border rounded-[10px] fixed pointer-events-none translate-x-[100%] -translate-y-1/2  h-[30px] top-1/2 py-5 opacity-0"></div>
                </div>
                <div className="date pt-10 max-md:p-2 p-10"></div>
            </div>

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
                {/* <div className="fire absolute -top-32 -z-10 p-0 w-[100vw] Right-10 opacity-70 blur-lg">
                    <div className="element1"></div>
                    <div className="element2"></div>
                    <pre className="w-[100vw]" id="fire"></pre>
                </div> */}
            </section>

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
                    <span className="md:px-2">//</span>
                    My Projects
                    <span id='hash' className="text-[#ff00ff] hash relative">#</span>
                </div>
                <div id="card">
                    {(more ? projects.slice(0, 3) : projects).map(proj => (
                        <Project link={proj.projectlink} lang={proj.projectlanguages} name={proj.projectname} img={proj.projectimage} content={proj.projectcontent} />
                    ))}


                    <div className="more w-[200px] h-[50px] mx-auto font-bold my-10 flex justify-center items-center bg-white text-black rounded-lg hover:bg-[#0a0a0a] border-[#252525] hover:text-white hover:border transition-all duration-200 " onClick={() => setMore(!more)}>
                        {more ? 'Show More' : 'Show Less'}
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-me overflow-hidden flex flex-col">
                <div className="heading text-[50px] max-md:text-[28px] pb-10 z-[0] bg-[#0a0a0a] px-10">
                    <span className="md:px-2">//</span>
                    Contact Me
                    <span id='hash' className="text-[#ff00ff] hash relative">#</span>

                </div>

                <div className="contact relative flex flex-col max-lg:items-center">
                    <div className="touch md:h-[300px] w-full p-10 max-md:p-5 text-[50px] max-md:text-[32px] bg-[#0a0a0a]">
                        Get in Touch...&nbsp;;)
                        <div className="end md:w-[500px] max-xl:w-[300px] max-lg:w-[75%] max-md:w-full max-md:text-[14px] text-[20px]">
                            I'd love to hear from you, so if you have any questions, or you want to connect, or you have a project in mind.<br /> Let's make something awesome together
                        </div>
                    </div>

                    <div className="findme md:h-[300px] p-10 max-md:p-5 flex flex-col gap-10 w-full overflow-hidden">
                        <div className="flex gap-5 items-center email"><GoMail />sofelaisrael00@gmail.com</div>
                        <div className="flex gap-5 items-center address"><VscLocation />Akinyele Close, Ipaja, Lagos state.</div>
                        <div className="flex gap-5 items-center phone"><HiPhone />(+234) 70 8165 9372</div>
                    </div>

                    <form id="form" className="lg:absolute form overflow-hidden border-[#404040] form w-[500px] top-0 rounded-xl gap-5 right-20  max-lg:mb-5 flex flex-col -translate-x-1/ max-lg:w-[90%] max-md:mx-auto border py-10 backdrop-blur-md" ref={form} onSubmit={shoot}>
                        <div className="head text-[50px] max-md:text-[30px] md:pb-5 px-10 max-md:px-5">Shoot me</div>
                        <div className="nameinp flex border bg-[#0a0a0aa0] h-[50px] w-[80%] max-md:w-[90%] mx-auto items-center rounded-full overflow-hidden border-[inherit]">
                            <div className="icon p-5 text-[28px]">
                                <AiOutlineUser />
                            </div>
                            <input name="from_name" id="from_name" value={name} onChange={(e) => setName(e.target.value)} className="h-full w-full focus:outline-none bg-transparent" type="text" placeholder="Your name" />
                        </div>
                        <div className="nameinp flex border bg-[#0a0a0aa0] h-[50px] w-[80%] max-md:w-[90%] mx-auto items-center rounded-full overflow-hidden border-[inherit]">
                            <div className="icon p-5 text-[28px]">
                                <GoMail />
                            </div>
                            <input id="email_id" name="email_id" value={email} onChange={(e) => setEmail(e.target.value)} className="h-full w-full focus:outline-none bg-transparent" type="text" placeholder="Your email" />
                        </div>
                        <div className="textarea w-full flex justify-center">
                            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="resize-none w-[80%] max-md:w-[90%] rounded-lg placeholder:p-0 h-[150px]   focus:outline-none p-4 mx-auto border-[#404040] bg-transparent border" placeholder="Your Message....." ></textarea>
                        </div>
                        {sent ? (
                            <div className="sent text-center flex justify-center gap-5 items-center"><BsCheckLg />Sent Successfully!</div>
                        ) : (
                            <button type="submit" disabled={!(validate(email) && name.trim() != '' && message.trim() != '')} className={`w-[80%] max-md:w-[90%] mx-auto rounded-full h-[50px] disabled:opacity-30 bg-white text-black`}>Shoot</button>
                        )}



                    </form>
                </div>
            </section >

            <footer className="h-[100px] bg-black flex justify-center items-center gap-5">
                <div className="first">Made by Sofela Israel</div>
                <div className="copy flex items-center">
                    <BiCopyright />2024
                </div>

            </footer>

        </div >
    )
}

export default Home
