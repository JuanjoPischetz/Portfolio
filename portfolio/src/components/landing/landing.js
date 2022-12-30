import React from 'react'
import profilePic from './juanjo_profile.png'
import { Fade } from "react-awesome-reveal";

const Landing = () => {

  return (
    <div  className='w-full h-screen flex flex-col-reverse justify-around content-center p-2 '>
        <div className='w-full h-[300px] text-center md:mb-[80px]'>
            <div className='sm:mb-8 md:mb-16'>
            <Fade cascade damping={0.5} duration={2000} delay={500} triggerOnce>
            <p className='text-xl sm:text-3xl md:text-4xl text-[#2D2525] font-medium'>
                Hi! my name is,
             </p>
            <p className='text-4xl sm:text-5xl md:text-7xl font-bold text-[#2D2525]'>
                Juan José Pischetz
            </p>
            <p className='text-lg sm:text-3xl md:text-4xl mb-4 text-[#2D2525] font-medium'>
                Im a <span className='text-2xl sm:text-4xl md:text-5xl font-bold text-[#7A1E33]'>Full Stack Developer</span>
            </p>
            </Fade>
            </div>
            
            <div className='flex flex-row flex-wrap gap-8 justify-center'>
            <Fade cascade damping={0.2} delay={4000} triggerOnce>
                <img className='w-[65px] h-[65px] sm:w-[100px] sm:h-[100px]' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"  />
                <img className='w-[65px] h-[65px] sm:w-[100px] sm:h-[100px]' src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"  />
                <img className='w-[65px] h-[65px] sm:w-[100px] sm:h-[100px]' src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js"  />
                <img className='w-[65px] h-[65px] sm:w-[100px] sm:h-[100px]' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>
                <img className='w-[65px] h-[65px] sm:w-[100px] sm:h-[100px]' src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux"/>
                <img className='w-[65px] h-[65px] sm:w-[100px] sm:h-[100px]' src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js"/>
                </Fade>
            </div>
            
        </div>
        <div className='w-full h-[300px] sm:mt-[-40px]'>       
            <img className='object-contain w-full h-[300px] sm:h-[450px]' src={profilePic} alt='Profile Pic'/>
        </div>
    </div>
  )
}

export default Landing