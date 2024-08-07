import React from 'react'
// project details
import { projects } from '../assets/details'

export default function myProject() {

  return (
    <div className=' px-5 py-24 mx-auto bg-light-bg '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-sans text-gray-700 dark:text-gray-300'>My Projects</p>
          <p className='py-6 text-gray-400'>Check out some of my work right here</p>
        </div>

        {/* Project template  */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({ id, src, code, demo }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='object-contain rounded-md ' />
                <div className='flex justify-evenly p-4'>
                  <a
                    href={demo}
                    target='_blank'
                    rel="noreferrer"
                    className='cursor-pointer  duration-200 hover:scale-105'>
                    Demo
                  </a>
                  <a
                    href={code}
                    target='_blank'
                    rel="noreferrer"
                  >
                    <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8  duration-200 ">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
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
