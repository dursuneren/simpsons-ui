import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { SimpsonsProvider } from "../contexts/SimpsonsContext";
import Add from "./Add";

test("Try to add new simpson but enter wrong image link type and stick to validation", async () => {
  render(
    <BrowserRouter>
      <SimpsonsProvider>
        <Add />
      </SimpsonsProvider>
    </BrowserRouter>
  );

  const simpson = userEvent;

  await simpson.type(screen.getByLabelText(/Name Surname/i), "Eren");
  await simpson.type(screen.getByLabelText(/Job Title/i), "Computer Engineer");
  await simpson.type(screen.getByLabelText(/About Him/i), "He is a good guy");
  //wrong image link
  await simpson.type(screen.getByLabelText(/Image Link/i), "http");

  //submit form
  await simpson.click(screen.getByText(/Submit/i));

  await waitFor(() => {
    expect(screen.getByText(/avatar must be a valid URL/i)).toBeInTheDocument();
  });
});
