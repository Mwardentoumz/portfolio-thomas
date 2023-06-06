import Image from 'next/image'

import Navbar from '../components/Navbar'
import { useEffect, useState, useRef } from 'react'
import Hero from '@/components/Hero/Hero.jsx';
import { motion } from 'framer-motion';
import Portfolio from '@/components/Portfolio.jsx/Portfolio';




export default function Home() {
  const ScrolltoSkill = useRef()
  const [darkMode, setDarkMode] = useState(false)
  const [bike, setBike] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  console.log(mousePosition)

  const executeScroll = () => ScrolltoSkill.current.scrollIntoView()
  const activateBike = () => { setBike(!bike) }
  const toggleDarkMode = () => { setDarkMode(!darkMode) }

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      rotate: [0, 90, 180, 270, 360],
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }

  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  

  console.log(darkMode)
  console.log(bike)
  
  return (
    
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 p-10 duration-1000 max-w-[1400px] mx-auto">
        <section className='min-h-screen flex flex-col'>
          <Navbar toggleDarkMode={toggleDarkMode} executeScroll={executeScroll}/>
          <Hero activateBike={activateBike} bike={bike} executeScroll={executeScroll}/>
                    
          {bike && 
          <motion.div
          
          variants={variants}
          animate={cursorVariant}
          transition={{ ease: "easeOut", duration: 0.8,  }}
          className='cursor rounded-full fixed top-0 left-0 w-20 h-20 '>
            <img src="/cycling2.gif" alt="" className="" />
          </motion.div>}
          
        </section>

        <section ref={ScrolltoSkill} className='min-h-screen flex flex-col'>
          <Portfolio/>
        </section>

        
      </main>
    </div>
  )
}
