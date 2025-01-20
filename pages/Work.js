import React from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import Link from 'next/link';

import image1 from '../public/images/p1.png';
import image2 from '../public/images/p2.png';
import image3 from '../public/images/project3.png';
import image4 from '../public/images/project4.png';
import image5 from '../public/images/project5.png';

const Works = () => {
    const works = [

        {
            id: "1",
            name: "MoneyMorph",
            link: "https://github.com/chetan13062004/MoneyMorph-"
        },
        {
            id: "2",
            name: "CareSync",
            link: "https://github.com/chetan13062004/CareSync"
        },
       
    ];

    return (
        <div>
            <Element name='works' id='works' className="my-8 cursor-pointer flex items-center pt-8 md:mx-40 mx-8 justify-center flex-col">
                <p className="text-sm text-gray-400 uppercase text-center mt-20">Projects</p>
                <h2 className="text-4xl text-blue-600 font-bold text-center mt-5">My Workings</h2>

                {/* Project Gallery */}
                <div className="w-full flex justify-content-center items-center md:gap-10 gap-2 mb-5 md:mx-40 flex-col md:flex-row mx-10 md:mt-10 mt-5">
                    {/* Displaying project links with images */}
                    {works.map(work => (
                        <Link key={work.id} href={work.link} target={'_blank'}>
                            <div className="md:h-38 shadow-xl overflow-hidden rounded-md relative md:block w-full h-48">
                                <Image
                                    src={work.id === "1" ? image1 : work.id === "2" ? image2 : image3} // Example logic for different images
                                    alt={work.name}
                                    layout='fill'
                                    objectFit='cover'
                                    className='cursor-pointer md:block'
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </Element>
        </div>
    );
};

export default Works;
