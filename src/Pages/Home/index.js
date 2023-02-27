import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Home from './Home'
import Home2 from './Home2'

function MainHome() {
  return (
    <div>
      <Navbar/>

      <Home/>
      <Home2/>
      
      <Footer/>
    </div>
  )
}

export default MainHome
