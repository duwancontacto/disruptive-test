import { FaInfoCircle } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { animated } from "react-spring";

import { baseUrl } from "@/services";
import { UseAnimation } from "@/hooks/useAnimation";

interface Props {
  card: any;
  setStep: any;
}

export function Size({ card, setStep }: Props) {
  const { ref, props } = UseAnimation({ duration: 500 });
  console.log("first", card);
  return (
    <animated.div ref={ref} key={`${card._id}`} style={props}>
      <div
        className={` ${
          !card.stock || !card.available ? "opacity-50 " : ""
        } max-w-md mt-5 py-10 px-5 mx-auto z-20 border relative rounded-xl shadow-md overflow-hidden md:max-w-4xl border-[#009080] `}
      >
        <div className="md:flex">
          <div className="md:shrink-0 w-full md:w-1/2 ">
            <Image
              src={`${baseUrl}/public/${card.box_type_id.primary_image}`}
              alt="Retreat Image"
              width={500}
              height={300}
              className="  object-cover  md:rounded-s-xl  w-full "
            />
          </div>
          <div className=" w-full rounded-b-xl md:rounded-s-none md:rounded-r-xl  md:px-7 p-3 md:border-l-2 md:border-l-[#009080] ">
            <div className="flex items-start  ">
              <CiCreditCard2 size={40} className="" />
              <h6 className="text-[#009080] font-bold pl-1 text-start text-[25px] ">
                {card.box_type_id.name}
              </h6>
            </div>
            <div className=" w-full  CarBottomBar ml-1 "></div>

            {card.descriptions.map((detail: any, index: number) => (
              <div key={index} className="flex mt-4  items-start justify-start">
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
                  className="text-[primaryDark]  hover:text-[primaryDark] font-bold text-[12px]  border-b-2 border-[#172832] "
                >
                  ¿Querés saber cómo funcionan nuestras cajas robotizadas?
                </a>
              </div>

              <button
                disabled={!card.stock || !card.available}
                onClick={() =>
                  card.stock && card.available && setStep(3, card._id)
                }
              >
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
      {(!card.stock || !card.available) && (
        <div className="text-end max-w-md mx-auto md:max-w-4xl ">
          <a
            href="https://wa.me/+5491171410700"
            target="_blank"
            className=" text-[14px] pt-2"
          >
            No contamos con disponibilidad.{" "}
            <span className="font-bold text-primaryGreen">
              {" "}
              consultá con un asesor.
            </span>
          </a>
        </div>
      )}
    </animated.div>
  );
}
