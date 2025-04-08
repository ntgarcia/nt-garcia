"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Edmonton",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl mb-4">
              Get in Touch!
            </h3>
            <ul className="space-y-2">
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
        </div>
      </div>
    </footer>
  );
}
