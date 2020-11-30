import React from "react";
import { render } from "@testing-library/react";
import ProductCards from "./ProductCards";

describe("ProductCards tests", () => {
  it("should render", () => {
    expect(render(<ProductCards />)).toBeTruthy();
  });
});
