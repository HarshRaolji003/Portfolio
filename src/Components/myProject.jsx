import React from 'react'
// project details
import { projects } from '../assets/details'

export default function myProject() {

  return (
    <div name="Projects" className='container px-5 py-24 mx-auto text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        {/* Project template  */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({id, src,code,demo }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='object-contain rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <a
                    href={demo}
                    target='_blank'
                     rel="noreferrer"
                    className='cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Demo
                  </a>
                  <a
                    href={code}
                    target='_blank'
                     rel="noreferrer"
                    className='cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Code
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
