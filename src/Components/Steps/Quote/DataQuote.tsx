import useContentStore from "@/store/contentStore";
import React from "react";
import { useForm } from "../../../../node_modules/react-hook-form/dist";
export default function DataQuote() {
  const setStep = useContentStore((state) => state.setStep);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setStep(4, data);
  };

  return (
    <div className="   mt-5 w-full">
      <p className="text-[primaryDark] opacity-90 text-[20px] md:text-[22px] lg:text-start text-center   ">
        Completá tus datos y accede a tu cotización.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-20">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className={`inputQuote border-b  w-full text-center pb-2 ${
              errors.name
                ? "border-b-red-500 placeholder:text-red-500"
                : "border-b-primaryDark placeholder:text-primaryDark"
            }`}
            {...register("name", { required: "Este campo es obligatorio" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.name?.message?.toString()}
            </p>
          )}
        </div>
        <div className="">
          <input
            type="email"
            className={`inputQuote border-b  w-full text-center pb-2 mt-16 pt-2 ${
              errors.email
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
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.email?.message?.toString()}
            </p>
          )}
        </div>
        <div className="flex justify-center mt-20">
          <button
            type="submit"
            className="text-[#FFFFFF] font-bold buttonQuote"
          >
            CONFIRMAR
          </button>
        </div>
      </form>
    </div>
  );
}
