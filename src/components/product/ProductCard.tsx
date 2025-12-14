import ImageOptimized from "../common/ImageOptimized";
import { Product } from "../../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="p-2 sm:p-3">
      <div className="bg-white dark:bg-gray-800 rounded shadow-sm overflow-hidden h-full flex flex-col">
        <div className="w-full">
          <ImageOptimized
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <h3 className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100">
            {product.title}
          </h3>
          <div className="text-green-600 font-bold mt-2">${product.price}</div>
        </div>
      </div>
    </article>
  );
}
