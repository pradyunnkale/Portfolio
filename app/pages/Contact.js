'use client';
import Card from "../components/card";
import { FaEnvelope, FaPhoneSquareAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6"

export default function Contact(){
    return(
        <div className='w-[90%] mx-auto'>
            <div className='flex justify-center text-center flex-col w-[90%] mx-auto'>
                <h1 className="flex text-5xl font-extrabold mb-2 text-[#cfb991] text-center justify-center">
                Get In Touch
                </h1>
                <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl mb-6">
                Interested in connecting or collaborating? Feel free to reach out!
                </p>
            </div>
            <div className='flex flex-wrap sm:flex-row justify-center gap-4'>
            <div className='w-full sm:w-[90%] md:w-[39%] mb-2'>
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
                    <div className="flex flex-col lg:flex-row gap-6 justify-center">
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
            <div className='w-full sm:w-[90%] md:w-[45%] mb-4'>
                <div className='md:w-[100%]'>
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
                <div className="mb-4"/>
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
            </div>
    );
}