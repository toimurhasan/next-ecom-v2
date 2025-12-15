import LargeCard from "@/components/cards/LargeCard";
import SmallCard from "@/components/cards/SmallCard";
import SmallestCard from "@/components/cards/SmallestCard";
import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

export interface AllCategoriesProps {
  title?: string;
  smallCategoryItems?: Array<{ imageSrc: string; [key: string]: any }>;
  largeCategoryItems?: Array<{ imageSrc: string; [key: string]: any }>;
  smallestCategoryItems?: Array<Record<string, any>>;
  className?: string;
}

const AllCategories: React.FC<AllCategoriesProps> = ({
  title = "Our All Categories",
  smallCategoryItems = [
    { imageSrc: "/Frame30.png" },
    { imageSrc: "/www.png" },
    { imageSrc: "/Frame 43.png" },
    { imageSrc: "/Frame 44.png" },
    { imageSrc: "/Frame 45.png" },
    { imageSrc: "/Frame30.png" },
    { imageSrc: "/www.png" },
    { imageSrc: "/Frame 43.png" },
    { imageSrc: "/Frame 44.png" },
    { imageSrc: "/Frame 45.png" },
  ],
  largeCategoryItems = [
    { imageSrc: "/food.png" },
    { imageSrc: "/Frame55.png" },
    { imageSrc: "/bbb.png" },
  ],
  smallestCategoryItems = [
    { imageSrc: "/small.png" },
    { imageSrc: "/small2.png" },
    { imageSrc: "/small3.png" },
    { imageSrc: "/small4.png" },
    { imageSrc: "/small5.png" },
    { imageSrc: "/small6.png" },
    { imageSrc: "/small7.png" },
    { imageSrc: "/small8.png" },
  ],
  className = "",
}) => {
  return (
    <section className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="container-custom mx-auto px-4">
        <SectionTitle title={title} />

        <div className="lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-5 px-2">
          {smallCategoryItems.map((item, index) => (
            <SmallCard
              key={index}
              imageSrc={item.imageSrc}
              alt={item.alt || "Category image"}
            />
          ))}
        </div>

        <div className="lg:py-5 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 px-2">
          {largeCategoryItems.map((item, index) => (
            <LargeCard key={index} imageSrc={item.imageSrc} />
          ))}
        </div>

        <div className="lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-6 gap-2 lg:gap-5 px-2">
          <div className="col-span-2 row-span-2">
            <LargeCard imageSrc="/fff.png" />
          </div>
          {smallestCategoryItems.map((item, index) => (
            <SmallestCard
              key={index}
              imageSrc={item.imageSrc || "/Frame69.png"}
              alt={item.alt || "Smallest category image"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
