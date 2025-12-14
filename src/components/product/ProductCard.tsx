import ImageOptimized from "../common/ImageOptimized";
import { Product } from "../../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="p-3">
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <ImageOptimized
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
        <div className="p-3">
          <h3 className="font-medium">{product.title}</h3>
          <div className="text-green-600 font-bold">${product.price}</div>
        </div>
      </div>
    </article>
  );
}
