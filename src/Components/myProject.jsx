import React from 'react'
import Image from "../assets/image/ProjectManagement.jpg"
export default function myProject() {

  const projects = [
    {
      id: 1,
      src: Image
    },
    {
      id: 2,
      src: Image
    },
    {
      id: 3,
      src: Image
    },
    {
      id: 4,
      src: Image
    },
    {
      id: 5,
      src: Image
    },
    {
      id: 6,
      src: Image
    },
  ];

  return (
    <div name="Projects" className='container px-5 py-24 mx-auto text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Projects</p>
          <p className='py-6'>check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({ id, src }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
