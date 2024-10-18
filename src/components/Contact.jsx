import React, { useState } from 'react';
import { contactUs } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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

    const phoneNumber = '6281291664669'; 
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className='grid grid-cols-2 items-center gap-x-20 max-w-7xl mx-auto px-12'>
    
      <form onSubmit={handleSubmit} className=" p-6 bg-white  border-2 shadow-md space-y-6" id='contact-us'>
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        
        {contactUs.slice(1).map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">{field.title}</label>
            {field.id === 'message' ? (
              <textarea
                id={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            ) : (
              <input
                type={field.id === 'email' ? 'email' : 'text'}
                id={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            )}
          </div>
        ))}

        <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
          Send via WhatsApp
        </button>
      </form>

      <div>
        test
      </div>
    </section>
  );
};

export default Contact;
