'use client'

import React, { useState } from 'react'
import NavLink from './NavLink'
import { Menu, X } from 'lucide-react'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className=''>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
            </ul>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-11 md:hidden text-white focus:outline-none"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            <div onClick={() => setIsOpen(false)} className={`md:hidden absolute left-0 w-full bg-gray-800 transition-transform duration-300 ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-[300px]'}`}>
                <ul className=" flex flex-col space-y-4 py-4 text-center">
                    <li><NavLink href="/" className="block py-2 hover:bg-gray-700">Home</NavLink></li>
                    <li><NavLink href="/posts" className="block py-2 hover:bg-gray-700">Posts</NavLink></li>
                    <li><NavLink href="/about" className="block py-2 hover:bg-gray-700">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
