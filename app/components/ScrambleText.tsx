import { useEffect, useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  delay?: number;
  className?: string;
}

export default function ScrambleText({
  text,
  scrambleSpeed = 50,
  scrambledLetterCount = 8,
  delay = 0,
  className = "",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentIndex = useRef(0);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

  useEffect(() => {
    const startAnimation = () => {
      setHasStarted(true);
      setIsAnimating(true);
      currentIndex.current = 0;

      const animate = () => {
        if (currentIndex.current >= text.length) {
          setIsAnimating(false);
          return;
        }

        setDisplayText(() => {
          const revealed = text.slice(
            0,
            currentIndex.current
          );
          const scrambled = Array(
            Math.max(
              scrambledLetterCount,
              text.length - currentIndex.current
            )
          )
            .fill(0)
            .map(
              () =>
                characters[
                  Math.floor(
                    Math.random() * characters.length
                  )
                ]
            )
            .join("");

          return revealed + scrambled;
        });

        currentIndex.current += 1;
        setTimeout(animate, scrambleSpeed);
      };

      animate();
    };

    const timer = setTimeout(startAnimation, delay);
    return () => clearTimeout(timer);
  }, [text, scrambleSpeed, scrambledLetterCount, delay]);

  if (!hasStarted) {
    return <span className={className}></span>;
  }

  return (
    <span className={className}>
      {isAnimating ? displayText : text}
    </span>
  );
}
