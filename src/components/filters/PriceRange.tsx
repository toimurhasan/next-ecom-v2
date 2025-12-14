"use client";
import { useMemo, useState } from "react";

export default function PriceRange({
  min = 0,
  max = 25000,
  step = 100,
}: {
  min?: number;
  max?: number;
  step?: number;
}) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minPercent = useMemo(
    () => ((minVal - min) / (max - min)) * 100,
    [minVal, min, max]
  );
  const maxPercent = useMemo(
    () => ((maxVal - min) / (max - min)) * 100,
    [maxVal, min, max]
  );

  const trackStyle = {
    background: `linear-gradient(90deg, #E6E6E6 ${minPercent}%, #10B981 ${minPercent}%, #10B981 ${maxPercent}%, #E6E6E6 ${maxPercent}%)`,
  } as React.CSSProperties;

  return (
    <div>
      <div className="relative px-2">
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full h-2 rounded-full bg-gray-200" />
        </div>

        <div className="relative" style={trackStyle}>
          <input
            aria-label="Minimum price"
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={(e) => {
              const val = Math.min(Number(e.target.value), maxVal - step);
              setMinVal(val);
            }}
            className="range-input lower absolute left-0 right-0 w-full h-2 appearance-none bg-transparent pointer-events-none"
          />

          <input
            aria-label="Maximum price"
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={(e) => {
              const val = Math.max(Number(e.target.value), minVal + step);
              setMaxVal(val);
            }}
            className="range-input upper absolute left-0 right-0 w-full h-2 appearance-none bg-transparent pointer-events-none"
          />
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <div className="px-2 mt-4 py-1 rounded-md border border-gray-400 w-24 text-center bg-white">
          {minVal}
        </div>
        <div className="px-2 mt-4 py-1 rounded-md border border-gray-400 w-24 text-center bg-white">
          {maxVal}
        </div>
      </div>

      <style jsx>{`
        input[type="range"].range-input {
          pointer-events: auto;
        }
        input[type="range"].range-input::-webkit-slider-runnable-track {
          height: 15px;
          -webkit-appearance: none;
        }
        input[type="range"].range-input::-moz-range-track {
          height: 8px;
        }

        input[type="range"].range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background: #ffffff;
          border: 4px solid #10b981;
          margin-top: -6px;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2);
          color: #000;
        }

        input[type="range"].range-input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background: #ffffff;
          border: 4px solid #10b981;
        }

        /* Ensure the upper thumb is above the lower */
        input.range-input.lower {
          z-index: 1;
        }
        input.range-input.upper {
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
