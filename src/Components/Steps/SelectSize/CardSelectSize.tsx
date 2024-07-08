import React from "react";

import useContentStore from "@/store/contentStore";
import { Size } from "./Size";

export default function CardSelectSize() {
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  const setStep = useContentStore((state) => state.setStep);

  return (
    <div>
      {getContentBoxs?.boxes?.map((card: any, index: number) => (
        <Size key={index} card={card} setStep={setStep} />
      ))}
    </div>
  );
}
