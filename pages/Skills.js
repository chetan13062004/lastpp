import React from 'react'
import { Element, Link } from 'react-scroll'
import { FaAndroid, FaBootstrap, FaCss3, FaHtml5, FaInstagram, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import { SiCodeigniter, SiDjango, SiExpress, SiFirebase, SiJquery, SiMysql, SiNextdotjs, SiPostgresql, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Element name='skills' id='skils' className="my-8 flex items-center md:mx-40 mx-8 justify-center flex-col">
                <p className="text-sm text-gray-400 uppercase text-center mt-20">Skills</p>
                <h2 className="text-4xl text-blue-600 font-bold text-center pt-8">My Skills</h2>
                <div className="flex flex-col mt-5 items-center justify-center">
                    {/* Row 1 */}
                    <div className="flex items-center justify-items-center md:mx-40 flex-col md:flex-row mx-12 p-2">
                        {/* Block 1 */}
                        <div className="flex flex-col items-center justify-items-center mt-4 md:border-r-2 border-black-300">
                            <h3 className="text-md text-gray-800 dark:text-gray-200 font-semibold">Web Dev</h3>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <FaHtml5 className='text-orange-400 text-4xl mx-4' />
                                <FaCss3 className='text-blue-600  text-4xl mx-4' />
                                <FaJs className='text-yellow-400 text-4xl mx-4' />
                            </div>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <SiTypescript className='text-blue-800 text-4xl mx-4' />
                            </div>

                        </div>
                        {/* Block 2 */}
                        <div className="flex flex-col items-center justify-items-center mt-4 md:border-r-2 border-black-300">
                            <h3 className="text-md text-gray-800 dark:text-gray-200 font-semibold">Frontend Framework</h3>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <FaReact className='text-blue-400 text-4xl mx-4' />
                                <SiNextdotjs className='text-black text-opacity-40 text-4xl mx-4' />
                            </div>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <FaBootstrap className='text-purple-500 text-4xl mx-4' />
                                <SiTailwindcss className='text-blue-400 text-4xl mx-4' />
                            </div>
                        </div>
                        {/* Block 3 */}
                        <div className="flex flex-col items-center justify-items-center mt-4 md:border-r-2 border-black-30">
                            <h3 className="text-md text-gray-800 dark:text-gray-200 font-semibold">Backend</h3>
                            <div className="flex items-center justify-center px-8 pt-4">
                        
                                <FaNodeJs className='text-green-400 text-4xl mx-4' />
                            </div>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <SiExpress className='text-purple-400 text-4xl mx-4' />
                        
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-items-center md:mx-40 flex-col md:flex-row mx-12 p-2">
                        {/* Block 1 */}
                        <div className="flex flex-col items-center justify-items-center mt-4 md:border-r-2 border-black-30">
                            <h3 className="text-md text-gray-800  dark:text-gray-200 font-semibold">Database</h3>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <SiMysql className='text-blue-800 text-opacity-50 text-4xl mx-4' />
                        
                            </div>
                            <div className="flex items-center justify-center px-8 pt-4">
                                <SiSqlite className='text-gray-400 text-4xl mx-4' />
                                <SiPostgresql className='text-purple-400 text-4xl mx-4' />
                            </div>
                        </div>
                        {/* Block 2 */}
           

                    </div>
                </div>
            </Element>
        </div>
    )
}

export default Skills