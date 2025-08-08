'use client';
import { Inter_Tight, Inter } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import './globals.css';

const interTight = Inter_Tight({ variable: '--font-inter-tight', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  const cursorRef = useRef(null);

  // Cursor glow follow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll handler
  useEffect(() => {
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = document.querySelectorAll('[data-scroll]');
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('data-scroll');
      link.addEventListener('click', () => scrollToSection(targetId));
    });

    return () => {
      navLinks.forEach((link) => {
        const targetId = link.getAttribute('data-scroll');
        link.removeEventListener('click', () => scrollToSection(targetId));
      });
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} bg-black text-white relative`}>
        {/* Glowing Cursor */}
        <div
          ref={cursorRef}
          className="pointer-events-none fixed top-0 left-0 w-32 h-32 bg-cyan-100 opacity-25 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-50"
        />

        {/* Header */}
        <header className="fixed top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center backdrop-blur bg-white/5 border-b border-white/10">
          <h1 className="text-xl font-bold transition-transform duration-200 hover:scale-110 hover:text-gray-300 mr-6"><button data-scroll="hero">Pradyunn Kale</button></h1>
          <nav className="flex gap-6 text-sm font-medium overflow-x-auto scrollbar-hide whitespace-nowrap pl-1 pr-1">
            <button data-scroll="experience" className="transition-transform duration-200 hover:scale-110 font-semibold hover:text-gray-300">Experience</button>
            <button data-scroll="projects" className="transition-transform duration-200 hover:scale-110 font-semibold hover:text-gray-300">Projects</button>
            <button data-scroll="awards" className="transition-transform duration-200 hover:scale-110 font-semibold hover:text-gray-300">Awards</button>
            <button data-scroll="contact" className="transition-transform duration-200 hover:scale-110 font-semibold hover:text-gray-300">Contact</button>
          </nav>
        </header>

        {/* Main content */}
        <main className="pt-32 space-y-32">
          <section id="hero" className="px-8 max-w-5xl mx-auto scroll-mt-32" role="banner">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-5xl font-bold mb-4 gap-4">Pradyunn Kale</h1>
              <div className="flex gap-4 mb-4">
                <a href="https://github.com/pradyunnkale" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-110">
                  <FaGithub size={50} />
                </a>
                <a href="https://linkedin.com/in/pradyunnkale" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-110">
                  <FaLinkedin size={50} />
                </a>
                <a href="/assets/Resume_Pradyunn Kale.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-110">
                  <FaFileAlt size={50} />
                </a>
              </div>
            </div>
            
            <p className="text-xl font-semibold mb-2">Embedded Software Engineer</p>
            <p className="text-base mb-4">Electrical Engineering Student @ Purdue University</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="font-semibold text-lg w-full sm:w-auto">Languages:</span>
              <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
              <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
              <span className="px-2 py-1 bg-gray-800 rounded font-semibold">Python</span>
            </div>
          </section>


          <section id="experience" className="px-8 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl font-semibold mb-4">My technical experience whether it be through extracurriculars or industry.</p>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex gap-3 items-center">
                  <h3 className="text-xl font-semibold">Avionics Engineer @ PSP Liquids</h3>
                    <div className='flex gap-2'>
                      <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                      <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
                    </div>
                    <a href="https://github.com/pradyunnkale/copperhead_flight_sw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                      <FaGithub size={30} />
                    </a>
                </div>
                <span className="text-md font-semibold text-gray-400">July 2025 – Present · West Lafayette, IN</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                <li>Developed bare-metal C drivers for ADS1158 ADC, Ethernet PHY, and magnetometer on custom embedded hardware</li>
                <li>Interfaced with SPI and I²C peripherals using register-level programming guided by technical datasheets</li>
                <li>Validated communication protocols and driver functionality with oscilloscope and logic analyzer</li>
              </ul>
            </div>
          </section>

          <section id="projects" className="px-8 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-xl font-semibold mb-4">These are some of the projects I&apos;m working on.</p>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex gap-3 items-center">
                  <h3 className="text-xl font-semibold">3D Holographic Display (ONGOING)</h3>
                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                    <a href="https://github.com/pradyunnkale/3DHolographicDisplay" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                      <FaGithub size={30} />
                    </a>
                </div>
                <span className="text-md font-semibold text-gray-400">August 2025 – Present · West Lafayette, IN</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                <li>Developed motor control firmware, including programming an electronic speed controller (ESC) for precise movement</li>
                <li>Developed and tuned PID control algorithms to maintain stable and accurate motor positioning</li>
                <li>Programmed firmware for a Hall sensor to enable real-time position feedback and closed-loop control integration</li>
              </ul>
            </div>
          </section>

          <section id="awards" className="px-8 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-4xl font-bold mb-4">Awards</h2>
            <p className="text-xl font-semibold mb-4">Here are some awards I&apos;ve received.</p>
            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
              <li><strong>AP Scholar with Distinction (Awarded by CollegeBoard) </strong> — July 2025</li>
              <li><strong>CRLS Student Scholarship (Awarded by Harvard Extension School)</strong> — January 2025</li>
              <li><strong>National Honor Society Member (Awarded by Cambridge Rindge & Latin School)</strong> — December 2024</li>
              <li><strong>Lowell Student Scholarship (Awarded by Harvard Extension School)</strong> — August 2024</li>
            </ul>
          </section>

          <section id="contact" className="px-8 max-w-5xl mx-auto pb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-xl font-semibold mb-4">Feel free to reach out to me via email or connect on LinkedIn.</p>
            <ul className="space-y-2 text-gray-300 text-lg font-semibold">
              <li>Email: <a href="mailto:kalepradyunn@gmail.com" className="underline hover:text-gray-100">kalepradyunn@gmail.com</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/pradyunnkale" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-100">linkedin.com/in/pradyunnkale</a></li>
              <li>GitHub: <a href="https://github.com/pradyunnkale" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-100">github.com/pradyunnkale</a></li>
            </ul>
          </section>
        </main>
      </body>
    </html>
  );
}
