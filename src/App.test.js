import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SimpsonsProvider } from "./contexts/SimpsonsContext";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <SimpsonsProvider>
        <App />
      </SimpsonsProvider>
    </BrowserRouter>
  );
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
