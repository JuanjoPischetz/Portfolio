import React, {Fragment} from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { AiOutlineCloseCircle, AiFillGithub} from "react-icons/ai";
import {CgWebsite} from 'react-icons/cg'


const ModalPawsFounding = ({isOpen2, closeModal2}) => {
    return (
        <Transition appear show={isOpen2} as={Fragment}>
          <Dialog as="div" className={"relative z-10"} onClose={closeModal2}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>
    
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" transform overflow-hidden bg-white dark:shadow-[#C5C5C5] shadow-lg shadow-[#7A1E33]  align-middle  transition-all rounded-lg sm:rounded-xl">
                    {/* aca se renderizan cosas */}
                    <div className='bg-[#EDFFDA] bg-opacity-[0.5] dark:bg-[#000000] dark:bg-opacity-[0.85] w-[300px] h-min-[600px]  sm:w-[500px] sm:h-[800px] lg:w-[900px] lg:h-[550px] overflow-y p-4 lg:px-8 flex flex-col'>
                    <div className='w-full h-fit flex flex-row justify-end'>
                    <AiOutlineCloseCircle className='w-[30px] h-[30px] dark:invert'
                    onClick={()=>closeModal2(true)}/>
                    </div>
                    <h1 className='mt-2 text-[#7A1E33] font-bold text-2xl sm:text-3xl dark:text-[#FFBB00]'>MVP PawsFounding</h1>
                    <p className='mb-4 text-[#2D2525] text-sm sm:text-xl sm:mb-8 dark:text-[#C5C5C5]'>(11/07/22 to 11/30/22)</p>
                    <span className='text-left indent-2 mb-2 sm:mb-4 text-[#2D2525] font-medium text-base sm:text-2xl dark:text-white'>PawsFounding is a funding platform with social network integration. It is a tool that allows animal shelters to publicize their activities and at the same time receive donations in a transparent way. </span>
                    <span className='text-left indent-2 mb-4 sm:mb-8 text-[#2D2525] font-medium text-base sm:text-2xl dark:text-white'>Seven people worked on this project that includes login and authentication, payment gateway, image and video post, administrator panel, geolocation and more. In addition, the project was carried out in three weeks from scratch, using agile methodologies (scrum) divided into three sprints.</span>
                    <div className='flex flex-row justify-around'>
                    <a href='https://github.com/JuanjoPischetz/PF-Henry-Grupo05'  target={"_blank"} rel="noreferrer">
                      <AiFillGithub className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] lg:transition hover:scale-[1.1] ease-linear duration-300 dark:invert'/>
                    </a>
                    <a href='https://pf-henry-grupo05.vercel.app/' target={"_blank"} rel="noreferrer">
                      <CgWebsite className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] lg:transition hover:scale-[1.1] ease-linear duration-300 dark:invert'/>
                    </a>
                    </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )
}

export default ModalPawsFounding