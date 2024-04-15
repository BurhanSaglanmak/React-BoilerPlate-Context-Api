import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import FormPage from "./FormPage";

test("form renders correctly", () => {
    const { getByPlaceholderText, debug } = render(<FormPage />)

    expect(getByPlaceholderText(/^email/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/^pass/i)).toBeInTheDocument()
}) 