"use client"
import Image from 'next/image';
import  { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full h-[71px] rounded-full bg-[#030C0733] flex justify-between items-center">
            <div className='flex md:hidden ml-[20px]'>
                <Image src='/asserts/logo.png' alt='image' width={149} height={35.28} />
            </div>
            <div className='hidden md:flex md:ml-[20px]'>
                <Image src='/asserts/logo.png' alt='image' width={189} height={35.28} />
            </div>


            <div className='hidden md:flex justify-between items-center text-[#FFFFFF] gap-[40px] font-semibold text-[16px]'>
                <h1>Home</h1>
                <h1>Why choose</h1>
                <h1>About Us ?</h1>
                <h1>Features</h1>
            </div>

            {/* Request Demo Button */}
            <div className='hidden md:flex mx-4'>
                <button className='bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px]'>Request Demo</button>
            </div>

            {/* Hamburger Icon for small devices */}
            <div className='md:hidden flex items-center mr-4' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Dropdown menu for small devices */}
            <div className={`md:hidden absolute top-[90px] right-0 bg-green-950 rounded-b-2xl w-full text-center ${isOpen ? 'block' : 'hidden'}`}>
                <h1 className="text-[#FFFFFF] py-2 font-semibold">Home</h1>
                <h1 className="text-[#FFFFFF] py-2 font-semibold">Why choose</h1>
                <h1 className="text-[#FFFFFF] py-2 font-semibold">About Us ?</h1>
                <h1 className="text-[#FFFFFF] py-2 font-semibold">Features</h1>
                <div className='py-2'>
                    <button className='bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px] '>Request Demo</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
