'use client';

import Card from '../components/card'
import { LuAward } from 'react-icons/lu'
import { RxLightningBolt } from 'react-icons/rx';


export default function Achievements(){
    return(
        <div className='flex-1 flex flex-col justify-center w-[90%] mx-auto'>
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Achievements
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
          Recognitions and accomplishments from my academic and extracurricular
          activies.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 items-stretch">
          <Card className="flex flex-col h-full">
            <div className="flex items-center mb-2">
              <LuAward className="text-3xl text-[#cfb991] mr-2" />
              <h2 className="flex-1 text-center text-xl font-bold">
                Academic Excellence
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed space-y-2">
              97% GPA with A+ in all 12th grade courses
              <br />
              Perfect scores in multiple AP courses
              <br />
              Scholarship recipient at Harvard Extension School
              <br />
              Self-studying Multivariable Calculus
              <br />
              Excellence in advanced physics and mathematics
              <br />
            </p>
          </Card>
          <Card className="flex flex-col h-full">
            <div className="flex items-center mb-2">
              <RxLightningBolt className="text-3xl text-[#cfb991] mr-2" />
              <h2 className="flex-1 text-center text-xl font-bold">
                Engineering & Athletics
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed space-y-2">
              FIRST Robotics Competition participant
              <br />
              Designed and built an electromagnetic ion thruster
              <br />
              Varsity athlete in football, wrestling, and rugby
              <br />
              Strong collaborator in robotics team development
              <br />
              Advanced engineering project experience
              <br />
            </p>
          </Card>
        </section>
        </div>
    );
}