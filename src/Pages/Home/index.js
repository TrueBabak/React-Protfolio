import React from 'react';
import Navbar from '../Navbar';
import Type from './Type';
import HomeImg from '../../Assets/Images/home-main.svg'
import Particle from '../Particle';

const Index = () => {
    return (
        <div className='bg-violet-900 mainSection h-3/4'>
        <Navbar/>
        
            <div className='flex justify-center items-center w-full h-3/4'>
                <div className='flex justify-center items-center w-1/2 h-full m-4'>
                    <div className='w-full m-auto flex-col items-center font-bold'>
                        <div className='w-3/4 m-auto text-3xl py-1'>Hi There! 
                            <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                        </div>
                        <div className='w-3/4 m-auto text-3xl py-1'>I'M <span className='text-purple-500'>Babak Jahani</span></div>
                        <div className='w-3/4 m-auto text-4xl py-14 text-purple-600 text-left'>
                            <Type />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-1/2 h-full m-4'>
                    <img className='w-full h-full' src={HomeImg}/>
                </div>
            </div>
            <Particle />
        </div>
    );
}

export default Index;
