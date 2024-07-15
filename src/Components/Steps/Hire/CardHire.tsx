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
      <div className="max-h-[400px]  overflow-hidden">
        <Image
          src={`${baseUrl}/api/v1/branchs/images/${getContentBoxs._id}`}
          alt=""
          className=" z-[1] w-full object-cover rounded-t-2xl"
          width={1500}
          height={1000}
        />
      </div>
      <div className="border border-primaryGreen">
        <div className=" block md:flex w-full justify-between items-start ">
          <CardHireBox />
          <CardHireLocation />
        </div>

        <BookCard />
      </div>
    </div>
  );
}
