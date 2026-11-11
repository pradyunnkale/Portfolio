import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    href: '/projects/adpll',
    title: 'All-Digital PLL',
    description: 'An 8 GHz quadrature-output ADPLL for an optical SerDes link.',
  },
  {
    href: '/projects/systolic-array',
    title: '8×8 Floating Point Systolic Array',
    description: 'A floating-point accelerator for parallel matrix computation.',
  },
];

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <section className="mb-14">
        <Image
          src="/assets/headshot.png"
          alt="Pradyunn Kale"
          width={112}
          height={112}
          priority
          className="rounded-full object-cover mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">Pradyunn Kale</h1>
        <p className="text-gray-400 mb-5">Electrical Engineering · Purdue University · May 2028</p>
        <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
          I’m focused on digital hardware for signal processing, with experience in digital design, mixed-signal design, embedded systems, and Kalman filtering.
        </p>
        <div className="flex flex-wrap gap-5 mt-6 text-sm">
          <a href="/assets/Pradyunn_Kale_Resume.pdf" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-gray-300">Resume</a>
          <a href="https://github.com/pradyunnkale" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/pradyunnkale" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-gray-300">LinkedIn</a>
        </div>
      </section>
      <section id="projects">
        <h2 className="text-xl font-semibold mb-5">Projects</h2>
        <div className="border-t border-white/15">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block py-6 border-b border-white/15 focus-visible:outline-2 focus-visible:outline-white">
              <h3 className="text-lg font-semibold group-hover:text-gray-300">{project.title} <span aria-hidden="true" className="text-gray-500">↗</span></h3>
              <p className="text-gray-400 mt-2 leading-relaxed">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
