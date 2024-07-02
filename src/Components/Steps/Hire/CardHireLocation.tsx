import React from "react";
import { CiLocationOn } from "react-icons/ci";
import locationHire from "@/assets/locationHire.svg";
import Image from "next/image";
import useContentStore from "@/store/contentStore";
export default function CardHireLocation() {
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());
  return (
    <div className="w-full px-20 pt-14 ">
      <div>
        <Image
          src={locationHire}
          alt=""
          className=" z-[1] w-full h-full object-cover "
          width={50}
          height={50}
        />
      </div>
      <div className="flex items-start pt-5">
        <CiLocationOn size={40} className="" />

        <h6 className="text-[#009080] font-bold pl-1 text-[30px] mb-2 ">
          {getContentBoxs.name}
        </h6>
      </div>
      <div className=" w-full  CarBottomBar ml-1 "></div>
      <p className="text-[primaryDark] text-[16px]  my-2 opacity-90">
        {getContentBoxs.address}
      </p>
    </div>
  );
}
