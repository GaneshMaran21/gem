import React, { useEffect, useState } from 'react'
import './mobileNavBar.scss'
import reatIcon from '../../assets/svg/MobileReact.svg'
import closeIcon from '../../assets/svg/MobileClose.svg'
import navIcon from '../../assets/svg/MobileNavBar.svg'
const MobileNavbar = ({ selectedTab,setSelectedTab }) => {
  const [showNavItems, setShowNavItems] = useState(false)
  const items = ["About Me", "Skills", "Portfolio", "Contact Me"]
  const nav = ['/about', "/skills", "/portfolio", "/contact"]
  // const pathName=location.pathname.length>1 ? location.pathname : "none"
  const [pathName, setPathName] = useState(location.pathname.length > 1 ? location.pathname : "none")

  const findIndex = () => {
    debugger;
    if (selectedTab) {
      switch (selectedTab){
        case "About Me" : return 0;
        case "Skills" : return 1;
        case "Portfolio" : return 2;
        case "Contact Me" : return 3;
        default: return 0
      }
    }

    else {
      const f = nav.filter(n => n === pathName)
      if (f?.length === 0) {
        return 0
      }
      else if (f) {
        return nav.indexOf(pathName)
      }
    }

  }
  let _index = findIndex()
  useEffect(() => {
    _index = findIndex()
  }, [pathName])
  const scrollView = (id, i) => {
    debugger

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
        setSelectedTab(items[i])
    };
    setShowNavItems(false)
    setPathName(nav[i])
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <div className='mobileNavBarContainer'>
        <img src={reatIcon} className='gif1' />
        {!showNavItems &&
          <div className='navIcon' onClick={() => setShowNavItems(!showNavItems)}>
            <img src={navIcon} className='navIcon' height={40} />
          </div>
        }
        {showNavItems &&
          <div className='navIcon1' onClick={() => setShowNavItems(!showNavItems)}>
            <img src={closeIcon} className='closeIcon' height={50} />
          </div>
        }
      </div>
      {showNavItems &&
        <div className='navItems' >
          {Array.isArray(items) && items.map((name, index) => {
            return (<>
              <div key={index} className={_index === index ? "selectedNavList" : 'navList'} onClick={() => scrollView(name, index)}>
                <h2 className='navText'> {name} </h2>
              </div>
            </>
            )
          })}

        </div>}
    </div>
  )
}

export default MobileNavbar