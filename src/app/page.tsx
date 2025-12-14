import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import BlogsSection from "@/components/home/BlogsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import PromotionalBanners from "@/components/home/PromotionalBanners";
import { Product } from "@/types";
import AllCategories from "@/components/home/AllCategories";

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
  {
    id: "6",
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
  {
    id: "8",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "9",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "10",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "11",
    title: "Tecno Spark 20 Pro - Official",
    price: 20999.0,
    image: "/products/spark20pro.jpg",
    description: "Latest smartphone with advanced features",
  },
  {
    id: "12",
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
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}
