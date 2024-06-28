import React from "react";
import Image from "next/image";
import cardFondo from "@/assets/cardFondo.svg";
import cardFondo2 from "@/assets/cardFondo2.svg";
import cardFondo3 from "@/assets/cardFondo3.svg";
import {CiLocationOn, CiDollar, CiCreditCard2} from "react-icons/ci";
import {IoMdAdd} from "react-icons/io";

import {IoMdTime} from "react-icons/io";
import {HiOutlineUserGroup} from "react-icons/hi2";
import {RiDrinksLine} from "react-icons/ri";
import {MdOutlineDirectionsCar} from "react-icons/md";
import useContentStore from "@/store/contentStore";
import {baseUrl} from "@/services";
export default function CardSelectBrach() {
  const contents = useContentStore((state) => state.filterContents);

  console.log("first", contents);

  const cards = [
    {
      img: cardFondo,
      city: "Córdoba",
      address: "Av. Pedro Simón Laplace 5442 | Vistalba Mall",
      time: "Lunes a viernes de 8.30 a 17.30 hs | Sábados de 9 a 13 hs",
      hall: "1 Sala de negocios disponible para 7 personas",
      email: "Conteo y Verificación de Billetes",
      service: "Servicios de cafetería",
      parking: "Estacionamiento",
      pay: "Caja tradicional",
    },

    {
      img: cardFondo2,
      city: "Pilar",
      address: "Panamericana km 42,5 | Bs. As. | Office Park Quatro | Of. 306",
      time: "Lunes a viernes de 8.30 a 17.30 hs | Sábados de 9 a 13 hs",
      hall: "1 Sala de negocios disponible para 7 personas",
      email: "Conteo y Verificación de Billetes",
      service: "Servicios de cafetería",
      parking: "Estacionamiento público cercano",
      pay: "Caja tradicional",
    },

    {
      img: cardFondo3,
      city: "Unicenterr",
      address: "Paraná 3617 | Martínez | PB Local 1009 ",
      time: "Lunes a Viernes de 10 a 19 hs. Sábados de 10 a 14 hs con atención comercial y de 14 a 19 hs con acceso a bóveda. Domingos de 12 a 18 hs",
      hall: "2 Salas de negocios disponible para 8 y 4 personas",
      email: "Conteo y Verificación de Billetes",
      service: "Servicios de cafetería",
      parking: "Estacionamiento Centro Comercial",
      pay: "Caja robotizada",
    },
  ];

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
                <CiLocationOn size={40} className="mr-1" color="#172832" />
                <h6 className="text-[#172832]  text-start text-[14px] ">
                  {card.address}
                </h6>
              </div>
              <div className=" w-full  CarBottomBar ml-1 "></div>

              {card.details.map((detail: any) => (
                <div key={detail.id} className="flex pl-3 items-start   mt-2">
                  <div dangerouslySetInnerHTML={{__html: detail.icon}} />
                  <p className="text-[#172832] pl-2 text-start text-[11px]">
                    {detail.description}
                  </p>
                </div>
              ))}

              <div className="flex pl-3 items-start   mt-2">
                <CiCreditCard2 className=" mr-1" size={18} color="#172832" />
                <p className="text-[#172832] pl-2 font-bold text-start text-[11px]">
                  {card.robotic ? "CAJA ROBOTIZADA" : "CAJA TRADICIONAL"}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <IoMdAdd
                  size={25}
                  color={"#009080"}
                  className="cursor-pointer"
                />
              </div>

              {/* <div className="flex  items-center  mt-2">
                <IoMdTime className=" mr-1" color="#172832" />
                <p className="text-[#172832]  text-start text-[11px]">
                  {card.time}
                </p>
              </div>

              <div className="flex  items-center  mt-2">
                <HiOutlineUserGroup className=" mr-1" color="#172832" />
                <p className="text-[#172832]  text-start text-[11px]">
                  {card.hall}
                </p>
              </div>

              <div className="flex  items-center  mt-2">
                <CiDollar className=" mr-1" color="#172832" />
                <p className="text-[#172832]  text-start text-[11px]">
                  {card.email}
                </p>
              </div>

              <div className="flex  items-center  mt-2">
                <RiDrinksLine className=" mr-1" color="#172832" />
                <p className="text-[#172832]  text-start text-[11px]">
                  {card.service}
                </p>
              </div>

              <div className="flex  items-center  mt-2">
                <MdOutlineDirectionsCar className=" mr-1" color="#172832" />
                <p className="text-[#172832]  text-start text-[11px]">
                  {card.parking}
                </p>
              </div>

              <div className="flex  items-center  mt-2">
                <CiCreditCard2 className=" mr-1" color="#172832" />
                <p className="text-[#172832] font-bold text-start text-[11px]">
                  {card.pay}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
