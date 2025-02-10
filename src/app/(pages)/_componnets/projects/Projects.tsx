import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { Project } from "../../../../../types";

gsap.registerPlugin(ScrollTrigger);

// const projectsData = [
//   {
//     number: 1,
//     name: "MeetMate",
//     technologies: ["JavaScript", "React", "Node.js"],
//     description:
//       "MeetMate streamlines online meetings and team collaboration with efficient management tools.",
//     image: "/assets/1.png",
//     liveUrl: "https://meetmate.example.com",
//     githubUrl: "https://github.com/yourusername/meetmate",
//   },
//   {
//     number: 2,
//     name: "Fishtrack",
//     technologies: ["React Native", "TypeScript", "MongoDB"],
//     description:
//       "Mobile app for tracking fish populations and habitat health for environmentalists.",
//     image: "/assets/1.png",
//     liveUrl: "https://fishtrack.example.com",
//     githubUrl: "https://github.com/yourusername/fishtrack",
//   },
//   {
//     number: 3,
//     name: "CashWave",
//     technologies: ["Vue.js", "Vuex", "Firebase"],
//     description:
//       "CashWave helps manage personal finances with real-time budgeting and expense tracking.",
//     image: "/assets/1.png",
//     liveUrl: "https://cashwave.example.com",
//     githubUrl: "https://github.com/yourusername/cashwave",
//   },
// ];

export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/projects").then((res) => res.json());

        setProjectsData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };
    // console.log(projectsData);

    fetchData();
  }, []);

  React.useEffect(() => {
    gsap.from(".projects-content", {
      scrollTrigger: {
        trigger: ".projects-content",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      // opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  const loadMoreProjects = () => {
    setVisibleCount(projectsData.length);
  };

  return (
    <div
      id="projects"
      className="min-h-screen md:w-11/12 lg:w-10/12 w-full mx-auto text-white p-8 my-10"
    >
      <div className="mx-auto w-full max-w-lg  relative flex flex-col items-center justify-center text-center overflow-visible lg:mb-12 mb-6">
        <h3 className="lg:text-5xl md:text-3xl text-xl font-semibold pb-4">
          Selected Works
        </h3>
        <div className="w-full relative flex flex-col items-center justify-center">
          <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"></div>
          <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"></div>
          <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-base to-transparent h-[5px] w-1/2 blur-sm"></div>
          <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-base to-transparent h-px w-1/2"></div>
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <p className="lg:mt-6 mt-4 text-[1rem]">
          Here I present some of my personal projects
        </p>

        <span className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"></span>
      </div>

      <div className="flex flex-col lg:gap-12 gap-12">
        {projectsData
          .slice(0, visibleCount)
          ?.map((project: Project, index: number) => (
            <ProjectCard key={project?._id} index={index} project={project} />
          ))}
      </div>
      {visibleCount < projectsData.length && (
        <div
          onClick={loadMoreProjects}
          className="text-[0.8rem] uppercase tracking-wider px-4  py-1 border-base/80 bg-base/40 w-40 mx-auto text-center mt-6 cursor-pointer"
        >
          Load More
        </div>
      )}
    </div>
  );
}
