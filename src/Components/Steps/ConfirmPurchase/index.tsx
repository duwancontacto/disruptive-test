import useContentStore from "@/store/contentStore";
import { getArgPriceFormat } from "@/util/FormatPrice";
import Image from "next/image";
import Sucess from "@/assets/sucess.svg";
import React from "react";
import ConfettiExplosion from "react-confetti-explosion";
import useScrollToTop from "@/hooks/useScroll";

export default function ConfirmationPage() {
  useScrollToTop();
  const order = useContentStore((state) => state.order);
  const getContentBox = useContentStore((state) => state.getContentBox());
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  if (!order || !getContentBox || !getContentBoxs) return <> </>;

  return (
    <>
      <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-md">
        <div className="flex justify-center">
          <ConfettiExplosion />
        </div>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src={Sucess}
              alt=""
              className="object-cover w-[200px]"
              width={200}
              height={100}
            />
          </div>
          <h1 className="text-2xl  text-primaryDark mt-10">
            Gracias por tu <span className="font-semibold">contratación</span>
          </h1>
          <p className="text-primaryDark mt-2 max-w-[560px] mx-auto">
            Un representante de <span className="font-bold">HAUSLER</span> se
            contactará contigo para coordinar la firma del contrato y tu visita
            a sucursal, por cualquier duda o urgencia podés contactarnos al
            0810-345-3460
          </p>
        </div>
        <div className="= pt-4">
          <h2 className="text-xl font-semibold text-center text-[#009080] mb-2">
            Pedido #{order.orderCount} ({new Date().toLocaleDateString()})
          </h2>
          <div className="border-t border-gray-400 pt-4">
            <div className="flex justify-between border-b border-gray-400 items-center pb-3">
              <p className="text-primaryDark ">Producto</p>
              <p className="text-primaryDark  ">Cantidad</p>
              <p className="text-primaryDark  ">Precio</p>
            </div>

            <div className="flex justify-between  items-center pb-3">
              <p className="text-primaryDark">Cajas de seguridad</p>
            </div>

            <div className="flex justify-between  items-center pb-3">
              <p className="text-primaryDark">
                {" "}
                Sucursal: {getContentBoxs.name}
              </p>
              <p className="text-primaryDark"> 1</p>
              <p className="text-primaryDark">
                {getArgPriceFormat(getContentBox.price)}
              </p>
            </div>

            <div className="flex justify-between  items-center pb-3">
              <p className="text-primaryDark">
                Tamaño: {getContentBox.box_type_id.name}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-primaryDark ">Método de pago:</p>
            <p className="text-primaryDark">
              {order.order.payment_method === "transfer"
                ? "Transferencia / depósito "
                : "Mercado Pago"}
            </p>
          </div>
          <div className="flex justify-between items-center border-t border-gray-400 mt-4 pt-4">
            <p className="text-lg font-semibold text-primaryDark">Total</p>
            <p className="text-lg font-bold text-primaryDark">
              {getArgPriceFormat(getContentBox.price)}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4">
          <h2 className="text-lg font-semibold text-center text-primaryDark mb-2">
            Dirección de facturación
          </h2>
          <div className="p-4 border border-gray-200 rounded-md text-center">
            <p className="text-primaryDark">{order.customer.name}</p>
            <p className="text-primaryDark">{order.customer.dni}</p>
            <p className="text-primaryDark">{order.customer.phone}</p>
            <p className="text-primaryDark">{order.customer.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
