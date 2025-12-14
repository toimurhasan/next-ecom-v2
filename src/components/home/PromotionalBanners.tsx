import Link from "next/link";

interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  bgColor?: string;
}

const banners: Banner[] = [
  {
    id: "1",
    title: "খাঁটি দুধের ঘি",
    subtitle: "Ghee",
    image: "/banners/ghee.jpg",
    href: "/products/ghee",
    bgColor: "from-yellow-50 to-yellow-100",
  },
  {
    id: "2",
    title: "দ্রুততম ডেলিভারি",
    subtitle: "FAST",
    image: "/banners/delivery.jpg",
    href: "/delivery",
    bgColor: "from-green-50 to-green-100",
  },
  {
    id: "3",
    title: "মসলা ও ভেষজ",
    subtitle: "Spices & Herbs",
    image: "/banners/spices.jpg",
    href: "/categories/spices",
    bgColor: "from-orange-50 to-orange-100",
  },
  {
    id: "4",
    title: "রান্নাঘরের সরঞ্জাম",
    subtitle: "Kitchen Appliances",
    image: "/banners/kitchen.jpg",
    href: "/categories/kitchen",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    id: "5",
    title: "হোম ইলেকট্রনিক্স",
    subtitle: "Home Electronics",
    image: "/banners/electronics.jpg",
    href: "/categories/electronics",
    bgColor: "from-gray-50 to-gray-100",
  },
  {
    id: "6",
    title: "ফুটওয়্যার",
    subtitle: "Footwear",
    image: "/banners/footwear.jpg",
    href: "/categories/footwear",
    bgColor: "from-amber-50 to-amber-100",
  },
];

export default function PromotionalBanners() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {banners.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href}
              className={`bg-gradient-to-br ${banner.bgColor || "from-gray-50 to-gray-100"} dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group`}
            >
              <div className="aspect-square bg-white dark:bg-gray-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-5xl">🛍️</span>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">
                  {banner.title}
                </h3>
                {banner.subtitle && (
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {banner.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

