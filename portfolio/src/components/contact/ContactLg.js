import React from 'react'
import {AiFillGithub ,AiFillLinkedin} from 'react-icons/ai'
import {GrDocumentPdf} from 'react-icons/gr'
import { ContactUs } from './ContactUs'
import resume from './resume_JuanjoPischetz.pdf'
import { Fade, Slide } from 'react-awesome-reveal';


const ContactLg = () => {
  return (
    <div  className='w-full h-screen p-4 sm:px-8'>
        <div>
        <Fade cascade damping={0.2} triggerOnce className='text-[#7A1E33] font-bold mb-2 text-5xl '>
        Contact me!
        </Fade>
        <Slide triggerOnce><div className='border-2 bg-[#AFFFCE] border-[#AFFFCE] w-full mb-8'></div></Slide>
        </div>
        <div className='flex flex-row h-5/6 content-center justify-around'>
          <div>
        <Fade cascade damping={0.3} delay={2000} duration={2000} triggerOnce>
        <div className='flex flex-col items-center xl:mt-12'>
        <h3 className='text-2xl text-[#7A1E33] font-bold sm:text-3xl md:text-4xl lg:invisible'>Social Media</h3>
        <div className='flex flex-col justify-around w-[300px] h-[450px] items-center'>
          <Fade cascade delay={2500} damping={0.5} triggerOnce>
          <a href='https://github.com/JuanjoPischetz'  target={"_blank"} rel="noreferrer">
            <AiFillGithub className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] xl:w-[100px] xl:h-[100px]'/>
          </a>
          <a href='https://www.linkedin.com/in/juanjo-pischetz'  target={"_blank"} rel="noreferrer">
            <AiFillLinkedin className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] xl:w-[100px] xl:h-[100px]'/>
          </a>
          <a href={resume}  download='Resume_JuanjoPischetz_FullStack'>
            <GrDocumentPdf className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] xl:w-[100px] xl:h-[100px]'/>
          </a>
          </Fade>
        </div>
        </div>
        </Fade>
        </div>
        <div className='w-full flex flex-row justify-center my-auto'>
        <Fade delay={4000} triggerOnce > <ContactUs/> </Fade>
        </div>
        </div>
    </div>
  )
}

export default ContactLg