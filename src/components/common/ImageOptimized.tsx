import Image from "next/image";

export default function ImageOptimized(props: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`w-full ${props.className || ""}`}>
      <Image
        src={props.src}
        alt={props.alt || ""}
        width={props.width || 300}
        height={props.height || 300}
        className="object-cover w-full h-auto"
        priority={props.priority || false}
      />
    </div>
  );
}
