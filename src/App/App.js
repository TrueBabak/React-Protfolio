import { Route, Router, Routes } from 'react-router-dom';
import Footer from '../Pages/Footer';
import MainHome from '../Pages/Home';
import MainAbout from '../Pages/About';
import Navbar from '../Pages/Navbar';
import Project from '../Pages/Project';
import MainResume from '../Pages/Resume';
import ScrollTop from '../Pages/ScrollTop';
import { useEffect, useState } from 'react';
import Preloader from '../Pages/Preloader';

function App() {
  const [Load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(()=>{
      setLoad(false)
    },2000)
    return ()=> clearTimeout(timer)
  }, []);
  return (
      <div>
        <Navbar/>
        <ScrollTop/>
        <Preloader Load={Load}/>
        <Routes>
            <Route path='/Home' element={<MainHome/>}/>
            <Route path='About' element={<MainAbout/>}/>
            <Route path='Project' element={<Project/>}/>
            <Route path='Resume' element={<MainResume/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
