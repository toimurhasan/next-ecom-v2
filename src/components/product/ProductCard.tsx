import { Product } from "../../types";

import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const originalPrice = product.originalPrice || product.price * 1.2;
  const hasDiscount = originalPrice > product.price;

  return (
    <article className="p-2 sm:p-3">
      <div>
        {/* background image */}
        <div>
          <span className="bg-primary-500 px-2 py-1 absolute top-1 left-1 text-xs text-white">
            TK 300 OFF
          </span>

          <div>
            <Image
              src="/Frame88.png"
              alt="Medium card"
              width={251}
              height={211}
            />
          </div>
        </div>

        <div className="bg-[#F3F4F6] text-center pt-4.5 pb-3">
          <h4>Tecno Camon 40 Pro - Official</h4>
          <div className="bg-white px-3 py-1 rounded-full w-fit mx-auto">
            <span className="line-through">TK 28,560.00</span>{" "}
            <span className="text-primary-500 font-semibolds">
              TK 27,999.00
            </span>
          </div>
        </div>

        <div className="bg-black hover:bg-primary-500 py-2 text-center text-white uppercase font-medium cursor-pointer">
          Buy Now
        </div>
      </div>
    </article>
  );
}
