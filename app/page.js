"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

export default function HomePage() {
  const pathname = usePathname();
  const linkClass = (href) =>
    `transition-transform duration-200 hover:scale-110 hover:text-gray-300 ${
      pathname === href ? 'font-extrabold' : 'font-medium'
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center backdrop-blur bg-white/5 border-b border-white/10">
        <h1 className="text-xl font-bold">
          <Link href="/" className="transition-transform duration-200 hover:scale-110 hover:text-gray-300 inline-block">
            Pradyunn Kale
          </Link>
        </h1>
        <nav className="flex gap-6 text-sm whitespace-nowrap">
          <Link href="/projects/psplfdcrocket" className={linkClass('/projects/psplfdcrocket')}>Sub‑Scale Rocket</Link>
          <Link href="/projects/pspl6dof" className={linkClass('/projects/pspl6dof')}>6‑DoF Model</Link>
          <Link href="/projects/rwip" className={linkClass('/projects/rwip')}>RWIP</Link>
        </nav>
      </header>

      <main className="pt-32 space-y-16">
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
                  <a href="/assets/Pradyunn_Kale_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform duration-200 hover:scale-110">
                    <FaFileAlt size={50} />
                  </a>
                </div>
              </div>

              <p className="text-xl font-semibold mb-2">Embedded Systems & Controls</p>
              <p className="text-base mb-4">Computer Engineering Student @ Purdue University (B.S. 2025 - 2029)</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-lg w-full sm:w-auto">Languages:</span>
                <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C</span>
                <span className="px-2 py-1 bg-gray-800 rounded font-semibold">C++</span>
                <span className="px-2 py-1 bg-gray-800 rounded font-semibold">Python</span>
                <span className="px-2 py-1 bg-gray-800 rounded font-semibold">MATLAB</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="px-8 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <p className="text-xl font-semibold mb-2 flex justify-center">
              <span className="font-normal text-justify text-lg">
                I am a current undergraduate student at Purdue University studying Computer Engineering. 
                I have an interest in Embedded Systems (low-level software and hardware) and Guidance, Navigation, and Control (GNC) and simulation. 
                I also plan on gettting a PhD, most likely in Physics.
                I have experience using multiple different microcontrollers (STM32, ESP32, Raspberry Pi, etc.) and different chip architechtures (ARM, RISC-V).
                In addition to working with microcontrollers, I have done control system simulation with MATLAB and Simulink, 
                injecting noise into my system to make sure my controller is robust no matter the conditions. I utilize all of these skills and more as the Flight Dynamics
                & Controls lead on the liquid-fueled rocketry team at Purdue.
                <br/><br/>
                As the lead of FD&C, I am leading the development of a sub-scale version of our current main rocket (Copperhead)
                and using that to validate our custom 6DoF model on MATLAB, in addition to doing some state estimation and active controls projects.
                A lot of the technical skills I have, I have learned from doing these teams and doing projects. More details below.
              </span>
            </p>
          </div>
        </section>
        
        <section className="px-8 max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/projects/psplfdcrocket">
              <div className="p-6 bg-gray-900 h-full rounded cursor-pointer hover:bg-gray-800 transition">
                <h3 className="text-lg font-bold">Sub-Scale Rocket (PSP Liquids Flight Dynamics & Controls Subteam)</h3>
                <p>Smaller version of our current main rocket (copperhead) to do simulation and sensor validation and active controls on.</p>
              </div>
            </Link>
            <Link href="/projects/pspl6dof">
              <div className="p-6 bg-gray-900 h-full rounded cursor-pointer hover:bg-gray-800 transition">
                <h3 className="text-lg font-bold">Custom 6-Degrees-Of-Freedom Model on MATLAB (PSP Liquids)</h3>
                <p>The custom 6 Degrees-Of-Freedom model made by the Flight Dynamics & Controls team on PSP Liquids. Uses MATLAB so we can port Simulink directly to it to test different control systems</p>
              </div>
            </Link>
            <Link href="/projects/rwip">
              <div className="p-6 bg-gray-900 h-full rounded cursor-pointer hover:bg-gray-800 transition">
                <h3 className="text-lg font-bold">Reaction Wheel Inverted Pendulum (Personal & PSP Liquids Test-Bed)</h3>
                <p>Personal project to test different controllers. Also used as a test-bed for sensor validation and for onboarding for new members (if interested in control systems and physics).</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}