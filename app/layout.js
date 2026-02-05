'use client';
import { Inter_Tight, Inter } from 'next/font/google';
import { useEffect } from 'react';
import './globals.css';

const interTight = Inter_Tight({ variable: '--font-inter-tight', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
    // Smooth scroll handler
    useEffect(() => {
        const scrollToSection = (id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };

        const navLinks = document.querySelectorAll('[data-scroll]');
        navLinks.forEach((link) => {
            const targetId = link.getAttribute('data-scroll');
            link.addEventListener('click', () => scrollToSection(targetId));
        });

        return () => {
            navLinks.forEach((link) => {
                const targetId = link.getAttribute('data-scroll');
                link.removeEventListener('click', () => scrollToSection(targetId));
            });
        };
    }, []);

    return (
        <html lang="en">
            <body className={`${inter.variable} ${interTight.variable} bg-black text-white relative`}>
                {children}
            </body>
        </html>
    );
}