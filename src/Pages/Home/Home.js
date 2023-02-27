import React from 'react';
import Type from './Type';
import HomeImg from '../../Assets/Images/home-main.svg'
import Particle from '../Particle';

const Home = () => {
    return (
        <div className='bg-violet-900 mainSection h-screen'>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='flex justify-center items-center w-2/3 h-full m-4'>
                    <div className='w-full m-auto flex-col items-center font-bold'>
                        <div className='w-3/4 m-auto text-5xl py-2'>Hi There! 
                            <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                        </div>
                        <div className='w-3/4 m-auto text-5xl py-2'>I'M <span className='text-purple-500'>Babak Jahani</span></div>
                        <div className='w-3/4 m-auto text-6xl py-16 text-purple-600 text-left'>
                            <Type />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-1/3 h-full m-4'>
                    <img className='w-full h-full' src={HomeImg}/>
                </div>
            </div>
            <Particle />
        </div>
    );
}

export default Home;
