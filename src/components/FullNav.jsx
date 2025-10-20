import React, { useRef, useEffect, useContext } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../context/Navcontext'

// Navigation links data
const navLinksData = [
  {
    label: 'Gallary',
    path: '/gallary',
    animationTexts: ['  GALLARY  '],
    color:'#F4B400'
  },
  {
    label: 'Events',
    path: '/event',
    animationTexts: ['  EVENTS  '],
    color:'#0F9D58'
  },
  {
    label: 'Team',
    path: '/team',
    animationTexts: ['  TEAMS  '],
    color:'#DB4437'
  }
]



function FullNav() {
  const fullNavLinkRef = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (navOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [navOpen])

  // GSAP open animation
  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', { display: 'block' })
    tl.to('.stairing', { delay: 0.2, height: '100%', stagger: { amount: -0.3 } }, '<')
    tl.to('.link', { opacity: 1, rotateX: 0, stagger: { amount: 0.3 } }, '<0.1')
    tl.to('.navlink', { opacity: 1 }, '<0.1')
  }

  // GSAP close animation
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', { opacity: 0, rotateX: 90, stagger: { amount: 0.1 } })
    tl.to('.stairing', { height: 0, stagger: { amount: 0.1 } }, '<0.1')
    tl.to('.navlink', { opacity: 0 }, '<0.1')
    tl.to('.fullscreennav', { display: 'none' }, '<0.1')
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation()
    } else {
      gsapAnimationReverse()
    }
  }, [navOpen])

  // Navigate after animation
  function handleNavLinkClick(path) {
    setNavOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 350)
  }

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      {/* Background stripes */}
      <div className="h-screen w-full fixed">
        <div className="stairing w-full h-1/5 bg-[#4285F4] bg-opacity-40 backdrop-blur-sm"></div>
        <div className="stairing w-full h-1/5 bg-[#DB4437] bg-opacity-40 backdrop-blur-sm"></div>
        <div className="stairing w-full h-1/5 bg-[#F4B400] bg-opacity-40 backdrop-blur-sm"></div>
        <div className="stairing w-full h-1/5 bg-[#0F9D58] bg-opacity-40 backdrop-blur-sm"></div>
        <div className="stairing w-full h-1/5 bg-slate-500 bg-opacity-40 backdrop-blur-sm"></div>
      </div>

      <div className="relative" ref={fullNavLinkRef}>
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div>
            <h2>Photo hai idhar</h2>
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className="relative cursor-pointer w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28"
            aria-label="Close Navigation Menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setNavOpen(false)}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-45 bg-yellow-400 w-1 sm:w-1.5 md:w-2 lg:w-3 h-full rounded-sm"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-45 bg-yellow-400 w-1 sm:w-1.5 md:w-2 lg:w-3 h-full rounded-sm"></div>
          </div>
        </div>

        <div className="py-18">
          {navLinksData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavLinkClick(item.path)}
              className="link group relative border-t border-white h-[20vh] lg:h-[22vh] overflow-hidden flex items-center justify-center cursor-pointer"
            >
              {/* Hover scrolling text background */}
              <div className="moveLink absolute inset-0 bg-yellow-200 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center"
               style={{ backgroundColor: item.color }}>
                <div className="moveX">
                  {[...item.animationTexts, ...item.animationTexts].map((text, i) => (
                    <h2
                      key={i}
                      className="font-serif text-5xl lg:text-[6vw] uppercase mx-12 whitespace-nowrap"
                    >
                      {text}{text} {text}
                    </h2>
                  ))}
                </div>
              </div>

              {/* Static front label */}
              <h1 className="font-serif text-5xl lg:text-[6vw] text-center leading-none uppercase relative z-10 text-white">
                {item.label}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FullNav
