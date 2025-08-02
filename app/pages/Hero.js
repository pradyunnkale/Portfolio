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
                <p className='text-xl mb-2 text-center md:text-left'>
                    {Body}
                </p>
                <div className='flex gap-20 md:flex-wrap lg:flex-row flex-col text-center md:text-left'>
                    <div className='flex gap-30 flex-row justify-center md:justify-start px-4 md:px-12'>
                        <Button
                        Name = 'Resume'
                        Landing='/assets/Resume_Pradyunn Kale.pdf'
                        Type='btn-icon'
                        external
                        Icon={<LuFileText/>}
                        ></Button>
                        <Button
                        Name='GitHub'
                        Landing='https://github.com/pradyunnkale'
                        Type='btn-icon'
                        external
                        Icon={<FaGithub/>}
                        ></Button>
                        <Button
                        Name='LinkedIn'
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
                    width={2000}
                    height={2000}
                    className="
                        mx-auto
                        aspect-square
                        overflow-hidden
                        rounded-xl
                        object-cover
                        w-full
                        max-w-[600px]
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