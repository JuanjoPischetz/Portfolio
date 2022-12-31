import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AttentionSeeker , Fade} from 'react-awesome-reveal';
import Slider from '../slider/Slider';
import certOne from './cert_one.png'
import certTwo from './cert_two.png'
import certTa from './cert_ta.png'
import certEf from './cert_ef.png'

const AboutLg = () => {
  return (
    <div  className=' w-full p-4 sm:px-8 2xl:px-12'>
        <div className='w-full flex flex-col content-center justify-around h-screen'>
        <div className='w-full flex flex-col h-min'>
          <div className='flex flex-row items-center'>
        <h2 className='text-4xl xl:text-5xl 2xl:text-7xl 2xl:mb-4 2xl:mr-8 mb-2  mr-4 text-[#7A1E33] font-bold dark:text-[#FFBB00]'>
            Glad to see you here! 
        </h2>
        <AttentionSeeker effect='tada' duration={1500}> <MdOutlineWavingHand className='w-[25px] h-[25px] xl:w-[40px] xl:h-[40px] 2xl:w-[60px] 2xl:h-[60px] dark:invert'/> </AttentionSeeker>
          </div>
        <div className='border-2 border-[#2D2525] bg-[#2D2525] w-full mb-2 dark:bg-[#C5C5C5] dark:border-[#C5C5C5]'></div>
        <span className='text-[#2D2525] font-medium text-xl xl:text-2xl 2xl:text-4xl dark:text-white'> 
        I’m a full-stack developer, PERN Stack. I am passionate about programming and I like to learn new 
        technologies constantly. I want to develop platforms that impact people's lives, improving their quality
         of life. 
        </span>
        </div>
        <div>
        <p className='text-[#7A1E33] font-bold  mb-2 text-3xl 2xl:text-5xl dark:text-[#FFBB00]'>Soft Skills</p>
        <span className='text-[#2D2525] font-medium text-xl xl:text-2xl 2xl:text-4xl dark:text-white'>
        10 years of experience in entrepreneurship led me to develop a wide range of soft skills. 
        I have experience managing work teams, standing out for being an empathetic leader, who practices 
        accurate communication and active listening. I have skills to negotiate and close sales, as well as 
        long-term business vision.
        </span>
        </div>
        <div>
        <p className='text-[#7A1E33] font-bold  mb-2 text-3xl 2xl:text-5xl 2xl:mb-8 dark:text-[#FFBB00]'>Certifications</p>
        <Fade duration={1} triggerOnce>
        <div className='w-full flex-row'>
        <div className='w-[350px] h-[250px] xl:w-[400px] xl:h-[300px] 2xl:w-[750px] 2xl:h-[500px] py-4 px-2 mx-auto mb-8'>
          <Slider slides={[certOne,certTwo,certTa,certEf]}/>
        </div>
        </div>
        </Fade>
        </div>
        </div>
    </div>
  )
}

export default AboutLg