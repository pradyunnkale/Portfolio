'use client';
import ProjectCards from '../components/ProjectCards'

export default function Projects({PastProjects= [], CurrentProjects = [], FutureProjects = []}){
    return(
        <div className='flex flex-col justify-center w-[90%] mx-auto text-center'>
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] w-[90%] mx-auto justify-center">
          Past Projects
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto  max-w-4xl">
          Past projects I have done.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          {PastProjects.map((card, idx) => (
          <ProjectCards
              key={idx}
              Title={card.Title}
              Body={card.Body}
              GitHub={card.GitHub}
              Video={card.Video}
              Badges={card.Badges}
          />
          ))}
        </section>
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 w-[90%] mx-auto text-[#cfb991] justify-center">
          Current Projects
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto  max-w-4xl">
          Projects I am currently working on.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          {CurrentProjects.map((card, idx) => (
          <ProjectCards
              key={idx}
              Title={card.Title}
              Body={card.Body}
              GitHub={card.GitHub}
              Video={card.Video}
              Badges={card.Badges}
          />
          ))}
        </section>
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] w-[90%] mx-auto justify-center">
          Future Projects
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto  max-w-4xl">
          Projects I plan on doing.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          {FutureProjects.map((card, idx) => (
          <ProjectCards
              key={idx}
              Title={card.Title}
              Body={card.Body}
              GitHub={card.GitHub}
              Video={card.Video}
              Badges={card.Badges}
          />
          ))}
        </section>
        </div>
    );
}