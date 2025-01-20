import React, { useState } from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com'; // Import EmailJS
import contact from '../public/images/contact.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_jlna6oq', // Replace with your EmailJS service ID
        'template_eqjc2nc', // Replace with your EmailJS template ID
        formData,
        '-L7vlMim2RBnaJF-A' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div>
      <Element
        name="contact"
        id="contact"
        className="my-8 flex items-center md:px-12 lg:px-16 xl:px-32 py-16 pt-8 md:mx-40 mx-8 justify-center flex-col"
      >
        <p className="text-sm text-gray-400 uppercase text-center pt-20">Contact</p>
        <h2 className="text-4xl text-blue-600 font-bold text-center mt-5">Contact Me</h2>
        <div className="max-w-screen-xl mt-16 md:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 text-gray-900">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-200 leading-tight">
                Let’s talk about everything!
              </h2>
            </div>
            <div className="mt-8 text-center">
              <Image src={contact} alt="Contact Illustration" />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring ring-sky-300 ring-offset-0"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring ring-sky-300 ring-offset-0"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 bg-gray-300 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring ring-sky-300 ring-offset-0"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:ring ring-sky-300 ring-offset-0"
                >
                  Send Message
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Contact;
