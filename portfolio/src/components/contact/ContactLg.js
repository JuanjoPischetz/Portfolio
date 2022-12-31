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
        <Fade cascade damping={0.2} triggerOnce className='text-[#7A1E33] font-bold mb-2 text-5xl 2xl:text-7xl 2xl:mb-4 dark:text-[#FFBB00]'>
        Contact me!
        </Fade>
        <Slide triggerOnce><div className='border-2 bg-[#2D2525] border-[#2D2525] w-full mb-8 dark:bg-[#C5C5C5] dark:border-[#C5C5C5]'></div></Slide>
        </div>
        <div className='flex flex-row h-5/6 content-center justify-around'>
              <div className='flex flex-col items-center my-auto'>
                <div className='flex flex-col justify-around w-[300px] h-[450px] 2xl:h-[600px] xl:ml-16 2xl:ml-32 items-center'>
                  <Fade cascade delay={2500} damping={0.5} triggerOnce>
                    <a href='https://github.com/JuanjoPischetz'  target={"_blank"} rel="noreferrer">
                      <AiFillGithub className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] transition-color hover:scale-[1.2] ease-linear duration-200 dark:invert'/>
                    </a>
                    <a href='https://www.linkedin.com/in/juanjo-pischetz'  target={"_blank"} rel="noreferrer">
                      <AiFillLinkedin className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] transition-color hover:scale-[1.2] ease-linear duration-200 dark:invert'/>
                    </a>
                    <a href={resume}  download='Resume_JuanjoPischetz_FullStack'>
                      <GrDocumentPdf className='w-[50px] h-[50px] sm:w-[85px] sm:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] transition-color hover:scale-[1.2] ease-linear duration-200 dark:invert'/>
                    </a>
                   </Fade>
                  </div>
                </div>   
          <div className='w-full flex flex-row justify-center my-auto'>
            <Fade delay={4000} triggerOnce > <ContactUs/> </Fade>
          </div>
        </div>
    </div>
  )
}

export default ContactLg