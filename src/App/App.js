import { Route, Router, Routes } from 'react-router-dom';
import Footer from '../Pages/Footer';
import MainHome from '../Pages/Home';
import MainAbout from '../Pages/About';
import Navbar from '../Pages/Navbar';
import Project from '../Pages/Project';
import MainResume from '../Pages/Resume';
import ScrollTop from '../Pages/ScrollTop';

function App() {
  return (
      <div>
        <Navbar/>
        <ScrollTop/>
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
