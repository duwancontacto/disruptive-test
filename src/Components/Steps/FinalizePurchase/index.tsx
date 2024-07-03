import Image from "next/image";
import React from "react";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import PurchaseData from "./PurchaseData";
import PaymentMethods from "./PaymentMethods";
import PaymentMethods2 from "./PaymentMethods";
import Steps from "..";
import useContentStore from "@/store/contentStore";
import { useForm } from "../../../../node_modules/react-hook-form/dist";

export default function FinalizePurchase() {
  const setStep = useContentStore((state) => state.setStep);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setStep(6, data);
  };

  return (
    <div className="flex flex-col min-h-screen z-30 max-w-md md:max-w-6xl mx-auto ">
      <main className="flex-1  p-6 md:p-10">
        <div>
          <Image
            src={fondOtherPage}
            alt=""
            className="absolute z-[-1] w-full top-0 left-0 h-full object-cover "
            width={100}
            height={100}
          />
        </div>
        <div className="">
          <p className="text-[primaryDark] md:text-[48px] text-[28px] text-center">
            Finalizá <span className="font-bold ">tu compra</span>
          </p>
          <p className="text-[primaryDark] md:text-[28px] text-[25px] text-center opacity-90 ">
            Formá parte de la experiencia Hausler.
          </p>
        </div>
        <Steps currentStep={5} />
        <form
          className="block lg:flex justify-between "
          onSubmit={handleSubmit(onSubmit)}
        >
          <PurchaseData errors={errors} register={register} />
          <PaymentMethods2 errors={errors} register={register} />
        </form>
      </main>
    </div>
  );
}
