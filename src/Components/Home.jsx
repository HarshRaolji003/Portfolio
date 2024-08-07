import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js'
import { motion } from 'framer-motion'
// import image from '../assets/image/bg-lines.jpg';
// assets
import { description } from '../assets/details';
import Profile from '../assets/image/profile-1.png';

export default function Home() {


  useEffect(() => {
    const titles = gsap.utils.toArray('.text_effect');
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    
    titles.forEach((title, index) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.03,
        duration: 1.2,
        delay: index * 0.5,
        onComplete: () => {
          if (index === titles.length - 1) {
            tl.pause();
          }
        },
      }, '<');

      tl.to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.03,
        duration: 1.2,
        delay: index * 0.5,
      }, '<1');
    });

  }, []);

  return (
    <main className=" px-5 py-24 mx-auto  dark:bg-[#354250]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">

        <div className='container  mb-8 '>
          <section className='flex justify-center items-center  '>
            <motion.div
              className='  overflow-hidden rounded-full drop-shadow-xl '
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img src={Profile} alt="Profile Pic" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover  rounded-full shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105" />
            </motion.div>
          </section>
          {/* <h2 className="md:text-4xl text-3xl font-bold text-gray-800 dark:text-white font-sans border-4">Hello, I'm</h2> */}
          {/* Text animation */}
          <div className=" mt-6 space-y-3 text-center">
            {['Frontend Developer', 'Python Developer', 'Harsh Raolji'].map((text, index) => (
              <p key={text} className='text_effect font-semibold text-gray-700 dark:text-gray-300 w-auto h-fit'>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Description and Resume Download Button */}
        <div className='grid gap-4'>
          <p className="text-gray-500 max-w-md leading-relaxed text-wrap">
            {description}
          </p>

          <div className="block">
            <motion.a
              layout
              href="https://drive.google.com/file/d/1GeiexBRMxvwx_IdfPU0w519jXcUPThTX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="w-[160px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Resume
              </span>
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 1.5,
                  ease: 'linear',
                }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </main>
  );
}
