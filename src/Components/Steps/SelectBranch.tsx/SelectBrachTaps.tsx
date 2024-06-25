import useContentStore from "@/store/contentStore";
import React from "react";

export default function SelectBrachTaps() {
  const categories = useContentStore((state) => state.categories);
  const filterByCategory = useContentStore((state) => state.filterByCategory);
  const allCategories = [{ name: "Todas", _id: "all" }, ...categories];
  const [selectedCategory, setSelectedCategory] = React.useState(
    allCategories[0]._id
  );

  const handleCategory = (category_id: string) => {
    setSelectedCategory(category_id);
    filterByCategory(category_id);
  };

  if (!categories.length) return <></>;

  return (
    <div className="pc-0 md:px-40 flex ">
      <div className="md:flex block justify-center items-center w-auto mx-auto mt-10 px-10 border-solid border-b-2">
        {allCategories.map((category) => (
          <button
            onClick={() => handleCategory(category._id)}
            key={category._id}
            className={`cursor-pointer  w-[87px] mx-3 h-[37px]  text-[16px] ${
              selectedCategory === category._id
                ? "bg-[#000000]-500 shadow-lg shadow-[#000000]-500/50  border  bg-[#172832] text-[#FFFFFF]"
                : " text-[#172832]"
            }  `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
