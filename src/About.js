import React from 'react'
import "./style.css"

const About = () => {
  
  return (
    <div className='about'>
      <div className='line'></div>
      <h1 className='aboutme'>About Me</h1>
      <h3 className='aboutme1'>I'm a software engineer with solid computer science background. <br /> I'm currently specializing in front-end web development where I  <br /> focus on building the fast and responsive web applications.</h3>
      <h3 className='aboutme1'>To know more , please download my Resume</h3>
      <button className='button2'><a href='/Resume/manthan.pdf' download >Download Resume</a></button>
    </div>
  )
}

export default About