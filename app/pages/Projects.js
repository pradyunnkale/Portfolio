'use client';
import ProjectCards from '../components/ProjectCards'

// Helper function to get grid classes based on number of items
const getGridClasses = (itemCount) => {
  if (itemCount === 0) {
    return "hidden"; // Hide empty sections
  } else if (itemCount === 1) {
    return "grid grid-cols-1 gap-6 px-6 py-10 items-stretch";
  } else if (itemCount === 2) {
    return "grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 items-stretch";
  } else if (itemCount % 3 === 0) {
    // Divisible by 3: use standard 3-column layout
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 items-stretch";
  } else {
    // Not divisible by 3: use special layout
    return "grid gap-6 px-6 py-10 items-stretch";
  }
};

// Helper function to render items with special layout for items not divisible by 3
const renderProjectCards = (projects) => {
  const itemCount = projects.length;
  const remainder = itemCount % 3;
  
  if (itemCount <= 3 || remainder === 0) {
    // Standard rendering for 1-3 items or items divisible by 3
    return projects.map((card, idx) => (
      <ProjectCards
        key={idx}
        Title={card.Title}
        Body={card.Body}
        GitHub={card.GitHub}
        Video={card.Video}
        Badges={card.Badges}
      />
    ));
  } else {
    // Special layout: full 3-column rows + remaining items centered
    const fullRows = Math.floor(itemCount / 3);
    const fullRowItems = projects.slice(0, fullRows * 3);
    const remainingItems = projects.slice(fullRows * 3);
    
    return (
      <>
        {/* Full 3-column rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {fullRowItems.map((card, idx) => (
            <ProjectCards
              key={idx}
              Title={card.Title}
              Body={card.Body}
              GitHub={card.GitHub}
              Video={card.Video}
              Badges={card.Badges}
            />
          ))}
        </div>
        {/* Remaining items centered */}
        <div className={`grid gap-6 max-w-[90%] mx-auto ${remainder === 1 ? 'grid-cols-1 max-w-md' : 'grid-cols-1 md:grid-cols-2'}`}>
          {remainingItems.map((card, idx) => (
            <ProjectCards
              key={fullRows * 3 + idx}
              Title={card.Title}
              Body={card.Body}
              GitHub={card.GitHub}
              Video={card.Video}
              Badges={card.Badges}
            />
          ))}
        </div>
      </>
    );
  }
};

export default function Projects({WorkExperience = [], CurrentProjects = [], FutureProjects = []}){
    return(
        <div className='flex flex-col justify-center w-[90%] mx-auto text-center'>
        
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] w-[90%] mx-auto justify-center">
          Work Experience/Project Teams
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto  max-w-4xl">
          Professional and team-based projects.
        </p>
        <section className="flex flex-wrap justify-center gap-6 mx-auto max-w-4xl m-8 mb-16">
          {renderProjectCards(WorkExperience)}
        </section>
        
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 w-[90%] mx-auto text-[#cfb991] justify-center">
          Current Projects
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto  max-w-4xl">
          Projects I'm actively working on or have recently developed.
        </p>
        <section className="flex flex-wrap justify-center gap-6 mx-auto max-w-4xl m-8">
          {renderProjectCards(CurrentProjects)}
        </section>
        
        {/*<h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] w-[90%] mx-auto justify-center">
          Future Projects
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center w-[90%] mx-auto  max-w-4xl">
          Projects I plan on doing.
        </p>
        <section className={getGridClasses(FutureProjects.length)}>
          {renderProjectCards(FutureProjects)}
        </section>*/}

        </div>
    );
}