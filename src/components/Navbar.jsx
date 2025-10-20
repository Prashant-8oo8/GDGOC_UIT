import React, { useContext, useEffect, useState } from 'react'
import { NavbarColorContext, NavbarContext } from '../context/Navcontext'
import { Link, useLocation } from 'react-router-dom'
import {motion,useScroll} from 'motion/react'

function Navbar() {
  const scrollYProgress=useScroll().scrollYProgress
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const [navColor] = useContext(NavbarColorContext)
  const location = useLocation()
 

  // Scroll to top on route change & close nav if open
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (navOpen) setNavOpen(false)
  }, [location.pathname])


  // Prevent body scroll when nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  return (
    <>
      {/* Navbar Header */}
      <header className="fixed top-0 w-full bg-white backdrop-blur-md shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between h-16 md:h-20">
          
          <Link to="/" aria-label="Home" className="select-none">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight cursor-pointer"
              style={{ color: 'black' }}
            >
              GDG-UIT
            </h1>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={navOpen}
            className="flex flex-col justify-center items-center gap-1.5 w-12 h-12 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
            type="button"
          >
            {[0, 1, 2].map(index => (
              <span
                key={index}
                className={`
                  block h-0.5 rounded-full
                  transition-colors duration-300
                  ${navOpen ? 'bg-orange-500' : 'bg-black hover:bg-orange-500'}
                `}
                style={{
                  width:
                    index === 0
                      ? '24px'
                      : index === 1
                      ? '16px'
                      : '12px',
                }}
              />
            ))}
          </button>
        </nav>
        <div className=' flex'>

          <motion.div 
          style={{scaleX:scrollYProgress}}
          className="linebar w-full h-3 absolute origin-left top-0 left-0 bg-red-300"
          ></motion.div>
          </div>
      </header>

      {/* Full Screen Nav Overlay */}
      
    </>
  )
}

export default Navbar
