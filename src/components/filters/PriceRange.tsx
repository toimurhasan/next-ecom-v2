"use client";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function PriceRange({
  min = 0,
  max = 25000,
  step = 100,
}: {
  min?: number;
  max?: number;
  step?: number;
}) {
  const [value, setValue] = useState<[number, number]>([min, max]);

  return (
    <div>
      <div className="px-2">
        <RangeSlider
          min={min}
          max={max}
          step={step}
          value={value}
          onInput={(v: [number, number]) => setValue(v)}
          id="my-range-slider"
        />
      </div>

      <div className="mt-3 flex justify-between items-center">
        <div className="px-2 mt-4 py-1 rounded-md border border-gray-400 w-24 text-center bg-white">
          {value[0]}
        </div>
        <div className="px-2 mt-4 py-1 rounded-md border border-gray-400 w-24 text-center bg-white">
          {value[1]}
        </div>
      </div>
    </div>
  );
}
