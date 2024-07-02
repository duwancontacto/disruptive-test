import useContentStore from "@/store/contentStore";
import { getArgPriceFormat } from "@/util/FormatPrice";
import React from "react";

export default function ConfirmationPage() {
  const order = useContentStore((state) => state.order);
  const getContentBox = useContentStore((state) => state.getContentBox());
  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-md">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <svg
            className="w-12 h-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Gracias por tu <span className="font-bold">contratación</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Un representante de <span className="font-bold">HAUSLER</span> se
          contactará contigo para coordinar la firma del contrato y tu visita a
          sucursal, por cualquier duda o urgencia podés contactarnos al
          0810-345-3460
        </p>
      </div>
      <div className="= pt-4">
        <h2 className="text-lg font-semibold text-center text-green-600 mb-2">
          Pedido #{order.orderCount} ({new Date().toLocaleDateString()})
        </h2>
        <div className="border-t border-gray-400 pt-4">
          <div className="flex justify-between border-b border-gray-400 items-center pb-3">
            <p className="text-gray-800">Producto</p>
            <p className="text-gray-800">Cantidad</p>
            <p className="text-gray-800">Precio</p>
          </div>
          <div className="flex justify-between items-center pt-3 mb-2">
            <div>
              <p className="text-gray-800 font-semibold">Cajas de seguridad</p>
              <p className="text-gray-600">Sucursal: {getContentBoxs.name}</p>
              <p className="text-gray-600">
                Tamaño: {getContentBox.box_type_id.name}
              </p>
            </div>
            <p className="text-gray-800">1</p>
            <p className="text-gray-800">
              {getArgPriceFormat(getContentBox.price)}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-800 font-semibold">Método de pago:</p>
          <p className="text-gray-800">
            {order.order.payment_method === "transfer"
              ? "Transferencia / depósito "
              : "Mercado Pago"}
          </p>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-4 pt-4">
          <p className="text-lg font-semibold text-gray-800">Total</p>
          <p className="text-lg font-bold text-gray-800">
            {getArgPriceFormat(getContentBox.price)}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Dirección de facturación
        </h2>
        <div className="p-4 border border-gray-200 rounded-md">
          <p className="text-gray-800">{order.customer.name}</p>
          <p className="text-gray-600">{order.customer.dni}</p>
          <p className="text-gray-600">{order.customer.phone}</p>
          <p className="text-gray-600">{order.customer.email}</p>
        </div>
      </div>
    </div>
  );
}
