// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { MenuIcon, X } from "lucide-react";
// import Socials from "./Socials";

// export default function Menu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const circleRef = useRef(null);
//   const menuContentRef = useRef(null);

//   const toggleMenu = () => {
//     console.log("Toggling menu from:", isOpen);
//     setIsOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       // Expand the circle smoothly
//       gsap.fromTo(
//         circleRef.current,
//         { scale: 0, opacity: 0.5, transformOrigin: "center" },
//         {
//           scale: 100,
//           opacity: 1,
//           duration: 0.6, // Slightly longer duration for a smoother effect
//           ease: "expo.out", // Smoother easing
//           onComplete: () => {
//             // Show the menu content smoothly
//             gsap.to(menuContentRef.current, {
//               opacity: 1,
//               pointerEvents: "auto",
//               duration: 0.2, // Smooth transition to visible
//               ease: "expo.out",
//             });
//           },
//         }
//       );
//     } else {
//       // Shrink the circle smoothly
//       gsap.to(circleRef.current, {
//         scale: 0,
//         opacity: 0,
//         duration: 0.6,
//         ease: "expo.in",
//       });

//       // Hide the menu content smoothly
//       gsap.to(menuContentRef.current, {
//         opacity: 0,
//         pointerEvents: "none",
//         duration: 0.3,
//         ease: "expo.in",
//       });
//     }
//   }, [isOpen]);

//   return (
//     <>
//       <button
//         className="fixed top-5 right-5 z-50 text-white text-4xl"
//         onClick={toggleMenu}
//         style={{ transition: "opacity 0.3s ease" }}
//       >
//         {isOpen ? (
//           <X
//             color="white"
//             size={44}
//             style={{ transition: "opacity 0.3s ease-out" }}
//           />
//         ) : (
//           <MenuIcon
//             color="white"
//             size={44}
//             style={{ transition: "opacity 0.3s ease-out" }}
//           />
//         )}
//       </button>

//       <div
//         ref={circleRef}
//         className="fixed top-5 right-5 w-10 h-10 bg-base rounded-full z-40"
//         style={{
//           transform: "scale(0)",
//         }}
//       ></div>

//       <div
//         ref={menuContentRef}
//         className="fixed inset-0 flex flex-col justify-center items-center z-40 opacity-0 pointer-events-none"
//         style={{
//           opacity: 0,
//           pointerEvents: "none",
//           transition: "opacity 0.3s ease",
//         }}
//       >
//         <ul className=" text-5xl font-semibold space-y-4 text-white">
//           <li
//             className={
//               activeSection === "home"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Home
//           </li>
//           <li
//             className={
//               activeSection === "about"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             About
//           </li>
//           <li
//             className={
//               activeSection === "projects"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Projects
//           </li>
//           <li
//             className={
//               activeSection === "contact"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Blog
//           </li>
//           <li
//             className={
//               activeSection === "contact"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Contact
//           </li>
//         </ul>

//         {/* Social Icons */}
//         <Socials />
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MenuIcon, X } from "lucide-react";
import Socials from "./Socials";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const circleRef = useRef(null);
  const menuContentRef = useRef(null);

  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Scroll to section using GSAP scrollTo
  const scrollToSection = (id: string) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (isOpen) {
      // Expand the circle smoothly
      gsap.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0.5, transformOrigin: "center" },
        {
          scale: 100,
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
          onComplete: () => {
            // Show the menu content smoothly
            gsap.to(menuContentRef.current, {
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.2,
              ease: "expo.out",
            });
          },
        }
      );
    } else {
      // Shrink the circle smoothly
      gsap.to(circleRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "expo.in",
      });

      // Hide the menu content smoothly
      gsap.to(menuContentRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "expo.in",
      });
    }
  }, [isOpen]);

  const sections = [
    { name: "home", ref: homeRef },
    { name: "about", ref: aboutRef },
    { name: "projects", ref: projectsRef },
    { name: "blog", ref: blogsRef },
    { name: "contact", ref: contactRef },
  ];

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sectionOffsets = sections.map((section: any) => ({
        name: section.name,
        offset: section.ref.current ? section.ref.current.offsetTop : 0,
      }));

      const scrollPosition = window.scrollY + 200;
      const currentSection = sectionOffsets
        .filter((section) => scrollPosition >= section.offset)
        .reverse()[0];

      if (currentSection) {
        setActiveSection(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        className="fixed top-5 right-5 z-50 text-white text-4xl"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X color="white" size={44} />
        ) : (
          <MenuIcon color="white" size={44} />
        )}
      </button>

      {/* Circle effect */}
      <div
        ref={circleRef}
        className="fixed top-5 right-5 w-10 h-10 bg-base rounded-full z-40"
        style={{
          transform: "scale(0)",
        }}
      ></div>

      {/* Menu Content */}
      <div
        ref={menuContentRef}
        className={`fixed inset-0 flex flex-col justify-center items-center z-40 opacity-0 pointer-events-none transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <ul className="text-5xl font-semibold space-y-4 text-white">
          <li
            onClick={() => scrollToSection("home")}
            className={
              activeSection === "home"
                ? "text-green-500"
                : "text-gray-200 hover:text-white transition"
            }
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className={
              activeSection === "about"
                ? "text-green-500"
                : "text-gray-200 hover:text-white transition"
            }
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className={
              activeSection === "projects"
                ? "text-green-500"
                : "text-gray-200 hover:text-white transition"
            }
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("blog")}
            className={
              activeSection === "blog"
                ? "text-green-500"
                : "text-gray-200 hover:text-white transition"
            }
          >
            Blog
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={
              activeSection === "contact"
                ? "text-green-500"
                : "text-gray-200 hover:text-white transition"
            }
          >
            Contact
          </li>
        </ul>

        {/* Social Icons */}
        <Socials />
      </div>
    </>
  );
}
