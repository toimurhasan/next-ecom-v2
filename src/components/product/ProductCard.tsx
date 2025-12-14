import ImageOptimized from "../common/ImageOptimized";
import { Product } from "../../types";
import Button from "../ui/Button";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const originalPrice = product.originalPrice || product.price * 1.2;
  const hasDiscount = originalPrice > product.price;

  return (
    <article className="p-2 sm:p-3">
      <div className="bg-white dark:bg-gray-800 rounded shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
        <div className="w-full aspect-square overflow-hidden">
          <ImageOptimized
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <h3 className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="mt-auto">
            {hasDiscount && (
              <div className="text-gray-500 text-sm line-through mb-1">
                ৳ {originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            )}
            <div className="text-green-600 font-bold text-lg">
              ৳ {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <Link href={`/products/${product.id}`} className="block mt-3">
              <Button className="w-full text-sm py-2">BUY NOW</Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
