import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Step3 from "../Step3";

describe("Step3 Component", () => {
  it("renders correctly", () => {
    const formData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address1: "123 Main St",
      address2: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
    };
    const { getByText } = render(
      <Step3 formData={formData} prevStep={() => {}} submitForm={() => {}} />
    );
    expect(getByText("Name: John Doe")).toBeInTheDocument();
    expect(getByText("Email: john@example.com")).toBeInTheDocument();
    expect(getByText("Phone: 1234567890")).toBeInTheDocument();
    expect(getByText("Address Line 1: 123 Main St")).toBeInTheDocument();
    expect(getByText("Address Line 2: Apt 4B")).toBeInTheDocument();
    expect(getByText("City: New York")).toBeInTheDocument();
    expect(getByText("State: NY")).toBeInTheDocument();
    expect(getByText("Zip Code: 10001")).toBeInTheDocument();
  });

  it("calls prevStep on Back button click", () => {
    const prevStep = jest.fn();
    const formData = {};
    const { getByText } = render(
      <Step3 formData={formData} prevStep={prevStep} submitForm={() => {}} />
    );
    fireEvent.click(getByText("Back"));
    expect(prevStep).toHaveBeenCalled();
  });

  it("calls submitForm on Submit button click", () => {
    const submitForm = jest.fn();
    const formData = {};
    const { getByText } = render(
      <Step3 formData={formData} prevStep={() => {}} submitForm={submitForm} />
    );
    fireEvent.click(getByText("Submit"));
    expect(submitForm).toHaveBeenCalled();
  });
});
