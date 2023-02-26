import React from 'react'
import Avatar from '../../Assets/Images/Avatar.jpg'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Home2 = ()=> {
  return (
    <div className='bg-violet-900 mainSection h-screen'>
        <div className='flex justify-center items-center w-full h-4/6'>
                <div className='flex justify-center items-center w-1/2 h-full m-4'>
                    <div className='w-full h-full m-auto flex justify-center items-center'>
                        <div>
                            <div className='w-full m-auto text-5xl py-2 text-center'>
                                <h1>LET ME <span className='text-purple-500'>INTRODUCE</span> MYSELF</h1>
                            </div>
                            <div className='w-3/4 m-auto text-2xl py-2'>
                                <div className='mb-5 text-2xl '>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</div>
                                <div className='mb-5 text-2xl '>I am fluent in classics like <span className='text-purple-500'>Javascript</span> and <span className='text-purple-500'>Python.</span></div>
                                <div className='mb-5 text-2xl '>My field of Interest's are building new  Web Technologies and <span className='text-purple-500'>Web design</span> & <span className='text-purple-500'>Web programmig</span>..</div>
                                <div className='mb-5 text-2xl '>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like <span className='text-purple-500'>React js</span> and <span className='text-purple-500'>Next js</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-1/2 h-3/4 m-4'>
                    <div className='rounded-full overflow-hidden w-2/4 ring-purple-500 ring-2'>
                        <img className='' src={Avatar}/>
                    </div>
                </div>
        </div>
        <div className='h-2/6 w-full'>
            <div className='text-center text-6xl mb-2'>FIND ME <span className='text-purple-500'>ON</span></div>
            <div className='text-center text-xl'>Feel free to  <span className='text-purple-500'>contact</span> with me</div>
            <ul className=' flex justify-center items-center mt-4'>
                <li className='text-purple-500 text-3xl p-2 w-10 h-10 bg-red-50 m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><AiFillGithub/></li>
                <li className='text-purple-500 text-3xl p-2 w-10 h-10 bg-red-50 m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><AiFillInstagram/></li>
                <li className='text-purple-500 text-3xl p-2 w-10 h-10 bg-red-50 m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><FaTelegram/></li>
                <li className='text-purple-500 text-3xl p-2 w-10 h-10 bg-red-50 m-2 flex justify-center items-center rounded-full hover:shadow-inner shadow-white'><AiOutlineTwitter/></li>
            </ul>
        </div>
    </div>
  )
}

export default Home2;
