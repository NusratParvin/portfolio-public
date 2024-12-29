import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import Intro from "./Intro";

export default function LandingPage() {
  return (
    <div
      id="home"
      className="relative flex md:h-screen  w-full md:flex-col flex-row items-center justify-center overflow-hidden rounded-none   bg-black md:shadow-xl  "
    >
      <Intro />

      <div className="bg-black opacity-40">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}
