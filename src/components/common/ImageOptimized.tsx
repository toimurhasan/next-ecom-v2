import Image from "next/image";

export default function ImageOptimized(props: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={props.src}
      alt={props.alt || ""}
      width={props.width || 300}
      height={props.height || 300}
      className={props.className}
      priority={false}
    />
  );
}
