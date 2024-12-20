import React from "react";
import { FiCheck } from "react-icons/fi";

const ProgressBar = ({ currentStep = 4 }) => {
  const steps = [
    { title: "Preliminary", step: 1 },
    { title: "Your Details", step: 2 },
    { title: "KYC", step: 3 },
    { title: "Parties", step: 4 },
    { title: "Claim", step: 5, time: "(Approx 5 Min)" },
    { title: "Review", step: 6, time: "(Approx 5 Min)" },
    { title: "Payment", step: 7, time: "(Approx 5 Min)" },
  ];

  return (
    <div className="bg-gray-100 p-2 rounded-lg mt-1">
      <div className="relative flex items-center w-full">

        {/* Base Line for Grey and Connector Lines */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-gray-300"></div>

        {steps.map((item, index) => (
          <div key={item.step} className="relative flex-1 text-center">


            {/* Step Circle */}
            <div
              className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center relative z-10 ${
                currentStep > item.step
                  ? "bg-blue-500 text-white"
                  : currentStep === item.step
                  ? "border-2 border-blue-500 text-blue-500 bg-white"
                  : "border-2 border-gray-300 text-gray-400 bg-white"
              }`}
            >
              {currentStep > item.step ? (
                <FiCheck className="text-white text-sm" />
              ) : (
                <span className="font-bold text-sm">
                  {item.step < 10 ? `0${item.step}` : item.step}
                </span>
              )}
            </div>

            {/* Progress Line */}

            {index < steps.length - 1 && (
              <div
                className={`absolute ${
                  currentStep > item.step
                    ? "top-1/2 -translate-y-1/2 bg-blue-500" // Solid blue for completed steps
                    : currentStep === item.step
                    ? "top-[49%] border-t-2 border-dashed border-blue-500" // Dotted line for current step, slightly lower

                    : index >= 4 && index < 6 // Grey line only from step 5 to 7
                    ? "top-1/2 -translate-y-1/2 bg-gray-300"
                    : ""
                } left-0 h-1`}
                style={{
                  width: "100%",
                }}
              ></div>
            )}

            {/* Title and Time Text */}
            <div className="mt-6">
              <span
                className={`block text-xs font-medium ${
                  currentStep >= item.step ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {item.title}
              </span>
              {item.time && (
                <span className="block text-xs text-gray-500 mt-1">
                  {item.time}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
