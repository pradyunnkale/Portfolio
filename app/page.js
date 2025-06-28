"use client";
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Stats from './pages/Stats'
import Contact from './pages/Contact'


export default function HomePage() {
  return (
    <main>
      <section id="hero" className="h-auto flex items-center px-8 ">
        <Hero
          Name={'Pradyunn Kale'}
          Body={'First Year Engineering Student @ Purdue University with an interest in aerospace and controls.'}
          PictureLink={'/assets/profile.jpeg'}
        ></Hero>
      </section>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <AboutMe
         Introduction='I&apos;m an engineering student at Purdue University with a deep passion for physics, 
         mathematics, and computer science. With a strong foundation in problem-solving and curiosity-driven learning, 
         I&apos;m driven to design and build systems that make a real-world impact.'
         Cards={[
          {title: 'Interests', body: 'My interests lie at the intersection of aerospace engineering, control systems, and robotics. I\'m fascinated by how these disciplines converge to enable intelligent machines, autonomous vehicles, and next-generation spacecraft.'},
          {title: 'Goals', body: 'I aim to advance the field of aerospace by developing technologies that expand our capabilities in space exploration, autonomous systems, and flight dynamics. Whether through research or hands-on projects, I want to push the frontiers of what\'s possible.'}
         ]}
        >
        </AboutMe>
      </section>
      <section
        id="education"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Education 
          Cards={[
            {Name:'Purdue University',Date:'Starting Fall 2025',Title:'Bachelor of Science in Engineering',Body:'Looking foward to specializing in aerospace and controls.',Badges:['Undergraduate Degree', 'Engineering', 'Co-op Program', 'STEM']},
            {Name:'Harvard Extension School',Date:'2024 - 2025',Title:'College Courses',Body:'Took college classes while still in high school. Received scholarships for academic excellence.',Badges:['Intro to Computer Science (Grade: A)', 'Linear Algebra & Differential Equations (Grade: B)', 'Scholarship Receipient ($3150 USD)']},
            {Name:'Cambridge Rindge & Latin School',Date:'2023 - 2025',Title:'High School Diploma',Body:'Completed advanced coursework with a 97% GPA. Earned A+ in all 12th grade courses, including multiple AP classes in physics, mathematics, and computer science.',Badges:['AP Physics C', 'Multivariable Calculus', 'AP Computer Science A']}
          ]}
        ></Education>
      </section>
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Projects
        PastProjects={[
          {Title:'None worth mentioning yet'}
        ]}
        CurrentProjects={[
          {Title:'Carousel Phone Cubby & Charger',Body:'CAD modelling and designing a carosuel which is controller by a stepper motor with security features. Asks for a code input to store phone, then code can later be used to retrieve the phone. Also uses induction to wirelessly charge phones.',GitHub:'https://github.com/pradyunnkale',Video:'https://youtube.com',Badges:['Hardware', 'Software', 'Group']},
          {Title:'Autonomous Drone Control System',Body:'Autonomous quadcopter with computer vision, SLAM navigation, and reinforcement learning control. Built in Gazebo simulation using ROS2 and PX4 autopilot firmware.',GitHub:'https://github.com/pradyunnkale/Autonomous-Drone-Control-System',Video:'https://youtube.com',Badges:['Hardware', 'Software', 'Solo']}
        ]}
        FutureProjects={[
          {Title:'Nothing in store as this current project is BIG.'}
        ]}
        >
        </Projects>
      </section>
      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Skills></Skills>
      </section>
      <section
        id="achievements"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Achievements></Achievements>
      </section>
      <section
        id="stats"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Stats></Stats>
      </section>
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <Contact></Contact>
      </section>
    </main>
  );
}
