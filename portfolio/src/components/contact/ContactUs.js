import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



export const ContactUs = () => {

const [input, setInput] = useState({
    user_name:'',
    user_email:'',
    message:''
})
const [errors, setErrors] = useState({
})
const validaciones = function(input){
    let errors ={}
    if(!input.user_name){
        errors.name='Complete this field';
    }
    if (!input.message){
        errors.message='Message cant be empty';
    }
    if(!input.user_email.includes('@') || !input.user_email.includes('.')){
        errors.email ='Please write and valid email direction'
    }
    return errors;
}
const inputHandler = function(e){
    setInput({...input, [e.target.name]: e.target.value});
    setErrors(validaciones({
        ...input, [e.target.name]: e.target.value
    }))
    console.log(errors)
  };


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='w-full sm:w-[500px] md:w-[650px] rounded-lg shadow-xl shadow-[#2D2525] bg-[#AFFFCE] flex justify-center'>
    <form ref={form} onSubmit={sendEmail} className='m-2 p-2 '>
    <div className='flex flex-col w-[300px] sm:w-[450px] md:w-[600px]'>
      <label className='text-[#7A1E33] font-bold text-lg sm:text-2xl sm:mb-2 md:text-3xl'>Name</label>
      <input className='mb-2 text-2xl md:text-3xl' type="text" name="user_name" placeholder='What is your name?'
      value={input.user_name} onChange={inputHandler}/>
      <p className='text-red-900 sm:text-lg'>{errors.name}</p>
      <label className='text-[#7A1E33] font-bold text-lg sm:text-2xl sm:mb-2 md:text-3xl'>Email</label>
      <input className='mb-2 text-2xl md:text-3xl' type="email" name="user_email" placeholder='Your Email'
      value={input.user_email} onChange={inputHandler}/>
      <p className='text-red-900 sm:text-lg'>{errors.email}</p>
      <label className='text-[#7A1E33] font-bold text-lg sm:text-2xl sm:mb-2 md:text-3xl'>Message</label>
      <textarea className='mb-2 text-2xl md:text-3xl' name="message" placeholder='How can I help you?' cols={1} rows={3}
      value={input.message} onChange={inputHandler} />
      <p className='text-red-900 sm:text-lg'>{errors.message}</p>
      <div className='w-full flex flex-row justify-center mt-2'>
      <button type='submit' disabled={Object.entries(errors).length !== 0}
      className={Object.entries(errors).length !== 0?"bg-[#7A1E33] bg-opacity-[0.4] cursor-default text-lg text-gray-100 w-min px-4 py-2 rounded-xl sm:text-2xl sm:px-8 sm:py-4 md:text-3xl"
      :" bg-[#7A1E33] cursor-pointer text-lg text-gray-100 w-min px-4 py-2 rounded-xl sm:text-2xl sm:px-8 sm:py-4 md:text-3xl"}
      >Send</button>
      </div>
    </div>
    </form>
    </div>
  );
};