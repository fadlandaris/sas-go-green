import React from 'react'
import { HeroCard, Navbar, AboutUs, OurMissions, Location, MachineProduct, Footer, } from './components'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroCard/>
      <AboutUs/>
      
      <OurMissions/>
      <MachineProduct/>
      {/* <Story/> */}
      <Location/>
      <Footer/>
    </>
  )
}

export default App