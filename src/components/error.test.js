import { render, screen } from "@testing-library/react";
import Error from "./error";

test("renders learn react link", () => {
  render(<Error text="Test Error Component!"/>);
  const linkElement = screen.getByText(/Test Error Component!/i);
  expect(linkElement).toBeInTheDocument();
});
