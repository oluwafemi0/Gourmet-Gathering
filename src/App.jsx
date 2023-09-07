import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/Menu'
import Reveiw from './components/Reveiw'
import Request from './components/Request'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Hero />
    <About />
    <MenuSection />
    <Reveiw />
    <Request />
    <Footer />
    </>
  )
}

export default App
