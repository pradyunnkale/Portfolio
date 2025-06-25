'use client';
import Card from "../components/card";
import { RiCodeLine } from "react-icons/ri";
import { LuRocket, LuDumbbell } from "react-icons/lu";


export default function Skills(){
    return(
        <div className='w-[90%] mx-auto'>
            <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center text-center">
              Skills & Interests
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
              The tools, technologies, and subjects I&apos;m passionate about.
            </p>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 items-stretch">
              <Card className="flex flex-col h-full">
                <div className="flex justify-center mb-2">
                  <RiCodeLine className="text-4xl text-[#cfb991]" />
                </div>
                <h2 className="block text-center font-bold text-xl mb-2">
                  Technical Skills
                </h2>
                <p className="text-gray-300 text-md leading-relaxed space-y-2">
                  Computer Science & Programming
                  <br />
                  Robot Design & Construction
                  <br />
                  Physics & Engineering Principles
                  <br />
                  CAD & 3D Modeling
                  <br />
                  Mathematics & Problem Solving
                  <br />
                </p>
              </Card>
              <Card className="flex flex-col h-full">
                <div className="flex justify-center mb-2">
                  <LuRocket className="text-4xl text-[#cfb991]" />
                </div>
                <h2 className="block text-center font-bold text-xl mb-2">
                  Academic Interests
                </h2>
                <p className="text-gray-300 text-md leading-relaxed space-y-2">
                  Aerospace & Electrical Engineering
                  <br />
                  Physics (Mechanics & Electromagnetism)
                  <br />
                  Advanced Mathematics
                  <br />
                  Computer Science
                  <br />
                  Robotics & Automation
                  <br />
                </p>
              </Card>
              <Card className="flex flex-col h-full">
                <div className="flex justify-center mb-2">
                  <LuDumbbell className="text-4xl text-[#cfb991]" />
                </div>
                <h2 className="block text-center font-bold text-xl mb-2">
                  Extracurriculars
                </h2>
                <p className="text-gray-300 text-md leading-relaxed space-y-2">
                  Weightlifting
                  <br />
                  Wrestling
                  <br />
                  Rugby
                  <br />
                  Football
                  <br />
                  Engineering Projects
                  <br />
                </p>
              </Card>
            </section>
        </div>
    );
}