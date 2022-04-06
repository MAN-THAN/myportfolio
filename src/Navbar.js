import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import "./style.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='link'><Link to='about' spy = {true} smooth = {true} duration ={700}>About</Link></div>
        <div className='link'><Link to='tech' spy = {true} smooth = {true} duration ={1000}>Technology</Link></div>
        <div className='link'><Link to='project' spy = {true} smooth = {true} duration ={1500}>Project</Link></div>
    </div>
  )
}

export default Navbar