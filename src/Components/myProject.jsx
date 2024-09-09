import React from 'react'
// project details
import { projects } from '../assets/details'

export default function myProject() {

  return (
    <div className=' px-5 py-24 mx-auto bg-Seasalt dark:bg-Eerie_black '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-sans text-gray-700 dark:text-Anti-flash-white'>My Projects</p>
          <p className='py-6 text-gray-400 dark:text-white'>Check out some of my work right here</p>
        </div>

        {/* Project template  */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0'>
          {
            projects.map(({ id, src, code, demo }) => (
              <div key={id} className='border border-slate-500 dark:border-Anti-flash-white p-4 rounded-lg '>
                <img src={src} alt="" className='object-cover rounded-lg ' />
                <div className='flex justify-evenly items-center p-4'>
                <a
                    href={code}
                    target='_blank'
                    rel="noreferrer"
                    className='border border-black/15 rounded-3xl px-3 py-2 text-sm md:text-md dark:border-white dark:text-gray-300'
                  >
                    GitHub
                  </a>
                  
                  <a
                    href={demo}
                    target='_blank'
                    rel="noreferrer"
                    className='border border-black/15 rounded-full px-3 py-2 cursor-pointer text-sm md:text-md dark:border-white dark:text-gray-300 '>
                    Live Demo
                  </a>
                  
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
