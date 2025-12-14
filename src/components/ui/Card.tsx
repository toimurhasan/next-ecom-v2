import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden">{children}</div>
  );
}
