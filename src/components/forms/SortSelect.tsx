"use client";
import { useState } from "react";

const options = [
  "Default Sorting",
  "Price : Low to High",
  "Price : High to Low",
  "Product : Old First",
  "Product : New First",
  "Popularity : Most Popular First",
  "Popularity : Less Popular First",
];

export default function SortSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative w-64 text-sm">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full bg-white border border-gray-400
          px-4 py-2.5 text-left text-black
           focus:outline-none
          hover:border-gray-500
          flex justify-between items-center
        "
      >
        {selected}
        <span>▾</span>
      </button>

      {/* Options */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-400  overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="
                px-4 py-2.5 cursor-pointer
                text-black
                hover:bg-green-500 hover:text-black
                transition
              "
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
