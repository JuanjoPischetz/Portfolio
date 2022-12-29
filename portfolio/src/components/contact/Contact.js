import React from 'react'
import {AiFillGithub ,AiFillLinkedin} from 'react-icons/ai'
import {GrDocumentPdf} from 'react-icons/gr'
import { ContactUs } from './ContactUs'
import resume from './resume_JuanjoPischetz.pdf'
import { Fade, Slide } from 'react-awesome-reveal';


const Contact = () => {
  return (
    <div  className='w-full h-screen p-4'>
        <Fade cascade damping={0.2} triggerOnce className='text-[#7A1E33] font-bold text-2xl'>
        Contact me!
        </Fade>
        <Slide triggerOnce><div className='border-2 border-[#AFFFCE] w-full mb-16'></div></Slide>
        <Fade cascade damping={0.3} delay={2000} duration={2000} triggerOnce>
        <h3 className='text-xl text-[#7A1E33] font-bold'>Social Media</h3>
        <div className='flex flex-row justify-around mt-4 mb-16'>
          <Fade cascade delay={2500} damping={0.5} triggerOnce>
          <a href='https://github.com/JuanjoPischetz'  target={"_blank"} rel="noreferrer">
            <AiFillGithub className='w-[50px] h-[50px]'/>
          </a>
          <a href='https://www.linkedin.com/in/juanjo-pischetz'  target={"_blank"} rel="noreferrer">
            <AiFillLinkedin className='w-[50px] h-[50px]'/>
          </a>
          <a href={resume}  download='Resume_JuanjoPischetz_FullStack'>
            <GrDocumentPdf className='w-[50px] h-[50px]'/>
          </a>
          </Fade>
        </div>
        </Fade>
        <Fade delay={4000} triggerOnce> <ContactUs/> </Fade>
    </div>
  )
}

export default Contact