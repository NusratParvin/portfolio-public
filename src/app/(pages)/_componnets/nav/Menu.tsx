// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { MenuIcon, X } from "lucide-react";
// // import Socials from "./Socials";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// // Register the ScrollToPlugin
// gsap.registerPlugin(ScrollToPlugin);

// export default function Menu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const circleRef = useRef(null);
//   const menuContentRef = useRef(null);

//   // Refs for each section
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const blogsRef = useRef(null);
//   const contactRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   // Scroll to section using GSAP scrollTo
//   const scrollToSection = (id: string) => {
//     gsap.to(window, {
//       scrollTo: `#${id}`,
//       duration: 1,
//       ease: "power2.out",
//     });
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
//           duration: 0.6,
//           ease: "expo.out",
//           onComplete: () => {
//             // Show the menu content smoothly
//             gsap.to(menuContentRef.current, {
//               opacity: 1,
//               pointerEvents: "auto",
//               duration: 0.2,
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

//   const sections = [
//     { name: "home", ref: homeRef },
//     { name: "about", ref: aboutRef },
//     { name: "projects", ref: projectsRef },
//     { name: "blog", ref: blogsRef },
//     { name: "contact", ref: contactRef },
//   ];

//   // Handle scroll and update active section
//   useEffect(() => {
//     const handleScroll = () => {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const sectionOffsets = sections.map((section: any) => ({
//         name: section.name,
//         offset: section.ref.current ? section.ref.current.offsetTop : 0,
//       }));

//       const scrollPosition = window.scrollY + 200;
//       const currentSection = sectionOffsets
//         .filter((section) => scrollPosition >= section.offset)
//         .reverse()[0];

//       if (currentSection) {
//         setActiveSection(currentSection.name);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [sections]);

//   return (
//     <>
//       <button
//         className="fixed top-5 right-5 z-50 text-white text-4xl"
//         onClick={toggleMenu}
//       >
//         {isOpen ? (
//           <X color="white" size={44} />
//         ) : (
//           <MenuIcon color="white" size={44} />
//         )}
//       </button>

//       {/* Circle effect */}
//       <div
//         ref={circleRef}
//         className="fixed top-5 right-5 w-10 h-10 bg-base rounded-full z-40"
//         style={{
//           transform: "scale(0)",
//         }}
//       ></div>

//       {/* Menu Content */}
//       <div
//         ref={menuContentRef}
//         className={`fixed inset-0 flex flex-col justify-center items-center z-40 opacity-0 pointer-events-none transition-opacity duration-300 ${
//           isOpen ? "opacity-100 pointer-events-auto" : ""
//         }`}
//       >
//         <ul className="text-5xl font-semibold space-y-4 text-white">
//           <li
//             onClick={() => scrollToSection("home")}
//             className={
//               activeSection === "home"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Home
//           </li>
//           <li
//             onClick={() => scrollToSection("about")}
//             className={
//               activeSection === "about"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             About
//           </li>
//           <li
//             onClick={() => scrollToSection("projects")}
//             className={
//               activeSection === "projects"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Projects
//           </li>
//           <li
//             onClick={() => scrollToSection("blog")}
//             className={
//               activeSection === "blog"
//                 ? "text-green-500"
//                 : "text-gray-200 hover:text-white transition"
//             }
//           >
//             Blog
//           </li>
//           <li
//             onClick={() => scrollToSection("contact")}
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
//         {/* <Socials /> */}
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MenuIcon, X } from "lucide-react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const circleRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    gsap.to(window, {
      scrollTo: { y: `#${sectionId}`, autoKill: true },
      duration: 1,
      ease: "power2.out",
    });
    setIsOpen(false); // Optionally close the menu on selection
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0.5, transformOrigin: "center" },
        {
          scale: 100,
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
          onComplete: () => {
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
      gsap.to(circleRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "expo.in",
      });

      gsap.to(menuContentRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "expo.in",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = [
        { name: "home", ref: homeRef },
        { name: "about", ref: aboutRef },
        { name: "projects", ref: projectsRef },
        { name: "blog", ref: blogsRef },
        { name: "contact", ref: contactRef },
      ].map((section) => ({
        name: section.name,
        offset: section.ref.current?.offsetTop ?? 0,
        height: section.ref.current?.offsetHeight ?? 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section where the middle of the viewport falls into
      const currentSection = offsets.find((section) => {
        const sectionBottom = section.offset + section.height;
        return (
          scrollPosition >= section.offset && scrollPosition <= sectionBottom
        );
      });

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

      <div
        ref={circleRef}
        className="fixed top-5 right-5 w-10 h-10 bg-base rounded-full z-40"
        style={{ transform: "scale(0)" }}
      ></div>

      <div
        ref={menuContentRef}
        className={`fixed inset-0 flex flex-col justify-center items-center z-40 opacity-0 pointer-events-none transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <ul className="text-5xl font-semibold space-y-4 text-white">
          {["home", "about", "projects", "blog", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={
                activeSection === section
                  ? "text-green-500"
                  : "text-gray-200 hover:text-white transition"
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
