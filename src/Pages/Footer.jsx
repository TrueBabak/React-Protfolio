import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#1d092c] w-full'>
        <div className='w-10/12 flex justify-between items-center m-auto py-4 text-lg'>
            <div className='w-1/3 mx-2 text-left'>Designed and developed by <span className='text-purple-500 font-semibold'>Babak Jahani</span></div>
            <div className='w-1/3 mx-2 text-center'>Copyright &#169; 2023 JB.</div>
            <div className='w-1/3 mx-2 text-right'>
                <ul className=' flex justify-center items-center mt-4'>
                    <li className='text-2xl m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><a href='https://github.com/TrueBabak'><AiFillGithub/></a></li>
                    <li className='text-2xl m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><a href='https://www.instagram.com/truebabak/'><AiFillInstagram/></a></li>
                    <li className='text-2xl m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><a href='https://t.me/TrueBabak'><FaTelegram/></a></li>
                    <li className='text-2xl m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><a href='https://twitter.com/truebabak'><AiOutlineTwitter/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
