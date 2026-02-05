'use client';
import Image from 'next/image'

export default function PSPLFDCROCKET() {
  return (
    <main className="pt-32 px-8 max-w-5xl mx-auto pb-16">
      <h1 className="text-4xl font-bold mb-4">Sub-Scale Rocket for PSP Liquids Flight Dynamics & Controls Team</h1>
      <p className="text-lg text-justify mb-8">
        We started this project because we wanted to validate our 6DoF model.
        Although we believe it is correct, it is always better to make sure through actual testing.
        We also started this project because we realized we were more of a "Flight Dynamics" team rather
        than a "Flight Dynamics & Controls" team. This meant that we had to do at least some controls as part
        of our subteam. Since we cannot do active controls on our main rockets (CraterMaker Special, Copperhead, Pathfinder)
        because of ITAR regulations (classified as a missile). We are making a smaller version of our current main rocket (Copperhead).
        This is so we can do active stabilization on it, and be able to validate sensor logic and more specifically RF electronics (this is
        because RF essentially works the same way given the same attitude dynamics). 
        <br/><br/>
        As the current Flight Dynamics & Controls Lead on PSP Liquids (as of Spring 2026),
        my responsibilites include project and timeline planning, avionics bring up, software architechture
        definition, and more. Currently our goal by the end of this semester is to be done building up avionics and to 
        have working state estimation using a Kalman Filter.
      </p>
      <div className="mb-8">
        <Image
            src="/assets/software_diagram_psplfdcrocket.png" 
            alt="Software stack for orientation estimation"
            width={800}
            height={600}
            className="w-full h-auto rounded"
        />
        <p className="text-sm text-center mt-4 !text-gray-300">
            Software stack for orientation estimation (for Copperhead and smaller rocket)
        </p>
      </div>
    </main>
  );
}