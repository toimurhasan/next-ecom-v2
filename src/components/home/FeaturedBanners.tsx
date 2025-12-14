import Link from "next/link";
import Button from "../ui/Button";

export default function FeaturedBanners() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SPARK 40 Banner */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2">SPARK 40</h3>
            <p className="text-blue-100 mb-4">16GB+256GB</p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 aspect-square max-w-[200px] mx-auto flex items-center justify-center">
              <span className="text-6xl">📱</span>
            </div>
            <Link href="/products/spark-40">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                View Details
              </Button>
            </Link>
          </div>

          {/* 15T Banner */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-4">15T</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-white dark:bg-gray-700 rounded p-2 aspect-square flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded p-2 aspect-square flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
            </div>
            <Link href="/products/15t">
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                View Details
              </Button>
            </Link>
          </div>

          {/* Tecno Spark Models */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-lg mb-2">Tecno Spark 20 Pro</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3 aspect-square max-w-[150px] mx-auto flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="text-center">
                <p className="text-gray-500 line-through text-sm">৳ 24,999.00</p>
                <p className="text-green-600 font-bold text-lg">৳ 20,999.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-lg mb-2">Tecno Spark 20</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3 aspect-square max-w-[150px] mx-auto flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="text-center">
                <p className="text-gray-500 line-through text-sm">৳ 24,999.00</p>
                <p className="text-green-600 font-bold text-lg">৳ 20,999.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-lg mb-2">Tecno Spark 20C</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 mb-3 aspect-square max-w-[150px] mx-auto flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="text-center">
                <p className="text-gray-500 line-through text-sm">৳ 24,999.00</p>
                <p className="text-green-600 font-bold text-lg">৳ 20,999.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

