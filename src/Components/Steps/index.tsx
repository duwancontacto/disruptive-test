import React from "react";

const steps = [
  { id: 1, name: "Seleccioná una Sucursal" },
  { id: 2, name: "Seleccioná un tamaño" },
  { id: 3, name: "Cotizá" },
  { id: 4, name: "Tu contratación" },
  { id: 5, name: "Contratá" },
];

interface Props {
  currentStep: number;
}

const Steps = ({ currentStep }: Props) => {
  return (
    <div className="flex items-start justify-between max-w-[1200px] mx-auto my-[100px]">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex items-start h-full  ${
            index < steps.length - 1 && "w-full"
          } `}
        >
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= step.id
                  ? "bg-teal-500 text-white"
                  : "bg-white border border-gray-300"
              }`}
            ></div>
            <span className="w-[120px] text-center">{step.name}</span>
          </div>

          {index < steps.length - 1 && (
            <div className="flex-auto border-t-2 transition duration-500 w-full ease-in-out mt-4 border-gray-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;
