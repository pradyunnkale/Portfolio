'use client';
import EducationCards from '../components/EducationCards'

export default function Education({Cards = []}){
    return(
        <div className='w-[90%] mx-auto flex flex-col'>
            <h1 className="flex-1 flex text-3xl md:text-5xl font-extrabold mb-2 text-[#cfb991] text-center justify-center">
                  Education
                </h1>
                <p className="flex-1 flex text-xl font-normal w-[90%] mx-auto text-center justify-center">
                  My academic journey and achievements.
                </p>
                <section className="grid grid-cols-1 gap-6 px-4 sm:px-6 py-10 items-stretch">
                {Cards.map((card, idx) => (
                <EducationCards
                    key={idx}
                    Name={card.Name}
                    Date={card.Date}
                    Title={card.Title}
                    Body={card.Body}
                    Badges={card.Badges}
                />
                ))}
                </section>
        </div>
    );
}