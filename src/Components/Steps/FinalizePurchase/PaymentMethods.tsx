import Image from "next/image";
import React from "react";
import { getArgPriceFormat } from "@/util/FormatPrice";
import useContentStore from "@/store/contentStore";
import { baseUrl } from "@/services";
interface Props {
  register: any;
  errors: any;
  watch: any;
}
export default function PaymentMethods2({ register, errors, watch }: Props) {
  const getContentBox = useContentStore((state) => state.getContentBox());
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  const paymentMethod = watch("paymentMethod");
  return (
    <div className=" w-full  p-0 md:p-10">
      <div className="block md:flex  justify-center md:justify-start items-center mt-5 lg:mt-0">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={`${baseUrl}/public/${getContentBoxs.primary_image}`}
            alt=""
            className="absolute top-0 left-0 object-cover rounded-full w-full h-full"
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
          id="mercadopago"
          {...register("paymentMethod", {
            required: "Este campo es obligatorio",
          })}
          className={`default:ring-rose-200  `}
        />
        <label
          htmlFor="mercadopago"
          className={`font-semibold ml-4 text-[primaryDark] text-[18px] ${
            errors?.paymentMethod && "text-red-500"
          } `}
        >
          Mercadopago
        </label>
      </div>

      <div className="flex items-center justify-start my-5 opacity-90">
        <input
          type="radio"
          value="transfer"
          id="transfer"
          {...register("paymentMethod", {
            required: "Este campo es obligatorio",
          })}
          className={`default:ring-rose-200  `}
        />
        <label
          htmlFor="transfer"
          className={`font-semibold ml-4 text-[primaryDark] text-[18px] ${
            errors?.paymentMethod && "text-red-500"
          } `}
        >
          Transferencia / depósito
        </label>
      </div>

      {paymentMethod === "transfer" && (
        <div className="pl-8 my-5 text-[14px]">
          <p>
            Efectuá tu pago directamente en nuestra cuenta bancaria, utilizando
            el número de pedido como referencia para la transacción, y enviá el
            comprobante de la transferencia vía mail. El pedido se procesará una
            vez recibido el importe en nuestra cuenta.
          </p>
          <p className="mt-5">
            <span className="font-bold ">DENOMINACION:</span> BRUSTARK S.A.
          </p>
          <p>
            <span className="font-bold">CTA.CTE:</span> 00006913-3 182-9
          </p>
          <p>
            <span className="font-bold">CBU:</span> 0070182820000006913391
          </p>
          <p>
            <span className="font-bold">ALIAS:</span> HAUSLER.GALICIA
          </p>
          <p>
            <span className="font-bold">CUIT:</span> 30-71434718-3
          </p>
          <p>
            <span className="font-bold">BANCO:</span> GALICIA
          </p>
        </div>
      )}

      <div className="flex items-start opacity-90">
        <input
          type="checkbox"
          id="terms"
          {...register("terms", {
            required: "Debe aceptar los términos y condiciones",
          })}
          className={`default:ring-rose-200 mt-[6px] `}
        />
        <label
          htmlFor="terms"
          className={`font-semibold ml-4 text-[primaryDark] text-[18px] ${
            errors?.terms && "text-red-500"
          } `}
        >
          HE LEÍDO Y ESTOY DE ACUERDO CON LOS TÉRMINOS Y CONDICIONES DE LA WEB*
        </label>
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <button className="text-[#FFFFFF] text-[16px] font-bold buttonQuote mt-10">
          CONTRATAR
        </button>
        <a
          href="https://wa.me/+5491171410700"
          target="_blank"
          className="text-[16px] font-bold opacity-70 mt-5"
        >
          Si todavía tenés dudas,
          <span className="text-[#009080] ml-2 text-[16px] border-b-2 border-[#009080] font-bold">
            contactate con un asesor.
          </span>{" "}
        </a>{" "}
      </div>
    </div>
  );
}
