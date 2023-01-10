import React from 'react'
import {RiWhatsappFill,RiWhatsappLine} from 'react-icons/ri'

const WhatsAppButton = () => {

 return(
    <a href='https://api.whatsapp.com/send?phone=5492665264360' target={"_blank"} rel="noreferrer">
        <RiWhatsappFill className='flex dark:hidden w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[55px] xl:h-[55px] 2xl:w-[70px] 2xl:h-[70px] cursor-pointer transition-color animate-[bounce_1s_linear_infinite]'/>
        <RiWhatsappLine className='hidden dark:flex w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[55px] xl:h-[55px] 2xl:w-[70px] 2xl:h-[70px] cursor-pointer invert transition-color animate-[bounce_1s_linear_infinite]' />
    </a>
 )
}

export default WhatsAppButton