import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'
import "./style.css"

const Intro = () => {
  return (
    <div className='intro'>
        <div className='box'>
        <h1 className='text1'>Hello there,</h1>
        <h1 className='text1'>I'm Manthan Tyagi</h1>
        <h3 className='text2'>A Front-end Developer seeking to further improve my skills.</h3></div>
        <BackgroundAnimation />
    </div>
  )
}

export default Intro