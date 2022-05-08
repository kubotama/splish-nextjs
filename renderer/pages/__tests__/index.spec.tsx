import IndexPage from "../index";
import { render, fireEvent } from "@testing-library/react";

describe("IndexPageコンポーネント", () => {
  test("「再生」ボタンが作成された", () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText("再生")).toBeTruthy();
  });

  test("「再生」ボタンがクリックされた", () => {
    const { container, getByText } = render(<IndexPage />);
    const mockClickButton = (container.onclick = jest.fn());
    const button = getByText("再生");

    expect(mockClickButton).toHaveBeenCalledTimes(0);

    fireEvent.click(button);

    expect(mockClickButton).toHaveBeenCalledTimes(1);
  });
});
