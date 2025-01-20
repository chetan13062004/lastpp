
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ url, img }) {
    return (
        <div className="w-full flex  gap-2  justify-content-center items-center md:gap-10 mb-5 md:mx-40 flex-col md:flex-row mx-10 md:mt-10 mt-5">
            <Link href={url} >
                <div className=" md:h-38 shadow-xl overflow-hidden rounded-md relative  md:block w-full  h-48">

                    <Image src={img} alt='hero-image' layout='fill' objectFit='cover' className=' cursor-pointer  md:block' />
                </div>
            </Link>

        </div>

    );

}