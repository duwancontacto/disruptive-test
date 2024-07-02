import Image from "next/image";
import React from "react";
import hauslerHire from "@/assets/hauslerHire.svg";
import CardHireBox from "./CardHireBox";
import CardHireLocation from "./CardHireLocation";
import BookCard from "./BookCard";
import useContentStore from "@/store/contentStore";
import { baseUrl } from "@/services";

export default function CardHire() {
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  return (
    <div className="mt-32">
      <div>
        <Image
          src={`${baseUrl}/public/${getContentBoxs.primary_image}`}
          alt=""
          className=" z-[1] w-full w-auto object-cover "
          width={50}
          height={50}
        />
      </div>
      <div className=" block md:flex w-full justify-between items-start borderCard">
        <CardHireBox />
        <CardHireLocation />
      </div>
      <BookCard />
    </div>
  );
}
