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
    <section className=" bg-white dark:bg-gray-900">
      <div className="container-custom mx-auto px-4">
        <SectionTitle title={title} />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
