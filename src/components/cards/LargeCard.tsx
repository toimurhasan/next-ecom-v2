import Image from "next/image";

const LargeCard = () => {
  return (
    <div className="h-[386px] bg-[url(/lg-card-bg.png)] bg-cover bg-center relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/50 via-white to-gray-400 flex flex-col justify-around items-center">
        {/* Top Element */}
        <Image
          src="/ele-2.png"
          alt="element-2"
          width={160}
          height={160}
          className="w-auto h-auto"
        />

        {/* Center Phone */}
        <Image
          src="/lg-phone.png"
          alt="large phone"
          width={220}
          height={220}
          className="w-auto h-auto"
        />

        {/* Bottom Element */}
        <Image
          src="/ele-1.png"
          alt="element-1"
          width={160}
          height={160}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default LargeCard;
