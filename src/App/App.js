import Navbar from '../Pages/Navbar';
import Particle from '../Pages/Particle';
import Home from '../Pages/Home/index'
import './App.css';
import Home2 from '../Pages/Home/Home2';
import Footer from '../Pages/Footer';

function App() {
  return (
    <div className="App bg-black h-screen">
      <Navbar/>
      <Home />
      <Home2/>
      <Footer/>
    </div>
  );
}

export default App;
