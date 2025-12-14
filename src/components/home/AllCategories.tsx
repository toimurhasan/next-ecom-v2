import React from "react";
import LargeCard from "../cards/LargeCard";
import SmallCard from "../cards/SmallCard";
import SmallestCard from "../cards/SmallestCard";
import SectionTitle from "../common/SectionTitle";

export interface AllCategoriesProps {
  title?: string;
  smallItems?: Array<Record<string, any>>;
  largeItems?: Array<Record<string, any>>;
  smallestItems?: Array<Record<string, any>>;
  className?: string;
}

const AllCategories: React.FC<AllCategoriesProps> = ({
  title = "Our All Categories",
  smallItems = Array.from({ length: 1 }),
  largeItems = Array.from({ length: 1 }),
  smallestItems = Array.from({ length: 1 }),
  className = "",
}) => {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className={`container-custom mx-auto px-4 ${className} `}>
        <SectionTitle title={title} />

        <div className="lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-5 px-2 ">
          {smallItems.map((_, i) => (
            <SmallCard key={i} />
          ))}
        </div>

        <div className="lg:py-5 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 px-2 ">
          {largeItems.map((_, i) => (
            <LargeCard key={i} />
          ))}
        </div>

        <div className=" lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-4 gap-2 lg:grid-cols-6 lg:gap-5 px-2 ">
          <div className="col-span-2 row-span-2">
            <LargeCard />
          </div>
          {smallestItems.map((_, i) => (
            <SmallestCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(AllCategories);
