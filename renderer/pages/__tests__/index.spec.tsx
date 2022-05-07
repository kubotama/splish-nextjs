import IndexPage from "../index";
import { render } from "@testing-library/react";

describe("IndexPageコンポーネント", () => {
  test("", () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText("再生")).toBeTruthy();
  });
});
