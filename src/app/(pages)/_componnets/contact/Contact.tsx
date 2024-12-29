import { useEffect } from "react";
import gsap from "gsap";
import { Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";
import Globe from "./Globe";

const Contact = () => {
  useEffect(() => {
    // Animate form elements on mount
    gsap.from(".animate-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col justify-between bg-black text-white"
    >
      {/* Globe Video Background */}
      <Globe />

      {/* Contact Section */}
      <div className="relative z-10 flex flex-col-reverse gap-16 md:gap-0 md:flex-row justify-evenly items-center w-full p-6 bg-black bg-opacity-30 backdrop-blur-sm   shadow-lg md:w-10/12 mx-auto">
        {/* Left Section: Contact Form */}
        <div className="w-full md:w-1/2 ">
          <ContactForm />
        </div>

        {/* Right Section: Write-up and Social Links */}
        <div className="w-full md:w-1/2 text-center sm:text-left text-white pl-4 sm:pl-12">
          <p className="text-lg mb-3">
            Have a project in mind or just want to chat?
          </p>
          <h2 className="text-4xl mb-16">
            Let’s <span className="text-[#5A4FCF]">connect!</span>
          </h2>

          {/* Social Media Links */}
          <div className="space-x-4 flex justify-center sm:justify-start items-center">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/nusrat-parvin"
              className="text-white/60"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com/NusratParvin" className="text-white/60">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
