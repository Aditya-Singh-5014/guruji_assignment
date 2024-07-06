import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Step1 from "../Step1";

describe("Step1 Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Step1 formData={{}} setFormData={() => {}} nextStep={() => {}} />
    );
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Phone")).toBeInTheDocument();
  });

  it("calls setFormData on input change", () => {
    const setFormData = jest.fn();
    const { getByPlaceholderText } = render(
      <Step1 formData={{}} setFormData={setFormData} nextStep={() => {}} />
    );
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ name: "John Doe" })
    );
  });

  it("calls nextStep on button click", () => {
    const nextStep = jest.fn();
    const { getByText } = render(
      <Step1 formData={{}} setFormData={() => {}} nextStep={nextStep} />
    );
    fireEvent.click(getByText("Next"));
    expect(nextStep).toHaveBeenCalled();
  });
});
