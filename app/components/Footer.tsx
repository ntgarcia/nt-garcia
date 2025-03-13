"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] =
    useState<string>("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          timeZone: "America/Denver",
          timeStyle: "medium",
          dateStyle: "medium",
          hour12: true,
        }) + " MST"
      );
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      className="mt-40 py-16 px-4 bg-foreground text-background"
    >
      <div className="max-w-5xl mx-auto">
        {/* <div className="ascii-art mb-20 text-center">
          <pre className="font-mono text-inherit whitespace-pre-line">
            .・。.・゜✭・.🦶.・✫・゜・。.
          </pre>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-mono mb-4">
              Get in Touch!
            </h3>
            <ul className="space-y-2 font-mono">
              <li>
                <span className="opacity-70">Email:</span>{" "}
                <a
                  href="mailto:ngarc101@mtroyal.com"
                  className="hover:underline transition-colors"
                >
                  ngarc101@mtroyal.com
                </a>
              </li>
              <li>
                <span className="opacity-70">
                  Location:
                </span>{" "}
                Calgary, Alberta
              </li>
              <li>
                <span className="opacity-70">
                  Timezone:
                </span>{" "}
                {currentTime}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-mono mb-4">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/ntgarcia"
                target="_blank"
                className="font-mono hover:underline transition-colors clickable"
              >
                Github{" "}
                {/* <span className="opacity-70">
                  {" "}
                  /ᐠ - ˕ -マ
                </span> */}
              </a>
              <a
                href="https://www.linkedin.com/in/ntns/"
                target="_blank"
                className="font-mono hover:underline transition-colors clickable"
              >
                LinkedIn{" "}
                {/* <span className="opacity-70">(⌐■_■)</span> */}
              </a>
              <a
                href="https://drive.google.com/file/d/1S1gZkTC1wIlg8kr2Q_BnHoDhKTeqVEHW/view?usp=sharing"
                target="_blank"
                className="font-mono hover:underline transition-colors clickable"
              >
                Resume{" "}
                {/* <span className="opacity-70">
                  ( •̀ᴗ•́ )و ̑̑{" "}
                </span> */}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="font-mono text-sm opacity-70">
            ntgarcia © {new Date().getFullYear()} • designed
            & built with ♥ and ASCII
          </p>
        </div>
      </div>
    </footer>
  );
}
