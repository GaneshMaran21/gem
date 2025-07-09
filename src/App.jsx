import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import useMediaQuery from './utils/mediaQueries'
// import MobileHome from './components/home/mobile'
import WebHome from './components/home/webHome'
import WebSkills from './components/skills/skills'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWithNavbar from './navbarRoute'
import Portfolio from './components/portfolio/portfolio'
import WebContact from './components/about/webAbout'
import MobileNavbar from './components/navbar/mobileNavBar'
import MobileNavBarLayout from './mobileNavbar'
import MobileHome from './components/home/mobileHome/mobileHome'

function App() {

    const isMobile = useMediaQuery('(max-width:550px)')


  return (
    <>
  {/* {isMobile ? <MobileHome/> : <WebHome/>} */}
   <BrowserRouter>
   {/* <Navbar/> */}
         {/* <Route path="/" element={<Navigate to="/contact" replace />} /> */}
      <Routes >
        {/* pages with Navbar */}
        <Route element={!isMobile ? <LayoutWithNavbar/>:""}>
        <Route path="/about" element={!isMobile ? <WebHome /> : <MobileHome pathname={'About Me'}/>} />
        <Route path="/" element={!isMobile ? <WebHome /> : <MobileHome pathname={'About Me'}/>} />
        <Route path="/skills" element={ !isMobile ? <WebSkills isWeb={true}/> :<MobileHome pathname={'Skills'}/>} />
        <Route path="/contact" element={ !isMobile ? <WebContact isWeb={true}/> :<MobileHome pathname={'Contact Me'}/>} />

       </Route>
       {/* pages without navbar */}
        <Route path="/portfolio" element={ !isMobile ? <Portfolio isWeb={true}/> : <MobileHome pathname={'Portfolio'}/>} />
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
