"use client";
import { UseAnimation } from "@/hooks/useAnimation";
import { animated } from "react-spring";
import useContentStore from "@/store/contentStore";
import React from "react";
import { BranchCategorySkeleton } from "@/Components/Skeletons/BranchSkeleton";

export default function SelectBrachTaps() {
  const categories = useContentStore((state) => state.categories);
  const { ref, props } = UseAnimation({ duration: 500 });
  const filterByCategory = useContentStore((state) => state.filterByCategory);
  const allCategories = [{ name: "Todas", _id: "all" }, ...categories];
  const [selectedCategory, setSelectedCategory] = React.useState(
    allCategories[0]._id
  );

  const handleCategory = (category_id: string) => {
    setSelectedCategory(category_id);
    filterByCategory(category_id);
  };

  if (!categories.length) return <BranchCategorySkeleton />;

  return (
    <animated.div ref={ref} style={props} className="pc-0 md:px-10 flex ">
      <div className="flex flex-wrap justify-center items-center w-auto mx-auto  px-10 border-solid border-b-2 ">
        {allCategories.map((category) => (
          <button
            onClick={() => handleCategory(category._id)}
            key={category._id}
            className={`cursor-pointer  w-[87px] mx-3 h-[37px]  text-[16px] mt-3${
              selectedCategory === category._id
                ? " shadow-lg shadow-[#000000]-500/50  border  bg-primaryDark text-[#FFFFFF]"
                : " text-[primaryDark]"
            }  `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </animated.div>
  );
}
