"use client";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollProgress from "./_componnets/ScrollProgress";
import { Welcome } from "./_componnets/Welcome";
import Nav from "./_componnets/nav/Nav";
import LandingPage from "./_componnets/landing/Landing";
import About from "./_componnets/about/About";
import Projects from "./_componnets/projects/Projects";
import Blogs from "./_componnets/blogs/Blogs";
import Footer from "./_componnets/Footer";
import Contact from "./_componnets/contact/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);

  useEffect(() => {
    if (!isWelcomeComplete) return;

    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
      lerp: 0.05,
      infinite: false,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

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
      lenis.destroy();
    };
  }, [isWelcomeComplete]);

  if (!isWelcomeComplete) {
    return <Welcome onComplete={() => setIsWelcomeComplete(true)} />;
  }

  return (
    <main>
      <ScrollProgress />
      {/* <Menu /> Call the Menu component here */}
      <Nav />
      <LandingPage />
      <About />
      <Projects />
      <Blogs />
      <Contact />

      <Footer />
    </main>
  );
}
