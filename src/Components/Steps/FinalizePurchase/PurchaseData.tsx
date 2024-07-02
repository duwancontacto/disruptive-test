import React from "react";

interface Props {
  register: any;
  errors: any;
}

export default function PurchaseData({ register, errors }: Props) {
  return (
    <div className=" w-full p-0 md:p-5 ">
      <p className="text-[primaryDark] text-[40px] opacity-90  mt-10 lg:mt-0">
        Tus datos
      </p>
      <div className="">
        <div className="mt-20">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className={`inputQuote border-b  w-full text-center pb-2 ${
              errors?.name
                ? "border-b-red-500 placeholder:text-red-500"
                : "border-b-primaryDark placeholder:text-primaryDark"
            }`}
            {...register("name", { required: "Este campo es obligatorio" })}
          />
          {errors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.name?.message?.toString()}
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            className={`inputQuote border-b  w-full text-center pb-2 mt-16 pt-2 ${
              errors?.dni
                ? "border-b-red-500  placeholder:text-red-500"
                : "border-b-primaryDark  placeholder:text-primaryDark"
            }`}
            placeholder="Dni"
            {...register("dni", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors?.dni && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.dni?.message?.toString()}
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            className={`inputQuote border-b  w-full text-center pb-2 mt-16 pt-2 ${
              errors?.phone
                ? "border-b-red-500  placeholder:text-red-500"
                : "border-b-primaryDark  placeholder:text-primaryDark"
            }`}
            placeholder="Teléfono"
            {...register("phone", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.phone?.message?.toString()}
            </p>
          )}
        </div>
        <div className="">
          <input
            type="email"
            className={`inputQuote border-b  w-full text-center pb-2 mt-16 pt-2 ${
              errors?.email
                ? "border-b-red-500  placeholder:text-red-500"
                : "border-b-primaryDark  placeholder:text-primaryDark"
            }`}
            placeholder="Correo Electrónico"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Correo electrónico inválido",
              },
            })}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.email?.message?.toString()}
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            className={`inputQuote border-b  w-full text-center pb-2 mt-16 pt-2  border-b-primaryDark  placeholder:text-primaryDark`}
            placeholder="Notas del Pedidio (Opcional)"
          />
        </div>
      </div>
    </div>
  );
}
