import React from 'react'
import "./style.css"

const Technology = () => {
  return (
    <div className='tech'>
    <div className='line'></div>
    <h1 className='techme'>Technology</h1>
    <h3 className='aboutme1'>I have worked with range of technologies in web development ecosystem.</h3>

    <div className='icons'>
      <div className = "box1">
      <i class="fa-brands fa-react middle"></i>
      <h2>React.js</h2>
      </div>
      <div className = "box1">
      <i class="fa-brands fa-js middle1"></i>
      <h2>JavaScript</h2>
      </div>
      <div className = "box1">
      <i class="fa-brands fa-css3 middle2"></i>
      <h2>CSS3</h2>
      </div>
      <div className = "box1">
      <i class="fa-brands fa-bootstrap middle3"></i>
      <h2>Bootstrap</h2>
      </div>
      <div className = "box1">
      <i class="fa-brands fa-html5 middle4"></i>
      <h2>HTML5</h2>
      </div>
      <div className = "box1">
      <i class="fa-brands fa-github middle5"></i>
      <h2>GitHub</h2>
      </div>
     


    </div>
  </div>
  )
}

export default Technology