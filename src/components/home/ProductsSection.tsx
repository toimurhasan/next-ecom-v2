import SectionTitle from "../common/SectionTitle";
import ProductGrid from "../product/ProductGrid";
import { Product } from "@/types";

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

export default function ProductsSection({
  title,
  products,
}: ProductsSectionProps) {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title={title} />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
