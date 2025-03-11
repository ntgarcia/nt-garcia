import { useEffect, useState, useRef } from "react";

const GREETINGS = ["よ", "Hi", "Olá", "Yo", "您好", "Sup"];

export default function GreetingScramble({
  className = "",
  delay = 0,
  scrambleSpeed = 50,
}: {
  className?: string;
  delay?: number;
  scrambleSpeed?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentGreetingIndex = useRef(0);
  const characters = "!@#$%^&*()_+";

  useEffect(() => {
    const startAnimation = () => {
      setHasStarted(true);

      const animateLoop = () => {
        setIsAnimating(true);
        let scrambleCount = 0;
        const maxScrambles = 10; // Number of scrambles before settling on next greeting

        const scramble = () => {
          if (scrambleCount >= maxScrambles) {
            // Move to next greeting
            currentGreetingIndex.current =
              (currentGreetingIndex.current + 1) %
              GREETINGS.length;
            setDisplayText(
              GREETINGS[currentGreetingIndex.current]
            );
            setIsAnimating(false);

            // Schedule next animation loop
            setTimeout(animateLoop, 2000); // Wait 2 seconds before next scramble
            return;
          }

          const scrambled = Array(3)
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

          setDisplayText(scrambled);
          scrambleCount++;
          setTimeout(scramble, scrambleSpeed);
        };

        scramble();
      };

      setTimeout(animateLoop, delay);
    };

    startAnimation();

    return () => {
      // Cleanup if needed
    };
  }, [delay, scrambleSpeed]);

  if (!hasStarted) {
    return <span className={className}></span>;
  }

  return <span className={className}>{displayText}</span>;
}
