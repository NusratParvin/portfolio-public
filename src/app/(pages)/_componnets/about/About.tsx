import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Image from "next/image";
import ShineBorder from "@/components/ui/shine-border";
import { Minus, Square, X } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
import DOMPurify from "dompurify";
import { Education, PreviousWork, Tech } from "../../../../../types";
import Image from "next/image";
import VideoPlayer from "../landing/Cloud";

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
        const data = await fetch("/api/aboutMe", {
          // cache: "force-cache",
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
      <div className="flex flex-col items-center justify-center text-center lg:w-10/12 md:w-[95%] w-full mx-auto  pb-6   ">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold mb-3 leading-tight pt-12">
          Lets get{" "}
          <span className="text-[#5A4FCF] lg:text-6xl md:text-4xl text-3xl font-bold">
            {" "}
            introduced !
          </span>
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-20 mt-4 lg:gap-6 gap-1 justify-start items-center  text-left  md:w-[95%] w-full mx-auto md:p-0 px-4">
          <h1 className="lg:text-5xl md:text-2xl text-lg text-[1rem] font-medium md:py-4 py-1 col-span-1  ">
            I am,
          </h1>
          <div className=" w-full md:col-span-3 lg:text-lg leading-normal md:text-[1rem] text-[0.9rem] text-left py-1">
            <div
              className="about-me-content"
              dangerouslySetInnerHTML={{ __html: aboutMe }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  items-start justify-center text-[0.9rem] w-full mx-auto lg:mt-8 md:mt-4 mt-2  xl:gap-4 gap-2 ">
          {/* Education Section */}
          <ShineBorder className="flex flex-col items-center justify-center lg:h-48 h-32 w-11/12 md:w-[1/6] xl:w-96 overflow-hidden bg-transparent md:shadow-xl p-0 mx-auto">
            <aside className="bg-black/30 text-white py-2 px-4 rounded-none h-full w-full text-left font-mono">
              <div className="flex justify-between items-center border-b border-gray-700">
                <div className="flex space-x-2 text-red-500">my-education</div>
                <div className="flex items-center justify-center text-gray-600 gap-2">
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

          {/* Work Status Section */}
          <ShineBorder className="flex flex-col items-center justify-center h-auto w-11/12 md:w-[2/6] xl:w-[520px] overflow-hidden bg-transparent md:shadow-xl p-0 mx-auto">
            <aside className="bg-black/30 text-white py-2 px-4 rounded-none h-full w-full text-left pb-12 font-mono">
              <div className="flex justify-between items-center border-b border-gray-700">
                <div className="flex space-x-2 text-red-500">work-status</div>
                <div className="flex items-center justify-center text-gray-600 gap-2">
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

          {/* Strengths Section */}
          <ShineBorder className="flex flex-col items-center justify-center h-auto w-11/12 md:w-[1/6] lg:w-[200px] overflow-hidden bg-transparent md:shadow-xl p-0 mx-auto">
            <aside className="bg-black/30 text-white py-2 px-4 rounded-none h-full w-full font-mono">
              <div className="flex justify-between items-center border-b border-gray-700">
                <div className="flex space-x-2 text-red-500">my-strengths</div>
                <div className="flex items-center justify-center text-gray-600 gap-2">
                  <Minus className="h-3 w-4" />
                  <Square className="h-3 w-4" />
                  <X className="h-3 w-4" />
                </div>
              </div>
              <div className="mt-4 leading-tight">
                <ol className="list-decimal pl-6 text-mono">
                  {softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="text-white text-[15px] text-left mb-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </ShineBorder>
        </div>

        {/* //expertise */}
        <div className="md:pt-20 pt-10">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-3 leading-tight">
            <span className="text-[#5A4FCF]  font-bold">Visualizing</span>
            <span> My Skills</span>
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 items-start justify-start md:my-6 xl:my-10 my-0">
            <div className="col-span-3 lg:col-span-2">
              <div className="flex flex-col items-start  justify-start lg:w-11/12 md:w-[95%] mx-auto  gap-0 md:p-0 px-4">
                <h1 className="md:text-xl text-lg xl:text-2xl font-medium md:py-4 py-2 text-left col-span-1 border-b border-white/50 w-full ">
                  Technologies I use,
                </h1>
                <div className=" w-full md:col-span-3 text-lg text-left  py-4 ">
                  <div className="flex justify-start flex-wrap items-start gap-2 px-4 py-1 ps-0 ">
                    {techStack?.map((tech: Tech, index) => (
                      // <div
                      //   key={index}
                      //   className="flex flex-row items-center py-2 px-6 rounded-full shadow-2xl bg-black/20"
                      // >
                      //   <Image
                      //     src={tech?.icon}
                      //     alt={tech?.name}
                      //     width={20}
                      //     height={20}
                      //     // unoptimized={true}
                      //   />
                      //   <span className="ml-2 lg:ml-4 text-[1rem] lg:text-2xl font-medium  text-green-500">
                      //     {tech?.name}
                      //   </span>
                      // </div>
                      <div
                        key={index}
                        className="flex flex-row items-center py-2 px-6 rounded-full shadow-2xl bg-black/20"
                      >
                        <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-10 xl:h-10">
                          {" "}
                          {/* Adjust sizes as needed */}
                          <Image
                            src={tech?.icon}
                            alt={tech?.name}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <span className="ml-2 xl:ml-4 text-sm md:text-lg xl:text-xl font-medium text-green-500">
                          {tech?.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 lg:col-span-1 h-full">
              <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-[95%] mx-auto  gap-0 md:p-0 px-4 ">
                <h1 className="md:text-xl text-lg xl:text-2xl font-medium md:py-4 py-2 text-center col-span-1 w-full ">
                  Why would you hire me?
                </h1>
                <VideoPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
