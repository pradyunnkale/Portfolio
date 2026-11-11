import Link from 'next/link';

export default function ProjectPage() {
  return (
    <main className="pt-10 px-6 max-w-3xl mx-auto pb-16">
      <Link href="/" className="inline-block font-medium text-gray-300 hover:text-white mb-8">← All projects</Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">All-Digital PLL for Optical SerDes</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed">Designing an 8 GHz quadrature-output all-digital phase-locked loop for a 32 Gb/s PAM4 optical SerDes. The dual-mode architecture combines coarse frequency acquisition and fine phase tracking with threshold-based mode switching. This is an ongoing design project.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Digital signal processing &amp; control</h2>
        <p className="text-lg text-gray-300 leading-relaxed">The digital loop measures timing error and filters it to generate oscillator tuning commands, connecting signal processing with feedback control. The architecture includes a hybrid time-to-digital converter (TDC) with a coarse frequency counter and a fine gated ring oscillator, a SAR/PI digital loop filter, and a programmable fractional-N divider.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Oscillator &amp; frequency tuning</h2>
        <p className="text-lg text-gray-300 leading-relaxed">The oscillator design uses a Class-F quadrature digitally controlled oscillator (DCO) with coarse and fine frequency tuning to support the acquisition and tracking modes.</p>
      </section>
    </main>
  );
}
