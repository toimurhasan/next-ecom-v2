import ProductGrid from "../product/ProductGrid";
import { Product } from "@/types";

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

export default function ProductsSection({ title, products }: ProductsSectionProps) {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

