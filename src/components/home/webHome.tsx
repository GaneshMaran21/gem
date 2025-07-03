import React, { useState } from 'react'
import '../home/WebHome.scss'
//  import  ReactIcon  from '../../assets/react.svg'
import reactSvg from '../../assets/react2.svg';
import Myimage from '../../assets/images/my2.jpeg';
import Myimage1 from '../../assets/png/my3.png';
import Myimage2 from '../../assets/png/my4.png';
import GamilIcon from '../../assets/svg/borderIcon.svg';
import BorderIcon from '../../assets/svg/gmailIcon.svg';
import GitIcon from '../../assets/svg/gitIcon.svg';
import LinkedIcon from '../../assets/svg/linkedIcon.svg';
// import {ReactComponent as GamilIcon} from '../../assets/svg/gmailIcon.svg'
import FooterHome from './footer';
import { IconType } from '../../utils/enum/iconType';
import userInfo from '../../userInfo/userInfo';

// import gif from '../../assets/gif/atom.gif';


const WebHome = () => {
  const navbar = ['About Me', 'Skills', 'Portfolio', 'Contact Me']
  const [selectedTitle, setSelectedTitle] = useState(navbar.length - 1)
  const handleTabSelection = (i) => {
    setSelectedTitle(i)
  }

  const handleIconClick = (type: string) => {
    debugger;
    switch (type) {
      case IconType.MAIL:
        window.open(`mailto:${userInfo?.userEmail}`)
        break;
      case IconType.GIT:
        window.open(`https://github.com/${userInfo?.userGit}`, "_blank");
        break;
      case IconType.LINKEDIN:
        window.open(`https://www.linkedin.com/in/${userInfo?.userLinked}`, "_blank");
        break;
      default: break;
    }
  }
  console.log(IconType, "icons")
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
          {navbar.map((name, ind) => {
            return (
              <div className={selectedTitle === ind ? 'selectedTab' : ""}>
                <h3 style={{ flexWrap: "nowrap", cursor: 'pointer', fontSize: "1rem" }} onClick={() => handleTabSelection(ind)}>{name}</h3>
              </div>
            )
          })}

        </div>
      </div>
      <div className="imageContainer">
        <img src={Myimage1} className="cut-image-img" />
      </div>
      <div className="contentContainer">
        <span className='contentTextSubHeading' >
          HI,I am
        </span>
        <div style={{ flexDirection: "column", gap: 4, display: "flex" }}>
          <span className='contentTextHeading'>
            Ganesh Kumaran
          </span>
          <span className='contentText'>
            Software Engineer
          </span>
          <div>

          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleIconClick("email")} >
            <div style={{ position: "relative" }}>
              <img className='iconBackground' src={BorderIcon} />
            </div>
            <div style={{ position: "absolute" }}>
              <img src={GamilIcon} className='icon' />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleIconClick("git")}>
            <div style={{ position: "relative" }}>
              <img className='iconBackground' src={BorderIcon} />
            </div>
            <div style={{ position: "absolute" }}>
              <img src={GitIcon} className='icon' />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleIconClick("linkedIn")}>
            <div style={{ position: "relative" }}>
              <img className='iconBackground' src={BorderIcon} />
            </div>
            <div style={{ position: "absolute" }}>
              <img src={LinkedIcon} className='icon' />
            </div>
          </div>



        </div>

      </div>
      <FooterHome />


    </>
  )
}

export default WebHome