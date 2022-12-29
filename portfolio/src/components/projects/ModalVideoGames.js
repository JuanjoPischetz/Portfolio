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
                  <Dialog.Panel className=" transform overflow-hidden bg-white shadow-xl shadow-[#AFFFCE] align-middle  transition-all">
                    {/* aca se renderizan cosas */}
                    <div className='bg-[#AFFFCE] bg-opacity-[0.2] w-[300px] h-[600px] p-4 flex flex-col'>
                    <div className='w-full h-fit flex flex-row justify-end'>
                    <AiOutlineCloseCircle className='w-[30px] h-[30px]'
                    onClick={()=>closeModal(true)}/>
                    </div>
                    <h1 className='mt-4 text-[#7A1E33] font-bold text-2xl'>SPA Video Games</h1>
                    <p className='mb-4 text-[#2D2525] text-sm'>(10/10/22 to 10/25/22)</p>
                    <span className='text-left indent-2 mb-4 text-[#2D2525] font-medium text-lg'>That was my first project ever. After two months of BootCamp, we have to face the Individual Project stage. </span>
                    <span className='text-left indent-2 mb-8 text-[#2D2525] font-medium text-lg '>This SPA includes external API management and its own database, which can read the information from the client, filter, sort, and create a new game.</span>
                    <div className='flex flex-row justify-around'>
                    <a href='https://github.com/JuanjoPischetz/PI-VideoGames'  target={"_blank"} rel="noreferrer">
                      <AiFillGithub className='w-[50px] h-[50px]'/>
                    </a>
                    <a href='https://pi-video-games-juanjopischetz.vercel.app/' target={"_blank"} rel="noreferrer">
                      <CgWebsite className='w-[50px] h-[50px]'/>
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