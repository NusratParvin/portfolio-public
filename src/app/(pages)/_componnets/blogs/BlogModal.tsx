"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Blog } from "../../../../../types";

interface BlogModalProps {
  post: Blog;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (!modalRef.current || !backdropRef.current) return;

  //     const modal = modalRef.current;
  //     const backdrop = backdropRef.current;

  //     if (isOpen) {
  //       // Reset states and animate in
  //       gsap.set(modal, { yPercent: -100, pointerEvents: "auto" });
  //       gsap.set(backdrop, { opacity: 0, pointerEvents: "auto" });

  //       gsap
  //         .timeline()
  //         .to(backdrop, {
  //           opacity: 1,
  //           duration: 0.3,
  //           ease: "power3.out",
  //         })
  //         .to(modal, {
  //           yPercent: 0,
  //           duration: 0.5,
  //           ease: "power3.out",
  //         });
  //     } else {
  //       // Animate out
  //       gsap
  //         .timeline()
  //         .to(modal, {
  //           yPercent: -100,

  //           duration: 0.5,
  //           ease: "power3.in",
  //         })
  //         .to(backdrop, {
  //           opacity: 0,
  //           duration: 0.3,
  //           ease: "power3.in",
  //           onComplete: () => {
  //             gsap.set(backdrop, { pointerEvents: "none" }); // Disable clicks on backdrop
  //             onClose();
  //           },
  //         });
  //     }
  //   }, [isOpen, onClose]);

  useEffect(() => {
    if (!modalRef.current || !backdropRef.current) {
      console.warn("Modal or backdrop reference is missing!");
      return;
    }

    const modal = modalRef.current;
    const backdrop = backdropRef.current;

    if (isOpen) {
      // Reset states and animate in
      gsap.set(modal, {
        yPercent: -100,
        borderTopLeftRadius: "20vw",
        borderTopRightRadius: "20vw",
        pointerEvents: "auto",
      });
      gsap.set(backdrop, { opacity: 0, pointerEvents: "auto" });

      gsap
        .timeline()
        .to(backdrop, {
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        })
        .to(modal, {
          yPercent: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          duration: 0.5,
          ease: "power3.out",
        });
    } else {
      // Animate out
      gsap
        .timeline()
        .to(modal, {
          yPercent: -100,
          borderTopLeftRadius: "20vw",
          borderTopRightRadius: "20vw",
          duration: 0.5,
          ease: "power3.in",
        })
        .to(backdrop, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(backdrop, { pointerEvents: "none" });
            onClose();
          },
        });
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/0  "
        onClick={() => {
          // Trigger close with animation
          gsap
            .timeline()
            .to(modalRef.current, {
              yPercent: -100,
              duration: 0.5,
              ease: "power3.in",
            })
            .to(backdropRef.current, {
              opacity: 0,
              duration: 0.3,
              ease: "power3.in",
              onComplete: () => {
                gsap.set(backdropRef.current, { pointerEvents: "none" });
                onClose();
              },
            });
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="absolute top-0 left-0 right-0 h-[100vh] bg-[#1C1C1C] overflow-hidden shadow-xl pb-12"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            gsap
              .timeline()
              .to(modalRef.current, {
                yPercent: -100,
                duration: 0.5,
                ease: "power3.in",
              })
              .to(backdropRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power3.in",
                onComplete: () => {
                  gsap.set(backdropRef.current, { pointerEvents: "none" });
                  onClose();
                },
              });
          }}
          className="absolute right-6 top-6 z-50 rounded-full bg-gray-800/80 p-2 text-white hover:bg-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Scrollable Content */}
        <ScrollArea className="h-full">
          <div className="relative p-6 pt-16">
            <div className="mx-auto max-w-5xl space-y-8">
              {/* Image Section */}
              <div className="relative h-[40vh] w-full overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                {/* Title and Date */}
                <div className="flex md:flex-col flex-col items-start  justify-between">
                  <h1 className="md:text-3xl text-xl font-bold text-white">
                    {post.name}
                  </h1>
                  <time className="text-sm text-gray-400  pt-4">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.stack?.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-yellow-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Blog Details */}
                <div
                  className="prose prose-invert max-w-none prose-img:rounded-lg md:text-lg text-[1rem] text-white/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.details }}
                />
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
