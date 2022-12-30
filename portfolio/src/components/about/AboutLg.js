import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AttentionSeeker , Fade} from 'react-awesome-reveal';
import Slider from '../slider/Slider';
import certOne from './cert_one.png'
import certTwo from './cert_two.png'
import certTa from './cert_ta.png'

const AboutLg = () => {
  return (
    <div  className=' w-full p-4 sm:px-8'>
        <div className='w-full flex flex-col content-center justify-around h-screen'>
        <div className='w-full flex flex-col h-min'>
          <div className='flex flex-row items-center'>
        <h2 className='text-4xl xl:text-5xl mb-2  mr-4 text-[#7A1E33] font-bold'>
            Glad to see you here! 
        </h2>
        <AttentionSeeker effect='tada' duration={1500}> <MdOutlineWavingHand className='w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]'/> </AttentionSeeker>
          </div>
        <div className='border-2 border-[#AFFFCE] bg-[#AFFFCE] w-full mb-2'></div>
        <span className='text-[#2D2525] font-medium text-xl xl:text-2xl'> 
        I’m a full-stack developer, PERN Stack. I am passionate about programming and I like to learn new 
        technologies constantly. I want to develop platforms that impact people's lives, improving their quality
         of life. 
        </span>
        </div>
        <div>
        <p className='text-[#7A1E33] font-bold  mb-2 text-3xl'>Soft Skills</p>
        <span className='text-[#2D2525] font-medium text-xl xl:text-2xl'>
        10 years of experience in entrepreneurship led me to develop a wide range of soft skills. 
        I have experience managing work teams, standing out for being an empathetic leader, who practices 
        accurate communication and active listening. I have skills to negotiate and close sales, as well as 
        long-term business vision.
        </span>
        </div>
        <div>
        <p className='text-[#7A1E33] font-bold  mb-2 text-3xl '>Certifications</p>
        <Fade duration={1} triggerOnce>
        <div className='w-full flex-row'>
        <div className='w-[350px] h-[250px] xl:w-[500px] xl:h-[375px] py-4 px-2 mx-auto mb-8'>
          <Slider slides={[certOne,certTwo,certTa]}/>
        </div>
        </div>
        </Fade>
        </div>
        </div>
    </div>
  )
}

export default AboutLg