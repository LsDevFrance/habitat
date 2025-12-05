"use client";

import { useEffect, useState } from "react";

export function DoorAnimation() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 pointer-events-none overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-black transition-transform duration-1200 ease-out ${
          isAnimating ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          willChange: "transform",
        }}
      />

      {/* Bloc droit */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-black transition-transform duration-1200 ease-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          willChange: "transform",
        }}
      />
    </div>
  );
}
