import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MultiStepForm from "../pages/MultiStepForm";

describe("MultiStepForm Component", () => {
  it("renders Step1 component initially", () => {
    const { getByPlaceholderText } = render(<MultiStepForm />);
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
  });

  it("navigates to Step2 component on Next button click in Step1", () => {
    const { getByPlaceholderText, getByText } = render(<MultiStepForm />);
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Phone"), {
      target: { value: "1234567890" },
    });
    fireEvent.click(getByText("Next"));
    expect(getByPlaceholderText("Address Line 1")).toBeInTheDocument();
  });

  it("navigates to Step3 component on Next button click in Step2", () => {
    const { getByPlaceholderText, getByText } = render(<MultiStepForm />);
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Phone"), {
      target: { value: "1234567890" },
    });
    fireEvent.click(getByText("Next"));
    fireEvent.change(getByPlaceholderText("Address Line 1"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(getByPlaceholderText("Address Line 2"), {
      target: { value: "Apt 4B" },
    });
    fireEvent.change(getByPlaceholderText("City"), {
      target: { value: "New York" },
    });
    fireEvent.change(getByPlaceholderText("State"), {
      target: { value: "NY" },
    });
    fireEvent.change(getByPlaceholderText("Zip Code"), {
      target: { value: "10001" },
    });
    fireEvent.click(getByText("Next"));
    expect(getByText("Name: John Doe")).toBeInTheDocument();
  });

  it("calls submitForm on Submit button click in Step3", () => {
    const { getByPlaceholderText, getByText } = render(<MultiStepForm />);
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Phone"), {
      target: { value: "1234567890" },
    });
    fireEvent.click(getByText("Next"));
    fireEvent.change(getByPlaceholderText("Address Line 1"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(getByPlaceholderText("Address Line 2"), {
      target: { value: "Apt 4B" },
    });
    fireEvent.change(getByPlaceholderText("City"), {
      target: { value: "New York" },
    });
    fireEvent.change(getByPlaceholderText("State"), {
      target: { value: "NY" },
    });
    fireEvent.change(getByPlaceholderText("Zip Code"), {
      target: { value: "10001" },
    });
    fireEvent.click(getByText("Next"));
    fireEvent.click(getByText("Submit"));
    expect(console.log).toHaveBeenCalledWith("Form submitted:", {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address1: "123 Main St",
      address2: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
    });
  });
});
