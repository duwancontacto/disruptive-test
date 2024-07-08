import Image from "next/image";
import React from "react";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import PurchaseData from "./PurchaseData";
import PaymentMethods from "./PaymentMethods";
import PaymentMethods2 from "./PaymentMethods";
import Steps from "..";
import useContentStore from "@/store/contentStore";
import { useForm } from "react-hook-form";
import useScrollToTop from "@/hooks/useScroll";

export default function FinalizePurchase() {
  useScrollToTop();
  const setStep = useContentStore((state) => state.setStep);
  const customer = useContentStore((state) => state.customer);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: customer.email,
      name: customer.name,
    },
  });

  const onSubmit = (data: any) => {
    setStep(6, data);
  };

  return (
    <div className="flex flex-col min-h-screen z-30 max-w-md md:max-w-6xl mx-auto ">
      <main className="flex-1  p-0  md:p-10">
        <div>
          <Image
            src={fondOtherPage}
            alt=""
            className="absolute z-[-1] w-full top-0 left-0 object-cover "
            width={200}
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
          <PaymentMethods2 errors={errors} register={register} watch={watch} />
        </form>
      </main>
    </div>
  );
}
