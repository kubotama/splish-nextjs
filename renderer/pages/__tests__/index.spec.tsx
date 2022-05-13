import IndexPage from "../index";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("IndexPageコンポーネント", () => {
  test("「再生」ボタンが作成された", () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText("再生")).toBeTruthy();
  });

  test("「再生」ボタンがクリックされるとラベルが「停止」に変わる", async () => {
    const { container, getByText } = render(<IndexPage />);

    // 初期状態: ボタンのラベルは「再生」
    expect(getByText("再生")).toBeInTheDocument();

    // ボタンをクリック
    const button = getByText("再生");
    await userEvent.click(button);

    // クリック後: ボタンのラベルは「停止」
    expect(getByText("停止")).toBeInTheDocument();
  });
});
