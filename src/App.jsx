import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import useMediaQuery from './utils/mediaQueries'
import MobileHome from './components/home/mobile'
import WebHome from './components/home/webHome'

function App() {

    const isMobile = useMediaQuery('(max-width:500px)')


  return (
    <>
  {isMobile ? <MobileHome/> : <WebHome/>}


    </>
  )
}

export default App
