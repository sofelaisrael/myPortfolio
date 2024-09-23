import { AiFillHeart } from "react-icons/ai";
import React, { useEffect, useRef, useState } from 'react'

// icon imports
import { BiCopyright } from "react-icons/bi";

// Coponents import
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import gsap from 'gsap';

const Home = () => {
    useEffect(() => {
        const circ = document.querySelector('.circ')

        const hand = document.querySelector('.hand')
        const photo = document.querySelector('.photo')

        const home = document.querySelector('.nav')
        const slide = home.getBoundingClientRect()

        const mouse = { x: 0, y: 0 }
        const prevMouse = { x: 0, y: 0 }
        const circle = { x: 0, y: 0 }
        let curscale = 0
        let curangle = 0

        window.onmousemove = (e) => {
            mouse.x = e.x
            mouse.y = e.y
            photo.onmousemove = () => {
                hand.style.opacity = 1
                gsap.to(hand, 1.5, { x: mouse.x, y: mouse.y })
            }

            for (const link of document.querySelectorAll('.links')) {
                link.onmouseenter = () => {
                    const rect = link.getBoundingClientRect()
                    const slider = document.querySelector('.slider')
                    slider.style.opacity = 1
                    gsap.to('.slider', 0.3, { left: `${rect.left - slide.left - 100}px`, width: `${rect.width}`, ease: 'expo.out' })
                }
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
    // useEffect(() => {

    //     hand.style.opacity = 0

    //     window.onmousemove = (e) => {

    //     }


    // })
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)

    //     const line = document.querySelectorAll(".line")
    //     line.forEach(li => {
    //         li.style.display = 'inline-block'
    //         li.style.textAlign = 'left'
    //     })
    // })

    useEffect(() => {
        let tl = gsap.timeline({ repeat: -1, defaults: { duration: 2, delay: 1, ease: 'expo.inOut' } })
        tl.to('.marquee-track', { yPercent: -100 })
        tl.to('.marquee-track', { yPercent: -200 })
        tl.to('.marquee-track', { yPercent: -300 })
    })

    useEffect(() => {
        document.querySelector('.naag').onmousemove = (e) => {
            const clippath = document.querySelector('.naag .in')
            const rect = clippath.getBoundingClientRect()

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
        gsap.set('.wrapper', { xPercent: -50, yPercent: -50 })
        gsap.set('#no02', { y: 0 })
        gsap.set('#no03', { y: 20 })

        var boxWidth = 250, totalWidth = boxWidth * 7, no01 = document.querySelectorAll('#no01 .box'), no02 = document.querySelectorAll('#no02 .box'), no03 = document.querySelectorAll('#no03 .box'), dirLeft = '+=' + totalWidth, dirRight = '-=' + totalWidth

        var mod = gsap.utils.wrap(0, totalWidth)

        const marquee = (which, time, dir) => {
            gsap.set(which, {
                x: (i) => { return i * boxWidth }
            })
            var action = gsap.timeline().to(which, {
                x: dir, modifiers: {
                    x: x => mod(parseFloat(x)) + 'px'
                },
                duration: time,
                ease: 'none',
                repeat: -1
            })
            return action
        }
        var master = gsap.timeline().add(marquee(no01, 15, dirLeft), 1).add(marquee(no02, 20, dirLeft), 2).add(marquee(no03, 20, dirRight), 3)
    })

    return (
        <div className='relative text-white overflow-hidden top-0 bg-transparent'>

            <div className="circ max-md:hidden z-[10000000000000] rounded-full"></div>

            <Navbar />

            <HeroSection />

            <AboutSection />

            <div className="naag flex flex-col justify-center items-center h-[300px] relative text-[100px] font-[900] -gap-10 max-lg:hidden">
                <div className="absolute top-1/2 w-full in flex justify-center left-1/2 items-center h-[300px]">
                    <span className="w-[800px] leading-[100px] text-center">
                        Just a lazy web developer
                    </span>
                </div>
                <div className="relative p-0 bott w-[400px] leading-[100px] text-center">SOFELA ISRAEL</div>
            </div>

            <ProjectSection />

            <div className="marqs mb-24 h-full flex flex-col" >
                <div id="no01" className="wrapper">
                    <div className="boxes">
                        <div className="box">Web dev</div>
                        <div className="box">Web dev</div>
                        <div className="box">Web dev</div>
                        <div className="box">Web dev</div>
                        <div className="box">Web dev</div>
                        <div className="box">Web dev</div>
                        <div className="box">Web dev</div>
                    </div>
                </div>
                <div id="no02" className="wrapper">
                    <div className="boxes">
                        <div className="box">Creative</div>
                        <div className="box">Creative</div>
                        <div className="box">Creative</div>
                        <div className="box">Creative</div>
                        <div className="box">Creative</div>
                        <div className="box">Creative</div>
                        <div className="box">Creative</div>
                    </div>
                </div>
                <div id="no03" className="wrapper">
                    <div className="boxes">
                        <div className="box">Developer</div>
                        <div className="box">Developer</div>
                        <div className="box">Developer</div>
                        <div className="box">Developer</div>
                        <div className="box">Developer</div>
                        <div className="box">Developer</div>
                        <div className="box">Developer</div>
                    </div>
                </div>
            </div>

            <ContactSection />

            <footer className="h-[100px] bg-black flex justify-center items-center gap-5">
                <div className="marquee overflow-hidden">
                    <div className="marquee-track h-[50px] w-full h-ful relative">
                        {/* <div className="marquee-item h-full">
                            <h2 className="marquee-text h-full text-[40px] flex items-center"></h2>
                            <h2 className="marquee-text h-full text-[40px]"></h2>
                            <h2 className="marquee-text h-full text-[40px] flex items-center"><BiCopyright />2024</h2>
                            <h2 className="marquee-text h-full text-[40px] flex items-center">Made with <AiFillHeart color="red" /></h2>
                        </div> */}
                        <div className="marquee-item h-full">
                            <h2 className="marquee-text flex justify-center items-center text-[28px] gap-3">Made with <AiFillHeart color="red" /></h2>
                        </div>
                        <div className="marquee-item h-full">
                            <h2 className="marquee-text flex justify-center items-center text-[28px]">by Sofela Israel</h2>
                        </div>
                        <div className="marquee-item h-full">
                            <h2 className="marquee-text flex justify-center items-center text-[28px]"><BiCopyright />2024</h2>
                        </div>
                        <div className="marquee-item h-full">
                            <h2 className="marquee-text flex justify-center items-center text-[28px] gap-3">Made with <AiFillHeart color="red" /></h2>
                        </div>
                    </div>
                </div>
            </footer>

        </div >
    )
}

export default Home
