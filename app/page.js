"use client";
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Awards from './pages/Awards'


export default function HomePage() {
  return (
    <main>
      <section id="hero" className="h-auto flex items-center px-8 ">
        <Hero
          Name={'Pradyunn Kale'}
          Body={'Electrical Engineering Student @ Purdue | Specializing in Embedded Systems & Computer Architecture'}
          PictureLink={'/assets/profile.jpeg'}
        ></Hero>
      </section>
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Projects
        WorkExperience={[
          {Title:'Purdue Space Program (SEDS Chapter) — Liquids Copperhead Rocket | Avionics Engineer', Body:'Contributed to the development of embedded drivers for the Copperhead rocket project. Successfully implemented the ADC (Analog-to-Digital Converter) and Ethernet transceiver drivers to enable precise sensor data acquisition and reliable communication. Currently developing the driver for the magnetometer to enhance navigation and orientation capabilities.', GitHub:'https://github.com/pradyunnkale/copperhead_flight_sw', Badges:['Hardware', 'Software', 'Team']},
        ]}
        CurrentProjects={[
          {Title:'3D Holographic Display',Body:'Creating a prototype of a holographic display that integrates embedded systems, optical components, and real-time image rendering. The project emphasizes hardware-software co-design to enable volumetric visualizations and precise control of display hardware.',GitHub:'https://github.com/pradyunnkale/3DHolographicDisplay',Video:'https://youtube.com',Badges:['Hardware', 'Software', 'Solo']},
        ]}
        FutureProjects={[
          {Title:'Nothing in store as this current project is BIG.'}
        ]}
        >
        </Projects>
      </section>
      <section
        id="awards"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Awards></Awards>
      </section>
    </main>
  );
}
