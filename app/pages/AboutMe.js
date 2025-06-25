'use client';
import Card from "../components/card";

export default function AboutMe({Introduction, Cards}){
    return(
        <div className='w-[90%] mx-auto'>
            <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
                About Me
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto max-w-4xl">
              {Introduction}
            </p>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-10 items-stretch">
              {Cards.map((card, idx) => (
                <Card 
                  key={idx}
                  title={<span className='block text-center'>{card.title}</span>} 
                  className='flex flex-col h-full'
                >
                  <p className='text-lg leading-relaxed'>
                      {card.body}
                  </p>
                </Card>
              ))}
            </section>
        </div>
    );
}