import Image from "next/image";

interface LargeCardProps {
  imageSrc: string;
  alt?: string;
}

const LargeCard: React.FC<LargeCardProps> = ({ imageSrc, alt = "Large card image" }) => {
  return (
    <div className="relative h-[386px] w-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default LargeCard;
