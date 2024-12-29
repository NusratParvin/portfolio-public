// import Image from "next/image";
// import Link from "next/link";
// import { FC } from "react";
// import { Blog } from "../../../../../types";
// import { Badge } from "@/components/ui/badge";

// interface BlogCardProps {
//   post: Blog;
// }

// const BlogCard: FC<BlogCardProps> = ({ post }) => {
//   const { _id, name, image, stack, details, createdAt } = post;

//   return (
//     // <Link href={`blogs/${slug}`} className="no-underline">
//     //   <div
//     //     key={slug}
//     //     className="flex transform flex-col gap-3 transition-transform hover:scale-105 duration-700   bg-indigo-900/30"
//     //   >
//     //     <figure className="relative h-48 w-full overflow-hidden">
//     //       <img
//     //         src={image}
//     //         alt={name}
//     //         className="h-full w-full rounded-nonne bg-gray-200 object-image"
//     //       />
//     //     </figure>

//     //     <div className="mt-1 flex items-center gap-2 px-3">
//     //       {/* <span className="w-fit rounded-xl bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700">
//     //         {category}
//     //       </span> */}
//     //       <p className="text-sm font-semibold text-gray-500">{publishDate}</p>
//     //     </div>

//     //     <h3 className="hover:text-theme mb-2 text-xl font-bold transition-colors duration-200 px-3 pb-6">
//     //       {name}
//     //     </h3>
//     //   </div>
//     // </Link>
//     <article className="flex bg-black/30 text-white transition hover:shadow-xl">
//       <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
//         <time
//           dateTime={createdAt}
//           className="flex items-center justify-between gap-4 text-xs font-bold uppercase"
//         >
//           <span>{new Date(createdAt).getFullYear()}</span>
//           <span className="w-px flex-1 bg-gray-100/70"></span>
//           <span>
//             {new Date(createdAt).toLocaleString("default", {
//               month: "short",
//             })}{" "}
//             {new Date(createdAt).getDate()}
//           </span>
//         </time>
//       </div>

//       {/* Image container taking full height */}
//       <div className="hidden sm:block sm:w-32 sm:h-full">
//         <Image
//           alt={name}
//           src={image}
//           width={128}
//           height={128}
//           className="object-cover h-full w-full"
//         />
//       </div>

//       <div className="flex flex-1 flex-col justify-between">
//         <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:px-4 py-0">
//           <Link href={`/blog/${_id}`}>
//             <h3 className="font-semibold  uppercase text-lg">{name}</h3>
//           </Link>

//           <p
//             className="mt-2 line-clamp-3 text-sm text-gray-400"
//             dangerouslySetInnerHTML={{ __html: details }}
//           />

//           <div className="mt-4 text-sm text-gray-400 flex flex-wrap gap-2">
//             Category:{" "}
//             {stack?.map((st: string, index: number) => (
//               <Badge
//                 key={index}
//                 className="font-medium text-yellow-300"
//                 variant="outline"
//               >
//                 {st}
//               </Badge>
//             ))}
//           </div>
//         </div>

//         <div className="sm:flex sm:items-end sm:justify-end">
//           <Link
//             href={`/blogs/${_id}`}
//             className="block bg-indigo-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-indigo-600"
//           >
//             Read Blog
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default BlogCard;

"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import BlogModal from "./BlogModal";
import { Blog } from "../../../../../types";

interface BlogCardProps {
  post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, image, stack, details, createdAt } = post;

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

        <div className="hidden sm:block sm:w-32 sm:h-full">
          <Image
            alt={name}
            src={image}
            width={128}
            height={128}
            className="object-cover h-full w-full"
          />
        </div>

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
