import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Step3 = ({ formData, prevStep, submitForm }) => {
  const { name, email, phone, address1, address2, city, state, zip } = formData;

  return (
    <div className="form-step">
      <h2>Step 3: Confirmation</h2>
      <div className="confirmation-details">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address Line 1:</strong> {address1}
        </p>
        <p>
          <strong>Address Line 2:</strong> {address2}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>State:</strong> {state}
        </p>
        <p>
          <strong>Zip Code:</strong> {zip}
        </p>
      </div>
      <button type="button" className="prev-btn" onClick={prevStep}>
        <FaArrowLeft /> Back
      </button>
      <button type="button" className="submit-btn" onClick={submitForm}>
        <FaCheckCircle /> Submit
      </button>
    </div>
  );
};

export default Step3;
