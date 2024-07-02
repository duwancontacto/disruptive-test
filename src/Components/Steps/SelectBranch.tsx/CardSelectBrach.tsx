import React from "react";
import Image from "next/image";

import { CiLocationOn, CiCreditCard2 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

import useContentStore from "@/store/contentStore";
import { baseUrl } from "@/services";

export default function CardSelectBrach() {
  const contents = useContentStore((state) => state.filterContents);
  const setStep = useContentStore((state) => state.setStep);

  return (
    <div>
      {contents.map((card) => (
        <div
          key={card._id}
          className="max-w-md mt-5 mx-auto z-20 border relative rounded-xl shadow-md overflow-hidden md:max-w-4xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0 border w-full md:w-1/2">
              <Image
                src={`${baseUrl}/public/${card.primary_image}`}
                alt="Retreat Image"
                width={50}
                height={50}
                className="  object-cover  md:rounded-s-xl h-full  w-full "
              />
            </div>
            <div className=" w-full rounded-b-xl md:rounded-s-none md:rounded-r-xl  px-7 p-3 borderCard">
              <h6 className="text-[#009080] font-bold pl-1 text-start text-[25px] ">
                {card.name}
              </h6>
              <div className="flex  items-center  mb-2  ">
                <CiLocationOn size={40} className="mr-1" color="primaryDark" />
                <h6 className="text-[primaryDark]  text-start text-[14px] ">
                  {card.address}
                </h6>
              </div>
              <div className=" w-full  CarBottomBar ml-1 "></div>

              {card.details.map((detail: any) => (
                <div key={detail.id} className="flex pl-3 items-start   mt-2">
                  <div dangerouslySetInnerHTML={{ __html: detail.icon }} />
                  <p className="text-[primaryDark] pl-2 text-start text-[11px]">
                    {detail.description}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-4">
                <div className="flex pl-3 items-start  ">
                  <CiCreditCard2
                    className=" mr-1"
                    size={18}
                    color="primaryDark"
                  />
                  <p className="text-[primaryDark] pl-2 font-bold text-start text-[11px]">
                    {card.robotic ? "CAJA ROBOTIZADA" : "CAJA TRADICIONAL"}
                  </p>
                </div>
                <button onClick={() => setStep(2, card._id)}>
                  <IoMdAdd
                    size={25}
                    color={"#009080"}
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
