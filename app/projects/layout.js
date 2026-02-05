'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../globals.css';

export default function ProjectLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (href) =>
    `transition-transform duration-200 hover:scale-110 hover:text-gray-300 ${
      pathname === href ? 'font-extrabold' : 'font-medium'
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center backdrop-blur bg-white/5 border-b border-white/10">
        <h1 className="text-xl">
          <Link href="/" className="font-bold hover:text-gray-300">Pradyunn Kale</Link>
        </h1>
        <nav className="flex gap-6 text-sm whitespace-nowrap">
          <Link href="/projects/psplfdcrocket" className={linkClass('/projects/psplfdcrocket')}>Sub-Scale Rocket</Link>
          <Link href="/projects/pspl6dof" className={linkClass('/projects/pspl6dof')}>6-DoF Model</Link>
          <Link href="/projects/rwip" className={linkClass('/projects/rwip')}>RWIP</Link>
        </nav>
      </header>
      {children}
    </>
  );
}