import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
    useEffect(() => {
        const tabs = document.querySelectorAll('.nav-item')
        const slider = document.querySelector('.slider')
        const tabControl = document.querySelector('.nav')

        const updateSlider = () => {
            const active = document.querySelector('.nav-item.activenav')
            const tabRect = active.getBoundingClientRect()
            const contRect = tabControl.getBoundingClientRect()
            const offset = tabRect.left - contRect.left

            // active.style.color = 'black'
            slider.style.opacity = 1
            slider.style.left = `${offset}px`
            slider.style.width = `${tabRect.width}px`
        }
        tabControl.onmouseleave = () => {
            slider.style.opacity = 0
            tabs.forEach(t => t.classList.remove('activenav'))
            updateSlider()
        }
        tabs.forEach(tab => {
            tab.onmousemove = () => {
                // slider.style.transition = 'none'
                // setTimeout(() => {
                //     slider.style.transition = 'all .2s'
                // }, 200);
                tabs.forEach(t => t.classList.remove('activenav'))
                tab.classList.add('activenav')
                updateSlider()
            }
        })
        updateSlider()

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
                if (window.innerWidth >= 768) {
                    nav.style.top = '40px'

                } else {
                    nav.style.top = '80px'

                }
            } else {
                if (window.innerWidth >= 768) {
                    nav.style.top = '40px'

                } else {
                    nav.style.top = '10px'

                }

            }
        }
    })
    return (
        <div className='text-white p-5 bg-transparent z-[10000] absolute flex justify-between w-full'>
            <div className="nav-brand flex relative bg-transparent">
                <img src={logo} className='w-[300px] max-md:w-[150px]' alt="" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" className='scale-[0.3] absolute -top-[70px] -left-[70px] bg-transparent' height="200" width="200">
                    <g style={{ order: -1 }}>
                        <polygon
                            transform="rotate(45 100 100)"
                            strokeWidth="1"
                            stroke="#d3a410"
                            fill="none"
                            points="70,70 148,50 130,130 50,150"
                            id="bounce"
                        ></polygon>
                        <polygon
                            transform="rotate(45 100 100)"
                            strokeWidth="1"
                            stroke="#d3a410"
                            fill="none"
                            points="70,70 148,50 130,130 50,150"
                            id="bounce2"
                        ></polygon>
                        <polygon
                            transform="rotate(45 100 100)"
                            strokeWidth="2"
                            stroke=""
                            fill="#414750"
                            points="70,70 150,50 130,130 50,150"
                        ></polygon>
                        <polygon
                            strokeWidth="2"
                            stroke=""
                            fill="url(#gradiente)"
                            points="100,70 150,100 100,130 50,100"
                        ></polygon>
                        <defs>
                            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                                <stop style={{ stopColor: '#1e2026', stopOpacity: 1 }} offset="20%"></stop>
                                <stop style={{ stopColor: '#414750', stopOpacity: 1 }} offset="60%"></stop>
                            </linearGradient>
                        </defs>
                        <polygon
                            transform="translate(20, 31)"
                            strokeWidth="2"
                            stroke=""
                            fill="#b7870f"
                            points="80,50 80,75 80,99 40,75"
                        ></polygon>
                        <polygon
                            transform="translate(20, 31)"
                            strokeWidth="2"
                            stroke=""
                            fill="url(#gradiente2)"
                            points="40,-40 80,-40 80,99 40,75"
                        ></polygon>
                        <defs>
                            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                                <stop style={{ stopColor: "#d3a51000", stopOpacity: 1 }} offset="20%"></stop>
                                <stop
                                    style={{ stopColor: "#d3a51054", stopOpacity: 1 }}
                                    offset="100%"
                                    id="animatedStop"
                                ></stop>
                            </linearGradient>
                        </defs>
                        <polygon
                            transform="rotate(180 100 100) translate(20, 20)"
                            strokeWidth="2"
                            stroke=""
                            fill="#d3a410"
                            points="80,50 80,75 80,99 40,75"
                        ></polygon>
                        <polygon
                            transform="rotate(0 100 100) translate(60, 20)"
                            strokeWidth="2"
                            stroke=""
                            fill="url(#gradiente3)"
                            points="40,-40 80,-40 80,85 40,110.2"
                        ></polygon>
                        <defs>
                            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
                                <stop style={{ stopColor: "#d3a51000", stopOpacity: 1 }} offset="20%"></stop>
                                <stop
                                    style={{ stopColor: "#d3a51054", stopOpacity: 1 }}
                                    offset="100%"
                                    id="animatedStop"
                                ></stop>
                            </linearGradient>
                        </defs>
                        <polygon
                            transform="rotate(45 100 100) translate(80, 95)"
                            strokeWidth="2"
                            stroke=""
                            fill="#ffe4a1"
                            points="5,0 5,5 0,5 0,0"
                            id="particle"
                        ></polygon>
                        <polygon
                            transform="rotate(45 100 100) translate(80, 55)"
                            strokeWidth="2"
                            stroke=""
                            fill="#ccb069"
                            points="6,0 6,6 0,6 0,0"
                            id="particle"
                        ></polygon>
                        <polygon
                            transform="rotate(45 100 100) translate(70, 80)"
                            strokeWidth="2"
                            stroke=""
                            fill="#fff"
                            points="2,0 2,2 0,2 0,0"
                            id="particle"
                        ></polygon>
                        <polygon
                            strokeWidth="2"
                            stroke=""
                            fill="#292d34"
                            points="29.5,99.8 100,142 100,172 29.5,130"
                        ></polygon>
                        <polygon
                            transform="translate(50, 92)"
                            strokeWidth="2"
                            stroke=""
                            fill="#1f2127"
                            points="50,50 120.5,8 120.5,35 50,80"
                        ></polygon>
                    </g>
                </svg> */}
                {/* <img className='w-[200px] ml-16 bg-transparent' src={brand} alt="" /> */}

            </div>
            <div className="fixed w-[500px] max-lg:w-[400px] transition-all duration-200 h-[50px] top-10 max-md:top-20 left-1/2 border-[#505050] border -translate-x-1/2 rounded-full backdrop-blur-[2px] flex justify-evenly items-center nav uppercase">
                <span className='nav-item p-3 max-md:p-1 activenav'><a href="#"></a>Home</span>
                <span className='nav-item p-3 max-md:p-1'><a href="#about"></a>About</span>
                <span className='nav-item p-3 max-md:p-1'><a href="#projects"></a>Projects</span>
                <span className='nav-item p-3 max-md:p-1'><a href="#contact"></a>Contact</span>

                <div className="slider"></div>
            </div>
            <div className="date pt-10 max-md:p-4 p-10"></div>
        </div>
    )
}

export default Navbar
