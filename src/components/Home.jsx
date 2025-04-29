import React from 'react'
import Banner from './Banner.jsx/Banner'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Skills from './skills/Skills'
import BaseProject from './Project/BaseProject'
import Contact from './Contact/Contact'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <>
      < Navbar />
      <Banner />
      <About/>
      <Skills />
      <BaseProject />
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
