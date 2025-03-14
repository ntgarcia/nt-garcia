"use client";

import Sparkles from "./Sparkles";
import Avatar from "./Avatar";
import GreetingScramble from "./GreetingScramble";

export default function Header() {
  return (
    <header
      id="home"
      className="pt-30 flex flex-col px-4 md:px-8 relative overflow-hidden"
    >
      <Sparkles />
      <div className="max-w-7xl z-10 mx-auto w-full">
        <div className="flex flex-col text-left">
          <h1 className="font-mono text-primary">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl inline-flex items-center">
              <span className="whitespace-nowrap">
                <GreetingScramble
                  delay={500}
                  scrambleSpeed={70}
                />
                <span className="ml-2">, it's Nathan</span>
              </span>
              <span className="ml-2 sm:ml-4 inline-flex items-center">
                <Avatar size={30} className="sm:hidden" />
                <Avatar
                  size={40}
                  className="hidden sm:block"
                />
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base font-mono mt-4 max-w-2xl">
            I'm a designer ⁄ programmer based in Calgary, Alberta 🇨🇦
          </p>
          <p className="text-xs font-mono mt-2 text-muted">
            Currently studying Computer Info Systems @ Mount
            Royal University
          </p>
        </div>
      </div>
    </header>
  );
}
