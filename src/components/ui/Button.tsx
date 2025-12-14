import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-black cursor-pointer text-white px-4 py-2  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600 ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
}
