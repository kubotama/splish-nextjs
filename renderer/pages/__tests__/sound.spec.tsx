import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import IndexPage from "../index";

describe("再生ブロック", () => {
  beforeEach(() => {
    render(<IndexPage />);
  });

  it("変換ボタンがクリックされると再生ボタンが有効になる", async () => {
    // 最初は再生ボタンは無効
    expect(screen.getByText("再生")).toBeDisabled();

    // 入力欄に文字列を入力
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    // 登録ボタンをクリック
    await userEvent.click(screen.getByText("登録"));

    // 変換ボタンをクリック
    await userEvent.click(screen.getByText("変換"));

    // 再生ボタンが有効になる
    expect(screen.getByText("再生")).toBeEnabled();
  });

  it("再生ボタンがクリックされるとボタンのラベルが停止に変わる", async () => {
    // 再生ボタンが無効
    expect(screen.getByText("再生")).toBeDisabled();

    // 入力欄に文字列を入力
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力"),
      "テスト"
    );

    // 登録ボタンをクリック
    await userEvent.click(screen.getByText("登録"));

    // 変換ボタンをクリック
    await userEvent.click(screen.getByText("変換"));

    // 再生ボタンをクリック
    await userEvent.click(screen.getByText("再生"));

    // 再生ボタンがない
    expect(screen.queryByText("再生")).toBeNull();
    // 停止ボタンが表示される
    expect(screen.getByText("停止")).toBeEnabled();
  });
});
