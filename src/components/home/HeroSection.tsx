import ImageOptimized from "../common/ImageOptimized";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 dark:text-green-300 mb-4">
              প্রকৃতির সাথে সুস্থ থাকুন
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Stay healthy with nature
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our wide range of natural and organic products for a healthier lifestyle.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="aspect-square bg-green-100 dark:bg-green-900 rounded mb-2"></div>
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">Honey</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="aspect-square bg-green-100 dark:bg-green-900 rounded mb-2"></div>
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">Oil</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="aspect-square bg-green-100 dark:bg-green-900 rounded mb-2"></div>
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">Skincare</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="aspect-square bg-green-100 dark:bg-green-900 rounded mb-2"></div>
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

