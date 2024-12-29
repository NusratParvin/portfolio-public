import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "../../../../../types";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/blogs").then((res) => res.json());

        setPosts(data);
        // console.log(data);
        // const sanitizedHtml = DOMPurify.sanitize(data?.aboutMe);
        // setAboutMe(sanitizedHtml);
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      }
    };
    console.log(posts);

    fetchData();
  }, []);

  return (
    <div id="blog" className="mx-auto md:w-11/12 w-full p-5 my-32 min-h-[80vh]">
      <h1 className="mb-20 text-center text-4xl font-semibold ">
        Latest Blog Posts
      </h1>
      <div className="grid gap-x-14 gap-y-12 sm:grid-cols-1 md:grid-cols-2   px-10 ">
        {posts?.map((blog: Blog) => (
          <BlogCard key={blog?._id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
