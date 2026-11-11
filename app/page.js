import Image from 'next/image';
import Link from 'next/link';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

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
  {
    href: '/projects/modelica-rumoca',
    title: 'Embedded Code Generation with Modelica & Rumoca',
    description: 'SURF 2026 at Purdue: from control models to generated C and fixed-wing flight testing.',
  },
];

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <section className="mb-14 flex items-start gap-5 sm:gap-8">
        <div className="min-w-0 flex-1">
        <p className="text-gray-400 mb-3">Electrical Engineering @ Purdue University</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-5">
          <h1 className="text-3xl sm:text-4xl font-semibold">Pradyunn Kale</h1>
          <div className="flex items-center gap-4">
            <a aria-label="GitHub" href="https://github.com/pradyunnkale" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-white hover:text-gray-300"><FaGithub size={26} aria-hidden="true" /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/pradyunnkale" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-white hover:text-gray-300"><FaLinkedin size={26} aria-hidden="true" /></a>
          </div>
        </div>
        <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
          I’m focused on digital hardware for signal processing, with experience in digital design, mixed-signal design, embedded systems, and Kalman filtering.
        </p>
        <div className="flex flex-wrap gap-5 mt-6 text-[1.05rem]">
          <a href="/assets/Pradyunn_Kale_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-gray-100 underline underline-offset-4 hover:text-white"><FaFileAlt size={18} aria-hidden="true" />Resume</a>
        </div>
        </div>
        <Image
          src="/assets/headshot.png"
          alt="Pradyunn Kale"
          width={192}
          height={192}
          priority
          className="object-cover rounded-2xl p-2 w-28 h-28 sm:w-48 sm:h-48 shrink-0"
        />
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
