'use client';

import Image from "next/image";
import { LuFileText } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import Button from '../components/button'

export default function Hero({Name, Body, PictureLink}){
    return(
            <div className='flex flex-col md:flex-row items-center w-full'>
                <div className='flex flex-1 flex-col min-w-0'>
                    <h1 className='flex-1 text-center md:text-left text-5xl font-extrabold mb-4 mt-16 md:mt-0'>
                    Hi, I&apos;m <span className='text-[#cfb991]'>{Name}</span>
                </h1>
                <p className='text-lg mb-6 text-center md:text-left'>
                    {Body}
                </p>
                <div className='flex gap-4 md:flex-wrap lg:flex-row flex-col text-center md:text-left'>
                    <div className='flex flex-row gap-4 mx-auto md:mx-0'>
                        <Button
                        Name='Contact Me'
                        Landing='#contact'
                        Type='btn-primary'
                        Icon={<FaEnvelope/>}
                        ></Button>
                        <Button
                        Name='Download Resume'
                        Landing='/assets/Resume_Pradyunn Kale.pdf'
                        Type='btn-secondary'
                        external
                        Icon={<LuFileText/>}
                    ></Button>
                    </div>
                    <div className='flex gap-4 flex-row justify-center md:justify-start'>
                        <Button
                        Landing='https://github.com/pradyunnkale'
                        Type='btn-icon'
                        external
                        Icon={<FaGithub/>}
                        ></Button>
                        <Button
                        Landing='https://linkedin.com/in/pradyunnkale'
                        Type='btn-icon'
                        external
                        Icon={<FaLinkedin/>}
                    ></Button>
                    </div>
                </div>
                </div>
                <div className="flex-1 flex justify-end">
                <Image
                    src={PictureLink}
                    alt=""
                    width={700}
                    height={700}
                    className="
                        mx-auto
                        aspect-square
                        overflow-hidden
                        rounded-xl
                        object-cover
                        w-full
                        max-w-[700px]
                        md:mb-15
                        md:mt-15
                        mt-4
                        mb-10
                    "
                />
                </div>
            </div>
    );
}