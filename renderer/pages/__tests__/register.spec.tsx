import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import IndexPage from "../index";

describe("登録ブロック", () => {
  beforeEach(() => {
    render(<IndexPage />);
  });

  it("登録するテキストの入力欄(inputText)が空文字でない場合、登録ボタン(registerButton)が有効化されることをテストする。", async () => {
    expect(screen.getByText("登録")).toBeDisabled();

    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    expect(screen.getByText("登録")).toBeEnabled();
  });

  it("登録するテキストの入力欄(inputText)が空文字になったら、登録ボタン(registerButton)が無効化されることをテストする。", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    expect(screen.getByText("登録")).toBeEnabled();

    await userEvent.clear(
      screen.getByPlaceholderText("登録するテキストを入力")
    );

    expect(screen.getByText("登録")).toBeDisabled();
  });

  it("登録ボタン(registerButton)がクリックされたら、登録されたテキスト(registeredText)に、登録するテキストの入力欄(inputText)に入力されていた文字列が設定されることをテストする。", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    await userEvent.click(screen.getByText("登録"));

    expect(screen.getByTestId("registeredText")).toHaveTextContent("テスト");
  });
});
