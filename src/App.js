import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Intro from './Intro'
import Navbar from './Navbar'
import Project from './Project'
import Technology from './Technology'

const App = () => {
  return (
    <div>
        <Header />
        <Navbar/>
        <Intro/>
        <About title = "About"  id = "about"/>
        <Technology  title = "Technology"  id = "tech"/>
        <Project  title = "Project"  id = "project"/>
        <Contact />



        
    </div>
  )
}

export default App