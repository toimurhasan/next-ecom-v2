import Image from "next/image";

interface SmallCardProps {
  imageSrc: string;
  alt?: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
  imageSrc,
  alt = "Small card image",
}) => {
  return (
    <div className="relative h-[225px] w-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default SmallCard;
