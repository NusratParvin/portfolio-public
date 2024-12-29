import React from "react";
import Home from "./Home";

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScroll = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const sections = Array.from(container.children) as HTMLElement[];

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         pin: true,
//         scrub: 1,

//         end: () => `+=${container.offsetWidth}`,
//         invalidateOnRefresh: true,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div>
//       <div className="firstContainer">
//         <h1>Testing horizontal scrolling w/ three sections</h1>
//         <h2>First Container</h2>
//       </div>

//       <div ref={containerRef} className="horizontal-container">
//         <div className="description blue">
//           <div>
//             SCROLL DOWN
//             <div className="scroll-down">
//               <div className="arrow"></div>
//             </div>
//           </div>
//         </div>

//         <section className="red">ONE</section>
//         <section className="orange">TWO</section>
//         <section className="purple">THREE</section>
//       </div>

//       <div className="container green">
//         <h2>Container 4</h2>
//       </div>

//       <div className="lastContainer">
//         <h2>Last Container</h2>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;
