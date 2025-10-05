'use client';
import Image from 'next/image'
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
                        <div className="flex flex-wrap gap-6">
                            <div className="w-42 h-42 rounded-full overflow-hidden">
                                <Image
                                    src="/assets/profile.jpeg"
                                    alt="Pradyunn Kale"
                                    width={256}
                                    height={256}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col">
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
                                <p className="text-base mb-4">Computer Engineering Student @ Purdue University (B.S. 2025 - 2028)</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-semibold text-lg w-full sm:w-auto">Languages:</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">Python</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="experience" className="px-8 max-w-5xl mx-auto scroll-mt-32">
                        <h2 className="text-4xl font-bold mb-4">Experience</h2>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Avionics Engineer @ Purdue Space Program Liquids</h3>
                                    <div className='flex gap-2'>
                                        <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
                                        <span className="px-2 py-1 bg-gray-800 rounded font-semibold">CMake</span>
                                    </div>
                                    <a href="https://github.com/pradyunnkale/copperhead_flight_sw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <span className="text-md font-semibold text-gray-400">July 2025 – Present · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Developed drivers for ADC, Ethernet PHY, and Magnetometer from scratch using C/C++</li>
                                <li>Automating CI/CD pipeline for driver firmware testing using CMake</li>
                                <li>Planned configuration FreeRTOS ensuring peripheral detection and real-time task scheduling</li>
                                <li>Planned validation driver firmware using HITL and HOOTL simulations against MATLAB/Simulink missions</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Embedded Systems Engineer @ Purdue Solar Racing</h3>
                                    <div className='flex gap-2'>
                                        <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
                                    </div>
                                </div>
                                <span className="text-md font-semibold text-gray-400">September 2025 – Present · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Developing a Raspberry Pi Pico to CAN controller library from scratch in C++</li>
                                <li>Planning implementation of wireless communication system between racing car and support car for real-time data transmission</li>
                                <li>Planning implementation of an SPI GUI on the steering wheel for real-time telemetry and control visualization</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Firmware Engineer @ ECELabs.io (VIP @ Purdue)</h3>
                                    <div className='flex gap-2'>
                                        <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
                                    </div>
                                </div>
                                <span className="text-md font-semibold text-gray-400">September 2025 – Present · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Developing firmware for lab boards used by electrical engineering students for assignments</li>
                                <li>Implementing MAX7301 library for high frequency communication to I/O expanders via SPI</li>
                                <li>Planning development of firmware enabling USB-based configuration of physical FPGA hardware</li>
                            </ul>
                        </div>
                    </section>

                    <section id="projects" className="px-8 max-w-5xl mx-auto scroll-mt-32">
                        <h2 className="text-4xl font-bold mb-4">Projects</h2>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">HTTP Web Server</h3>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                                    <a href="https://github.com/pradyunnkale/http_server" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <span className="text-md font-semibold text-gray-400">October 2025 – Present · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Developed a http server using FreeRTOS, enabling real-time communication and control</li>
                                <li>Set up ethernet communication to use DMA and interrupts for efficient data handling</li>
                                <li>Used lwIP for lightweight TCP/IP stack implementation, and integrated with Flask for porting web-server</li>
                                <li>Planning implementation of web-dashboard for data visualization and control</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Inverted Pendulum</h3>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                                    <a href="https://github.com/pradyunnkale/inverted_pendulum" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <span className="text-md font-semibold text-gray-400">October 2025 – Present · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Inverted pendulum control algorithm on the RP2350, using Raspberry Pi SDK</li>
                                <li>Implemented using nested PID Controllers, one for the angle and one for the velocity</li>
                                <li>Planned implementation of the drivers, including motor control and sensor feedback, also needs to be tuned</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Bare Metal Arduino Repository</h3>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                                    <a href="https://github.com/pradyunnkale/baremetalarduino" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <span className="text-md font-semibold text-gray-400">September 2025 · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Contains my progression with bare metal programming, writing directly to registers</li>
                                <li>Right now, there is only a blink project in there, my first ever results with bare metal</li>
                                <li>More projects on the way, I plan on going up to controlling 7 segement display through register manipulation</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Phone Cubby Carousel</h3>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">Arduino C++</span>
                                    <a href="https://github.com/pradyunnkale/PhoneCubbyCarousel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-115 flex items-center">
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <span className="text-md font-semibold text-gray-400">June 2025 · Cambridge, MA</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Developed authentication system requiring usernames and passwords for each device, enhancing security</li>
                                <li>Designed user-friendly interface, simplifying phone storage and retrieval for students</li>
                                <li>Enhanced classroom phone management, by combining security, automation, and charging into a single system</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Quick Driver Development Without Hardware Guide</h3>
                                    <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                                </div>
                                <span className="text-md font-semibold text-gray-400">August 2025 · West Lafayette, IN</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base font-semibold space-y-2 mt-2">
                                <li>Created a video detailing how to write drivers efficiently, even when you do not have access to hardware</li>
                                <li>Used this approach on my PSP Liquids and Holo Display projects, from datasheets to early HAL setup.</li>
                                <li>Shared three key tips: read the datasheet, figure out why this device, and keep comms abstracted until hardware&apos;s accessible.</li>
                            </ul>
                        </div>
                        <div className="video-container, mt-8 flex justify-center" style={{ border: 'none' }}>
                            <iframe
                                src="https://www.youtube.com/embed/7DrmJ-hkEno"
                                width="840"
                                height="473"
                                title="Test video"
                                allowFullScreen
                                style={{ border: 'none' }}
                            ></iframe>
                        </div>
                    </section>

                    <section id="awards" className="px-8 max-w-5xl mx-auto scroll-mt-32">
                        <h2 className="text-4xl font-bold mb-4">Awards</h2>
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
