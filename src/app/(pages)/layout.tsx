import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="text-3xl">{children}</div>;
}
