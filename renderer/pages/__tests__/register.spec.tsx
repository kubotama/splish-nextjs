import { render, screen, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import IndexPage from "../index";

import { useRegisterBlock } from "../../hooks/UseRegisterBlock";

describe("登録ブロック", () => {
  it("登録するテキストの入力欄(inputText)が空文字でない場合、登録ボタン(registerButton)が有効化されることをテストする。", async () => {
    const { getByPlaceholderText, getByText } = render(<IndexPage />);

    expect(getByText("登録")).toBeDisabled();

    await userEvent.type(
      getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    expect(getByText("登録")).toBeEnabled();
  });

  it("登録するテキストの入力欄(inputText)が空文字になったら、登録ボタン(registerButton)が無効化されることをテストする。", async () => {
    const { getByPlaceholderText, getByText } = render(<IndexPage />);

    await userEvent.type(
      getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    expect(getByText("登録")).toBeEnabled();

    await userEvent.clear(getByPlaceholderText("登録するテキストを入力"));

    expect(getByText("登録")).toBeDisabled();
  });

  it("登録ボタン(registerButton)がクリックされたら、登録されたテキスト(registeredText)に、登録するテキストの入力欄(inputText)に入力されていた文字列が設定されることをテストする。", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <IndexPage />
    );

    await userEvent.type(
      getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    await userEvent.click(getByText("登録"));

    expect(getByTestId("registeredText")).toHaveTextContent("テスト");
  });
});
