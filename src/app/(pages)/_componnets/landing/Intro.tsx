import VideoPlayer from "./Cloud";
import GradualSpacing from "@/components/ui/gradual-spacing";
import ResumeOptions from "./ResumeOptions";
import gsap from "gsap";

const Intro = () => {
  // const contactRef = useRef(null);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power2.out",
    });
  };
  return (
    <div className="z-10 whitespace-pre-wrap grid md:grid-cols-3 grid-cols-1 font-medium  text-white   w-full ">
      <section className="md:col-span-2 w-full md:p-0 px-4  ">
        <div className="text-start   flex flex-col justify-center items-start md:ps-8 p-0 md:h-full h-auto  ">
          <p className="text-xl md:pb-0 pb-8">Hi, I am</p>

          <GradualSpacing
            className="text-left md:text-center md:text-8xl text-4xl font-bold mb-8   "
            text="Nusrat Parvin"
          />
          {/* </h1> */}
          <p className="text-2xl text-gray-300 mb-12">
            I develop full-stack web apps.
          </p>
          <div className="space-x-4 flex gap-2 w-full  md:w-3/4">
            <ResumeOptions />

            <button
              onClick={() => scrollToSection("contact")}
              className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-0 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out border border-base/30  "
            >
              <span className="absolute right-0 -mt-20 h-32 w-8 translate-x-12 rotate-12 bg-base opacity-30 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <div className="flex items-start text-gray-300 text-xl font-bold">
                Contact
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-start  ">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Intro;
