import Link from 'next/link';

export default function ProjectPage() {
  return (
    <main className="pt-10 px-6 max-w-3xl mx-auto pb-16">
      <Link href="/#projects" className="inline-block font-medium text-gray-300 hover:text-white mb-8">← All projects</Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">8×8 Floating Point Systolic Array Accelerator</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed">A collaborative digital hardware project developing a weight-stationary systolic array with 64 multiply-accumulate processing elements. The architecture uses FP16 internal arithmetic, E4M3 input/output conversion, and streamed weight loading through a 64-bit interface.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Architecture & design targets</h2>
        <p className="text-lg text-gray-300 leading-relaxed">Selectable datapaths support ReLU, Leaky ReLU, binary, and identity activation functions. The AHB-connected accelerator targets 100 MHz operation and an inference latency of 55 clock cycles or fewer.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Verification & integration</h2>
        <p className="text-lg text-gray-300 leading-relaxed">The verification approach uses a C golden model imported into SystemVerilog testbenches through DPI to compare floating-point multiplier and adder outputs with reference results. Work with two teammates includes integrating the array and activation datapaths with the AHB subordinate interface, controller, and SRAM data buffer.</p>
      </section>
    </main>
  );
}
