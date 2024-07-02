import useContentStore from "@/store/contentStore";
import { getArgPriceFormat } from "@/util/FormatPrice";
import React from "react";

export default function BookCard() {
  const getContentBox = useContentStore((state) => state.getContentBox());
  const setStep = useContentStore((state) => state.setStep);

  const getDiscountPercent = () => {
    const discount =
      ((getContentBox.old_price - getContentBox.price) * 100) /
      getContentBox.old_price;
    return discount;
  };

  return (
    <div className="flex justify-center items-center  p-3 md:p-10 borderCard">
      <div className="text-center">
        <p className="text-[20px] text-[primaryDark] text-center">
          A modo de reserva se cobrará únicamente en tu tarjeta el primer mes de
          servicio.
        </p>
        <p className="text-[20px] text-[primaryDark]  text-center">
          el primer mes de servicio.
        </p>
        <div className=" inline-block pt-10">
          <p className="text-[#D9D9D9] relative text-[40px] leading-8  mt-8 line-through">
            {getArgPriceFormat(getContentBox.old_price)}
            <span className="absolute -right-5 -top-8 text-sm text-[#009080]">
              - {getDiscountPercent()}%
            </span>
          </p>

          <p className="text-[primaryDark] text-[60px]  ">
            {getArgPriceFormat(getContentBox.price)}
          </p>
          <p className="text-[20px] text-[primaryDark] ">por mes</p>
        </div>

        <div className="block md:flex justify-center mt-9">
          <button
            onClick={() => setStep(1)}
            className="text-[16px] text-[primaryDark] font-bold buttonReturn "
          >
            VOLVER A COTIZAR
          </button>
          <button
            onClick={() => setStep(5)}
            className="text-[#FFFFFF] text-[16px] font-bold buttonQuote mx-4 "
          >
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
}
