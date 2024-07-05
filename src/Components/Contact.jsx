import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='w-full h-screen p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-ld mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Contat</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="" className='flex flex-col w-full md:w-1/2 '>
            <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent rounded-md text-white focus:outline-none' />
            <input type="email" name="name" placeholder='Enter your email' className='my-4 p-2 bg-transparent rounded-md text-white focus:outline-none' />
            <textarea name="message" rows="10" id="" className='p-2 border-2 rounded-md text-white focus:outline-none'></textarea>
             <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500'>
              let's talk
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}