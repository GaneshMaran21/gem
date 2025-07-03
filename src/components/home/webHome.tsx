import React, { useState } from 'react'
import '../home/WebHome.scss'
//  import  ReactIcon  from '../../assets/react.svg'
import reactSvg from '../../assets/react2.svg';
import Myimage from '../../assets/images/my2.jpeg';
import Myimage1 from '../../assets/png/my3.png';
import Myimage2 from '../../assets/png/my4.png';
// import GamilIcon from '../../assets/svg/gmailIcon.svg';
import GitIcon from '../../assets/svg/gitIcon.svg';
import LinkedIcon from '../../assets/svg/linkedIn.svg';
import {ReactComponent as GamilIcon} from '../../assets/svg/gmailIcon.svg'
import FooterHome from './footer';

// import gif from '../../assets/gif/atom.gif';


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
   <img src={reactSvg} className='gif' />
   {/* <ReactIcon/> */}
     </div>
     <div className='navBar2'>
        {navbar.map((name,ind)=>{
            return (
                <div className={selectedTitle ===ind ?'selectedTab' : ""}>
                <h3  style={{flexWrap:"nowrap",cursor:'pointer',fontSize:"1rem"}} onClick={()=>handleTabSelection(ind)}>{name}</h3>
                </div>
            )
        })}

     </div>
</div>
<div className="imageContainer">
        <img src={Myimage1} className="cut-image-img" />
</div>
<div className="contentContainer">
    <h3 >
    HI,I am
  </h3>
  <div>
    <h1>
      Ganesh Kumaran
    </h1>
    <div>

    <span>
      Software Engineer
    </span>
    </div>
  </div> 
{/* <GamilIcon/> */}
   </div>
<FooterHome/>


</>
  )
}

export default WebHome