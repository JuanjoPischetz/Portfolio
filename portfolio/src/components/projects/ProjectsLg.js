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


const ProjectsLg = () => {

const [isOpen, setIsOpen] = useState(false)
const [isOpen2, setIsOpen2] = useState(false)
const closeModal = () => setIsOpen(false)
const closeModal2 = ()=> setIsOpen2(false)


  return (
    <div  className='w-full h-screen p-4 sm:px-8'>
        <Fade duration={2000} triggerOnce>
        <h1 className='text-5xl 2xl:text-7xl text-[#7A1E33] font-bold dark:text-[#FFBB00]'>
            Projects
        </h1>
        </Fade>
        <Slide triggerOnce><div className='border-2 bg-[#2D2525] border-[#2D2525] w-full mb-8 mt-2 2xl:mt-4 dark:bg-[#C5C5C5] dark:border-[#C5C5C5]'></div></Slide>
        <div className='flex flex-row content-center justify-around items-center h-5/6'>
        <Fade direction='left' delay={1500} duration={500} triggerOnce>
            <div>
            <div className='w-full flex flex-row content-center items-center '>
            <p className='mr-2 text-[#7A1E33] font-bold  text-3xl xl:text-4xl 2xl:text-5xl dark:text-[#FFBB00]'>SPA Video Games</p>
            <MdOutlineOpenInNew onClick={()=>setIsOpen(true)}
            className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] hover:cursor-pointer dark:invert'/>
            </div>
            <div className='w-[500px] h-[380px] xl:w-[650px] xl:h-[475px] 2xl:w-[750px] 2xl:h-[500px] py-16 px-4'>
            <Slider slides={[piLanding,piHome,piDetails]}/>
            </div>
            </div>
        </Fade>
        <Fade direction='right' delay={2000} duration={500} triggerOnce>
            <div>
            <div className='w-full flex flex-row content-center items-center '>
                <p className='mr-2 text-[#7A1E33] font-bold text-3xl xl:text-4xl 2xl:text-5xl dark:text-[#FFBB00]'>MVP PawsFounding</p>
                <MdOutlineOpenInNew onClick={()=>setIsOpen2(true)}
                className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] hover:cursor-pointer dark:invert'/>
            </div>
            <div className='w-[500px] h-[380px] xl:w-[650px] xl:h-[475px] 2xl:w-[750px] 2xl:h-[500px] py-16 px-4'>
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

export default ProjectsLg