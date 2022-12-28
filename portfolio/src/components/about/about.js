import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AttentionSeeker } from 'react-awesome-reveal';

const About = () => {
  return (
    <div  className=' w-full h-screen p-4'>
        <div className='mb-8'>
        <div className='w-full flex flex-row items-center'>
        <h2 className='text-2xl mr-2'>
            Glad to see you here! 
        </h2>
        <AttentionSeeker effect='tada'> <MdOutlineWavingHand className='w-[25px] h-[25px]'/> </AttentionSeeker>
        </div>
        <div className='border-2 border-black w-full mb-2'></div>
        <span> 
        I’m a full-stack developer, PERN Stack. I am passionate about programming and I like to learn new 
        technologies constantly. I want to develop platforms that impact people's lives, improving their quality
         of life. 
        </span>
        <p className='text-lg font-semibold mt-4'>SoftSkills</p>
        <span>
        10 years of experience in entrepreneurship led me to develop a wide range of soft skills. 
        I have experience managing work teams, standing out for being an empathetic leader, who practices 
        accurate communication and active listening. I have skills to negotiate and close sales, as well as 
        long-term business vision.
        </span>
        <p className='text-lg font-semibold mt-2'>What´s next?</p>
        <span>
            I´m currently practicing these technologies:
        </span>
        </div>
        <div className='flex flex-row flex-wrap gap-8 justify-center w-full'>
        <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" />
        <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/prisma.png" alt="Prisma" />
        <img className='w-[65px] h-[65px]' src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" />
        </div>
    </div>
  )
}

export default About