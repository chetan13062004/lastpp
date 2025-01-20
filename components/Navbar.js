// import React, { useState, useEffect, forwardRef } from 'react';
// import { useTheme } from 'next-themes';
// import { Transition } from '@headlessui/react';
// import { Link } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { ImSun } from 'react-icons/im';
// import { FaRegMoon } from 'react-icons/fa';

// const LinkWithRef = forwardRef((props, ref) => <Link {...props} innerRef={ref} />);

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false); // For handling SSR mismatch

//   // Theme
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setTheme('dark'); 
//     setMounted(true); // Mark that the component has mounted
//   }, []);

//   const handleThemeChange = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   if (!mounted) return null; // Avoid rendering during SSR

//   return (
//     <div>
//       <nav
//         className="w-full top-0 fixed z-50 border-b shadow-md border-gray-200 dark:border-gray-700 text-black dark:text-white"
//         style={{ backdropFilter: 'blur(15px) saturate(100%)' }}
//       >
//         <div className="w-full">
//           <div className="flex items-center h-16 md:h-20 w-full">
//             <div className="flex items-center justify-between w-full sm:mx-10 md:mx-20">
//               {/* Brand Logo Section */}
//               <div className="flex items-center justify-center flex-shrink-0 sm:ml-4">
//                 <h1 className="text-xl font-bold ml-8 animate-glow">
//                   Chetan <span className="text-blue-600 dark:text-cyan-500">Bochare</span>
//                 </h1>
//               </div>

//               {/* Links Section */}
//               <div className="hidden md:block">
//                 <div className="ml-10 space-x-4 flex items-baseline font-semibold">
//                   <Link to="about" smooth offset={50} duration={500} className="text-md hover:text-blue-500 px-3 py-2 cursor-pointer">
//                     About
//                   </Link>
//                   <Link to="skills" smooth offset={50} duration={500} className="text-md hover:text-blue-500 px-3 py-2 cursor-pointer">
//                     Skills
//                   </Link>
//                   <Link to="works" smooth offset={50} duration={500} className="text-md hover:text-blue-500 px-3 py-2 cursor-pointer">
//                     Projects
//                   </Link>
//                   <Link to="contact" smooth offset={50} duration={500} className="text-md hover:text-blue-500 px-3 py-2 cursor-pointer">
//                     Contact
//                   </Link>
//                 </div>
//               </div>

//               {/* Theme Toggle */}
//               <div
//                 onClick={handleThemeChange}
//                 className="flex justify-center items-center pr-8 flex-shrink-0 invisible md:visible cursor-pointer"
//               >
//                 {theme === 'dark' ? <ImSun className="font-semibold text-2xl mr-1" /> : <FaRegMoon className="font-semibold text-2xl mr-1" />}
//                 <h3 className="text-lg font-semibold">{theme === 'dark' ? 'Lightmode' : 'DarkMode'}</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="w-1/5 flex md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             type="button"
//             className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white"
//             aria-controls="mobile-menu"
//             aria-expanded="false"
//           >
//             {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <div className="md:hidden" id="mobile-menu">
//           <div className="dark:text-white mx-4 pt-4 pb-4 space-y-1">
//             <Link to="about" smooth offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               About
//             </Link>
//             <Link to="skills" smooth offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Skills
//             </Link>
//             <Link to="works" smooth offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Projects
//             </Link>
//             <Link to="contact" smooth offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </Transition>

//       {/* Mobile Theme Toggle */}
//       <div
//         onClick={handleThemeChange}
//         className="z-50 block md:hidden select-none cursor-pointer fixed bottom-2 p-2 rounded-tr-full rounded-br-full dark:bg-yellow-200 bg-green-200"
//       >
//         {theme === 'dark' ? <ImSun className="font-semibold text-2xl mr-1 text-black" /> : <FaRegMoon className="font-semibold text-2xl mr-1" />}
//       </div>
//     </div>
//   );
// };

// Navbar.displayName = 'Navbar';

// export default Navbar;


import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Transition, transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { FaRegMoon } from 'react-icons/fa'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Theme
    const { theme, setTheme } = useTheme()
    useEffect(() => {


        return () => {
            setTheme('light');
        }
    }, [])


    return (
        <div>
            <nav className='w-full top-0  fixed z-50 border-b shadow-md sha border-gray-200 dark:border-gray-700 text-black dark:text-white' style={{ backdropFilter: 'blur(15px) saturate(100%)' }}>
                <div className="w-full ">
                    <div className="flex items-center h-16 md:h-20 w-full">
                        <div className="flex items-center justify-between w-full sm:mx-10 md:mx20">
                            {/* Brand Logo Section */}
                            <div className="flex items-center justify-center flex-shrink-0 sm:ml-4">
                                <h1 className='text-xl font-bold ml-8'>Chetan <span className="text-blue-600 dark:text-cyan-500">Bochare</span> </h1>
                            </div>

                            {/* Links Section */}
                            <div className="hidden md:block">
                                {/* style={{ fontFamily: "'Maven Pro', sans-serif" }} */}
                                <div className="ml-10 space-x-4 flex items-baseline font-semibold" >
                                    <Link
                                        href='/about'
                                        action='about'
                                        to='about'
                                        smooth="true"
                                        offset={50} duration={500}
                                        className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>About</Link>
                                    <Link
                                        href="/skills"
                                        activeClass="skills"
                                        to="skills"
                                        smooth="true"
                                        offset={50}
                                        duration={500}
                                        className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>Skills</Link>
                                    <Link
                                        href='/works'
                                        action='works'
                                        to='works'
                                        smooth="true"
                                        offset={50}
                                        duration={500} className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>Projects</Link>
                                    <Link
                                        href="/contact"
                                        activeClass="contact"
                                        to="contact"
                                        smooth="true"
                                        offset={50}
                                        duration={500} className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>Contact</Link>
                                </div>

                            </div>
                            {/* Section for direct contact via email */}
                            {/* {renderThemeChanger()} */}
                            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex justify-center items-center pr-8 flex-shrink-0 invisible md:visible cursor-pointer">
                                {theme === 'dark' ? <ImSun className='font-semibold text-2xl mr-1' /> : <FaRegMoon className='font-semibold text-2xl mr-1' />}
                                <h3 className="text-lg font-semibold">
                                    {theme === 'dark' ? 'Lightmode' : 'DarkMode'}
                                </h3>
                            </div>
                        </div>

                        {/* Desktop Part Completed */}
                        {/* Mobile part  */}

                        <div className="w-1/5  flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"

                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <div className="sr-only">Oprn Menu</div>
                                {isOpen ? <FaTimes className='text-white' /> : <FaBars className='text-white' />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu  Mobile*/}
                <Transition show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {
                        (ref) => (
                            <div className="md:hidden " id="mobile-menu">
                                <div
                                    ref={ref}
                                    className=" dark:text-white mx-4 pt-4 pb-4 space-y-1"
                                >

                                    <Link
                                        href="/about"
                                        activeClass="about"
                                        to="about"
                                        smooth="true"
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/skills"
                                        activeClass="skills"
                                        to="skills"
                                        smooth="true"
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Skills
                                    </Link>

                                    <Link
                                        href="/works"
                                        activeClass="works"
                                        to="works"
                                        smooth="true"
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href="/contact"
                                        activeClass="contact"
                                        to="contact"
                                        smooth="true"
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Contact
                                    </Link>
                   
                                </div>
                            </div>
                        )
                    }

                </Transition>


            </nav>
            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="z-50 block md:hidden select-none cursor-pointer fixed bottom-2 p-2 rounded-tr-full rounded-br-full dark:bg-yellow-200 bg-green-200">
                {theme === 'dark' ? <ImSun className='font-semibold text-2xl mr-1 text-black' /> : <FaRegMoon className='font-semibold text-2xl mr-1' />}
            </div>
        </div>
    )
}

export default Navbar