import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const { name, email, phone } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-step">
      <h2>Step 1: Personal Information</h2>
      <form>
        <div className="form-group">
          <FaUser />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <FaEnvelope />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <FaPhone />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <button type="button" className="next-btn" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
