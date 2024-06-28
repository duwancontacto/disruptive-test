import Image from "next/image";
import React from "react";
import hauslerHire from "@/assets/hauslerHire.svg";
import CardHireBox from "./CardHireBox";
import CardHireLocation from "./CardHireLocation";
import BookCard from "./BookCard";

export default function CardHire() {
  return (
    <div className="mt-32">
      <div>
        <Image
          src={hauslerHire}
          alt=""
          className=" z-[1] w-full h-full object-cover "
          width={50}
          height={50}
        />
      </div>
      <div className=" block md:flex w-full justify-around items-center borderCard">
        <CardHireBox />
        <CardHireLocation />
      </div>
      <BookCard />
    </div>
  );
}
