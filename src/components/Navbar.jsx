import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants';
import { logo } from '../assets';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => setNav(!nav);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    const sections = navLinks.map(link => document.getElementById(link.id));
    let current = '';

    sections.forEach(section => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentScrollPos >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      }
    });

    setActive(`#${current}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full py-[20px] flex justify-center bg-white text-body fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex justify-between w-[1280px] items-center px-12'>
        <div>
          <img src={logo} alt="logo" className='w-20 object-cover' />
        </div>

        <ul className="hidden md:flex space-x-12">
          {navLinks.map((item, index) => (
            <a
              href={`#${item.id}`}
              key={index}
              className={` ${active === `#${item.id}` ? 'text-secondary font-semibold' : ''}`}
            >
              {item.title}
            </a>
          ))}
        </ul>

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={`${!nav ? 'hidden' : 'absolute'} top-16 right-0 w-full bg-white flex flex-col justify-center items-center p-6`}>
          {navLinks.map((item, index) => (
            <li key={index} className="py-6 text-2xl hover:text-secondary">
              <a href={`#${item.id}`} onClick={handleClick}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
