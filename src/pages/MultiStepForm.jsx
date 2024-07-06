import React, { useState, useEffect } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Navigation from "../components/Navigation";
import { validateForm } from "../utils/validation";
import { saveToLocalStorage, getFromLocalStorage } from "../localStorage";
import "../styles/MultiStepForm.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = getFromLocalStorage("formData");
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const nextStep = () => {
    const validationErrors = validateForm(formData, currentStep);
    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
      saveToLocalStorage("formData", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const submitForm = () => {
    console.log("Form submitted:", formData);
    localStorage.removeItem("formData");
  };

  return (
    <div className="multi-step-form">
      <Navigation currentStep={currentStep} />
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
