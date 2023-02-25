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
        <div className='w-9/12 px-4 bg-red-500 m-auto flex justify-between items-center text-white py-2'>
            <div className='Avatar w-16 rounded-full overflow-hidden bg-gray-200 ring-2'>
                <img src={Avatar}/>
            </div>
            <div className='Navbar'>
                <ul className='flex'>
                    <li className='px-4 text-xl flex items-center cursor-pointer hover:text-red-400'><AiOutlineHome style={{width:'20px' , marginRight:'5px'}}/> Home</li>
                    <li className='px-4 text-xl flex items-center cursor-pointer hover:text-red-400'><AiOutlineUser style={{width:'20px' , marginRight:'5px'}}/> About</li>
                    <li className='px-4 text-xl flex items-center cursor-pointer hover:text-red-400'><AiOutlineFundProjectionScreen style={{width:'20px' , marginRight:'5px'}}/> Project</li>
                    <li className='px-4 text-xl flex items-center cursor-pointer hover:text-red-400'><CgFileDocument style={{width:'20px' , marginRight:'5px'}}/> Resume</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
