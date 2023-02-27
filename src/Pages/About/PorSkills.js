import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJqueryLogo,
  DiPython,
  DiGit,
  DiWordpress,
  DiMongodb
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";

function PorSkills() {
  return (
    <div className='bg-[#09030e]'>
      <div className='text-5xl text-center mb-4'>Professional <span className='text-purple-500'>Skillset</span></div>
      <div className='grid grid-cols-5 gap-4 w-4/6 m-auto'>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiJavascript1/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiJqueryLogo/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiReact/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><SiNextdotjs/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiNodejs/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiGit/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiPython/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiMongodb/></div>
        <div className='border p-1 m-2 flex justify-center items-center text-6xl py-6 rounded-lg border-purple-400'><DiWordpress/></div>
      </div>
    </div>
  )
}

export default PorSkills
