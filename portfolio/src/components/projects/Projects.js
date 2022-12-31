import React from 'react'
import piLanding from './pi_landing.png'
import piHome from './pi_home.png'
import piDetails from './pi_details.png'
import pfLanding from './pf_landing.png'
import pfAbout from './pf_about.png'
import pfProfile from './pf_profile.png'
import { Fade, Slide } from 'react-awesome-reveal'
import { useState } from 'react'
import ModalVideoGames from './ModalVideoGames'
import ModalPawsFounding from './ModalPawsFounding'
import {MdOutlineOpenInNew} from "react-icons/md";
import Slider from '../slider/Slider'


const Projects = () => {

const [isOpen, setIsOpen] = useState(false)
const [isOpen2, setIsOpen2] = useState(false)
const closeModal = () => setIsOpen(false)
const closeModal2 = ()=> setIsOpen2(false)


  return (
    <div  className='w-full h-screen p-4 sm:px-8'>
        <Fade duration={2000} triggerOnce>
        <h1 className='text-3xl sm:text-4xl md:text-6xl text-[#7A1E33] font-bold  dark:text-[#FFBB00]'>
            Projects
        </h1>
        </Fade>
        <Slide triggerOnce><div className='border-2 md:border-4 bg-[#2D2525] border-[#2D2525] w-full mb-8 sm:mt-2 md:mt-4 dark:bg-[#C5C5C5] dark:border-[#C5C5C5] '></div></Slide>
        <div className='flex flex-col content-center justify-around h-5/6 '>
        <Fade direction='left' delay={1500} duration={500} triggerOnce>
            <div>
            <div className='w-full flex flex-row content-center items-center mb-2'>
            <p className='mr-2 text-[#7A1E33] font-bold text-xl  sm:text-2xl md:text-4xl dark:text-[#FFBB00]'>SPA Video Games</p>
            <MdOutlineOpenInNew onClick={()=>setIsOpen(true)}
            className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] dark:invert'/>
            </div>
            <div className='w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-[650px] md:h-[450px] py-4 px-2 sm:py-12 sm:px-4 mx-auto'>
            <Slider slides={[piLanding,piHome,piDetails]}/>
            </div>
            </div>
        </Fade>
        <Fade direction='right' delay={2000} duration={500} triggerOnce>
            <div>
            <div className='w-full flex flex-row content-center items-center mb-2'>
                <p className='mr-2 text-[#7A1E33] font-bold text-xl text-center sm:text-2xl md:text-4xl dark:text-[#FFBB00]'>MVP PawsFounding</p>
                <MdOutlineOpenInNew onClick={()=>setIsOpen2(true)}
                className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] dark:invert'/>
            </div>
        
            <div className='w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-[650px] md:h-[450px] py-4 px-2 sm:py-12 sm:px-4 mx-auto'>
            <Slider slides={[pfLanding,pfAbout,pfProfile]}/>
            </div>
        </div>
        </Fade>
        
        </div>
        <ModalVideoGames isOpen={isOpen} closeModal={closeModal}/>
        <ModalPawsFounding isOpen2={isOpen2} closeModal2={closeModal2}/>
    </div>
  )
}

export default Projects