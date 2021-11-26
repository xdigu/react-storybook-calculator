import { render, screen } from "@testing-library/react";

import Display from "./";

test("should work", () => {
  render(<Display value="0" />);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});
