"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".preloader", { autoAlpha: 0, duration: 0.5, onComplete });
      },
    });

    tl.to(setProgress, {
      duration: 3,
      value: 100,
      onUpdate: () => setProgress(Math.round(tl.progress() * 100)),
    });
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 bg-black text-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-6xl font-bold mb-4">{progress}%</div>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
