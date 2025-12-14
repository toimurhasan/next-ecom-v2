import ProductImageGallery from "../../../components/product/ProductImageGallery";
import ProductGrid from "../../../components/product/ProductGrid";
import ProductTabs from "../../../components/product/ProductTabs";
import { Product } from "../../../types";

const sampleProduct: Product & { images: string[] } = {
  id: "1",
  title: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
  price: 850,
  originalPrice: 1290,
  image: "/md-card.png",
  images: ["/md-card.png", "/md-card.png", "/md-card.png", "/md-card.png"],
  description:
    "Made from soft fleece fabric with an ultra-smooth interior for warmth and comfort.",
};

const sampleProducts: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i + 2),
  title: `Tecno Camon 40 Pro - Official ${i + 1}`,
  price: 27999,
  originalPrice: 28560,
  image: "/md-card.png",
}));

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT – IMAGE AREA */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-md p-6">
            <ProductImageGallery images={sampleProduct.images} />
          </div>
        </div>

        {/* RIGHT – PRODUCT DETAILS */}
        <div className="lg:col-span-6 bg-white rounded-md p-8 text-black">
          {/* Title */}
          <h1 className="text-2xl font-semibold leading-snug">
            {sampleProduct.title}
          </h1>

          {/* Rating Row */}
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-300">
            <div className="flex gap-1 text-yellow-400">★★★★★</div>
            <span>(350)</span>
            <span className="text-green-400 font-medium">• 250 Reviews</span>
            <span className="text-green-400 font-medium">• 520 Sold</span>
          </div>

          {/* Meta Info */}
          <div className="mt-5 space-y-1 text-sm text-gray-300">
            <div>
              Brand : <span className="text-white">Favorite</span>
            </div>
            <div>
              Availability :{" "}
              <span className="text-green-400 font-medium">In Stock</span>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          {/* Size */}
          <div>
            <div className="mb-2 text-sm font-medium">
              Available Size{" "}
              <span className="text-green-400 text-xs ml-1">
                • Only 9 Stock Left
              </span>
            </div>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                <button
                  key={size}
                  className={`w-12 h-10 border text-sm font-medium rounded
              ${
                size === "L"
                  ? "border-green-500 text-green-400"
                  : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400"
              }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mt-5">
            <div className="mb-2 text-sm font-medium">
              Available Colors{" "}
              <span className="text-green-400 text-xs ml-1">
                • Only 4 Color Left
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 bg-red-500 border border-white rounded-sm cursor-pointer" />
              <span className="w-7 h-7 bg-green-500 border-2 border-green-400 rounded-sm cursor-pointer" />
              <span className="w-7 h-7 bg-yellow-400 border border-white rounded-sm cursor-pointer" />
              <span className="w-7 h-7 bg-blue-500 border border-white rounded-sm cursor-pointer" />
            </div>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            <div className="text-3xl font-bold text-green-400">
              TK {sampleProduct.price}.00
            </div>
            <div className="text-gray-400 line-through">
              TK {sampleProduct.originalPrice}.00
            </div>
            <div className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded">
              34% OFF
            </div>
          </div>

          {/* Quantity + CTA */}
          <div className="mt-7 flex items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center border border-gray-600 rounded">
              <button className="w-10 h-10 text-xl">-</button>
              <input
                defaultValue={5}
                className="w-12 h-10 bg-transparent text-center outline-none"
              />
              <button className="w-10 h-10 text-xl">+</button>
            </div>

            {/* Add to Cart */}
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-black font-semibold px-6 py-3 rounded">
              🛒 ADD TO CART
            </button>

            {/* Wishlist */}
            <button className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded hover:border-white transition">
              🤍
            </button>
          </div>
        </div>
      </div>

      {/* ==================== other information section ====================== */}
      <div>
        <div className="mt-8">
          <div className="border-t pt-4">
            <ProductTabs description={sampleProduct.description} />
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-3">Similar Products</h3>
            <ProductGrid products={sampleProducts} />
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-3">People Also Purchased</h3>
            <ProductGrid products={sampleProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
