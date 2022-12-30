import React from 'react'
import profilePic from './juanjo_profile.png'
import { Fade } from "react-awesome-reveal";

const LandingLg = () => {

  return (
    <div  className='w-full h-screen flex flex-col justify-around content-center p-2 '>
        <div className='w-full flex flex-row content-center h-[450px] p-8'>
            <div className='flex flex-col content-center my-auto'>
            <Fade cascade damping={0.5} duration={2000} delay={500} triggerOnce>
            <p className='text-4xl text-[#2D2525] font-medium w-full mb-4'>
                Hi! my name is,
             </p>
            <p className='text-7xl xl:text-[80px] font-bold text-[#2D2525] w-[700px] mb-4'>
                Juan José Pischetz
            </p>
            <p className='text-4xl text-[#2D2525] font-medium w-full'>
                Im a <span className='text-5xl xl:text-6xl font-bold text-[#7A1E33]'>Full Stack Developer</span>
            </p>
            </Fade>
            </div>
            <div className='w-[600px] xl:w-[800px]'>       
            <img className='object-contain w-full h-[400px] xl:h-[450px]' src={profilePic} alt='Profile Pic'/>
            </div>
        </div>
        <div className='flex flex-row flex-wrap gap-12 xl:gap-16 justify-center mb-4'>
            <Fade cascade damping={0.2} delay={4000} triggerOnce>
                <img className='w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] ' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"  />
                <img className='w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] ' src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"  />
                <img className='w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] ' src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js"  />
                <img className='w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] ' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>
                <img className='w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] ' src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux"/>
                <img className='w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] ' src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js"/>
                </Fade>
            </div>
    </div>
  )
}

export default LandingLg

