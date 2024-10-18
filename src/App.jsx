import React from 'react'
import { HeroCard, Navbar, AboutUs, OurMissions, Location, MachineProduct, Contact, Footer,} from './components'
import { FaWhatsapp } from 'react-icons/fa'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroCard/>
      <AboutUs/>
      
      <OurMissions/>
      <MachineProduct/>
      <Location/>
      {/* <Contact/> */}
      {/* <Analytics/> */}
      <Footer/>

      <div className='px-4 py-4 fixed bottom-4 right-4 rounded-full bg-[#30d14e] hover:scale-110 transition-all duration-300 cursor-pointer'>
        <a href="https://wa.me/628112789012" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='text-xl text-white'/>
        </a>
      </div>

    </>
  )
}

export default App