import ReactTestRenderer from "react-test-renderer";
import TuitCard from "./TuitCard";

describe("Given a TuitCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const tuit = {
        id: "619688c43b799656d5806576",
        text: "ppppppppppppppppppp",
        likes: 0,
        date: "2021-11-18T17:09:24.499Z",
      };
      const tuitCard = ReactTestRenderer.create(
        <TuitCard key={tuit.id} tuit={tuit} />
      );

      expect(tuitCard.toJSON()).toMatchSnapshot();
    });
  });
});
