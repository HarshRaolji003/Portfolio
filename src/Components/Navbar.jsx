import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll"

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "skill",
        },
        {
            id: 4,
            link: "Projects",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className='navbar'>
            <div className='text-4xl font-signature'>
                Harsh
            </div>
            <nav className=" hidden md:flex">
                {links.map(({ id, link }) => {
                    return (

                        <span key={id} className="font-medium  capitalize p-5 text-center cursor-pointer text-gray-500 hover:scale-110 duration-200">
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </span>
                    );

                })}
            </nav>
            
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (

                <nav className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen '>
                    {links.map(({ id, link }) => {
                        return (

                            <span key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500">
                                {link}
                            </span>
                        );

                    })}
                    {/* <span className='px-4 cursor-pointer capitalize py-6 text-4xl '></span> */}
                </nav>
            )}
        </div>
    );
}
