import React from 'react'
import Navbar from '../navbar/navbar'
import './skills.scss'

import ExpereiceSkill from './experience_skill';
import Learning from './learningSkill';
import ExtraSkill from './extra_skill';


const WebSkills = ({isWeb}) => {
  return (
   
<>
 <div style={{backgroundColor:'#ccc',width:"100vw",height:"100vh",position:"relative"}}>
  <div className='skillContainer'>
      <div className='heading'>
        <span className='headingText'>
          SKILLS
        </span>
      </div>
      <ExpereiceSkill isWeb={isWeb}/>
      <Learning/>
      <ExtraSkill/>
      <div style={{height:40}}>

      </div>
     

  </div>
 </div>
{/* <Navbar/> */}
</>
  
  )
}

export default WebSkills