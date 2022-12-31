import React from 'react'
import {AiFillGithub ,AiFillLinkedin} from 'react-icons/ai'
import {GrDocumentPdf} from 'react-icons/gr'
import { ContactUs } from './ContactUs'
import resume from './resume_JuanjoPischetz.pdf'
import { Fade, Slide } from 'react-awesome-reveal';


const Contact = () => {
  return (
    <div  className='w-full h-screen p-4 sm:px-8'>
        <div>
        <Fade cascade damping={0.2} triggerOnce className='text-[#7A1E33] font-bold text-3xl sm:text-4xl sm:mb-2 md:text-6xl md:mb-4 dark:text-[#FFBB00]'>
        Contact me!
        </Fade>
        <Slide triggerOnce><div className='border-2 md:border-4 border-[#2D2525] bg-[#2D2525] w-full mb-16 dark:bg-[#C5C5C5] dark:border-[#C5C5C5]'></div></Slide>
        </div>
        <div className='flex flex-col h-5/6 content-center justify-around'>
          <div>
        <Fade cascade damping={0.3} delay={2000} duration={2000} triggerOnce>
        <h3 className='text-2xl text-[#7A1E33] font-bold sm:text-3xl md:text-4xl dark:text-[#FFBB00]'>Social Media</h3>
        <div className='flex flex-row justify-around mt-8 md:mt-16'>
          <Fade cascade delay={2500} damping={0.5} triggerOnce>
          <a href='https://github.com/JuanjoPischetz'  target={"_blank"} rel="noreferrer">
            <AiFillGithub className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] dark:invert'/>
          </a>
          <a href='https://www.linkedin.com/in/juanjo-pischetz'  target={"_blank"} rel="noreferrer">
            <AiFillLinkedin className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] dark:invert'/>
          </a>
          <a href={resume}  download='Resume_JuanjoPischetz_FullStack'>
            <GrDocumentPdf className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] dark:invert'/>
          </a>
          </Fade>
        </div>
        </Fade>
        </div>
        <div className='sm:w-full sm:flex sm:flex-row sm:justify-center'>
        <Fade delay={4000} triggerOnce > <ContactUs/> </Fade>
        </div>
        </div>
    </div>
  )
}

export default Contact