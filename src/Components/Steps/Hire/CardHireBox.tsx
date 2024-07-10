import Image from "next/image";
import React from "react";
import CardSvg from "@/assets/card.svg";
import { baseUrl } from "@/services";
import useContentStore from "@/store/contentStore";
export default function CardHireBox() {
  const getContentBoxs = useContentStore((state) => state.getContentBox());
  return (
    <div className=" w-full px-5 md:px-20 md:border md:border-b-0 border-b border-b-primaryGreen md:border-r-1 md:border-r-[#009080] pt-10">
      <Image
        src={`${baseUrl}/public/${getContentBoxs.box_type_id.primary_image}`}
        alt="Retreat Image"
        width={500}
        height={500}
        className="  z-[1] w-full h-full object-cover  "
      />

      <div className="w-full   pb-9 pt-1   ">
        <div className="flex items-center  ">
          <Image
            src={CardSvg}
            alt="Retreat Image"
            width={27}
            height={17}
            className="  pt-[1px] "
          />

          <h6 className="text-[#009080] font-bold  text-[30px] pl-3 ">
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
