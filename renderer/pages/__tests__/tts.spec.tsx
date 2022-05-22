import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import IndexPage from "../index";

describe("変換ブロック", () => {
  beforeEach(() => {
    render(<IndexPage />);
  });

  it("登録ボタンがクリックされて登録されたテキストに設定されると、変換ボタンが有効になる", async () => {
    const testText = "テスト";

    // 最初は変換ボタンは無効
    expect(screen.getByText("変換")).toBeDisabled();

    // 入力欄に文字列を入力
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      testText
    );

    // 登録ボタンをクリック
    await userEvent.click(screen.getByText("登録"));

    // 変換ボタンが有効になる
    expect(screen.getByText("変換")).toBeEnabled();
  });
  it("変換ボタンがクリックされると、変換されたテキストに設定される", async () => {
    const testText = "テスト";

    // 最初は変換されたテキストは空文字
    expect(screen.getByTestId("ttsedText")).toHaveTextContent("");
    // 最初は再生ボタンは無効
    expect(screen.getByText("変換")).toBeDisabled();

    // 入力欄に文字列を入力
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      testText
    );

    // 登録ボタンをクリック
    await userEvent.click(screen.getByText("登録"));

    // 変換ボタンをクリック
    await userEvent.click(screen.getByText("変換"));

    // 変換されたテキストに設定されている
    expect(screen.getByTestId("ttsedText")).toHaveTextContent(testText);
  });
});
