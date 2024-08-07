import React from 'react'
import {motion} from 'framer-motion';
import Skill from './Skill'


export default function AboutMe() {
  return (
    <div className=' px-5 py-24 mx-auto bg-light-bg '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-sans text-gray-700 dark:text-gray-300'>About</p>
        </div>
        <section className='grid  items-center gap-4'>
          
          <div className=' text-gray-500'>
            <p className='text-lg leading-relaxed'>
              As a recent graduate with a Bachelor of Engineering in Computer Engineering from SARDAR VALLABHBHAI PATEL INSTITUTE OF TECH., VASAD, I have honed my technical skills, particularly in JavaScript eXtension (JSX) and Python. My most recent engagement as a ReactJs Intern at Tech Elecon Pvt. Ltd. allowed me to apply these competencies in a dynamic, real-world setting.
            </p>
            <br />
            <p className='text-lg leading-relaxed'>
              Volunteering at SSIP CELL, SVIT, I contributed to hosting an IoT workshop, which enhanced my presenting and management skills while deepening my understanding of IoT applications. Our team's collaborative efforts led to a successful educational event, and I am eager to bring this experience, alongside my technical expertise, to contribute meaningfully to a forward-thinking organization.
            </p>
          </div>
        </section>
      </div>
      <Skill />
    </div>
  )
}
