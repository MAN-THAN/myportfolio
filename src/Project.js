import React from 'react'
import "./style.css"


const Project = () => {
  return (
    <div className='project'>
       <div className='line'></div>
       <h1 className='aboutme'>Selected Project</h1>
       <div className='cardflex'>
       <div className='card'>
         <div className='image1'></div>
         <h1 style={{textAlign : "center", color: "skyblue", marginTop: 20, fontFamily: "sen-serif"}}>React Blog App</h1>
         <div className='line2'></div>
         <h4 style={{color:"antiquewhite", letterSpacing :3, fontSize : 'large', marginTop : 20, marginLeft : 8, textAlign: "center"}}>A Proficient & fully responsive Website or SPA(Single Page Application) made using React.js based on React Routing feature. Use of Material UI</h4>
       
       <div className='stack'>
         <div>HTML5</div>
         <div>CSS3</div>
         <div>REACTJS</div>
         <div>MUI</div>
       </div>
       <a href='https://trusting-mccarthy-f8cb41.netlify.app/' target="_blank" rel="noreferrer"><button className='button'>Visit</button></a>
       </div>

       <div className='card card2'>
         <div className='image2'></div>
         <h1 style={{textAlign : "center", color: "skyblue", marginTop: 20, fontFamily: "sen-serif"}}>Quiz App</h1>
         <div className='line2'></div>
         <h4 style={{color:"antiquewhite", letterSpacing :3, fontSize : 'large', marginTop : 20, marginLeft : 8, textAlign: "center"}}>A series of questions where users have to select their answer and on completion your score will be displayed. Use of Vanilla JavaScript &  CSS3 </h4>
       
       <div className='stack'>
         <div>HTML5</div>
         <div>CSS3</div>
         <div>JavaScript</div>

        
       </div>
       <a href='https://manthan123456.github.io/Quiz-App/' target ="_blank" rel="noreferrer"><button className='button'>Visit</button></a>
       </div>
       </div>
       <div className='endline'></div>

       



    </div>
  )
}

export default Project