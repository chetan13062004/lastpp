import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import profile from '../public/images/abc.png';

const Hero = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row mx-12 h-100 justify-start items-center md:pt-28 pt-28 md:mx-40">
            {/* Block 1: Text */}
            <div className="w-flex flex-col items-center justify-start h-90">
                <h1 className="font-bold text-4xl sm:text-6xl text-left">
                    Hello, I am 
                    <span className="flex space-x-1">
                        <span className="animate-glow text-sky-500 delay-[0ms]">C</span>
                        <span className="animate-glow text-sky-500 delay-[100ms]">h</span>
                        <span className="animate-glow text-sky-500 delay-[200ms]">e</span>
                        <span className="animate-glow text-sky-500 delay-[300ms]">t</span>
                        <span className="animate-glow text-sky-500 delay-[400ms]">a</span>
                        <span className="animate-glow text-sky-500 delay-[500ms]">n</span>
                    </span>
                </h1>
                <p className="text-md mt-8 text-gray-800 dark:text-gray-400 text-justify">
                    Building a successful product is a challenge. I am highly energetic in user experience design, interfaces, and web development.
                </p>
                <p className="mt-4 sm:my-5 font-semibold text-gray-600 dark:text-gray-200">📍Akot, Maharashtra</p>
                <div className="flex flex-col sm:flex-row">
                    <Link
                        to="about"
                        smooth={true}
                        offset={50}
                        duration={1000}
                        className="py-3 justify-center items-center px-8 mt-7 flex sm:inline-flex bg-blue-700 rounded-full text-white font-semibold hover:shadow-sm shadow-blue-300 text-xs sm:text-lg"
                    >
                        See my portfolio!
                    </Link>
                    <a
                        target="_blank"
                        href="/resume.pdf"
                        className="py-3 flex justify-center sm:ml-4 items-center px-8 mt-7 sm:inline-flex bg-transparent border-2 border-blue-700 rounded-full text-black dark:text-white font-semibold text-xs sm:text-lg"
                    >
                        Download CV
                    </a>
                </div>
            </div>
            {/* Block 2: Image */}
            <div className="items-center mb-12 md:flex -z-50 justify-end md:py-16 w-3/4">
                <motion.div
                    className="relative rounded-full sm:w-100 sm:h-100 shadow-md shadow-sky-200"
                    animate={{
                        y: ['-20px', '20px', '-20px'], // Moves up and down
                    }}
                    transition={{
                        duration: 2, // Duration of the animation
                        repeat: Infinity, // Repeat infinitely
                        repeatType: 'loop', // Loop the animation
                        ease: 'easeInOut', // Smooth ease
                    }}
                >
                    <Image src={profile} alt="Profile" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
