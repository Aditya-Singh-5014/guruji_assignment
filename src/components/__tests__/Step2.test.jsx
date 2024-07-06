import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Step2 from "../Step2";

describe("Step2 Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Step2
        formData={{}}
        setFormData={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
      />
    );
    expect(getByPlaceholderText("Address Line 1")).toBeInTheDocument();
    expect(getByPlaceholderText("Address Line 2")).toBeInTheDocument();
    expect(getByPlaceholderText("City")).toBeInTheDocument();
    expect(getByPlaceholderText("State")).toBeInTheDocument();
    expect(getByPlaceholderText("Zip Code")).toBeInTheDocument();
  });

  it("calls setFormData on input change", () => {
    const setFormData = jest.fn();
    const { getByPlaceholderText } = render(
      <Step2
        formData={{}}
        setFormData={setFormData}
        nextStep={() => {}}
        prevStep={() => {}}
      />
    );
    fireEvent.change(getByPlaceholderText("City"), {
      target: { value: "New York" },
    });
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ city: "New York" })
    );
  });

  it("calls nextStep on Next button click", () => {
    const nextStep = jest.fn();
    const { getByText } = render(
      <Step2
        formData={{}}
        setFormData={() => {}}
        nextStep={nextStep}
        prevStep={() => {}}
      />
    );
    fireEvent.click(getByText("Next"));
    expect(nextStep).toHaveBeenCalled();
  });

  it("calls prevStep on Back button click", () => {
    const prevStep = jest.fn();
    const { getByText } = render(
      <Step2
        formData={{}}
        setFormData={() => {}}
        nextStep={() => {}}
        prevStep={prevStep}
      />
    );
    fireEvent.click(getByText("Back"));
    expect(prevStep).toHaveBeenCalled();
  });
});
