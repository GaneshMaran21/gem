import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import useMediaQuery from './utils/mediaQueries'
import MobileHome from './components/home/mobile'
import WebHome from './components/home/webHome'
import WebSkills from './components/skills/skills'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebAbout from './components/about/webAbout'
import LayoutWithNavbar from './navbarRoute'
import Portfolio from './components/about/portfolio/portfolio'

function App() {

    const isMobile = useMediaQuery('(max-width:500px)')


  return (
    <>
  {/* {isMobile ? <MobileHome/> : <WebHome/>} */}
   <BrowserRouter>
   {/* <Navbar/> */}
         {/* <Route path="/" element={<Navigate to="/contact" replace />} /> */}
      <Routes >
        {/* pages with Navbar */}
        <Route element={!isMobile ? <LayoutWithNavbar/>:""}>
        <Route path="/contact" element={!isMobile ? <WebHome /> : ""} />
        <Route path="/" element={!isMobile ? <WebHome /> : ""} />
        <Route path="/skills" element={ !isMobile ? <WebSkills/> :""} />
       </Route>
       {/* pages without navbar */}
        <Route path="/about" element={ !isMobile ? <WebAbout/> :""} />
        <Route path="/portfolio" element={ !isMobile ? <Portfolio/> :""} />
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
