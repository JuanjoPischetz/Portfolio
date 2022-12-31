import React, {Fragment} from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { AiOutlineCloseCircle, AiFillGithub} from "react-icons/ai";
import {CgWebsite} from 'react-icons/cg'


const ModalVideoGames = ({isOpen, closeModal}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className={"relative z-10"} onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50 " />
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
                  <Dialog.Panel className=" transform overflow-hidden bg-white  dark:shadow-[#C5C5C5] shadow-lg shadow-[#7A1E33] align-middle  transition-all rounded-lg sm:rounded-xl">
                    {/* aca se renderizan cosas */}
                    <div className='bg-[#EDFFDA] bg-opacity-[0.5] dark:bg-[#000000] dark:bg-opacity-[0.85] w-[300px] sm:w-[500px] h-[600px] sm:h-[800px] lg:w-[900px] lg:h-[500px] p-4 flex flex-col lg:px-8'>
                    <div className='w-full h-fit flex flex-row justify-end'>
                    <AiOutlineCloseCircle className='w-[30px] h-[30px] dark:invert cursor-pointer'
                    onClick={()=>closeModal(true)}/>
                    </div>
                    <h1 className='mt-4 text-[#7A1E33] font-bold text-2xl sm:text-3xl dark:text-[#FFBB00]'>SPA Video Games</h1>
                    <p className='mb-4 sm:mb-12 text-[#2D2525] text-sm sm:text-xl dark:text-[#C5C5C5]'>(10/10/22 to 10/25/22)</p>
                    <span className='text-left indent-2 mb-4 sm:mb-8 text-[#2D2525] font-medium text-lg sm:text-2xl dark:text-white'>That was my first project ever. After two months of BootCamp, we have to face the Individual Project stage. </span>
                    <span className='text-left indent-2 mb-8 sm:mb-24 lg:mb-8 text-[#2D2525] font-medium text-lg sm:text-2xl dark:text-white'>This SPA includes its own REST API,consumes an external API and consults its own database. Try it!</span>
                    <div className='flex flex-row justify-around '>
                    <a href='https://github.com/JuanjoPischetz/PI-VideoGames'  target={"_blank"} rel="noreferrer">
                      <AiFillGithub className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] lg:transition hover:scale-[1.1] ease-linear duration-300 dark:invert'/>
                    </a>
                    <a href='https://pi-video-games-juanjopischetz.vercel.app/' target={"_blank"} rel="noreferrer">
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

export default ModalVideoGames