import React from 'react'
import piLanding from './pi_landing.png'
import piHome from './pi_home.png'
import piDetails from './pi_details.png'
import pfLanding from './pf_landing.png'
import pfAbout from './pf_about.png'
import pfProfile from './pf_profile.png'
import { Fade } from 'react-awesome-reveal'
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
        <h1 className='text-xl mb-4'>
            Projects
        </h1>
        <Fade direction='left' delay={200} duration={500}>
            <div className='w-full flex flex-row items-center'>
            <p className='mr-2'>SPA Video Games</p>
            <MdOutlineOpenInNew onClick={()=>setIsOpen(true)}
            className='w-[25px] h-[25px]'/>
            </div>
        <div className='flex flex-row shrink items-center gap-8 px-4 w-full h-[210px] snap-mandatory snap-x scroll-smooth overflow-y-hidden border-2 border-red mx-auto mb-8'>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={piLanding} alt='Landing'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={piHome} alt='Home'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={piDetails} alt='Details'/>
        </div>
        </Fade>
        <Fade direction='right' delay={1000} duration={500}>
            <div className='w-full flex flex-row items-center'>
                <p className='mr-2'>MVP PawsFounding</p>
                <MdOutlineOpenInNew onClick={()=>setIsOpen2(true)}
                className='w-[25px] h-[25px]'/>
            </div>
        
        <div className='flex flex-row shrink items-center gap-8 px-4 w-full h-[210px] snap-mandatory snap-x scroll-smooth overflow-y-hidden border-2 border-red mx-auto'>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={pfLanding} alt='Landing'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={pfAbout} alt='Home'/>
            <img className='snap-center object-fit w-[300px] h-[200px]' src={pfProfile} alt='Details'/>
        </div>
        </Fade>
        <ModalVideoGames isOpen={isOpen} closeModal={closeModal}/>
        <ModalPawsFounding isOpen2={isOpen2} closeModal2={closeModal2}/>
    </div>
  )
}

export default Projects