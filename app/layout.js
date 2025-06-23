'use client';
import { Inter_Tight, Inter } from "next/font/google";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {LuFileText} from "react-icons/lu";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${interSans.variable}`}>
      <body style={{ backgroundColor: "#0b1223", color: "white" }}>
        <header
          className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300"
          style={{
            background: "rgba(11, 18, 35, 0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <nav className="flex justify-between items-center p-6 text-white">
            <div className="flex gap-6 text-medium font-medium items-center">
              <a href="#hero">
                <span className="text-2xl font-bold text-[#cfb991] hover:text-[#b3a181]">
                  Pradyunn Kale
                </span>
              </a>
              <a href="#about" className='font-semibold hover:text-[#cfb991]'>About</a>
              <a href="#education" className='font-semibold hover:text-[#cfb991]'>Education</a>
              <a href="#projects" className='font-semibold hover:text-[#cfb991]'>Projects</a>
              <a href="#skills" className='font-semibold hover:text-[#cfb991]'>Skills</a>
              <a href="#achievements" className='font-semibold hover:text-[#cfb991]'>Achievements</a>
              <a href="#stats" className='font-semibold hover:text-[#cfb991]'>Stats</a>
              <a href="#contact" className='font-semibold hover:text-[#cfb991]'>Contact</a>
            </div>
            <div className='flex gap-6 items-center'>
              <a href='https://github.com/pradyunnkale' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='inline w-6 h-6 text-[#cfb991] hover:text-[#b3a181]' />
              </a>
              <a href='https://linkedin.com/in/pradyunnkale' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='inline w-6 h-6 text-[#cfb991] hover:text-[#b3a181]' />
              </a>
              <a href='/assets/Resume_Pradyunn Kale.pdf' target='_blank' rel='noopener noreferrer'>
              <LuFileText className='inline w-6 h-6 text-[#cfb991] hover:text-[#b3a181]' />
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="w-full py-12 md:py-12 lg:py-8" style={{ background: "hsl(var(--background))" }}>
          <div className='flex gap-6 items-center justify-center gap-6'>
            <div className='flex flex-row justify-center text-center items-center gap-3'>
            <p className='text-md text-[#cfb991]'>© 2025 Pradyunn Kale. All rights reserved.</p>
            <a href='https://github.com/pradyunnkale' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='inline w-6 h-6 text-[#cfb991] hover:text-[#b3a181]' />
            </a>
            <a href='https://linkedin.com/in/pradyunnkale' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='inline w-6 h-6 text-[#cfb991] hover:text-[#b3a181]' />
            </a>
            <a href='/assets/Resume_Pradyunn Kale.pdf' target='_blank' rel='noopener noreferrer'>
              <LuFileText className='inline w-6 h-6 text-[#cfb991] hover:text-[#b3a181]' />
            </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
