import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <main className="pt-10 px-6 max-w-3xl mx-auto pb-16">
      <Link href="/" className="inline-block font-medium text-gray-700 hover:text-gray-950 mb-8">← All projects</Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Embedded Code Generation with Modelica &amp; Rumoca (SURF 2026)</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        I extended Rumoca, a Rust-based Modelica compiler, to generate embedded C from control models through
        the GALEC intermediate representation. My work included the eFMI admissibility layer and integrating
        generated controller code into a flight-test software harness.
      </p>

      <section className="mb-12" aria-labelledby="flight-title">
        <h2 id="flight-title" className="text-2xl font-semibold mb-4">Flight demonstration</h2>
        <figure>
          <video controls playsInline preload="metadata" poster="/assets/surf-2026/flight-preview.jpg" className="w-full max-w-sm mx-auto rounded-lg bg-gray-900" aria-label="Continuous flight footage of the fixed-wing aircraft at Purdue UAS Research and Test Facility">
            <source src="/assets/surf-2026/flight-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video. <a href="/assets/surf-2026/flight-demo.mp4">Download the flight video.</a>
          </video>
          <figcaption className="font-[family-name:var(--font-inter)] font-normal text-sm text-gray-700 mt-4 leading-relaxed">
            Continuous footage from the indoor fixed-wing flight test. My generated controller ran on a Linux computer
            and sent high-level commands to the aircraft as RC inputs; the onboard controller maintained attitude stabilization.
          </figcaption>
        </figure>
      </section>

      <section className="mb-12" aria-labelledby="pipeline-title">
        <h2 id="pipeline-title" className="text-2xl font-semibold mb-4">Compilation &amp; Control Pipeline</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Modelica control models pass through Rumoca’s admissibility checks and GALEC lowering before C generation.
          During testing, motion-capture measurements supplied the outer-loop controller, which produced radio-control commands.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          <figure className="w-full">
            <a href="/assets/surf-2026/compiler-pipeline.png" target="_blank" rel="noopener noreferrer" aria-label="View compiler pipeline at full size" className="flex h-[420px] items-center justify-center rounded overflow-hidden bg-white">
              <Image src="/assets/surf-2026/compiler-pipeline.png" alt="Compiler pipeline from Modelica source through the existing DAE representation and GALEC projection to algorithm code and embedded C." width={1155} height={1195} className="w-full h-full object-contain" />
            </a>
            <figcaption className="font-[family-name:var(--font-inter)] font-normal text-sm text-gray-700 mt-3">Modelica-to-C compilation pipeline.</figcaption>
          </figure>
          <figure className="w-full">
            <a href="/assets/surf-2026/controller-pipeline.png" target="_blank" rel="noopener noreferrer" aria-label="View controller pipeline at full size" className="flex h-[420px] items-center justify-center rounded overflow-hidden bg-white">
              <Image src="/assets/surf-2026/controller-pipeline.png" alt="Flight control pipeline from motion capture measurements to the Rumoca-generated outer-loop controller on Linux, radio-control commands, and onboard stabilization and actuators." width={252} height={452} className="w-full h-full object-contain" />
            </a>
            <figcaption className="font-[family-name:var(--font-inter)] font-normal text-sm text-gray-700 mt-3">Measurement-to-actuation control loop.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="trajectory-title">
        <h2 id="trajectory-title" className="text-2xl font-semibold mb-4">Flight results</h2>
        <figure>
          <a href="/assets/surf-2026/flight-trajectory.png" target="_blank" rel="noopener noreferrer" aria-label="View flight trajectory at full size">
            <Image src="/assets/surf-2026/flight-trajectory.png" alt="Top-down measured flight trajectory with waypoint locations, automatic-control engagement, and samples below 0.3 metres marked in the plot legend." width={668} height={335} className="w-full h-auto rounded" />
          </a>
          <figcaption className="font-[family-name:var(--font-inter)] font-normal text-sm text-gray-700 mt-3 leading-relaxed">Recorded waypoint-following flight using controller logic generated from a Modelica model.</figcaption>
        </figure>
      </section>
    </main>
  );
}
