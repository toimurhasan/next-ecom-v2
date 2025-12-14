import Image from "next/image";

const SmallCard = () => {
  return (
    <div className="h-[225px] bg-linear-to-b from-[#D7D7D7] via-[#DADADA] to-[#F5F5F5] relative flex justify-center items-center">
      <span className="absolute bg-white py-1 px-2 top-2 left-2">
        smartphones
      </span>

      <div className="relative">
        {/* Optimized Next.js Image */}
        <Image
          src="/phone.png"
          alt="phone"
          width={176}
          height={176}
          className="w-44 h-auto"
          priority
        />

        {/* Shadow SVG */}
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="184"
          height="52"
          viewBox="0 0 184 52"
          fill="none"
        >
          <g filter="url(#shadow-filter)">
            <ellipse
              cx="92"
              cy="26"
              rx="72"
              ry="6"
              fill="black"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="shadow-filter"
              x="0"
              y="0"
              width="184"
              height="52"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur stdDeviation="10" result="blur-effect" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SmallCard;
