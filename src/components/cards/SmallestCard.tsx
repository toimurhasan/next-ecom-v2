import Image from "next/image";

const SmallestCard = () => {
  return (
    <div className="bg-[url(/sm-card-bg.png)] h-44 bg-cover bg-center bg-gray-400 bg-blend-overlay relative">
      <h3 className="uppercase text-center italic font-bold py-1 text-[#6EB1FE]">
        tecno camon 40 pro
      </h3>

      {/* Optimized foreground image */}
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
        <Image
          src="/phone-sm.png"
          alt="phone-sm"
          width={96} // w-24
          height={96}
          className="w-24 h-auto"
        />
      </div>

      {/* Price Badge */}
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm">
        ৳27999{" "}
        <span className="text-gray-400">
          ৳<span className="line-through">29999</span>
        </span>
      </span>
    </div>
  );
};

export default SmallestCard;
