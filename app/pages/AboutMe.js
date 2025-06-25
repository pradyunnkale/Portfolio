'use client';
import Card from "../components/card";
export default function AboutMe({Introduction, Cards}){
    return(
        <div>
            <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
                    About Me
                </h1>
                <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
                  {Introduction}
                </p>
                <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
                  {Cards.map((card, idx) => (
                    <div className='md:w-[35%]' key={idx}>
                        <Card title={<span className='block text-center'>{card.title}</span>}>
                            <p className='text-lg leading-relaxed'>
                                {card.body}
                            </p>
                        </Card>
                      </div>
                  ))}
                </section>
        </div>
    );
}