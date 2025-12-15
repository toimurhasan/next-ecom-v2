import LargeCard from "@/components/cards/LargeCard";
import SmallCard from "@/components/cards/SmallCard";
import SmallestCard from "@/components/cards/SmallestCard";
import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

export interface AllCategoriesProps {
  title?: string;
  smallCategoryItems?: Array<Record<string, any>>;
  largeCategoryItems?: Array<Record<string, any>>;
  smallestCategoryItems?: Array<Record<string, any>>;
  className?: string;
}

const AllCategories: React.FC<AllCategoriesProps> = ({
  title = "Our All Categories",
  smallCategoryItems = [],
  largeCategoryItems = [],
  smallestCategoryItems = [],
  className = "",
}) => {
  return (
    <section className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="container-custom mx-auto px-4">
        <SectionTitle title={title} />

        <div className="lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-5 px-2">
          {smallCategoryItems.map((item, index) => (
            <SmallCard key={index} {...item} />
          ))}
        </div>

        <div className="lg:py-5 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 px-2">
          {largeCategoryItems.map((item, index) => (
            <LargeCard key={index} {...item} />
          ))}
        </div>

        <div className="lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-5 px-2">
          <div className="col-span-2 row-span-2">
            <LargeCard />
          </div>
          {smallestCategoryItems.map((item, index) => (
            <SmallestCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default React.memo(AllCategories);
