"use client";

import { useState, useEffect } from "react";

export default function StickyFooter() {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Always use Edmonton/Mountain time regardless of user's timezone
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Edmonton",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setCurrentTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-50 px-4 md:px-13 py-6">
        <div className="mx-auto flex items-center justify-between text-xl">
          <div className="font-medium tracking-tight text-black mix-blend-difference">
            ©{currentYear} Nathan Garcia
          </div>
          <div className="font-medium tracking-tight text-black mix-blend-difference">
            {currentTime} MST
          </div>
        </div>
      </footer>
    </>
  );
}
