import { Github, Linkedin } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex space-x-4 mt-10">
      <a
        href="https://www.linkedin.com/in/nusrat-parvin"
        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
      >
        <Linkedin className="w-6 h-6" />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/NusratParvin"
        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
      >
        <Github className="w-6 h-6" />
      </a>

      <a
        href="#"
        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
      >
        <span className="text-white">&#9635;</span>
      </a>
      <a
        href="#"
        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
      >
        <span className="text-white">&#9737;</span>
      </a>
      <a
        href="#"
        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
      >
        <span className="text-white">&#9733;</span>
      </a>
      <a
        href="#"
        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
      >
        <span className="text-white">&#9993;</span>
      </a>
    </div>
  );
};

export default Socials;
