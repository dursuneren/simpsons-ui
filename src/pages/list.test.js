import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SimpsonsProvider } from "../contexts/SimpsonsContext";
import List from "./List";

test("List page have 'Marge Simpson'?", async () => {
  render(
    <BrowserRouter>
      <SimpsonsProvider>
        <List />
      </SimpsonsProvider>
    </BrowserRouter>
  );
  //Find Marge in the list
  await screen.findByText(/Marge Simpson/);
  //Find "34-test" using the data-testid attribute
  const element = expect(screen.getByTestId("34-test"));
  element.toBeInTheDocument();
});
