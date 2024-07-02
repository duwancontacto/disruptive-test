import Image from "next/image";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import mediumBox from "@/assets/mediumBox.svg";
import bigBox from "@/assets/bigBox.svg";
import useContentStore from "@/store/contentStore";
import { baseUrl } from "@/services";

export default function CardSelectSize() {
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  const setStep = useContentStore((state) => state.setStep);

  return (
    <div>
      {getContentBoxs?.boxes?.map((card: any) => (
        <div
          key={card._id}
          className="max-w-md mt-5 py-10 px-5 mx-auto z-20 border relative rounded-xl shadow-md overflow-hidden md:max-w-4xl border-[#009080]"
        >
          <div className="md:flex">
            <div className="md:shrink-0 w-full md:w-1/2 ">
              <Image
                src={`${baseUrl}/public/${card.box_type_id.primary_image}`}
                alt="Retreat Image"
                width={50}
                height={50}
                className="  object-cover  md:rounded-s-xl  w-full "
              />
            </div>
            <div className=" w-full rounded-b-xl md:rounded-s-none md:rounded-r-xl  px-7 p-3 border-l-2 border-l-[#009080] ">
              <div className="flex items-start  ">
                <CiCreditCard2 size={40} className="" />
                <h6 className="text-[#009080] font-bold pl-1 text-start text-[25px] ">
                  {card.box_type_id.name}
                </h6>
              </div>
              <div className=" w-full  CarBottomBar ml-1 "></div>

              {card.descriptions.map((detail: any, index: number) => (
                <div
                  key={index}
                  className="flex mt-4  items-start justify-start"
                >
                  <FaInfoCircle className="mr-1 min-w-[18px] " />
                  <p className="text-[primaryDark] pl-2 text-start text-[11px] ">
                    {detail}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-4">
                <div>
                  {" "}
                  <a
                    href="https://www.youtube.com/watch?v=PIYI2AiEFgM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[primaryDark]  hover:text-[primaryDark] font-bold text-[9px]  border-b-2 border-[#172832] "
                  >
                    ¿Querés saber cómo funcionan nuestras cajas robotizadas?
                  </a>
                </div>

                <button onClick={() => setStep(3, card._id)}>
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
