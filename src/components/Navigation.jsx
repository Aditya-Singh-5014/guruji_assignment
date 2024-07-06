import React from "react";

const Navigation = ({ currentStep }) => {
  const steps = ["Personal Information", "Address Information", "Confirmation"];

  return (
    <div>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={currentStep === index + 1 ? "active" : ""}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
