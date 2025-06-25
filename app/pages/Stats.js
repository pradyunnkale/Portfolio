'use client';

import Card from '../components/card'

export default function Stats(){
    return (
        <div className=''>
            <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center text-center">
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
                  <div className="p-6 text-gray-300 flex-1 flex flex-col justify-center">
                    <h3 className="text-white text-4xl font-bold text-center">97%</h3>
                    <p className="text-gray-400 text-sm text-center">Total GPA</p>
                    <div className="flex justify-center mt-4">
                      <div className="flex flex-col">
                        <h3 className="text-white text-xl text-center font-semibold">
                          A+
                        </h3>
                        <p className="text-gray-400 text-sm text-center">All 12th Grade Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col">
                  <div className="bg-[#cfb991] text-black text-center font-bold text-3xl py-4">
                    SAT Score
                  </div>
                  <div className="p-6 text-gray-300 flex-1 flex flex-col justify-center">
                    <h3 className="text-white text-4xl font-bold text-center">1460</h3>
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
                  <div className="p-6 text-gray-300 flex-1 flex flex-col justify-center">
                    <h3 className="text-white text-4xl font-bold text-center">2</h3>
                    <p className="text-gray-400 text-sm text-center">Harvard Extension Courses</p>
                    <div className="flex justify-center mt-4">
                      <div className="flex flex-col">
                        <h3 className="text-white text-xl text-center font-semibold">
                          A
                        </h3>
                        <p className="text-gray-400 text-sm text-center">Intro to Computer Science</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-[60%]">
                  <Card className="w-[80%] sm:w-[45%] md:w-[20%] rounded-2xl border border-white/10 bg-[hsl(var(--card))]/70 shadow-lg backdrop-blur overflow-hidden flex flex-col text-center">
                    <h2 className="font-bold text-3xl text-[#cfb991] py-4">
                      Advanced Coursework
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center p-6 gap-10">
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
        </div>
    );
}