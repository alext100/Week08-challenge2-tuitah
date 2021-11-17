import { render, screen } from "@testing-library/react";
import CreateTuit from "../pages/createtuit";

describe("Given a CreateTuit component", () => {
  describe("When it rendered", () => {
    test("It should show input area and the button", () => {
      render(<CreateTuit />);

      const inputTuitArea = screen.getByRole("textbox", {
        name: "Maximum 200 characteres",
      });
      const submitButton = screen.getByRole("button", { name: "Create tuit" });

      expect(inputTuitArea).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  });
});
