"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.03,
      infinite: false,
    });

    // Corrected requestAnimationFrame implementation
    const raf = (time: number) => {
      lenis.raf(time); // Pass the time argument to Lenis.raf
      requestAnimationFrame(raf); // Call raf recursively
    };

    requestAnimationFrame(raf); // Initial call to start the animation frame loop

    // GSAP and ScrollTrigger integration
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.raf(Date.now()));
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy(); // Clean up Lenis instance on unmount
    };
  }, []);
}
