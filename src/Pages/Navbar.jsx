import React from 'react';
import Avatar from '../Assets/Images/Avatar.jpg'
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
  import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className='w-5/6 flex justify-between items-center py-2 fixed top-0 left-1/2 -translate-x-1/2'>
            <div className='Avatar w-16 h-16 flex justify-center items-center font-bold text-2xl rounded-full overflow-hidden ring-2 ring-purple-700 font-mono'>
                BJ
            </div>
            <div className='Navbar'>
                <ul className='flex relative'>
                    <li className='relative navitem mx-6 px-2 text-xl flex items-center cursor-pointer'>
                        <AiOutlineHome style={{width:'20px' , marginRight:'5px'}}/> 
                        Home
                    </li>
                    <li className='relative navitem mx-6 px-2 text-xl flex items-center cursor-pointer'>
                        <AiOutlineUser style={{width:'20px' , marginRight:'5px'}}/> 
                        About
                    </li>
                    <li className='relative navitem mx-6 px-2 text-xl flex items-center cursor-pointer'>
                        <AiOutlineFundProjectionScreen style={{width:'20px' , marginRight:'5px'}}/> 
                        Project
                    </li>
                    <li className='relative navitem mx-6 px-2 text-xl flex items-center cursor-pointer'>
                        <CgFileDocument style={{width:'20px' , marginRight:'5px'}}/> 
                        Resume
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
