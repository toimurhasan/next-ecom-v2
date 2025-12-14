"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductImageGallery({
  images = ["/md-card.png"],
}: {
  images?: string[];
}) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="bg-white border p-4 rounded-md flex items-center justify-center">
        <div className="relative w-[360px] h-[360px] flex items-center justify-center">
          <Image
            src={images[index]}
            alt={`Product image ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="(min-width: 1024px) 360px, 50vw"
          />
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 rounded-md overflow-hidden border ${
              i === index ? "ring-2 ring-green-500" : ""
            }`}
          >
            <Image
              src={src}
              alt={`thumb-${i}`}
              width={64}
              height={64}
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
