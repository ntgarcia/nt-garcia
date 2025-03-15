"use client";

import Sparkles from "./Sparkles";
import Avatar from "./Avatar";
import GreetingScramble from "./GreetingScramble";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header
      id="home"
      className="pt-30 flex flex-col px-4 md:px-8 relative overflow-hidden"
    >
      <Sparkles />
      <div className="max-w-7xl z-10 mx-auto w-full">
        <div className="flex flex-col text-left">
          <h1 className="font-mono inline-block" style={{ color: "var(--text-primary)" }}>
            <span className="text-2xl sm:text-3xl md:text-4xl inline-flex items-center backdrop-blur-sm bg-background/70 px-4 py-2 rounded-lg">
              <span className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--text-primary)" }}><GreetingScramble
                  delay={500}
                  scrambleSpeed={70}
                />,</span>
                <span className="ml-2">it's <span style={{ color: "var(--text-primary)" }}>Nathan</span></span>
                <span className="ml-2 sm:ml-4 inline-flex items-center">
                  <Avatar size={30} className="sm:hidden" />
                  <Avatar
                    size={40}
                    className="hidden sm:block"
                  />
                </span>
                <span className="ml-2"> I'm a <span style={{ color: "var(--text-primary)" }}>designer</span> ⁄ <span style={{ color: "var(--text-primary)" }}>programmer </span>
                based in <span style={{ color: "var(--text-primary)" }}>Calgary, Alberta 🇨🇦</span>.
                Currently studying Computer Info Systems @ Mount Royal University. </span>
                <a
                  href="https://drive.google.com/file/d/1S1gZkTC1wIlg8kr2Q_BnHoDhKTeqVEHW/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-centers text-foreground transition-colors underline"
                >
                  View Resume<ArrowUpRight size={24} />
                </a>
              </span>
            </span>
          </h1>
          


        </div>
      </div>
    </header>
  );
}
