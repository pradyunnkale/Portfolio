'use client';
import Image from 'next/image'

export default function PSPL6DOF() {
  return (
    <main className="pt-32 px-8 max-w-5xl mx-auto pb-16">
      <h1 className="text-4xl font-bold mb-4">Custom 6-Degrees-Of-Freedom Model (Made with PSP Liquids)</h1>
      <p className="text-lg mb-8">
        The Flight Dynamics & Controls subteam on PSP Liquids created their own 6DoF model to simulate different rockets (Copperhead, CMS, Pathfinder, etc.).
        Doing it on MATLAB allows us to port directly on Simulink which will then allow us to try simulating different control systems.
        The 6DoF model needs to be validated, that is one of the reasons for the sub-scale rocket that our subteam is making.
        <br/> 
        <br/> 
        I became the Flight Dynamics & Controls Lead as of the Spring 2026, so I have now inhereted this project.
        I am responsible for porting to Simulink and adding other features to the 6DoF model (maybe a CLI, Monte Carlo, Control Systems, etc.).
      </p>
      <div className="mb-8">
        <Image
            src="/assets/MATLAB_6DOF_GUI.png" 
            alt="6DoF GUI"
            width={800}
            height={600}
            className="w-full h-auto rounded"
        />
        <p className="text-sm text-center mt-4 !text-gray-300">
            6DoF GUI (using MATLAB app designer)
        </p>
      </div>
      {/* Add your project content */}
    </main>
  );
}