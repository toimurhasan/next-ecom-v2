import Link from "next/link";

interface Category {
  name: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  { name: "Smart Phone", image: "/categories/smartphone.jpg", href: "/categories/smartphone" },
  { name: "Smart Watch", image: "/categories/smartwatch.jpg", href: "/categories/smartwatch" },
  { name: "Air Buds", image: "/categories/airbuds.jpg", href: "/categories/airbuds" },
  { name: "Honey", image: "/categories/honey.jpg", href: "/categories/honey" },
  { name: "Dry Foods", image: "/categories/dryfoods.jpg", href: "/categories/dryfoods" },
];

const mainCategories: Category[] = [
  { name: "ELECTRONICS", image: "/categories/electronics.jpg", href: "/categories/electronics" },
  { name: "GROCERY", image: "/categories/grocery.jpg", href: "/categories/grocery" },
  { name: "BEAUTY", image: "/categories/beauty.jpg", href: "/categories/beauty" },
  { name: "FASHION", image: "/categories/fashion.jpg", href: "/categories/fashion" },
  { name: "FOOTWEAR", image: "/categories/footwear.jpg", href: "/categories/footwear" },
  { name: "FOODS", image: "/categories/foods.jpg", href: "/categories/foods" },
];

export default function CategoriesSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          OUR ALL CATEGORIES
        </h2>
        
        {/* Small Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mainCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-5xl">🛍️</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

