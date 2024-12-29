declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    smartphone?: {
      smooth?: boolean;
      multiplier?: number;
      breakpoint?: number;
    };
    tablet?: {
      smooth?: boolean;
      multiplier?: number;
      breakpoint?: number;
    };
  }

  type ScrollEventCallback = (event?: Event) => void; // More specific than using Function

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);

    on(event: string, callback: ScrollEventCallback): void;
    scrollTo(
      target: HTMLElement | number | string,
      offset?: number,
      duration?: number,
      easing?: string,
      disableLerp?: boolean,
      callback?: ScrollEventCallback
    ): void;
    update(): void;
    destroy(): void;
    scroll: {
      instance: {
        scroll: {
          y: number;
        };
      };
    };
  }

  export default LocomotiveScroll;
}
