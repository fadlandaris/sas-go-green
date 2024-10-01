import React from 'react'
import { RiGlobalFill } from '../assets'
import Card from '/src/assets/Card.jpg';
import { markets } from '../constants'
import styles from '../style'

const Location = () => {
  return (
    <main className="relative w-full h-[1500px] ss:h-[1000px] flex justify-center items-center " id='operations'>

      <div className="w-full h-1/2 bg-cover bg-bottom absolute top-0" style={{ backgroundImage: `url(${Card})` }}>
        <div className="w-full h-full absolute bg-black opacity-70"></div>
      </div>

      <div className='absolute p-12 max-w-7xl '>
        <div>
          <p className='font-bold text-secondary text-[16px] text-center'>| OPERATIONS</p>
          <h2 className='font-bold mt-4 mb-12 text-[40px] text-white text-center text-'>Our Factory <br/> Location</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-x-20'>
          <div className='shadow-md border-2 h-[300px] md:h-full border-white'>
          <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5169753879027!2d110.07629327429838!3d-7.2956637717134605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70764795d30c87%3A0xffd0d04496c24a3e!2sJl.%20Campur%20Salam%20No.184%2C%20Capgawen%2C%20Caturanom%2C%20Kec.%20Parakan%2C%20Kabupaten%20Temanggung%2C%20Jawa%20Tengah%2056254!5e0!3m2!1sen!2sid!4v1727248489304!5m2!1sen!2sid" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='mt-10 p-2 md:p-12 md:mt-0 md:shadow-md bg-white border-white'>
              <p className='font-bold text-secondary text-[16px] mb-4 '>| EXPERIENCES</p>
              {/* <h2 className='mb-4 text-[32px] font-bold'>Our Experiences</h2> */}
              {markets.map((item, index) => (
                <div key={index}>
                  {(item.countries || item.companies).map((entry, i) => (
                    <p key={i} className={`${item.type === 'Export Market' ? 'mb-4' : ''} text-body`}>
                      {entry.body}
                    </p>
                  ))}
                </div>
              ))}
            </div>
        </div>
        
        </div>
      
    </main>
  )
}

export default Location