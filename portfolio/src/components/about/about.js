import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AttentionSeeker } from 'react-awesome-reveal';
import certOne from './cert_one.png'
import certTwo from './cert_two.png'
import certTa from './cert_ta.png'
import certEf from './cert_ef.png'
import Slider from '../slider/Slider';

const About = () => {
  return (
    <div  className=' w-full p-4 sm:px-8'>
        <div className='w-full flex flex-col content-center justify-around h-screen'>
        <div className='w-full flex flex-col h-min'>
          <div className='flex flex-row items-center'>
        <h2 className='text-2xl sm:text-4xl md:text-6xl sm:mb-2 md:mb-4 mr-2 md:mr-4 text-[#7A1E33] font-bold  dark:text-[#FFBB00]'>
            Glad to see you here! 
        </h2>
        <AttentionSeeker effect='tada' duration={1500}> <MdOutlineWavingHand className='w-[25px] h-[25px] md:w-[40px] md:h-[40px] dark:invert'/> </AttentionSeeker>
          </div>
        <div className='border-2 md:border-4 border-[#2D2525] bg-[#2D2525] w-full mb-2 dark:bg-[#C5C5C5] dark:border-[#C5C5C5]'></div>
        <span className='text-[#2D2525] font-medium sm:font-semibold sm:text-2xl md:text-3xl dark:text-white'> 
        I’m a full-stack developer, PERN Stack. I am passionate about programming and I like to learn new 
        technologies constantly. I want to develop platforms that impact people's lives, improving their quality
         of life. 
        </span>
        </div>
        <div>
        <p className='text-lg text-[#7A1E33] font-bold mt-4 sm:text-3xl sm:mb-2 md:text-4xl dark:text-[#FFBB00]'>Soft Skills</p>
        <span className='text-[#2D2525] font-medium sm:font-semibold sm:text-2xl md:text-3xl dark:text-white'>
        10 years of experience in entrepreneurship led me to develop a wide range of soft skills. 
        I have experience managing work teams, standing out for being an empathetic leader, who practices 
        accurate communication and active listening. I have skills to negotiate and close sales, as well as 
        long-term business vision.
        </span>
        </div>
        <div>
        <p className='text-lg text-[#7A1E33] font-bold mb-2 sm:text-3xl md:text-4xl sm:mb-4 dark:text-[#FFBB00]'>Certifications</p>
        <div className='w-full flex-row'>
        <div className='w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-[700px] md:h-[520px] py-4 px-2 mx-auto mb-2'>
          <Slider slides={[certOne,certTwo,certTa,certEf]}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About