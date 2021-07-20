import { render, screen } from "@testing-library/react";

import Button from "./";

test("should render a number type button", () => {
  render(<Button label="9" buttonType="NUMBER" />);
  const linkElement = screen.getByText(/9/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render a large number type button", () => {
  render(<Button label="0" buttonType="LARGE_NUMBER" />);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render a operator type button", () => {
  render(<Button label="+" buttonType="OPERATOR" />);
  const linkElement = screen.getByText(/\+/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render a light type button", () => {
  render(<Button label="%" buttonType="LIGHT" />);
  const linkElement = screen.getByText(/%/i);
  expect(linkElement).toBeInTheDocument();
});
