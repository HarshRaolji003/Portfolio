import React from 'react'
import { links } from '../assets/details';
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Harsh Raolji</h2>
                        <p className="text-gray-400">Frontend & Python Developer</p>
                    </div>
                    <div className="flex space-x-4 relative">
                        {links.map(({ id, child, href }) => (
                            <a
                                key={id}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                {child}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; 2024 Harsh Raolji. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
