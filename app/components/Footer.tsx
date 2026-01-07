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
      setCurrentTime(
        now.toLocaleTimeString("en-US", options)
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex gap-6">
        {/* <span>
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
        </span> */}
        {/* <span>
          <span className="opacity-70">Location:</span>{" "}
          Calgary, Alberta
        </span>
        <span>
          <span className="opacity-70">Timezone:</span>{" "}
          {currentTime}
        </span> */}
      </div>
    </footer>
  );
}
