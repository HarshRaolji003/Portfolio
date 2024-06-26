import React from 'react'

export default function Header() {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span class="ml-3 text-xl">Harsh Raolji</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900">Home</a>
                        <a class="mr-5 hover:text-gray-900">My Projects</a>
                        <a class="mr-5 hover:text-gray-900">About me</a>
                        <a class="mr-5 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}
