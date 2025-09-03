"use client";
import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoCodeSlash } from "react-icons/io5";
import { GoCodespaces } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Home: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <main className="relative z-10 min-h-screen bg-transparent text-gray-900 px-4 sm:px-6 lg:px-8">
        <section className="max-w-5xl mx-auto text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white/80 tracking-tight">
            Hi, I'm Daniyal Siddiqui
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400/90 mb-8">
            Full Stack Developer | React, Next.js, Node.js, MongoDB, Sanity,
            UI/UX Enthusiast etc...
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <Link href="mailto:piratesdaniyal@gmail.com" target="_blank">
              <Button className="flex items-center gap-2 text-white bg-white/90 rounded-md backdrop-blur-lg bg-opacity-10 border border-gray-100 cursor-pointer">
                <Mail />
                Email
              </Button>
            </Link>
            <Link href="https://github.com/daniyalsiddiqui123" target="_blank">
              <Button className="flex items-center gap-2 text-white bg-white/90 rounded-md backdrop-blur-lg bg-opacity-10 border border-gray-100 cursor-pointer">
                <Github />
                GitHub
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/daniyal-siddiqui-5805162b4/"
              target="_blank"
            >
              <Button className="flex items-center gap-2 text-white bg-white/90 rounded-md backdrop-blur-lg bg-opacity-10 border border-gray-100 cursor-pointer">
                <Linkedin />
                LinkedIn
              </Button>
            </Link>
          </div>
          <Card
            id="about"
            className="shadow-2xl w-full bg-gray-900 rounded-md backdrop-blur-sm bg-opacity-0 border border-gray-100"
          >
            <CardContent className="p-6 sm:p-8 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                About Me
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                I'm a full stack developer with a focus on modern web
                technologies. I build scalable, performant applications using
                latest frameworks and languages like React, Next.js, Node.js,
                TypeScript, Sanity and MongoDB etc... I care about clean code,
                smooth UX, and delivering real value through tech.
              </p>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  open ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
                  <Card className="w-full shadow-2xl bg-gray-900 rounded-md backdrop-blur-2xl bg-opacity-0 border border-gray-100 transition-transform hover:scale-[1.02]">
                    <CardContent className="text-white">
                      <IoCodeSlash className="text-blue-400 text-2xl mb-2" />
                      <b>Frontend</b>
                      <ul className="list-disc ml-4">
                        <li>React/Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>HTML</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="w-full shadow-2xl bg-gray-900 rounded-md backdrop-blur-2xl bg-opacity-0 border border-gray-100 transition-transform hover:scale-[1.02]">
                    <CardContent className="text-white">
                      <GoCodespaces className="text-blue-400 text-2xl mb-2" />
                      <b>Backend & Tools</b>
                      <ul className="list-disc ml-4">
                        <li>Node.js</li>
                        <li>Sanity</li>
                        <li>MongoDB</li>
                        <li>Git/Github</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 text-white cursor-pointer"
              >
                {open ? "Hide Skills" : "Expand Skills..."}
              </button>
            </CardContent>
          </Card>
        </section>
        <section id="projects" className="max-w-5xl mx-auto py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white/90 mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="bg-white/5 shadow-xl rounded-xl border border-gray-400 backdrop-blur-md transition-transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  E-commerce Store
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  A full stacked online e-commerce store built with Next.js and
                  TailwindCSS with product listings, cart, checkout with Cash On
                  Delivery but can implement different payment gateways like
                  Stripe. Admin dashboard built with Sanity.
                </p>
              </CardContent>
              <Link
                target="_blank"
                href="https://nuva-website-ubjq.vercel.app/"
              >
                <Image
                  width={500}
                  height={500}
                  alt="E-commerce Store"
                  src="/title.png"
                  className="rounded-xl"
                />
              </Link>
            </Card>
            <Card className="bg-white/5 shadow-xl rounded-xl border border-gray-400 backdrop-blur-md transition-transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  SaaS App
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Coming Soon... Build Under Process 💪🏻🔥
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="contact" className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white/90 mb-6">
            Contact
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-400 mb-8">
            Always open to discuss new projects or opportunities.
          </p>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <MdEmail className="text-3xl text-blue-400" />
              <div>
                <p className="text-white font-semibold">Email</p>
                <Link
                  href="mailto:piratesdaniyal@gmail.com"
                  className="text-blue-100"
                >
                  piratesdaniyal@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <FaPhoneAlt className="text-3xl text-blue-400" />
              <div>
                <p className="text-white font-semibold">Phone</p>
                <Link href="tel:+923282147535" className="text-blue-100">
                  +92 3282147535
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <FaLocationDot className="text-3xl text-blue-400" />
              <div>
                <p className="text-white font-semibold">Location</p>
                <p className="text-blue-100">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
