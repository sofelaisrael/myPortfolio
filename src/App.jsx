import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import Home from './components/Home'
import { ScrollTrigger } from 'gsap/all'
import Testing from './routes/Testing'

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    window.onload = () => {
      setTimeout(() => {
        setLoad(false)
      }, 3000);
    }
  }, [])
  useEffect(() => {
    const circ = document.querySelector('.circ')
    // const circ2 = document.querySelector('.circ2')
    const mouse = { x: 0, y: 0 }
    const prevMouse = { x: 0, y: 0 }
    const circle = { x: 0, y: 0 }
    let curscale = 0
    let curangle = 0

    window.onmousemove = (e) => {
      mouse.x = e.x
      mouse.y = e.y
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
    <>
      {
        load && (
          <div className="loader bg-[#0a0a0a] fixed w-full h-[100vh] z-[1000000]">
            <svg xmlns="http://www.w3.org/2000/svg" className='scale-[1.3] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] z-[100000000]' height="200" width="200">
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
            </svg>
          </div>
        )}
      <div className='relative'>
        <div className="circ z-[10000000000000] rounded-full"></div>
        <div className="absolute w-[100vw] h-[100vh] bg-black top-[0%] loa z-[1000]"></div>
        <div className="absolute w-[150vw] h-[100vh] bg-black top-[0%] loa2 z-[10000]"></div>
        <Navbar />
        {/* <Testing /> */}
        <Home />
        {/* <div className="section h-[200vh] bg-white"></div> */}
        {/* <div className="home bimg">
          <img className='bimg' src={mount} alt="" />
        </div> */}
      </div>


    </>

  )
}

export default App
