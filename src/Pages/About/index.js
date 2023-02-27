import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import About from './About';
import PorSkills from './PorSkills';
import Tools from './Tools';


const MainAbout = () => {
    return (
        <div>
            <Navbar/>
            <About/>
            <PorSkills/>
            <Tools/>
            <Footer/>
        </div>
    );
}

export default MainAbout;
