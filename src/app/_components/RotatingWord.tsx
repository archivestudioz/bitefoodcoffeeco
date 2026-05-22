"use client";

import { useEffect, useState } from "react";

const words = ["breakfast", "brunch", "matcha", "dinner", "vibes"];

export function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((p) => (p + 1) % words.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-top">
      <span
        key={i}
        className="squiggle inline-block animate-fade-up decoration-pink-deep"
      >
        {words[i]}
      </span>
    </span>
  );
}
