import React, { useState } from 'react'
import '../home/WebHome.scss'
//  import  ReactIcon  from '../../assets/react.svg'
import reactSvg from '../../assets/react2.svg';


const WebHome = () => {
    const navbar=['About Me','Skills','Portfolio','Contact Me']
    const [selectedTitle,setSelectedTitle] =useState(navbar.length-1)
    const handleTabSelection=(i)=>{
        setSelectedTitle(i)
    }
  return (
   <>
     <div className="bg-split">
  
  <div className="left-half"></div>
  <div className="right-half"></div>
</div>
      <div className="navBar">
     <div className='navBar1'>
   <img src={reactSvg}  />
   {/* <ReactIcon/> */}
     </div>
     <div className='navBar2'>
        {navbar.map((name,ind)=>{
            return (
                <div className={selectedTitle ===ind ?'selectedTab' : ""}>
                <h3  style={{flexShrink:1,cursor:'pointer'}} onClick={()=>handleTabSelection(ind)}>{name}</h3>
                </div>
            )
        })}

     </div>
</div>


</>
  )
}

export default WebHome