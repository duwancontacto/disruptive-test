import { FaInfoCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { animated } from "react-spring";
import CardSvg from "@/assets/card.svg";
import { baseUrl } from "@/services";
import { UseAnimation } from "@/hooks/useAnimation";
import { useState } from "react";
import { Video } from "./Video";

interface Props {
  card: any;
  setStep: any;
}

export function Size({ card, setStep }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, props } = UseAnimation({ duration: 500 });

  const handleVideo = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <Video isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <animated.div ref={ref} key={`${card._id}`} style={props}>
        <div
          className={` ${
            !card.stock || !card.available ? "opacity-50 " : ""
          } max-w-md mt-5  px-5 mx-auto z-20 border relative rounded-xl shadow-md overflow-hidden md:max-w-4xl border-[#009080] `}
        >
          <div className="md:flex">
            <div
              className="md:shrink-0 w-full md:w-1/2 flex items-center md:pe-4 cursor-pointer"
              onClick={() =>
                card.stock && card.available && setStep(3, card._id)
              }
            >
              <Image
                src={`${baseUrl}/api/v1/branchs/box-images/${card.box_type_id._id}`}
                alt="Retreat Image"
                width={500}
                height={300}
                className="  object-cover  md:rounded-s-xl  w-full "
              />
            </div>
            <div className=" w-full rounded-b-xl md:rounded-s-none md:rounded-r-xl py-10  md:px-7 p-3 md:border-l md:border-l-[#009080] ">
              <div className="flex items-center  ">
                <Image
                  src={CardSvg}
                  alt="Retreat Image"
                  width={27}
                  height={17}
                  className="  pt-[1px] "
                />
                <h6 className="text-[#009080] font-semibold text-start text-[25px] pl-3">
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
                  {card.box_type_id.robotic && (
                    <div
                      onClick={handleVideo}
                      /* href="https://www.youtube.com/watch?v=PIYI2AiEFgM"
                    target="_blank"
                    rel="noopener noreferrer" */
                      className="text-[primaryDark] cursor-pointer hover:text-[primaryDark] font-bold text-[12px]  border-b-2 border-[#172832] "
                    >
                      ¿Querés saber cómo funcionan nuestras cajas robotizadas?
                    </div>
                  )}
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
          <div className="text-end max-w-md mx-auto md:max-w-4xl pt-3 ">
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
    </>
  );
}
