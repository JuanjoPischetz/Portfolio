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


const Projects = () => {

const [isOpen, setIsOpen] = useState(false)
const [isOpen2, setIsOpen2] = useState(false)
const closeModal = () => setIsOpen(false)
const closeModal2 = ()=> setIsOpen2(false)


  return (
    <div  className='w-full h-screen p-4'>
        <Fade duration={2000} triggerOnce>
        <h1 className='text-3xl text-[#7A1E33] font-bold'>
            Projects
        </h1>
        </Fade>
        <Slide triggerOnce><div className='border-2 border-[#AFFFCE] w-full mb-4'></div></Slide>
        <div className='flex flex-col content-center'>
        <Fade direction='left' delay={1500} duration={500} triggerOnce>
            <div className='w-full flex flex-row content-center items-center mb-2'>
            <p className='mr-2 text-[#7A1E33] font-bold text-xl '>SPA Video Games</p>
            <MdOutlineOpenInNew onClick={()=>setIsOpen(true)}
            className='w-[20px] h-[20px]'/>
            </div>
        <div className='flex flex-row shrink items-center gap-8 px-4 w-full h-[210px] snap-mandatory snap-x scroll-smooth overflow-y-hidden bg-[#2D2525] bg-opacity-25 rounded-lg mx-auto mb-8'>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={piLanding} alt='Landing'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={piHome} alt='Home'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={piDetails} alt='Details'/>
        </div>
        </Fade>
        <Fade direction='right' delay={2000} duration={500} triggerOnce>
            <div className='w-full flex flex-row content-center items-center mb-2'>
                <p className='mr-2 text-[#7A1E33] font-bold text-xl text-center'>MVP PawsFounding</p>
                <MdOutlineOpenInNew onClick={()=>setIsOpen2(true)}
                className='w-[20px] h-[20px]'/>
            </div>
        
        <div className='flex flex-row shrink items-center rounded-lg
        gap-8 px-4 w-full h-[210px] snap-mandatory snap-x scroll-smooth 
        overflow-y-hidden bg-[#2D2525] bg-opacity-25 mx-auto'>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={pfLanding} alt='Landing'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={pfAbout} alt='Home'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={pfProfile} alt='Details'/>
        </div>
        </Fade>
        </div>
        <ModalVideoGames isOpen={isOpen} closeModal={closeModal}/>
        <ModalPawsFounding isOpen2={isOpen2} closeModal2={closeModal2}/>
    </div>
  )
}

export default Projects