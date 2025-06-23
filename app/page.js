"use client";
import Image from "next/image";
import Card from "./card";
import Badge from "./badge";
import { RiCodeLine } from "react-icons/ri";
import { LuRocket, LuDumbbell, LuAward, LuFileText } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneSquareAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6"
import { RxLightningBolt } from "react-icons/rx";


export default function HomePage() {
  return (
    <main>
      <section id="hero" className="h-screen flex items-center px-8 ">
        <div className="flex-1 space-y-6 max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Hi, I&apos;m <span className="text-[#CFB991]">Pradyunn Kale</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            First Year Engineering {">"} Electrical Engineering Student @ Purdue
            University with a passion for Aerospace and Controls
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="btn-primary">
              <FaEnvelope className="inline w-4 h-4 mr-2" />
              Contact Me
            </a>
            <a
              href="/assets/Resume_Pradyunn Kale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <LuFileText className="inline w-4 h-4" />
              Download Resume
            </a>
            <a
              href="https://github.com/pradyunnkale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="inline w-13 h-auto text-[#cfb991] hover:text-[#b3a181]" />
            </a>
            <a
              href="https://linkedin.com/in/pradyunnkale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="inline w-13 h-auto text-[#cfb991] hover:text-[#b3a181]" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/profile.jpeg"
            alt="Pradyunn Kale"
            width={300}
            height={300}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-160 lg:order-last"
          />
        </div>
      </section>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          About Me
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
          I&apos;m an engineering student at Purdue University with a deep passion for physics, mathematics, and computer science. With a strong foundation in problem-solving and curiosity-driven learning, I&apos;m driven to design and build systems that make a real-world impact.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          <div className="md:w-[35%]">
            <Card title={<span className="block text-center">Interests</span>}>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                My interests lie at the intersection of aerospace engineering, control systems, and robotics. I&apos;m fascinated by how these disciplines converge to enable intelligent machines, autonomous vehicles, and next-generation spacecraft.
              </p>
            </Card>
          </div>
          <div className="md:w-[35%]">
            <Card title={<span className="block text-center">Goals</span>}>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                I aim to advance the field of aerospace by developing technologies that expand our capabilities in space exploration, autonomous systems, and flight dynamics. Whether through research or hands-on projects, I want to push the frontiers of what&apos;s possible.
              </p>
            </Card>
          </div>
        </section>
      </section>
      <section
        id="education"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Education
        </h1>
        <p className="flex-1 flex text-xl font-normal justify-center">
          My academic journey and achievements.
        </p>
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10">
          <div className="flex-1 flex justify-center w-full md:w-[75%]">
            <Card
              title={
                <div className="flex justify-between items-center">
                  <span className="text-[#cfb991]">Purdue University</span>
                  <p className="font-normal text-sm">Starting Fall 2025</p>
                </div>
              }
            >
              <h3 className="text-center font-bold text-xl mb-2">
                Bachelor of Science in Electrical Engineering
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                Looking forward to specializing in Aerospace and Controls.
              </p>
              <div className="flex-wrap flex gap-2 mt-4">
                <Badge>Undergraduate Degree</Badge>
                <Badge>Engineering</Badge>
                <Badge>Co-op Program</Badge>
                <Badge>STEM</Badge>
              </div>
            </Card>
          </div>
          <div className="flex-1 flex justify-center w-full md:w-[75%]">
            <Card
              title={
                <div className="flex justify-between items-center">
                  <span className="text-[#cfb991]">
                    Harvard Extension School
                  </span>
                  <p className="font-normal text-sm">2024 - 2025</p>
                </div>
              }
            >
              <h3 className="text-center font-bold text-xl mb-2">
                College Courses
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                Took college classes while still in high school. Received
                scholarships for academic excellence.
              </p>
              <div className="flex-wrap flex gap-2 mt-4">
                <Badge>Intro to Computer Science (Grade: A)</Badge>
                <Badge>
                  Linear Algebra & Differential Equations (Grade: B)
                </Badge>
                <Badge>Scholarship Receipient ($3150 USD)</Badge>
              </div>
            </Card>
          </div>
          <div className="flex-1 flex justify-center w-full md:w-[75%]">
            <Card
              title={
                <div className="flex justify-between items-center">
                  <span className="text-[#cfb991]">
                    Cambridge Rindge & Latin School
                  </span>
                  <p className="font-normal text-sm">2023 - 2025</p>
                </div>
              }
            >
              <h3 className="text-center font-bold text-xl mb-2">
                High School Diploma
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                Completed advanced coursework with a 97.03 GPA. Earned A+ in all
                12th grade courses, including multiple AP classes in physics,
                mathematics, and computer science.
              </p>
              <div className="flex-wrap flex gap-2 mt-4">
                <Badge>AP Physics C</Badge>
                <Badge>Multivariable Calculus</Badge>
                <Badge>AP Computer Science A</Badge>
              </div>
            </Card>
          </div>
        </section>
      </section>
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Projects
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
          Some of my academic and personal projects.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          <div className="md:w-[30%]">
            <Card>
              <Image
                src="/assets/self-balancing-robot.jpg"
                alt="WORK IN PROGRESS: Self Balancing Robot"
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="block text-center font-bold text-xl mb-2">
                Self Balancing Robot
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                Built a two-wheeled robot that uses gyroscope and accelerometer
                data to maintain its balance in real-time through motor control.
                This project demonstrates embedded systems skills and hands-on
                hardware control with sensors and actuators.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Badge>Hardware</Badge>
                <Badge>WIP</Badge>
                <div className="flex gap-2 ml-auto">
                  <a
                    href="https://github.com/wip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-2 py-1 text-xs"
                    aria-label="GitHub"
                  >
                    <svg
                      className="inline w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/wip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-2 py-1 text-xs"
                    aria-label="Video"
                  >
                    <svg
                      className="inline w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.8 8.001a2.752 2.752 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.061a2.752 2.752 0 0 0-1.94 1.94C2 9.661 2 12 2 12s0 2.339.2 3.999a2.752 2.752 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.061a2.752 2.752 0 0 0-1.94-1.94C22 14.339 22 12 22 12s0-2.339-.2-3.999zM10 15V9l6 3-6 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <div className="md:w-[30%]">
            <Card>
              <Image
                src="/assets/self-balancing-robot.jpg"
                alt="WORK IN PROGRESS: NASA API Data Dashboard"
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="block text-center font-bold text-xl mb-2">
                NASA API Data Dashboard
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                Created an interactive dashboard that fetches and visualizes
                real-time space-related data from NASA’s public APIs using
                Python or web technologies. This project highlights your
                software development skills, API integration, and data
                visualization abilities.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Badge>Software</Badge>
                <Badge>WIP</Badge>
                <div className="flex gap-2 ml-auto">
                  <a
                    href="https://github.com/wip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-2 py-1 text-xs"
                    aria-label="GitHub"
                  >
                    <svg
                      className="inline w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/wip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-2 py-1 text-xs"
                    aria-label="Video"
                  >
                    <svg
                      className="inline w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.8 8.001a2.752 2.752 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.061a2.752 2.752 0 0 0-1.94 1.94C2 9.661 2 12 2 12s0 2.339.2 3.999a2.752 2.752 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.061a2.752 2.752 0 0 0-1.94-1.94C22 14.339 22 12 22 12s0-2.339-.2-3.999zM10 15V9l6 3-6 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <div className="md:w-[30%]">
            <Card>
              <Image
                src="/assets/self-balancing-robot.jpg"
                alt="WORK IN PROGRESS: Rocket Avionics Emulator"
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="block text-center font-bold text-xl mb-2">
                Rocket Avionics Emulator
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                Developed a flight computer simulator that reads sensor data to
                detect rocket flight phases and triggers actuators like a servo
                to deploy a parachute. This project combines embedded
                programming, sensor fusion, and control logic relevant to
                aerospace systems.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Badge>Hardware</Badge>
                <Badge>Software</Badge>
                <Badge>WIP</Badge>
                <div className="flex gap-2 ml-auto">
                  <a
                    href="https://github.com/wip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-2 py-1 text-xs"
                    aria-label="GitHub"
                  >
                    <svg
                      className="inline w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/wip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-2 py-1 text-xs"
                    aria-label="Video"
                  >
                    <svg
                      className="inline w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.8 8.001a2.752 2.752 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.061a2.752 2.752 0 0 0-1.94 1.94C2 9.661 2 12 2 12s0 2.339.2 3.999a2.752 2.752 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.061a2.752 2.752 0 0 0-1.94-1.94C22 14.339 22 12 22 12s0-2.339-.2-3.999zM10 15V9l6 3-6 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </section>
      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Skills & Interests
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
          The tools, technologies, and subjects I&apos;m passionate about.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          <div className="md:w-[25%] flex justify-center items-center">
            <Card>
              <div className="flex justify-center mb-2">
                <RiCodeLine className="text-4xl text-[#cfb991]" />
              </div>
              <h2 className="block text-center font-bold text-xl mb-2">
                Technical Skills
              </h2>
              <p className="text-gray-300 text-md leading-relaxed space-y-2">
                Computer Science & Programming
                <br />
                Robot Design & Construction
                <br />
                Physics & Engineering Principles
                <br />
                CAD & 3D Modeling
                <br />
                Mathematics & Problem Solving
                <br />
              </p>
            </Card>
          </div>
          <div className="md:w-[25%] flex justify-center items-center">
            <Card>
              <div className="flex justify-center mb-2">
                <LuRocket className="text-4xl text-[#cfb991]" />
              </div>
              <h2 className="block text-center font-bold text-xl mb-2">
                Academic Interests
              </h2>
              <p className="text-gray-300 text-md leading-relaxed space-y-2">
                Aerospace & Electrical Engineering
                <br />
                Physics (Mechanics & Electromagnetism)
                <br />
                Advanced Mathematics
                <br />
                Computer Science
                <br />
                Robotics & Automation
                <br />
              </p>
            </Card>
          </div>
          <div className="md:w-[25%] flex justify-center items-center">
            <Card>
              <div className="flex justify-center mb-2">
                <LuDumbbell className="text-4xl text-[#cfb991]" />
              </div>
              <h2 className="block text-center font-bold text-xl mb-2">
                Extracurriculars
              </h2>
              <p className="text-gray-300 text-md leading-relaxed space-y-2">
                Weightlifting
                <br />
                Wrestling
                <br />
                Rugby
                <br />
                Football
                <br />
                Engineering Projects
                <br />
              </p>
            </Card>
          </div>
        </section>
      </section>
      <section
        id="achievements"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Achievements
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
          Recognitions and accomplishments from my academic and extracurricular
          activies.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          <div className="md:w-[35%] items-left">
            <Card>
              <div className="flex item-center mb-2">
                <LuAward className="text-3xl text-[#cfb991] mr-2" />
                <h2 className="flex-1 text-center text-xl font-bold">
                  Academic Excellence
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                97.03 GPA with A+ in all 12th grade courses
                <br />
                Perfect scores in multiple AP courses
                <br />
                Scholarship recipient at Harvard Extension School
                <br />
                Self-studying Multivariable Calculus
                <br />
                Excellence in advanced physics and mathematics
                <br />
              </p>
            </Card>
          </div>
          <div className="md:w-[35%]">
            <Card>
              <div className="flex item-center mb-2">
                <RxLightningBolt className="text-3xl text-[#cfb991] mr-2" />
                <h2 className="flex-1 text-center text-xl font-bold">
                  Engineering & Athletics
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                FIRST Robotics Competition participant
                <br />
                Designed and built an electromagnetic ion thruster
                <br />
                Varsity athlete in football, wrestling, and rugby
                <br />
                Strong collaborator in robotics team development
                <br />
                Advanced engineering project experience
                <br />
              </p>
            </Card>
          </div>
        </section>
      </section>
      <section
        id="stats"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Academic Statistics
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
          Key metrics and statistics from my academic performance.
        </p>
        <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
          <div className="flex flex-row flex-wrap justify-center items-stretch w-full gap-8">
            <div className="w-full sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col">
              <div className="bg-[#cfb991] text-black text-center font-bold text-3xl py-4">
                GPA
              </div>
              <div className="text-gray-300 leading-relaxed flex-1 flex flex-col justify-center">
                <h3 className="text-white text-4xl font-bold text-center">
                  97.03
                </h3>
                <p className="text-gray-400 text-sm text-center">Total GPA</p>
              </div>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-white text-2xl text-center font-semibold">
                  A+
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  All 12th Grade Courses
                </p>
              </div>
            </div>
            <div className="w-full sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col">
              <div className="bg-[#cfb991] text-black text-center font-bold text-3xl py-4">
                SAT Score
              </div>
              <div className="p-6 text-gray-300 flex-1 flex flex-col justify-center">
                <h3 className="text-white text-4xl font-bold text-center">
                  1460
                </h3>
                <p className="text-gray-400 text-sm text-center">Total Score</p>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl text-center font-semibold">
                      790
                    </h3>
                    <p className="text-gray-400 text-sm text-left">Math</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl text-center font-semibold">
                      670
                    </h3>
                    <p className="text-gray-400 text-sm text-right">English</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col">
              <div className="bg-[#cfb991] text-black text-center font-bold text-3xl py-4">
                AP Courses
              </div>
              <div className="p-6 text-gray-300 flex-1 flex flex-col justify-center">
                <h3 className="text-white text-4xl font-bold text-center">8</h3>
                <p className="text-gray-400 text-sm text-center">
                  Total AP Courses
                </p>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl text-center font-semibold">
                      5
                    </h3>
                    <p className="text-gray-400 text-sm text-center">
                      AP Chemistry
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl text-center font-semibold">
                      4
                    </h3>
                    <p className="text-gray-400 text-sm text-right">AP CSA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col">
              <div className="bg-[#cfb991] text-black text-center font-bold text-3xl py-4">
                College Prep
              </div>
              <div className="text-gray-300 leading-relaxed flex-1 flex flex-col justify-center">
                <h3 className="text-white text-4xl font-bold text-center">2</h3>
                <p className="text-gray-400 text-sm text-center">
                  Harvard Extension Courses
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-white text-2xl text-center font-semibold">
                  A
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  Intro to Computer Science
                </p>
              </div>
            </div>
            <div className="md:w-[60%]">
              <Card className="w-full sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col text-center">
                <h2 className="font-bold text-3xl text-[#cfb991] py-4">
                  Advanced Coursework
                </h2>
                <div className="flex flex-row justify-center items-center p-6 gap-10">
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="font-bold mb-2 text-xl">Mathematics</h3>
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      Multivariable Calculus
                      <br />
                      Linear Algebra & Differential Equations
                      <br />
                      AP Statistics
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="font-bold mb-2 text-xl">
                      Science & Engineering
                    </h3>
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      AP Physics C: Mechanics and E&M
                      <br />
                      AP Chemistry
                      <br />
                      Engineering III
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="font-bold mb-2 text-xl">Computer Science</h3>
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      Intro to Computer Science (Harvard)
                      <br />
                      AP Computer Science A<br />
                      Hands On Programming With Arduinos
                      <br />
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </section>
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-24 bg-muted/50"
      >
        <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center">
          Get In Touch
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl mb-15">
          Interested in connecting or collaborating? Feel free to reach out!
        </p>
        <div className='flex flex-row justify-center'>
          <div className='md:w-[39%]'>
            <Card>
              <h1 className="flex-1 flex text-2xl font-bold mb-2 text-[#cfb991]">
                Send me a message
              </h1>
              <p className='text-left mb-10'>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
              <form className="flex flex-col gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const data = {
                  name: form.name.value,
                  email: form.email.value,
                  subject: form.subject.value,
                  message: form.message.value,
                };
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                if (res.ok) {
                  alert("Message sent!");
                  form.reset();
                } else {
                  alert("There was an error. Please try again.");
                }
              }}>
                <div className="flex flex-row gap-6 justify-center">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 font-semibold text-white mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      className="rounded-md px-3 py-2 bg-[#181c2b] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#cfb991]mb-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-semibold text-white mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="rounded-md px-3 py-2 bg-[#181c2b] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#cfb991] mb-2"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="mb-1 font-semibold text-white mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    className="rounded-md px-3 py-2 bg-[#181c2b] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#cfb991] mb-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-1 font-semibold text-white mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    className="rounded-md px-3 py-2 bg-[#181c2b] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#cfb991] min-h-[100px] mb-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-[#cfb991] text-white font-bold py-2 px-6 rounded-md hover:bg-[#b3a181] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
          <div className='flex flex-col'>
            <div className='md:w-[100%] ml-10'>
              <Card>
                <h1 className="flex-1 flex text-2xl font-bold mb-2 text-[#cfb991]">
                  Contact Information
                </h1>
                <p className='text-left mb-6'>
                  Here are the best ways to reach me directly.
                </p>
                <div className='flex flex-row text-left mb-4 items-center'>
                  <FaEnvelope className="text-3xl text-[#cfb991] mr-4" />
                  <div className='flex flex-col'>
                    <h2 className='font-bold text-lg'>Email</h2>
                    <p>kalepradyunn@gmail.com</p>
                  </div>
                </div>
                <div className='flex flex-row text-left mb-4 items-center'>
                  <FaPhoneSquareAlt className="text-3xl text-[#cfb991] mr-4" />
                  <div className='flex flex-col'>
                    <h2 className='font-bold text-lg'>Phone</h2>
                    <p>+1 (617) 256 8890</p>
                  </div>
                </div>
                <div className='flex flex-row text-left mb-4 items-center'>
                  <FaLocationDot className="text-3xl text-[#cfb991] mr-4" />
                  <div className='flex flex-col'>
                    <h2 className='font-bold text-lg'>Location</h2>
                    <p>Cambridge, MA</p>
                  </div>
                </div>
              </Card>
              <div className="h-4"/>
              <Card>
                <h1 className='flex-1 flex text-2xl font-bold mb-2 text-[#cfb991] mb-3'>Availability</h1>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg">Response Time</h2>
                    <p>Within 24 hours</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Current Status</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      Available for projects
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Time Zone</span>
                    <p>EST (UTC-5)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
