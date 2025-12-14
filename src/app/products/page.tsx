import ProductGrid from "../../components/product/ProductGrid";
import ProductFilterSidebar from "../../components/filters/ProductFilterSidebar";
import { Product } from "../../types";
import SearchBarVarient from "@/components/forms/SearchBarVarient";
import SortSelect from "@/components/forms/SortSelect";

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
          <div className="flex items-center gap-4  px-4 py-3">
            {/* SEARCH */}
            <div className="flex-1">
              <div className="relative">
                <SearchBarVarient />
              </div>

              {/* ACTIVE FILTER TAGS */}
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Price : 0 to 2500",
                  "New Arrival",
                  "Television",
                  "Smart Television",
                  "Beauty",
                  "Tea & Coffee",
                  "Grocery",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded"
                  >
                    {tag}
                    <button className="text-white text-sm leading-none hover:opacity-70">
                      ×
                    </button>
                  </div>
                ))}

                {/* CLEAR ALL */}
                <button className="text-green-400 text-xs font-medium ml-2 hover:underline">
                  Clear All
                </button>
              </div>
            </div>

            {/* SORT DROPDOWN */}
            <div className="shrink-0 self-start">
              <SortSelect />
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
