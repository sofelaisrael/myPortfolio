import React, { useEffect, useState } from 'react'

const Testing = () => {

    // const hash = (text, target) => {
    //     const hovtext = document.getElementById(text)
    //     const hovtarg = document.getElementById(target)

    //     hovtext.onmousemove = () => {
    //         hovtarg.style.display = 'inline'
    //         gsap.to('#hash', {
    //             x: 10,
    //             opacity: 1,
    //             duration: 0.5
    //         })
    //     }
    //     hovtext.onmouseout = () => {
    //         hovtarg.style.display = 'none'
    //     }
    // }
    // useEffect(() => {
    //     // hash('about', 'hash')

    //     // const heading = new SplitText('.heading', {type: 'chars'})
    //     // gsap.to(heading.chars, {
    //     //     x: '100%',
    //     //     duration: 0.4
    //     // })

    // })

    return (
        <div className="text-white px-10 py-28">
            <div className="h-[100vh] bg-white"></div>
            <div className="h-[100vh] bg-black"></div>
            <div className="h-[100vh] bg-white"></div>
        </div>

    )
}

export default Testing
