import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <div className='header'>
        <i className="fa-solid fa-m"></i>
        <div>
        <a href='https://github.com/Manthan123456?tab=repositories' target="_blank" rel="noreferrer"><i className="fa-brands fa-github upper"></i></a>
        <a href='https://twitter.com/Tyagimanthan1' target = "_blank" rel="noreferrer"><i class="fa-brands fa-twitter-square upper"></i></a>
        <a href='https://www.linkedin.com/in/manthan-tyagi/' target = "_blank" rel="noreferrer"><i className="fa-brands fa-linkedin upper"></i></a>

        </div>
    </div>
  )
}

export default Header