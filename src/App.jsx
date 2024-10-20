import React from 'react'
import { HeroCard, Navbar, AboutUs, OurMissions, Location, MachineProduct, Footer,} from './components'
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

      <div className='px-4 py-4 fixed bottom-4 right-4 rounded-full bg-[#30d14e] hover:scale-110 transition-all duration-300 cursor-pointer z-50'>
        <a href="https://wa.me/628112789012" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center gap-x-2'>
          <p className='text-white'>Contact Us</p>
          <FaWhatsapp className='text-3xl text-white'/>
        </a>
      </div>

    </>
  )
}

export default App