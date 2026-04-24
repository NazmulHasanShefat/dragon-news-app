import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightSide = ({ className }) => {
    return (
        <aside className={`${className}`}>
            <h1 className='text-[20px] font-bold'>Login with</h1>
            <button className='flex items-center gap-3 text-[18px] border border-gray-300 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white'><FcGoogle /> Login with Google</button>
            <button className='flex items-center gap-3 text-[18px] border border-gray-300 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white'><FaGithub /> Login with Github</button>
           
            <h1 className='text-[20px] font-bold mt-5'>Find Us On</h1>
            <button className='flex items-center gap-3 text-[18px] border border-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white w-full'><FaFacebook /> Facebook</button>
            <button className='flex items-center gap-3 text-[18px] border border-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white w-full'><FaTwitter /> Twiter</button>
            <button className='flex items-center gap-3 text-[18px] border border-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white w-full'><FaInstagram /> Instagram</button>
        </aside>
    );
};

export default RightSide;