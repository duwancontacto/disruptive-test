import React from "react";

import useContentStore from "@/store/contentStore";
import { Branch } from "./Branch";
import { BranchSkeleton } from "@/Components/Skeletons/BranchSkeleton";

export default function CardSelectBrach() {
  const contents = useContentStore((state) => state.filterContents);
  const setStep = useContentStore((state) => state.setStep);

  if (!contents.length) return <BranchSkeleton />;

  return (
    <div>
      {contents.map((card, index) => (
        <Branch key={card._id} card={card} setStep={setStep} />
      ))}
    </div>
  );
}
