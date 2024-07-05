import React from 'react'

// assets
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import javascript from "../assets/skills/javascript.png"
import reactImg from "../assets/skills/react.png"
import nextjs from "../assets/skills/nextjs.png"
import github from "../assets/skills/github.png"
import tailwind from "../assets/skills/tailwind.png"
// import python from "../assets/skills/Python.jiff"

export default function Skill() {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTMl',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImg,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: nextjs,
      title: 'NextJS',
      style: 'shadow-white'
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    }
  ]
  return (
    <div name="skill" className='container px-5 py-24 mx-auto'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skill</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            tech.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  );
};
