import React, { useState } from 'react';
import Avatar from '../Assets/Images/Avatar.jpg'
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
  import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY > 5) {
        updateNavbar(true);
        console.log(navColour)
        } 
        else {
        updateNavbar(false);
        console.log(navColour)
        }
    }

    window.addEventListener("scroll", scrollHandler);
    return (
            <div className={navColour ? "w-full flex justify-between items-center py-2 fixed top-0 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out z-50 backdrop-blur-sm bg-[#2323232c] shadow-xl" : "w-full flex justify-between items-center py-2 fixed top-0 left-1/2 z-50 -translate-x-1/2 transition-all duration-200"}>
                <div className='w-5/6 flex justify-between items-center m-auto'>
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
            </div>
    );
}

export default Navbar;
