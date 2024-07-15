import Image from "next/image";
import { animated } from "react-spring";

import { CiLocationOn, CiCreditCard2 } from "react-icons/ci";
import CardSvg from "@/assets/card.svg";
import { IoMdAdd } from "react-icons/io";
import { baseUrl } from "@/services";
import { UseAnimation } from "@/hooks/useAnimation";

interface BranchProps {
  card: any;
  setStep: any;
}

export function Branch({ card, setStep }: BranchProps) {
  const { ref, props } = UseAnimation({ duration: 500 });

  return (
    <animated.div ref={ref} key={`${card._id}`} style={props}>
      <div className="max-w-md mt-5 mx-auto z-20  relative md:rounded-s-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex">
          <div
            className="md:shrink-0  w-full md:w-1/2 cursor-pointer"
            onClick={() => setStep(2, card._id)}
          >
            <Image
              src={`${baseUrl}/api/v1/branchs/images/${card._id}`}
              alt="Retreat Image"
              width={500}
              height={300}
              className="  object-cover rounded-t-xl md:rounded-t-none md:rounded-s-xl h-full  w-full "
            />
          </div>
          <div className=" w-full rounded-b-xl md:rounded-s-none md:rounded-r-xl  px-7 p-3 borderCard border-l ">
            <h6 className="text-[#009080] font-bold pl-1 text-start text-[25px] ">
              {card.name}
            </h6>
            <div className="flex  items-center  mb-2  ">
              <CiLocationOn size={40} className="mr-1" color="primaryDark" />
              <a
                href={card.address_google_maps || ""}
                target="_blank"
                className="text-[primaryDark]  text-start text-[14px] hover:text-primaryGreen"
              >
                {card.address}
              </a>
            </div>
            <div className=" w-full  CarBottomBar ml-1 "></div>

            {card.details.map((detail: any) => (
              <div
                key={detail.id}
                className="flex pl-3 items-start relative  mt-2"
              >
                <div className="w-[25px] absolute left-3 flex justify-center">
                  <div
                    dangerouslySetInnerHTML={{ __html: detail.icon }}
                    className=""
                  />
                </div>

                <p className="text-[primaryDark] pl-8 text-start text-[11px]">
                  {detail.description}
                </p>
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <div className="flex pl-3 items-start  ">
                <div className="w-[25px]  flex justify-center">
                  <Image
                    src={CardSvg}
                    alt="Retreat Image"
                    width={17}
                    height={11}
                    className="  pt-[1px] "
                  />
                </div>

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
    </animated.div>
  );
}
