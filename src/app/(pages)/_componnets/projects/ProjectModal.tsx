"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../../../../types";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;

    const modal = modalRef.current;
    const content = contentRef.current;

    if (isOpen) {
      gsap.set(modal, {
        yPercent: 100,
        borderTopLeftRadius: "40vw",
        borderTopRightRadius: "40vw",
      });
      gsap.set(content, { opacity: 0 });

      const tl = gsap.timeline();
      tl.to(modal, {
        yPercent: 0,
        duration: 0.4,
        ease: "power3.inOut",
      })
        .to(modal, {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          duration: 0.2,
          ease: "power2.inOut",
        })
        .to(content, {
          opacity: 1,
          duration: 0.3,
        })
        .from(content.querySelectorAll("h1, p, div.links, div.techs"), {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        });
    } else {
      const tl = gsap.timeline();
      tl.to(content, {
        opacity: 0,
        duration: 0.3,
      })
        .to(modal, {
          borderTopLeftRadius: "40vw",
          borderTopRightRadius: "40vw",
          duration: 0.2,
          ease: "power2.inOut",
        })
        .to(modal, {
          yPercent: 100,
          duration: 0.5,
          ease: "power3.inOut",
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="absolute top-0 bottom-0 left-0 right-0 h-[100vh] bg-black overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute  right-6 top-6 z-50 rounded-full bg-gray-800/80 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-gray-700/80"
        >
          <X className="h-6 w-6" />
        </button>

        <ScrollArea className="h-full  mx-auto">
          <div ref={contentRef} className="relative p-0 py-16">
            <div className="mx-auto   space-y-8">
              <div className="space-y-6   md:w-4/5 w-11/12 mx-auto">
                <h1 className="text-6xl font-semibold text-white mb-12">
                  {project.name}
                </h1>

                <div className="grid md:grid-cols-3 grid-cols-1 items-start justify-start gap-12 ">
                  <div className="col-span-2">
                    <h2 className=" uppercase text-xl pb-2  font-thin w-full  mb-6 ">
                      DESCRIPTION
                    </h2>
                    <div
                      className="pe-4 text-[1.1rem] tracking-wide leading-normal text-gray-300"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>

                  <div className="flex flex-col gap-12 ">
                    <div className="links grid grid-cols-3 gap-6 text-xl">
                      <Link
                        href={project.liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" /> Live
                      </Link>
                      <Link
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" /> Client
                      </Link>
                      <Link
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" /> Backend
                      </Link>
                    </div>
                    <div>
                      <h2 className="uppercase text-xl pb-2  font-thin w-full border-b border-gray-400 mb-6 ">
                        TECHS USED
                      </h2>

                      <div className="techs flex flex-wrap gap-2">
                        {project.techs?.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout="responsive" // Ensures the image maintains its aspect ratio
                        width={100} // Use 100 for full width
                        height={50} // Adjust to maintain desired aspect ratio
                        className="object-contain" // Change to object-contain to show the full image
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
