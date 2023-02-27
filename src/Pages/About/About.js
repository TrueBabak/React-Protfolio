import React from 'react'
import Type from '../Home/Type'
import Particle from '../Particle'
import AboutImg from '../../Assets/Images/about.png'

function About() {
  return (
    <div className='bg-[#09030e] h-screen'>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='flex justify-center items-center w-2/3 h-full m-4'>
                    <div className='w-full m-auto flex-col items-center'>
                        <div className='w-full m-auto text-5xl py-2 text-center mb-10'>
                            <h1>Know Who <span className='text-purple-500'>IM</span> </h1>
                        </div>
                        <div className='w-3/4 m-auto py-2'>
                            <div className='text-2xl '>Hi Everyone. I am <span className='text-purple-500'>Babak Jahani</span> from <span className='text-purple-500'>Tehran , Iran</span>.</div>
                            <div className='mb-12 text-2xl '>I am a computer engineering student at Tehran Azad University <span className='text-purple-500'>(West unit)</span></div>
                            <div className='mb-5 text-2xl '>Apart from coding, some other activities that i <span className='text-purple-500'>Love</span> to do!
                                <ul className='list-disc ml-8 mt-4'>
                                    <li>Playing shooter games <span className='text-purple-500'>(Warzone , Rainbow Six)</span></li>
                                    <li>reading a book</li>
                                    <li>travelling</li>
                                    <li>Listen to music</li>
                                </ul>
                            </div>
                            <div className='text-2xl mb-1 text-purple-300 text-center mt-6'>"Strive to build things that make a diffrence!"</div>
                            <div className='text-2xl mb-1 text-purple-300 text-center'>-Babak</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-1/3 h-full m-4'>
                    <img className='' src={AboutImg}/>
                </div>
            </div>
            <Particle />
    </div>
  )
}

export default About
