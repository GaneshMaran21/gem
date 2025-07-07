import React, { useState } from 'react'
import reactSvg from '../../assets/react2.svg';

import useMediaQuery from '../../utils/mediaQueries'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:767px)')
  console.log(isMobile, "isMobile")
 
  const navbar = ['About Me', 'Skills', 'Portfolio', 'Contact Me']
  const routes = ['/about', '/skills', '/Portfolio', '/contact']
  const navigate=useNavigate()
  const handleTabSelection = (i) => {
    // setSelectedTitle(i)
 navigate(routes[i])
  }
  const location=useLocation()
  const getColor=(name)=>{
    if(location.pathname === "/skills" ){
       if(name==="Skills"){
        return "#ccc"
       }
       else return "#000"
    }
    if(location.pathname === "/contact" ){
       if(name==="Contact Me"){
        return "#ccc"
       }
       else return "#000"
    }
  }
  console.log(location,"location")
  return (
    <>
      <div className="navBar" style={{backgroundColor:location.pathname ==='/skills' || location.pathname ==='/contact'?"#ccc":""}}>
        <div className='navBar1'>
          <img src={reactSvg} className='gif' />
          {/* <ReactIcon/> */}
        </div>
        <div className='navBar2'>
          {navbar.map((name, ind) => {
            const isSelected = location.pathname  === routes[ind]
            const isContactTab =  location.pathname.length>1 ? location.pathname : "/about"
            console.log(isSelected,"isSelected")
            return (
              <div className={isSelected  ? location.pathname ==='/skills' || location.pathname==='/contact' ? 'selectedTab2' : 'selectedTab' : isContactTab ===routes[ind] ? "selectedTab" : ""}>
                <h3 style={{ flexWrap: "nowrap", cursor: 'pointer', fontSize: "1rem", color:getColor(name)  }} onClick={() => handleTabSelection(ind)}>{name}</h3>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Navbar