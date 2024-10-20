import React from 'react';
import styles from '../style';
import { GoArrowRight, Sas } from '../assets';
import card from '/src/assets/Card.jpg';
import { aboutUs } from '../constants';
import certificate from '../assets/woodchip_lab_analys.pdf';


const AboutUs = () => {
  return (
    <main className="flex justify-center items-center p-6 md:p-12" id="about-us" >
      <div className="grid grid-cols-1 md:grid-cols-3 md:items-center gap-y-6 gap-x-8 lg:gap-x-20 max-w-6xl w-full my-24">


      <div className="h-[300px] md:h-[500px] bg-cover bg-center relative">
      <video className="w-full h-full object-cover" controls loop autoPlay muted>
        <source src={Sas} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

        <div className="md:my-0 my-4 md:text-left p-4 md:px-0">
          <p className="font-bold text-secondary mb-2 px-4 ">| ABOUT US</p>
          <h2 className="font-bold mb-4 text-3xl md:text-4xl px-4 md:mt-4">
            PT. SEGARA ALAM SINERGI
          </h2>
          <div className="p-4 bg-whit cursor-pointer text-[16px] text-body ">
            <span className="tracking-wide ">
              <span className="">W</span>e supply biomass energy from woodchips
              and woodpellets, supporting carbon emission reduction and the
              shift to green energy
            </span>
            The company meets domestic and international market needs, including
            Korea, China, India, and Japan, with several factories located
            across Java Island.
          </div>

            <button className='mt-8 px-8 py-4 ml-4 bg-black text-white hover:bg-secondary transition-all duration-300 flex items-center cursor-pointer group' onClick={() => window.open(certificate, '_blank')}
            >
              <span>Woodchips Lab Analys</span>
              <GoArrowRight className='group-hover:ml-3 lg:group-hover:ml-4 ml-2 transition-all duration-300'/>
            </button>
        </div>

        <div className="shadow-md h-auto md:h-[500px] p-12 md:flex flex-col justify-between hidden">
            {aboutUs.map((stat, index) => (
              <div key={index} className='flex items-start justify-start'>
                <div className='border-2 border-white'>
                  <stat.icon className='w-8 h-8 text-secondary'/>
                </div>
                <div className='ml-4'>
                  <h2 className='font-bold uppercase text-[16px]'>{stat.title}</h2>
                  <p className='text-body mt-2'>{stat.slogan}</p>
                </div>
              </div>
            ))}
        </div>
            
      </div>
    </main>
  );
};

export default AboutUs;
