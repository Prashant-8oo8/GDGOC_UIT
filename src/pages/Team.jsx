import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import Footer from './Footer'
import TeamSection from '../components/team/TeamSection'
import DropdownTeamSection from '../components/dropdown/DropDown'
import AllDropDown from '../components/dropdown/AllDropDown'
import background_Image from '../assets/svgs/background_Image.png' // Your background image
import Advisor from '../components/team/Adviser'

gsap.registerPlugin(ScrollTrigger)

const Team = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://plus.unsplash.com/premium_photo-1758726036229-ad770eddad9d?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1758726037183-b0e7d741f2be?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1687188208898-ce7a996e33d1?q=80&w=659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1710064217280-d1f524495d86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1710174661633-598918c8f9ac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  useGSAP(() => {
    const ctx = gsap.context(() => {
      let lastImageIndex = -1

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 30%',
          end: 'top -60%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!imageRef.current) return

            const imageIndex = Math.min(
              Math.floor(self.progress * imageArray.length),
              imageArray.length - 1
            )

            if (imageIndex !== lastImageIndex) {
              lastImageIndex = imageIndex
              gsap.to(imageRef.current, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  if (!imageRef.current) return
                  imageRef.current.src = imageArray[imageIndex]
                  imageRef.current.dataset.index = String(imageIndex)
                  gsap.to(imageRef.current, { opacity: 1, duration: 0.3 })
                }
              })
            }

            gsap.to(imageRef.current, {
              scale: 1 + 0.1 * self.progress,
              ease: 'power1.out',
              overwrite: 'auto'
            })
          }
        }
      })

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill()
        tl.kill()
      }
    }, imageDivRef)

    return () => ctx.revert()
  })

  return (
    <div className="font-serif bg-white/50 min-h-screen overflow-x-hidden flex flex-col relative">
      {/* Set Background Image for the Whole Page */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center z-[-1]"
        style={{
          backgroundImage: `url(${background_Image})`,
        }}
      ></div>

      {/* Scroll content */}
      <div className="flex-grow">
        <div
          id="page1"
          className="py-1 relative md:flex md:items-center md:justify-start bg-white/50 md:gap-12 max-w-7xl mx-auto px-6"
        >
          {/* Image container behind text */}
          <div
            ref={imageDivRef}
            className="absolute rounded-xl lg:rounded-3xl w-[80vw] max-w-[320px] h-[50vw] max-h-[280px] sm:w-[60vw] sm:max-w-[360px] sm:h-[40vw] sm:max-h-[300px] md:relative md:w-[35vw] md:max-w-[280px] md:h-[25vw] md:max-h-[200px] lg:w-[20vw] lg:h-[28vw] top-[12vh] sm:top-[15vh] md:top-auto left-[50%] -translate-x-1/2 md:left-0 md:translate-x-0 shadow-lg md:z-0 pointer-events-none"
            style={{ filter: 'brightness(0.7)', opacity: 0.85 }}
          >
            <img
              ref={imageRef}
              data-index="0"
              className="h-full w-full object-cover rounded-xl lg:rounded-3xl transition-opacity duration-300"
              src={imageArray[0]}
              alt="Team Member"
            />
          </div>

          {/* Text content */}
          <div className="relative z-10 mt-[30vh] lg:mt-[55vh] md:max-w-none bg-white/50 md:flex-1 md:pl-8 md:text-right md:bg-transparent p-4 md:p-0 rounded-md">
            <h1
              className="leading-tight"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 8rem)',
                lineHeight: 'clamp(3rem, 7vw, 7rem)'
              }}
            >
              Google Developer Group <br /><br />
              On Campus UIT
            </h1>

            <div className="lg:mt-20 mt-6">
              <p
                className="leading-tight"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                  lineHeight: 'clamp(1.25rem, 3vw, 3rem)'
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor Section (page2) */}
        <div
          id="page2"
          className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-gray-50 py-12"
        >
          {/* Center the Advisor Section properly */}
          <Advisor />
        </div>
      </div>

      <AllDropDown />
      <TeamSection />

      <Footer />
    </div>
  )
}

export default Team
