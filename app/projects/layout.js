'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProjectLayout({ children }) {
  const pathname = usePathname();
  const projects = [
    { href: '/projects/adpll', label: 'ADPLL' },
    { href: '/projects/systolic-array', label: 'Systolic Array' },
    { href: '/projects/modelica-rumoca', label: 'Modelica / Rumoca' },
  ];

  return (
    <>
      <header className="max-w-3xl mx-auto px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/15 pb-5">
          <Link href="/" className="font-medium transition-colors hover:text-gray-300">Pradyunn Kale</Link>
          <nav aria-label="Projects" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {projects.map((project) => (
              <Link key={project.href} href={project.href} aria-current={pathname === project.href ? 'page' : undefined} className={`font-medium transition-colors hover:text-gray-300 ${pathname === project.href ? 'text-white' : 'text-gray-500'}`}>
                {project.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
