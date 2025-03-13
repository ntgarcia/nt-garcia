"use client";

import Sparkles from "./Sparkles";
import Avatar from "./Avatar";
import GreetingScramble from "./GreetingScramble";

export default function Header() {
  return (
    <header
      id="home"
      className="pt-30 flex flex-col px-8 md:px-16 relative overflow-hidden"
    >
      <Sparkles />
      <div className="max-w-3xl z-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <h1 className="font-mono text-primary">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-flex items-center">
              <GreetingScramble
                delay={500}
                scrambleSpeed={70}
              />
              <span className="ml-2">, it's Nathan</span>
              <span className="ml-2 sm:ml-4 inline-flex items-center">
                <Avatar size={50} className="sm:hidden" />
                <Avatar
                  size={70}
                  className="hidden sm:block"
                />
              </span>
            </span>
            <br />
            {/* <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl inline-block ml-2 text-muted mt-4">
              👋 •⩊• )
            </span> */}
          </h1>
        </div>

        {/* <span className="block mt-4 text-muted">
          ~ ✦ ~ ✧ ~ ✦ ~
        </span> */}

        <p className="text-lg sm:text-xl font-mono mt-6 max-w-2xl">
          I'm a designer ⁄ programmer based in Alberta,
          Canada 🇨🇦
        </p>
        <p className="font-mono mt-4">
          Currently studying Computer Info Systems @ Mount
          Royal University
        </p>
      </div>
    </header>
  );
}
