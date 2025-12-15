import Image from "next/image";

interface SmallestCardProps {
  imageSrc: string;
  alt?: string;
}

const SmallestCard: React.FC<SmallestCardProps> = ({
  imageSrc,
  alt = "Smallest card image",
}) => {
  return (
    <div className="relative h-44 w-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default SmallestCard;
