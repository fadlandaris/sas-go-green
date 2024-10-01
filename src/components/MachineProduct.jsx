import React from 'react'
import styles from '../style'
import { machineProductToggle, machineData, storyData } from '../constants'
import { useState } from 'react'

const MachineProduct = () => {
  const [active, setActive] = useState('machine') 

  return (
    <main className={`${styles.flexCenter} px-12 py-24`} id='machine'>
      <div className='w-[1024px]'>
          
          <div className='md:flex justify-between items-end '>
            <div className=''>
              <p className='font-bold text-secondary'>| EQUIPMENT</p>
              {machineProductToggle.map((stat) => (
                <h2 className='text-[40px] font-bold' key={stat.id}>
                  {active === stat.id && stat.title}
                </h2>
              ))}
              <p className='text-body'>We guarantee top-quality machines and products for reliable performance.</p>
            </div>

            <div className='mt-8 grid grid-cols-2 gap-x-2 md:gap-x-8'>
              {machineProductToggle.map((item, index) => (
                <button key={item.id} className={`h-[35px] w-full md:w-[100px] cursor-pointer hover:bg-secondary hover:text-white transition-all duration-300 text-[12px] ${active === item.id ? 'bg-secondary text-white md:scale-110' : 'bg-black text-white'} ${index === 1 ? "" : ''}`} onClick={() => setActive(item.id)}>
                {item.button}
              </button>
              ))}
            </div>
          </div>
          

        {/* Our Machine  */}
        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12 transition-opacity duration-500 ${ active === 'machine' ? 'opacity-100' : 'hidden'}`}>
          {machineData.map((stat, index) => (
            <div className='relative flex justify-center items-center group cursor-pointer shadow-md h-64 w-full'key={index}>
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
              <p className='absolute text-white font-bold group-hover:block group-hover:transition-all duration-300 hidden z-10 text-[16px] md:text-xl text-center'>
                {stat.title}
              </p>
              <img src={stat.img} alt={stat.id} className='object-cover w-full h-full'/>
            </div>
          ))}
        </div>

         {/* Our Story  */}
         <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12 transition-opacity duration-500 ${ active === 'story' ? 'opacity-100' : 'hidden'}`} >
          {storyData.map((stat, index) => (
            <div className='relative flex justify-center items-center group cursor-pointer shadow-md h-64 w-full'key={index}>
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
              <p className='absolute text-white font-bold group-hover:block group-hover:transition-all duration-300 hidden z-10 text-[16px] md:text-xl text-center'>
                {stat.title}
              </p>
              <img src={stat.img} alt={stat.id} className='object-cover w-full h-full'/>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  )
}

export default MachineProduct
