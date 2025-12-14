import ProductCard from "./ProductCard";
import { Product } from "../../types";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
