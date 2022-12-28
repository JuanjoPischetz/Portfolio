import React, {Fragment} from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { AiOutlineCloseCircle} from "react-icons/ai";


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
              <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <Dialog.Panel className=" transform overflow-hidden bg-transparent  align-middle  transition-all">
                    {/* aca se renderizan cosas */}
                    <div className='bg-white w-[300px] h-[600px] p-2 flex flex-col'>
                    <div className='w-full h-fit flex flex-row justify-end'>
                    <AiOutlineCloseCircle className='w-[30px] h-[30px]'
                    onClick={()=>closeModal2(true)}/>
                    </div>
                    <h1>Modal PawsFounding</h1>
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