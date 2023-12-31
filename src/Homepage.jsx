import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Properties from './components/Properties'
import Properties2 from './components/Properties2'
import Conatct from './components/Conatct'
import Footer from './components/Footer'


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Properties/>
    <Properties2/>
    <Conatct/>
    <Footer/>
    </>
  )
}

export default Homepage