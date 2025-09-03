"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[800px] rounded-2xl border border-white z-50 bg-black/40 backdrop-blur-lg">
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link
          href="/"
          className="text-white text-lg sm:text-xl font-bold tracking-wide"
        >
          Daniyal.Siddiqui
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-gray-200 hover:text-white">
            About
          </Link>
          <Link href="#projects" className="text-gray-200 hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-200 hover:text-white">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-4 py-6 space-y-4 rounded-b-2xl">
          <Link href="#about" className="block text-gray-200 hover:text-white">
            About
          </Link>
          <Link
            href="#projects"
            className="block text-gray-200 hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block text-gray-200 hover:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
