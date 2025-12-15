import AllCategories from "@/components/home/AllCategories/AllCategories";
import BlogsSection from "@/components/home/BlogsSection/BlogsSection";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import ProductShowcase from "@/components/home/ProductShowcase/ProductShowcase";
import ProductsSection from "@/components/home/ProductsSection/ProductsSection";
import PromotionalBanners from "@/components/home/PromotionalBanners/PromotionalBanners";
import TestimonialsSection from "@/components/home/TestimonialsSection/TestimonialsSection";
import { Product } from "@/types";

// Sample product data - in a real app, this would come from an API
const topSellingProducts: Product[] = [
  {
    id: "1",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "2",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "3",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "4",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "5",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
];

const futureProducts: Product[] = [
  {
    id: "7",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
];

// Add originalPrice to products for discount display
const productsWithDiscount = (products: Product[]) => {
  return products.map((product) => ({
    ...product,
    originalPrice: 24999.0,
  }));
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AllCategories />
      <ProductsSection
        title="OUR TOP SELLING PRODUCTS"
        products={productsWithDiscount(topSellingProducts)}
      />
      <ProductsSection
        title="OUR FUTURE PRODUCTS"
        products={productsWithDiscount(futureProducts)}
      />
      <BlogsSection />
      <TestimonialsSection />
      <ProductShowcase />
      <PromotionalBanners />
    </>
  );
}
