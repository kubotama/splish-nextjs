import IndexPage from "../index";
import { render } from "@testing-library/react";

describe("IndexPageコンポーネント", () => {
  test("「再生」ボタンが作成された", () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText("再生")).toBeTruthy();
  });
});
