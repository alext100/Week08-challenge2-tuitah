import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it rendered", () => {
    test("Then it should show 2 links to the pages", async () => {
      render(<Header />);

      const allTuitsLink = screen.getByRole("link", {
        name: "All Tuits",
      });
      const createTuitLink = screen.getByRole("link", { name: "Create Tuit" });
      const hamburgerButton = screen.getByRole("button", {
        name: "Toggle navigation",
      });

      expect(allTuitsLink).toBeInTheDocument();
      expect(createTuitLink).toBeInTheDocument();
      expect(hamburgerButton).toBeInTheDocument();
    });
  });
});
