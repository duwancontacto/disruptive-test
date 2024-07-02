import Image from "next/image";
import React from "react";
import boxFinal from "@/assets/boxFinal.svg";
import { getArgPriceFormat } from "@/util/FormatPrice";
import useContentStore from "@/store/contentStore";

interface Props {
  register: any;
  errors: any;
}
export default function PaymentMethods2({ register, errors }: Props) {
  const getContentBox = useContentStore((state) => state.getContentBox());
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());
  return (
    <div className=" w-full  p-0 md:p-10">
      <div className="block md:flex  justify-center md:justify-start items-center mt-5 lg:mt-0">
        <div>
          <Image
            src={boxFinal}
            alt=""
            className=" object-cover "
            width={100}
            height={100}
          />
        </div>
        <div className="text-[primaryDark] text-[14px] ml-5">
          <p className="text-[primaryDark] text-[14px] font-semibold">
            Cajas de Seguridad
          </p>
          <p className="text-[primaryDark] text-[14px]">
            {getContentBoxs.name} - {getContentBox.box_type_id.name}
          </p>
          <p className="text-[primaryDark] text-[14px]">Cantidad: 1</p>
        </div>
      </div>
      <p className="text-[primaryDark] text-[16px] opacity-80 text-end">
        {getArgPriceFormat(getContentBox.price)}
      </p>
      <div className=" w-full  CarBottomBar ml-1 mt-6 "></div>
      <div className="flex justify-between items-center">
        <p className="text-[primaryDark] text-[16px] mt-7 text-start ">TOTAL</p>
        <p className="text-[primaryDark] text-[16px] mt-7 text-end font-bold">
          {getArgPriceFormat(getContentBox.price)}
        </p>
      </div>

      <div className=" w-full  CarBottomBar ml-1  my-4 "></div>
      <div className="flex items-center justify-start opacity-90">
        <input
          type="radio"
          value="mercadopago"
          {...register("paymentMethod", {
            required: "Este campo es obligatorio",
          })}
          className={`default:ring-rose-200 mt-[6px] `}
        />
        <p
          className={`font-semibold ml-4 text-[primaryDark] text-[18px] ${
            errors?.paymentMethod && "text-red-500"
          } `}
        >
          Mercadopago
        </p>
      </div>

      <div className="flex items-center justify-start my-5 opacity-90">
        <input
          type="radio"
          value="transfer"
          {...register("paymentMethod", {
            required: "Este campo es obligatorio",
          })}
          className={`default:ring-rose-200 mt-[6px] `}
        />
        <p
          className={`font-semibold ml-4 text-[primaryDark] text-[18px] ${
            errors?.paymentMethod && "text-red-500"
          } `}
        >
          Transferencia / depósito
        </p>
      </div>

      <div className="flex items-start opacity-90">
        <input
          type="checkbox"
          {...register("terms", {
            required: "Debe aceptar los términos y condiciones",
          })}
          className={`default:ring-rose-200 mt-[6px] `}
        />
        <p
          className={`font-semibold ml-4 text-[primaryDark] text-[18px] ${
            errors?.terms && "text-red-500"
          } `}
        >
          HE LEÍDO Y ESTOY DE ACUERDO CON LOS TÉRMINOS Y CONDICIONES DE LA WEB*
        </p>
      </div>
      <button className="text-[#FFFFFF] text-[16px] font-bold buttonQuote mt-10 ">
        CONTRATAR
      </button>
      <p className="text-[16px] font-bold opacity-70 mt-5">
        Si todavía tenés dudas,
        <span className="text-[#009080] ml-2 text-[16px] border-b-2 border-[#009080] font-bold">
          contactate con un asesor.
        </span>{" "}
      </p>
    </div>
  );
}
