import React from "react";
import {
  FaAddressCard,
  FaCity,
  FaMapMarkedAlt,
  FaGlobeAmericas,
  FaMapPin,
} from "react-icons/fa";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-step">
      <h2>Step 2: Address Information</h2>
      <form>
        <div className="form-group">
          <FaAddressCard />
          <input
            type="text"
            name="address1"
            value={address1}
            onChange={handleChange}
            placeholder="Address Line 1"
          />
        </div>
        <div className="form-group">
          <FaAddressCard />
          <input
            type="text"
            name="address2"
            value={address2}
            onChange={handleChange}
            placeholder="Address Line 2"
          />
        </div>
        <div className="form-group">
          <FaCity />
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        <div className="form-group">
          <FaMapMarkedAlt />
          <input
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            placeholder="State"
          />
        </div>
        <div className="form-group">
          <FaMapPin />
          <input
            type="text"
            name="zip"
            value={zip}
            onChange={handleChange}
            placeholder="Zip Code"
          />
        </div>
        <button type="button" className="prev-btn" onClick={prevStep}>
          Back
        </button>
        <button type="button" className="next-btn" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Step2;
