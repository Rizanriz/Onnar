import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import MenuSection from './components/MenuItems'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section2/>
      <MenuItems/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App