import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
      {children}
    </div>
  );
}
