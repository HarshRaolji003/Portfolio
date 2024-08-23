import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
// details
import { tech } from '../assets/details';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrows for the slider
const NextArrow = ({ onClick }) => (
  <div className="absolute m-2 p-2 right-3 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer rounded-full bg-gray-400/10 drop-shadow-md" onClick={onClick}>
    <FaArrowRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute m-2 p-2 left-3 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer rounded-full bg-gray-400/10 drop-shadow-md" onClick={onClick}>
    <FaArrowLeft size={24} />
  </div>
);

export default function Skill() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>

        {/* Header */}
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline font-sans text-gray-700'>Skill</p>
          <p className='py-6 text-gray-500'>These are the technologies I've worked with</p>
        </div>

        {/* Skills template */}
        <div className="relative w-full">
          <Slider {...settings}>
            {tech.map(({ id, src, title, style }) => (
              <motion.div
                key={id}
                // className={`shadow-md py-4 rounded-lg ${style}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={src} alt={`${title} logo`} className="w-20 object-contain mx-auto" />
                <p className="mt-4 text-lg font-medium text-center">{title}</p>
              </motion.div>
            ))}
          </Slider>
        </div>

      </div>
    </>
  );
};
