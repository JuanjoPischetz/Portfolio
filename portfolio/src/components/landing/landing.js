import React from 'react'
import profilePic from './juanjo_profile.png'
import { Fade } from "react-awesome-reveal";

const Landing = () => {

  return (
    <div  className='w-full h-screen flex flex-col-reverse justify-around p-2'>
        <div className='w-full h-[300px] text-center'>
            <div>
            <Fade cascade damping={0.5} duration={2000} delay={500} triggerOnce>
            <p className='text-xl text-[#2D2525] font-medium'>
                Hi! my name is,
             </p>
            <p className='text-4xl font-bold text-[#2D2525]'>
                Juan José Pischetz
            </p>
            <p className='text-lg mb-4 text-[#2D2525] font-medium'>
                Im a <span className='text-2xl font-bold text-[#7A1E33]'>Full Stack Developer</span>
            </p>
            </Fade>
            </div>
            
            <div className='flex flex-row flex-wrap gap-8 justify-center'>
            <Fade cascade damping={0.2} delay={4000} triggerOnce>
                <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"  />
                <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"  />
                <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js"  />
                <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>
                <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux"/>
                <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js"/>
                </Fade>
            </div>
            
        </div>
        <div className='w-full h-[300px]'>       
            <img className='object-contain w-full h-[300px] ' src={profilePic} alt='Profile Pic'/>
        </div>
    </div>
  )
}

export default Landing