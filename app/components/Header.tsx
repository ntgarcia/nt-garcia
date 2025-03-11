"use client";

import Sparkles from './Sparkles';
import Avatar from './Avatar';

export default function Header() {
  return (
    <header
      id="home"
      className="pt-24 min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
    >
      <Sparkles />
      <div className="max-w-3xl mx-auto text-center z-10">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          
          <h1 className="font-mono text-primary">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-flex items-center">
              よ, it's Nathan
              <span className="ml-2 sm:ml-4 inline-flex items-center">
                <Avatar size={50} className="sm:hidden" />
                <Avatar size={70} className="hidden sm:block" />
              </span>
            </span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl inline-block ml-2 text-muted mt-4">👋 •⩊• )</span>
          </h1>
        </div>
        
        <br />
        <span className="block mt-4 text-muted">~ ✦ ~ ✧ ~ ✦ ~</span>

        <p className="text-lg sm:text-xl font-mono mt-8 max-w-2xl mx-auto">
          I'm a designer ⁄ programmer based in Alberta, Canada 🇨🇦
        </p>
        <p className="font-mono mt-2">
            Currently studying Computer Info Systems @ Mount Royal University
        </p>
        <button 
          onClick={() => {
            document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xl sm:text-2xl font-mono my-10 max-w-2xl mx-auto animate-bounce cursor-pointer bg-transparent border-none"
          aria-label="Scroll to works section"
        >
          ↓ ↓ ↓
        </button>
      </div>
    </header>
  );
}
