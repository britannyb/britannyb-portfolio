import React, { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  const [glitchIndices, setGlitchIndices] = useState<number[]>([]);
  const [glitchActive, setGlitchActive] = useState<boolean>(true);

  useEffect(() => {
    const indices = Array.from({ length: text.length }, (_, i) => i);
    const shuffled = indices.sort(() => 0.5 - Math.random());
    setGlitchIndices(shuffled.slice(0, Math.floor(text.length / 2)));

    const randomGlitchInterval = setInterval(() => {
      setGlitchActive((prev) => {
        if (prev) {
          const stopTime = Math.random() * 30000 + 10000;
          setTimeout(() => setGlitchActive(true), stopTime);
        }
        return !prev;
      });
    }, 3000);

    return () => clearInterval(randomGlitchInterval);
  }, [text]);

  return (
    <span>
      {text.split("").map((char, index) => {
        const shouldGlitch = glitchIndices.includes(index);
        return (
          <span
            key={index}
            className={
              shouldGlitch && glitchActive
                ? "inline-block animate-glitch"
                : "inline-block"
            }
            style={{
              animationDelay: `${Math.random() * 1.5}s`,
              animationIterationCount: glitchActive ? "infinite" : "1",
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default GlitchText;
