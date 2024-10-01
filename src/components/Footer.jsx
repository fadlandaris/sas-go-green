import React from 'react';
import { footerCompany, navLinks, footerSocmed } from '../constants';
import styles from '../style';
import Card from '/src/assets/Card.jpg';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} bg-black w-full relative bottom-0 text-white `}>
      
      <div className="w-full h-full bg-cover bg-center absolute top-0 " style={{ backgroundImage: `url(${Card})` }}>
        <div className="w-full h-full absolute bg-black opacity-80"></div>
      </div>

      <section className='z-10 max-w-6xl p-12 grid grid-cols-1 gap-y-8'>
          <div className='text-white grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-3'>

            <div>
              <h2 className="text-lg font-bold mb-4">PT. SEGARA ALAM SINERGI</h2>
              {footerCompany.map((item, index) => (
              <div key={index}>
                <p className={`${index === 2 ? 'mb-8' : ''}`}>{item.title}</p>
                {Array.isArray(item.name) && (
                  <>
                    <h2 className="text-lg font-bold mb-4">FOR MORE INFORMATION</h2>
                    {item.name.map((stat, i) => (
                      <a key={i} href={stat.link} className='cursor-pointer hover:text-secondary transition-all duration-150' target="_blank" rel="noopener noreferrer"> {stat.email} - {stat.person}</a>
                    ))}
                  </>
                )}
                
                {!Array.isArray(item.name) && (
                  <p>{item.name}</p>
                )}
              </div>
            ))}
            </div>

            <div >
              <h2 className="text-lg font-bold mb-4">Navigate Links</h2>
              <ul>
                {navLinks.map((stat, index) => (
                  <li key={index}>
                    <a href={`#${stat.id}`} className="hover:text-secondary transition-all cursor-pointer">{stat.title}</a>
                  </li>
                ) )}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                <div className="flex ">
                {footerSocmed.map((stat, index) => (
                  <a href={`${stat.link}`} key={index} className={`hover:text-secondary transition-all cursor-pointer ${index === 1 ? 'mx-4' : ''}`}>
                    {stat.title}
                  </a>
                    ))}
              </div>
            </div>


          </div>
          
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 PT.SEGARA ALAM SINERGI. All rights reserved.</p>
        </div>
          
      </section>
     

     


    </footer>
  );
};

export default Footer;