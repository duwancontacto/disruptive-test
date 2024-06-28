import Image from "next/image";
import React from "react";
import {FaInfoCircle} from "react-icons/fa";
import {CiCreditCard2} from "react-icons/ci";
import {IoMdAdd} from "react-icons/io";
import mediumBox from "@/assets/mediumBox.svg";
import bigBox from "@/assets/bigBox.svg";

export default function CardSelectSize() {
  const cards = [
    {
      img: mediumBox,
      title: "Chica",
      info: "  ENTRAN HASTA 250.000 USD",
      info2: "CABEN DOCUMENTOS HASTA TAMAÑO A4",
      info3: "SEGURO ASOCIADO BRINDADO POR LÍDERES DE LA INDUSTRIA",
    },
    {
      img: mediumBox,
      title: "Mediana",
      info: "  ENTRAN HASTA 250.000 USD",
      info2: "CABEN DOCUMENTOS HASTA TAMAÑO A4",
      info3: "SEGURO ASOCIADO BRINDADO POR LÍDERES DE LA INDUSTRIA",
    },
    {
      img: bigBox,
      title: "Mediana",
      info: "  ENTRAN HASTA 250.000 USD",
      info2: "CABEN DOCUMENTOS HASTA TAMAÑO A4",
      info3: "SEGURO ASOCIADO BRINDADO POR LÍDERES DE LA INDUSTRIA",
    },
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="md:flex mt-10 w-full md:w-1/2 mx-auto ">
          <div className="md:shrink-0 border  w-full md:w-1/2  flex justify-center items-center rounded-t-xl md:rounded-none  md:rounded-l-xl  px-7 border-[#009080]">
            <Image
              src={card.img}
              alt="Retreat Image"
              width={350}
              height={50}
              className="  object-cover   md:rounded-s-xl  "
            />
          </div>
          <div className=" w-full md:w-1/2 rounded-b-xl md:rounded-s-none md:rounded-r-xl   p-9 borderCard">
            <div className="flex pl-1 items-start  ">
              <CiCreditCard2 size={40} className="" />
              <h6 className="text-[#009080] font-bold pl-1 text-start text-[25px] ">
                {card.title}
              </h6>
            </div>

            <div className=" w-full  CarBottomBar ml-1 "></div>

            <div className="flex pl-3 items-start   mt-5 ">
              <FaInfoCircle className="mr-1" />
              <p className="text-[#172832] pl-2 text-start text-[14px]">
                {card.info}
              </p>
            </div>
            <div className="flex pl-3 items-start   mt-2">
              <FaInfoCircle className="mr-1" />
              <p className="text-[#172832] pl-2 text-start text-[14px]">
                {card.info2}
              </p>
            </div>

            <div className="flex pl-3 items-start mb-9  mt-2">
              <FaInfoCircle className="mr-1" />
              <p className="text-[#172832] pl-2  text-start text-[14px] ">
                {card.info3}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.youtube.com/watch?v=PIYI2AiEFgM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#172832] hover:text-[#172832] font-bold text-[13px] pl-3 border-b-2 border-[#172832] "
              >
                ¿Querés saber cómo funcionan nuestras cajas robotizadas?
              </a>
              <IoMdAdd size={25} color={"#009080"} className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
