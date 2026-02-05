'use client';

export default function RWIP() {
  return (
    <main className="pt-32 px-8 max-w-5xl mx-auto pb-16">
      <h1 className="text-4xl font-bold mb-4">Reaction Wheel Inverted Pendulum (Personal Project & PSP Liquids Test-Bed)</h1>
      <p className="text-lg mb-8">
        This is a personal project that I am working on. The inverted pendulum is a well-known control
        problem where the goal is to get the pendulum to balance upright by changing the location of the base.
        Due to the nature of the system, you will need to learn modern control, as the system is multi-input and
        multi-output (MIMO).
        The extension to this is that instead of a moving base, we instead utilize the conservation of angular
        momentum to change the angle of the pendulum, thus being an inverted pendulum being controlled by a reaction
        wheel. The reason I use reaction wheels is because I think reaction wheels are cool, and because they are used
        in satelittes, which I find interesting as I am on a rocket team and am interested in space.
        <br/><br/>
        When I am done building up this Reaction Wheel Pendulum (RWIP), I plan on using it to validate boards and sensors
        (is my firmware correct? are my sensors working as intended? etc.). I also intend on using it to help newer members
        interested in modern control learn how to implement it in the real world. I was initially "onboarded" on flight dynamics
        because the former lead, Hudson Reynolds, had an Inverted Pendulum he had built up. This is where I broke into control systems.
      </p>
      {/* Add your project content */}
    </main>
  );
}