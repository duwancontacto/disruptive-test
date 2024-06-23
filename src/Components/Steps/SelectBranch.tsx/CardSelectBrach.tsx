import React from "react";
import Image from "next/image";
import LogoFooter from "@/assets/logoFooter.svg";
import cardFondo from "@/assets/cardFondo.svg";
import cardFondo2 from "@/assets/cardFondo2.svg";
import cardFondo3 from "@/assets/cardFondo3.svg";
import {CiLocationOn, CiDollar, CiCreditCard2} from "react-icons/ci";
import {IoMdTime} from "react-icons/io";
import {HiOutlineUserGroup} from "react-icons/hi2";
import {RiDrinksLine} from "react-icons/ri";
import {MdOutlineDirectionsCar} from "react-icons/md";
export default function CardSelectBrach() {
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
      {cards.map((card) => (
        <div
          key={card.city}
          className="max-w-md mt-3 mx-auto z-20 relative rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                src={card.img}
                alt="Retreat Image"
                width={50}
                height={50}
                className="  object-cover  md:rounded-s-xl h-full md:w-[320px] w-full imagencard"
              />
            </div>
            <div className=" w-full rounded-b-xl md:rounded-r-xl pl-5 p-3 borderCard">
              <h6 className="text-[#009080] font-bold text-start text-[20px] ">
                {card.city}
              </h6>
              <div className="flex  items-center  ">
                <CiLocationOn className="mr-1 " color="#172832" />
                <h6 className="text-[#172832] mb-2 text-start text-[14px] ">
                  {card.address}
                </h6>
              </div>
              <div className=" w-full  CarBottomBar "></div>

              <div className="flex  items-center  mt-2">
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
