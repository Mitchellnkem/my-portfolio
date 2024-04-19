/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Header from './components/head/Head'
import Nav from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import Portfolio from './components/portf/Portf'
import Contact from './components/contact/contact'
import Footer from './components/footer/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Nav />
    <About/>  
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />



      
    </>
  )
}

export default App
