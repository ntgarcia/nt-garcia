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
        <h1
          className={`text-3xl font-medium tracking-tighter`}
        >
          <span className="text-black">Nathan Garcia</span>{" "}
          is a Designer based in Calgary, Alberta.
        </h1>
        <br />
        {/* <h2>
          Selected Works →{" "}
          <a
            href="https://www.instagram.com/knock2music/"
            className="hover:underline"
          >
            Knock2
          </a>{" "}
          <a
            href="https://www.instagram.com/isoxo_/"
            className="hover:underline"
          >
            ISOxo
          </a>{" "}
          <a
            href="https://www.instagram.com/niteharts/"
            className="hover:underline"
          >
            Niteharts
          </a>
        </h2> */}
        <div className="max-w-5xl mx-auto flex gap-6 font-medium tracking-tight">
          <span>
            <span className="opacity-70">Email:</span>{" "}
            <a
              href="mailto:naninf.work@gmail.com"
              className="hover:underline transition-colors"
            >
              naninf.work@gmail.com
            </a>
          </span>
          <span>
            <span className="opacity-70">IG:</span>{" "}
            <a
              href="https://www.instagram.com/nan____inf/"
              className="hover:underline transition-colors"
            >
              nan____inf
            </a>
          </span>
          {/* <span>
          <span className="opacity-70">Location:</span>{" "}
          Calgary, Alberta
        </span>
        <span>
          <span className="opacity-70">Timezone:</span>{" "}
          {currentTime}
        </span> */}
        </div>
      </div>
    </header>
  );
}
