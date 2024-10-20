import React, { useState } from 'react';
import Card from '/src/assets/Card.jpg';
import { contactUs } from '../constants';
import styles from '../style';

const Location = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0ACompany: ${formData.company}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    // WhatsApp phone number
    const phoneNumber = '6281291664669'; // Update with the correct phone number

    // WhatsApp URL with the pre-filled message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp link
    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="relative w-full h-[1500px] ss:h-[1000px] flex justify-center items-center" id='operations'>
      <div className="w-full h-1/2 bg-cover bg-bottom absolute top-0" style={{ backgroundImage: `url(${Card})` }}>
        <div className="w-full h-full absolute bg-black opacity-70"></div>
      </div>

      <div className='absolute max-w-7xl p-12'>
        <div>
          <p className='font-bold text-secondary text-[16px] text-center'>| OPERATIONS</p>
          <h2 className='font-bold mt-4 mb-12 text-[40px] text-white text-center'>Our Factory <br /> Location</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-7xl gap-x-20 gap-y-12'>
          <div className='shadow-md border-2 h-[300px] sm:h-full border-white'>
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5169753879027!2d110.07629327429838!3d-7.2956637717134605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70764795d30c87%3A0xffd0d04496c24a3e!2sJl.%20Campur%20Salam%20No.184%2C%20Capgawen%2C%20Caturanom%2C%20Kec.%20Parakan%2C%20Kabupaten%20Temanggung%2C%20Jawa%20Tengah%2056254!5e0!3m2!1sen!2sid!4v1727248489304!5m2!1sen!2sid" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <form onSubmit={handleSubmit} className="p-12 bg-white border-2 shadow-md space-y-6" id='contact-us'>
            <div className='mb-10'>
              <h2 className="text-2xl font-bold text-black">Contact Us</h2>
              <span className='text-body'>For more information</span>
            </div>

            <div className="md:flex md:space-x-4">
              {contactUs.slice(1, 3).map((field) => (
                <div key={field.id} className="w-full mt-6 md:w-1/2 md:mt-0">
                  <label htmlFor={field.id} className="block text-[12px] text-body">{field.title}</label>
                  <input type="text" id={field.id} value={formData[field.id]} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" required />
                </div>
              ))}
            </div>

            {contactUs.slice(3).map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-[12px] text-body">{field.title}</label>
                {field.id === 'message' ? (
                  <textarea id={field.id} value={formData[field.id]} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" required />
                ) : (
                  <input type={field.id === 'email' ? 'email' : 'text'} id={field.id} value={formData[field.id]} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" required />
                )}
              </div>
            ))}

            <button type="submit" className="w-full px-4 py-2 bg-secondary text-white font-bold text-[16px] rounded-md hover:bg-green-600 transition duration-300">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Location;
