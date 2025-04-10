"use client";

import Avatar from "./Avatar";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header
      id="home"
      className="pt-30 flex flex-col px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-5xl z-10 mx-auto w-full sm:px-10 md:px-30">
        <div className="flex flex-row items-center gap-3 sm:gap-6 mb-3">
          <Avatar size={80} />
          <div className="flex flex-col gap-1">
            <h1 className="text-lg sm:text-2xl text-black font-medium">Hi, I'm Nathan👋</h1>
            <p className="text-sm sm:text-lg">
              I'm a Calgary-based designer & programmer studying Computer Info Systems @ Mount Royal University.
            </p>
          </div>
        </div>
        <p className="text-black/60 text-sm sm:text-md">Currently the Marketing and Design Lead for <a href="https://mruhacks.ca" target="_blank" className="text-black/70 hover:text-black/100 transition-colors underline">MRUHacks</a>. Previously an Analyst Intern @ AHS.</p>
        <div className="flex flex-row items-center gap-1 sm:gap-2 mt-6">
          <a
            href="https://drive.google.com/file/d/1S1gZkTC1wIlg8kr2Q_BnHoDhKTeqVEHW/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border-1 bg-black border-black/80 items-center justify-center rounded-md text-sm sm:text-md text-white font-medium h-10 px-4 py-2"
          >
            Resume
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="https://github.com/ntgarcia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border-1 border-gray-200 items-center justify-center rounded-md text-sm sm:text-md font-medium h-10 px-4 py-2"
          >
            Github
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ntns"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border-1 border-gray-200 items-center justify-center rounded-md text-sm sm:text-md font-medium h-10 px-4 py-2"
          >
            LinkedIn
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
