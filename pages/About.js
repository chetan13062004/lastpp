import Link from 'next/link'
import React from 'react'
import { Element } from 'react-scroll'
import { FaTelegram } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Element name='about' id='about' className="py-8 flex items-center md:mx-40 mx-8 justify-center flex-col">
                <p className="text-sm text-gray-400 uppercase text-center mt-20">About</p>
                <h2 className="text-4xl text-blue-600 font-bold text-center pt-8">About Me</h2>
                <div className="flex items-center justify-center">
                    <div className='mt-5 md:w-4/5 '>
                        <p className="mt-2 text-md text-justify">Hii there👋.</p>
                        <p className="mt-2 text-md text-justify">
I’m Chetan, a passionate student and web developer. I specialize in creating modern web apps using the latest technologies to build user-friendly and visually appealing solutions. I am always exploring new tools and frameworks in programming and continuously look for ways to improve and learn. Bringing ideas to life through coding is something I truly enjoy.
                        </p>
                        <p className="mt-2 text-md text-justify">Currently, I am pursuing a Bachelor’s degree in Information Technology at Pune Institute of Computer Technology. Prior to this, I completed a Diploma in Computer Engineering from Government Polytechnic, Amravati.
                        </p>
                        <p className="mt-2 text-md text-justify">You can connect me on socials, I would love to hear from you!</p>
                        <div className="flex items-center my-3 gap-10">
                        <Link
                                href='https://www.linkedin.com/in/chetan-bochare/'
                                className='cursor-pointer'>
                                <FaLinkedin className='text-2xl text-black-700 cursor-pointer hover:text-blue-800 opacity-70 ' />
                            </Link>
                      

                            <Link
                                href='https://github.com/chetan13062004'  // Replace with your actual GitHub username
                                className='cursor-pointer'>
                                 <FaGithub className='text-2xl text-black-700 cursor-pointer hover:text-sky-500 opacity-70 ' />
                            </Link>

                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default About
