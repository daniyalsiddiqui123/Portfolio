import Link from "next/link";
import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="shadow-sm m-4 bg-white/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 Daniyal Siddiqui. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link
            href="mailto:piratesdaniyal@gmail.com"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <Mail />
          </Link>
          <Link
            href="https://github.com/daniyalsiddiqui123"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/daniyal-siddiqui-5805162b4/"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <Linkedin />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
