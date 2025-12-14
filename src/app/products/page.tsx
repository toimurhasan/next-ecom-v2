import ProductGrid from "../../components/product/ProductGrid";
import ProductFilterSidebar from "../../components/filters/ProductFilterSidebar";
import SearchBar from "../../components/forms/SearchBar";
import { Product } from "../../types";

const sampleProducts: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: String(i + 1),
  title: `Sample Product ${i + 1}`,
  price: 1299 + (i % 5) * 250,
  originalPrice: 1599 + (i % 5) * 300,
  image: "/md-card.png",
}));

export default function ProductsPage() {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-6">
      <div className="flex gap-6">
        <aside className="hidden lg:block w-72 sticky top-38 h-[calc(100vh-6rem)] overflow-auto">
          <ProductFilterSidebar />
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <SearchBar />
            </div>
            <div className="ml-4">
              <select className="border px-3 py-2 rounded-md">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <ProductGrid products={sampleProducts} />
          </div>
        </main>
      </div>
    </div>
  );
}
