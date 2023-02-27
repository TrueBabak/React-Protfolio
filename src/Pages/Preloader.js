import React from 'react'

function Preloader(Load) {
  return <div id={Load.Load ? "preloader" : "preloader-none"}></div>
}

export default Preloader
