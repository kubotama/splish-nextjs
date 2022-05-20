import IndexPage from "../index";
import { render } from "@testing-library/react";

describe("起動時の画面", () => {
  it("登録ボタンが表示される", () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText("登録")).toBeInTheDocument();
  });
});
