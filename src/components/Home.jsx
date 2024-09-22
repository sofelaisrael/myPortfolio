import React, { useEffect, useRef, useState } from 'react'

// icon imports
import { BiCopyright } from "react-icons/bi";

// Coponents import
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Home = () => {
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



    return (
        <div className='relative text-white overflow-hidden top-0 bg-transparent'>

            <div className="circ max-md:hidden z-[10000000000000] rounded-full"></div>

            <Navbar/>

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

            <ContactSection />

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
