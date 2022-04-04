import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact1'>
        <div className='call'>
          <h5>CALL</h5>
          <h5 id='number'>+91 8218905192</h5>
        </div>
        <div className='email'>
          <h5>EMAIL</h5>
          <a href='mailto: manthantyagi04@gmail.com'>manthantyagi04@gmail.com</a>
        </div>
      </div>

      <span className='span'>Copyright 2022 | Manthan Tyagi | All Rights Reserved</span>
      <div className='icon3'>
        <a href='https://github.com/Manthan123456?tab=repositories' target="_blank" rel="noreferrer"><i className="fa-brands fa-github upper"></i></a>
        <a href='https://twitter.com/Tyagimanthan1' target = "_blank" rel="noreferrer"> <i class="fa-brands fa-twitter-square upper"></i></a>
        <a href='https://www.linkedin.com/in/manthan-tyagi/' target = "_blank" rel="noreferrer"><i className="fa-brands fa-linkedin upper"></i></a>

        </div>




    </div>
  )
}

export default Contact