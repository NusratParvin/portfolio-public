import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import ShineBorder from "@/components/ui/shine-border";
import { Minus, Square, X } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
import DOMPurify from "dompurify";
import { Education, PreviousWork, Tech } from "../../../../../types";

// const techStack = [
//   // Add more technologies as needed
//   {
//     name: "JavaScript",
//     logo: "/assets/1/png",
//   },
//   {
//     name: "React",
//     logo: "/assets/1/png",
//   },
//   {
//     name: "Node.js",
//     logo: "/assets/1/png",
//   },
//   {
//     name: "JavaScript",
//     logo: "/assets/1/png",
//   },
//   {
//     name: "React",
//     logo: "/public/assets/1/png",
//   },
//   {
//     name: "Node.js",
//     logo: "/assets/1/png",
//   },
// ];

// const softSkills = [
//   "Persistant",
//   "Collaborative",
//   "Communicative",
//   "Organized",
//   "Adaptable",
// ];

export default function About() {
  // States for the data
  const [aboutMe, setAboutMe] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/aboutMe");
        // const data = await response.json();

        const data = await fetch("/api/aboutMe", {
          cache: "force-cache",
        }).then((res) => res.json());

        // console.log(data);
        const sanitizedHtml = DOMPurify.sanitize(data?.aboutMe);
        setAboutMe(sanitizedHtml);
        setTechStack(data?.techs);
        setSoftSkills(data?.strengths);
        setEducation(data?.education);
        setWork(data?.work?.previous);
      } catch (error) {
        console.error("Error fetching AboutMe data:", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
      // opacity: 0,
      x: -50,
      duration: 1,
    });
  }, []);

  return (
    <div
      id="about"
      className="bg-gradient-to-br from-base/30 to-base/10 text-white p-0 w-full min-h-screen rounded-none shadow-xl relative "
    >
      <div className="flex flex-col items-center justify-center text-center md:w-11/12 w-full mx-auto pb-32 ">
        <h1 className="md:text-6xl text-4xl font-semibold mb-3 leading-tight pt-12">
          Lets get{" "}
          <span className="text-[#5A4FCF] md:text-6xl text-4xl  font-bold">
            {" "}
            introduced !
          </span>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-20 md:gap-6 gap-2 justify-start items-center   text-left  md:w-11/12 w-full mx-auto md:p-0 px-4">
          <h1 className="md:text-6xl text-4xl font-medium py-4  col-span-1  ">
            I am,
          </h1>
          <div className=" w-full md:col-span-2 md:text-lg text-2xl text-left py-4">
            <div
              className="about-me-content"
              dangerouslySetInnerHTML={{ __html: aboutMe }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 items-start  justify-start   md:w-11/12 w-full mx-auto my-10 gap-0 md:p-0 px-4">
          <h1 className="text-4xl font-medium pt-4 text-left col-span-1  ">
            Techs I use,
          </h1>
          <div className=" w-full md:col-span-2 text-lg text-left  pb-4  ">
            <div className="flex justify-start flex-wrap items-start gap-4 p-4 ps-0 ">
              {techStack?.map((tech: Tech, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center py-2 px-4 rounded-full shadow-2xl bg-black/20"
                >
                  <Image
                    src={tech?.icon}
                    alt={tech?.name}
                    width={36}
                    height={36}
                    // unoptimized={true}
                  />
                  <span className="ml-2 text-lg font-semibold text-gray-100">
                    {tech?.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-8  items-center md:items-start text-[15px] md:w-11/12 w-full mx-auto">
          <ShineBorder
            className="relative flex h-48 md:w-80 w-11/12 flex-col items-center justify-center overflow-hidden  bg-transparent md:shadow-xl p-0 mt-8 "
            // color={["#A07CFE", "#000000", "#7c7bff"]}
          >
            <aside className="bg-black/30 text-white py-2 px-4 rounded-none h-full w-full text-left  font-mono">
              <div className="flex justify-between items-center border-b border-gray-700">
                <div className="flex space-x-2 text-red-500">my-education</div>
                <div
                  className="flex items-center justify-center
             text-gray-600 gap-2"
                >
                  <Minus className="h-3 w-4" />
                  <Square className="h-3 w-4" />
                  <X className="h-3 w-4" />
                </div>
              </div>
              <div className="mt-4 leading-tight">
                {education?.map((edu: Education, index) => (
                  <p key={index} className="text-white/80">
                    I completed{" "}
                    <span className="text-green-500">{edu.degree}</span> in 2011
                    from <span className="text-blue-500">{edu.institute}</span>
                  </p>
                ))}
              </div>
            </aside>
          </ShineBorder>
          <ShineBorder
            className="relative flex h-auto md:w-[450px] w-11/12 flex-col items-center justify-center overflow-hidden  bg-transparent md:shadow-xl p-0 "
            // color={["#A07CFE", "#000000", "#7c7bff"]}
          >
            <aside className="bg-black/30 text-white  before:after:py-2 px-4 rounded-none h-full w-full text-left pb-12 font-mono">
              <div className="flex justify-between items-center border-b border-gray-700">
                <div className="flex space-x-2 text-red-500">work-status</div>
                <div
                  className="flex items-center justify-center
             text-gray-600 gap-2"
                >
                  <Minus className="h-3 w-4" />
                  <Square className="h-3 w-4" />
                  <X className="h-3 w-4" />
                </div>
              </div>
              <div className="mt-4 leading-tight">
                <p className="text-white/80">
                  Currently based in UAE and available to work in remote
                  arrangement worldwide.
                </p>

                <h2 className="text-yellow-600 mt-4 mb-2">
                  Previous Experience:
                </h2>
                {work?.map((prev: PreviousWork, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <p className="font-semibold">
                      {prev?.designation} at {prev?.company}, {prev?.location}{" "}
                      (2 years)
                    </p>
                    <ul className="list-disc pl-5">
                      <li
                        dangerouslySetInnerHTML={{
                          __html: prev?.responsibilities || "",
                        }}
                      />
                    </ul>
                  </div>
                ))}
              </div>
            </aside>
          </ShineBorder>
          <ShineBorder
            className="relative flex h-auto md:w-[200px] w-11/12 flex-col items-center justify-center overflow-hidden  bg-transparent md:shadow-xl p-0 "
            // color={["#A07CFE", "#000000", "#7c7bff"]}
          >
            <aside className="bg-black/30 text-white   py-2 px-4 rounded-none h-full w-full   font-mono">
              <div className="flex justify-between items-center border-b border-gray-700">
                <div className="flex space-x-2 text-red-500">my-strengths</div>
                <div
                  className="flex items-center justify-center
             text-gray-600 gap-2"
                >
                  <Minus className="h-3 w-4" />
                  <Square className="h-3 w-4" />
                  <X className="h-3 w-4" />
                </div>
              </div>
              <div className="mt-4 leading-tight">
                <div className="flex flex-col gap-1">
                  <ol className="list-decimal pl-6 text-mono">
                    {softSkills?.map((skill, index) => (
                      <li
                        key={index}
                        className="text-white text-[15px] text-left mb-2"
                      >
                        {skill}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          </ShineBorder>
        </div>
      </div>
    </div>
  );
}
