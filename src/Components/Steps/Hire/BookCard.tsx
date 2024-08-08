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
    <div className="flex justify-center items-center  p-3 py-10 md:p-10  border border-t-primaryGreen">
      <div className="text-center">
        <p className="text-[20px] text-[primaryDark] text-center">
          A modo de reserva se cobrará únicamente en su tarjeta el primer mes de
          servicio.
        </p>
        <p className="text-[20px] text-[primaryDark]  text-center">
          El precio reflejado corresponde a una contratación mensual por débito
          automático con un mínimo de permanencia de 12 meses. Consulte a su
          asesor por otros plazos y modalidades de pago.
        </p>
        <p className="text-[20px] text-[primaryDark]  text-center"></p>
        <div className=" inline-block pt-10">
          <p className="text-[#D9D9D9] relative text-[40px] leading-8  mt-8 line-through">
            {getArgPriceFormat(getContentBox.old_price)}
            <div className="flex flex-col items-center justify-center absolute -right-[60px] -top-10 text-sm bg-[#009080] w-[60px] h-[60px] rounded-full  text-white ">
              <span className="text-[16px]">{getDiscountPercent()}%</span>
              <span className="text-[16px]">OFF</span>
            </div>
          </p>

          <p className="text-[primaryDark] text-[60px]  ">
            {getArgPriceFormat(getContentBox.price)}
          </p>
          <p className="text-[20px] text-[primaryDark] ">por mes</p>
        </div>

        <div className="block md:flex justify-center mt-5">
          <button
            onClick={() => setStep(1)}
            className="text-[16px] text-[primaryDark] font-bold buttonReturn mt-5 "
          >
            VOLVER A COTIZAR
          </button>
          <button
            onClick={() => setStep(5)}
            className="text-[#FFFFFF] text-[16px] font-bold buttonQuote mx-4 mt-5"
          >
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
}
