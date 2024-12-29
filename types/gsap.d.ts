// types/gsap.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ScrollTriggerStatic } from "gsap/ScrollTrigger";

declare module "gsap/ScrollTrigger" {
  interface ScrollTriggerStatic {
    kill(): void;
  }
}
