import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPage() {
  return (
    <main className="pt-10 px-6 max-w-3xl mx-auto pb-16">
      <Link href="/" className="inline-block font-medium text-gray-300 hover:text-white mb-8">← All projects</Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">8×8 Floating Point Systolic Array Accelerator</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed">A collaborative digital hardware project developing a weight-stationary systolic array with 64 multiply-accumulate processing elements. The architecture uses FP16 internal arithmetic, E4M3 input/output conversion, and streamed weight loading through a 64-bit interface.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Architecture & design targets</h2>
        <p className="text-lg text-gray-300 leading-relaxed">Selectable datapaths support ReLU, Leaky ReLU, binary, and identity activation functions. The AHB-connected accelerator targets 100 MHz operation and an inference latency of 55 clock cycles or fewer.</p>
      </section>
      <figure className="my-10">
        <a href="/assets/systolic-array-dataflow.png" target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-2 focus-visible:outline-white" aria-label="Open systolic array dataflow diagram at full size">
          <Image src="/assets/systolic-array-dataflow.png" alt="FP16 systolic array diagram showing four processing elements, horizontal input and load forwarding, and vertical partial-sum propagation, with the remaining array indicated by ellipses." width={1515} height={1013} className="w-full h-auto rounded" />
        </a>
        <figcaption className="text-sm text-gray-400 mt-3">Array dataflow: inputs and load signals pass horizontally between processing elements; partial sums propagate vertically. Select the diagram to view it at full size.</figcaption>
      </figure>
      <figure className="my-10">
        <a href="/assets/systolic-processing-element.png" target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-2 focus-visible:outline-white" aria-label="Open processing element diagram at full size">
          <Image src="/assets/systolic-processing-element.png" alt="FP16 processing element RTL diagram showing input forwarding, weight storage and load control, a floating-point multiplier and adder, and the partial-sum output register." width={1822} height={1069} className="w-full h-auto rounded" />
        </a>
        <figcaption className="text-sm text-gray-400 mt-3">FP16 processing element: weight storage, input forwarding, and the multiply-add datapath. Select the diagram to view it at full size.</figcaption>
      </figure>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Verification & integration</h2>
        <p className="text-lg text-gray-300 leading-relaxed">The verification approach uses a C golden model imported into SystemVerilog testbenches through DPI to compare floating-point multiplier and adder outputs with reference results. Work with two teammates includes integrating the array and activation datapaths with the AHB subordinate interface, controller, and SRAM data buffer.</p>
      </section>
    </main>
  );
}
