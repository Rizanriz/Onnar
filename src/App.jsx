import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import MenuItems from './components/MenuItems'
import DeliveryInfo from './components/DeliveryInfo'
const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Section2/>
      <MenuItems/>
      <DeliveryInfo/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App