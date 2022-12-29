import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AttentionSeeker , Fade} from 'react-awesome-reveal';
import certOne from './cert_one.png'
import certTwo from './cert_two.png'
import certTa from './cert_ta.png'

const About = () => {
  return (
    <div  className=' w-full p-4'>
        <div className='w-full flex flex-col content-center justify-around h-screen'>
        <div className='w-full flex flex-col h-min'>
          <div className='flex flex-row items-center'>
        <h2 className='text-2xl mr-2 text-[#7A1E33] font-bold'>
            Glad to see you here! 
        </h2>
        <AttentionSeeker effect='tada' duration={1500}> <MdOutlineWavingHand className='w-[25px] h-[25px]'/> </AttentionSeeker>
          </div>
        <div className='border-2 border-[#AFFFCE] w-full mb-2'></div>
        <span className='text-[#2D2525] font-medium'> 
        I’m a full-stack developer, PERN Stack. I am passionate about programming and I like to learn new 
        technologies constantly. I want to develop platforms that impact people's lives, improving their quality
         of life. 
        </span>
        </div>
        <div>
        <p className='text-lg text-[#7A1E33] font-bold mt-4'>Soft Skills</p>
        <span className='text-[#2D2525] font-medium'>
        10 years of experience in entrepreneurship led me to develop a wide range of soft skills. 
        I have experience managing work teams, standing out for being an empathetic leader, who practices 
        accurate communication and active listening. I have skills to negotiate and close sales, as well as 
        long-term business vision.
        </span>
        </div>
        <div>
        <p className='text-lg text-[#7A1E33] font-bold mb-2'>Certifications</p>
        <Fade duration={1} triggerOnce>
        <div className='flex flex-row  items-center rounded-lg
        gap-12 px-4 w-[270px] h-[170px] snap-mandatory snap-x scroll-smooth 
        overflow-y-hidden mx-auto bg-[#2D2525] bg-opacity-25'>
            <img className='snap-center object-fit w-min-[250px] h-[165px]' src={certOne} alt='One'/>
            <img className='snap-center object-fit w-min-[250px] h-[165px]' src={certTwo} alt='Two'/>
            <img className='snap-center object-fit w-min-[250px] h-[165px]' src={certTa} alt='TA'/>
        </div>
        </Fade>
        </div>
        </div>
    </div>
  )
}

export default About