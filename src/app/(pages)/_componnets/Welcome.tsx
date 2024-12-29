"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Welcome({ onComplete }: { onComplete: () => void }) {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.fromTo(
      textRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    ).to(textRef.current, { scale: 20, opacity: 0, duration: 1, delay: 1 });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-40">
      <h1 ref={textRef} className="text-6xl font-bold">
        Welcome
      </h1>
    </div>
  );
}
