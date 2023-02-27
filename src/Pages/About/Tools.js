import React from 'react'
import {
  DiVisualstudio,
  DiCode,
  DiBootstrap,
  DiGithubBadge,
  DiLess,
  DiPhotoshop,
  DiNpm,
  DiStackoverflow,
  DiSass
} from "react-icons/di";
import {
  FaYarn,
} from "react-icons/fa";
import {
  SiTailwindcss,
} from "react-icons/si";

function Tools() {
  return (
    <div className='bg-[#09030e] pb-20'>
      <div className='text-5xl text-center mb-4'><span className='text-purple-500'>Tools</span> i use</div>
      <div className='grid grid-cols-5 gap-4 w-4/6 m-auto'>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiVisualstudio/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiSass/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiLess/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiBootstrap/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><SiTailwindcss/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiCode/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiGithubBadge/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiStackoverflow/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiNpm/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><FaYarn/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiPhotoshop/></div>
      </div>
    </div>
  )
}

export default Tools
