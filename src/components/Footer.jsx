import React from 'react';
import { footerCompany, navLinks, footerSocmed, emailInformations } from '../constants';
import styles from '../style';
import Card from '/src/assets/Card.jpg';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} bg-black w-full relative bottom-0 text-white `}>
      
      <div className="w-full h-full bg-cover bg-center absolute top-0 " style={{ backgroundImage: `url(${Card})` }}>
        <div className="w-full h-full absolute bg-black opacity-80"></div>
      </div>

      <section className='z-10 max-w-6xl p-12 grid grid-cols-1 gap-y-8'>
          <div className='text-white grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-4'>

            <div>
              <h2 className="text-lg font-bold mb-4">PT. SEGARA ALAM SINERGI</h2>
              {footerCompany.map((item, index) => (
              <div key={index}>
                <p className={`${index === 1 ? 'mt-4' : ''}`}>{item.title}</p>
              </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">FOR MORE INFORMATION</h2>
              {emailInformations.map((email, index) => (
                <div key={index}>
                  <a href={email.link} className='hover:text-secondary transition-all duration-150'>{email.email} </a>
                </div>
              ))}
            </div>

            <div >
              <h2 className="text-lg font-bold mb-4">NAVIGATE LINKS</h2>
              <ul>
                {navLinks.map((stat, index) => (
                  <li key={index}>
                    <a href={`#${stat.id}`} className="hover:text-secondary transition-all cursor-pointer">{stat.title}</a>
                  </li>
                ) )}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">FOLLOW US</h2>
                <div className="flex ">
                {footerSocmed.map((stat, index) => (
                  <p key={index} className={`hover:text-secondary transition-all cursor-pointer ${index === 1 ? 'mx-4' : ''}`}>
                    {stat.title}
                  </p>
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
