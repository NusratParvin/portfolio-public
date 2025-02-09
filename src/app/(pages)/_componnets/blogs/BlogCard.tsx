"use client";

// import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import BlogModal from "./BlogModal";
import { Blog } from "../../../../../types";

interface BlogCardProps {
  post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, stack, details, createdAt } = post;

  return (
    <>
      <article className="flex bg-black/30 text-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime={createdAt}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase"
          >
            <span>{new Date(createdAt).getFullYear()}</span>
            <span className="w-px flex-1 bg-gray-100/70"></span>
            <span>
              {new Date(createdAt).toLocaleString("default", {
                month: "short",
              })}{" "}
              {new Date(createdAt).getDate()}
            </span>
          </time>
        </div>

        {/* <div className="hidden sm:block sm:w-32 sm:h-full">
          <Image
            alt={name}
            src={image}
            width={128}
            height={128}
            className="object-cover h-full w-full"
          />
        </div> */}

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:px-4 py-0">
            <h3 className="font-semibold uppercase text-lg">{name}</h3>

            <p
              className="mt-2 line-clamp-3 text-sm text-gray-400"
              dangerouslySetInnerHTML={{ __html: details }}
            />

            <div className="mt-4 text-sm text-gray-400 flex flex-wrap gap-2">
              Category:{" "}
              {stack?.map((st: string, index: number) => (
                <Badge
                  key={index}
                  className="font-medium text-yellow-300"
                  variant="outline"
                >
                  {st}
                </Badge>
              ))}
            </div>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="block bg-indigo-500 px-5 py-2 text-center text-sm font-bold uppercase text-gray-900 transition hover:bg-indigo-600"
            >
              Read Blog
            </button>
          </div>
        </div>
      </article>

      <BlogModal
        post={post}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
