import Image from "next/image";
import React from "react";
import mediumBox from "@/assets/mediumBox.svg";
import { CiCreditCard2 } from "react-icons/ci";
import useContentStore from "@/store/contentStore";
export default function CardHireBox() {
  const getContentBoxs = useContentStore((state) => state.getContentBox());
  return (
    <div className=" w-full px-20 border border-r-1 border-r-[#009080] pt-10">
      <Image
        src={mediumBox}
        alt="Retreat Image"
        width={350}
        height={350}
        className="  z-[1] w-full h-full object-cover  "
      />

      <div className="w-full   py-9   ">
        <div className="flex items-start pt-5">
          <CiCreditCard2 size={40} className="" />

          <h6 className="text-[#009080] font-bold pl-1 text-[30px] mb-2 ">
            {getContentBoxs.box_type_id.name}
          </h6>
        </div>
        <div className=" w-full  CarBottomBar ml-1 "></div>

        {getContentBoxs.descriptions.map((detail: any, index: number) => (
          <p
            key={index}
            className="text-[primaryDark] text-[16px] opacity-90 my-2"
          >
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}
