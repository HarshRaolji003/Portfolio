import React from 'react'
// react-icon
import { MdOutlineCloudDownload } from "react-icons/md";
// assets
import profile from '../assets/image/profile-3.png'
import resume from '../assets/Resume.pdf';
import { description } from '../assets/details';

export default function Home() {
  return (
    <div name="home" className="container px-5 py-24 mx-auto">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        {/* brief Introduction */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Software Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            {description}
          </p>
          {/* resume download button */}
          <div >
            <a href={resume} target='_blank' download="Resume.pdf" className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Resume
              <span className='group-hover:scale-75 duration-300 '>
              <MdOutlineCloudDownload size={20} className='ml-1'/>
              </span>
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div>
          <img src={profile} alt="User Profile" className=" rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>

      </div>
    </div>
  )
}
