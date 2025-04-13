import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full h-[71px] rounded-full bg-[#030C0733] flex justify-between items-center">
            <div className='ml-[20px]' >
                <Image src='/asserts/logo.png' alt='image' width={189} height={35.28} />
            </div>
            <div className='flex justify-between items-center text-[#FFFFFF] gap-[40px] font-semibold text-[16px]'>
                <h1>Home</h1>
                <h1>Why choose</h1>

                <h1>About Us ?</h1>
                <h1>Features</h1>
            </div>
            <div className='mx-4'>
                <button className='bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px]'>Request Demo</button>
            </div>
        </div>
    );
};

export default Navbar;