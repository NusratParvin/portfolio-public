// "use client";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExternalLink, Github } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Project } from "../../../../../types";

// gsap.registerPlugin(ScrollTrigger);

// interface ProjectCardProps {
//   index: number;
//   project: Project;
// }

// const ProjectCard = ({ index, project }: ProjectCardProps) => {
//   return (
//     <div className="shadow-md grid grid-col-1 md:grid-cols-3 items-center border-b border-base/30 gap-6 p-0 md:p-6 md:m-4 m0 ">
//       <div>
//         <div className="flex gap-6 items-baseline">
//           <p className="text-2xl mb-4 text-gray-300">
//             0<span className="text-[1.7rem] ">{`${index + 1}.`}</span>
//           </p>
//           <Link href="">
//             <h2 className="text-4xl font-semibold hover:underline text-white/90">
//               {project?.name}
//             </h2>
//           </Link>
//         </div>

//         <div className="flex justify-start gap-8 items-center mt-8">
//           <Link
//             href={project?.liveSite}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-base hover:underline"
//           >
//             <ExternalLink className="inline mr-1 w-4 h-4" /> Live
//           </Link>
//           <Link
//             href={project?.githubClient}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-base hover:underline"
//           >
//             <Github className="inline mr-1 w-4 h-4" /> Client
//           </Link>
//           <Link
//             href={project?.githubBackend}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-base hover:underline"
//           >
//             <Github className="inline mr-1 w-4 h-4" /> Backend
//           </Link>
//         </div>
//       </div>

//       <div>
//         <p className="text-gray-400 text-[1rem] leading-snug">
//           {project?.summary}
//         </p>
//         <div className="flex flex-wrap gap-1.5 mt-12">
//           {project?.techs?.map((tech, index) => (
//             <span
//               key={index}
//               className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="relative overflow-hidden h-48 w-full rounded-lg group">
//         <Image
//           src={project.image}
//           alt={project.name}
//           className="absolute top-0 left-0 w-full object-cover transition-transform ease-in-out duration-[200s]     group-hover:translate-y-[calc(-100%+12rem)]"
//           width={240}
//           height={480} // Use actual dimensions
//         />
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Project } from "../../../../../types";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  index: number;
  project: Project;
}

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current || !imageInnerRef.current) return;

    const image = imageInnerRef.current;

    // Get the actual height of the image
    const calculateScroll = () => {
      const imageHeight = image.naturalHeight;
      const containerHeight = imageRef.current?.offsetHeight || 0;
      return -(imageHeight - containerHeight);
    };

    // Setup hover animation
    const setupHoverAnimation = () => {
      const scrollDistance = calculateScroll();

      gsap.to(image, {
        y: scrollDistance,
        duration: 30,
        ease: "none",
        paused: true,
      });
    };

    // Initialize animation
    setupHoverAnimation();

    // Add hover events
    const container = imageRef.current;
    let animation: gsap.core.Tween;

    const onMouseEnter = () => {
      animation = gsap.to(image, {
        y: calculateScroll(),
        duration: 30,
        ease: "none",
      });
    };

    const onMouseLeave = () => {
      if (animation) {
        animation.kill();
      }
      gsap.to(image, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      if (animation) {
        animation.kill();
      }
    };
  }, []);

  return (
    <>
      <div
        className="shadow-md grid grid-col-1 md:grid-cols-3 items-center border-b border-base/30 gap-6 p-0 md:p-6 md:m-4 m-0 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <div className="flex gap-6 items-baseline">
            <p className="text-2xl mb-4 text-gray-300">
              0<span className="text-[1.7rem]">{`${index + 1}.`}</span>
            </p>
            <h2 className="text-4xl font-semibold hover:underline text-white/90">
              {project?.name}
            </h2>
          </div>

          <div className="flex justify-start gap-8 items-center mt-8">
            <Link
              href={project?.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="inline mr-1 w-4 h-4" /> Live
            </Link>
            <Link
              href={project?.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="inline mr-1 w-4 h-4" /> Client
            </Link>
            <Link
              href={project?.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="inline mr-1 w-4 h-4" /> Backend
            </Link>
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-[1rem] leading-snug">
            {project?.summary}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-12">
            {project?.techs?.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative overflow-hidden h-48 w-full rounded-lg group-hover:scale-125 group-hover:-inset-3 group-hover:skew-y-1 transition-transform duration-300"
        >
          <Image
            ref={imageInnerRef}
            src={project.image}
            alt={project.name}
            className="absolute top-0 left-0 w-full object-cover"
            width={240}
            height={1000}
          />
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
