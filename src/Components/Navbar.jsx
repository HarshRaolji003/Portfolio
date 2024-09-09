import React, { useState, useEffect} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    const location = useLocation(); // Get the current location


    const links = [
        { id: 1, title: 'home', path: '/Portfolio' },
        { id: 2, title: 'about', path: '/about' },
        { id: 3, title: 'Projects', path: '/project' },
        { id: 4, title: 'contact', path: '/contact' },
    ];

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


    return (
        <div className='navbar z-10  md:grid grid-cols-12 '>
            <p className='hidden mt-4 col-span-3 text-center md:block text-5xl font-signature text-platinum-100  dark:text-white'>
                Harsh
            </p>
            <nav className="hidden mt-4 col-span-6 md:flex justify-evenly outline-none  rounded-full bg-white/80 drop-shadow-lg dark:bg-Anti-flash-white dark:text-white ">
                {links.map(({ id, path, title }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={id}
                            to={path}
                            duration={500}
                            className={`m-2 font-medium text-black rounded-full capitalize p-2 px-4 text-center cursor-pointer hover:scale-110 duration-300 ${isActive ? ' bg-[#354250] text-white ' : 'hover:bg-[#354250]/25'}`}
                        >
                            {title}
                        </Link>
                    );

                })}
            </nav>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-[#354250] md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <AnimatePresence>
          {nav && (
            <motion.nav
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur-md bg-white"
            >
              {links.map(({ id, path, title }) => (
                <motion.span
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: id * 0.1 }}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl text-black"
                >
                  <Link onClick={() => setNav(false)} to={path}>
                    {title}
                  </Link>
                </motion.span>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
            <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                aria-label="Toggle theme"
                onClick={handleTheme}
                className='mt-4 col-span-3 place-self-center bg-white rounded-full drop-shadow-md  p-2 cursor-pointer duration-200  '>

                {theme === 'dark' ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>}

            </motion.span>
        </div >
    );
}
