import IndexPage from "../index";
import { render } from "@testing-library/react";

describe("起動時の画面", () => {
  it("起動時に表示される要素をテストする", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <IndexPage />
    );

    // 登録ブロック
    // テキストの登録ブロックのラベルをテストする
    const inputLabel = getByText("登録するテキスト");
    expect(inputLabel).toBeInTheDocument();

    // 登録するテキストの入力欄が空文字""であることをテストする
    const inputTextarea = getByPlaceholderText("登録するテキストを入力");
    expect(inputTextarea).toHaveValue("");

    // 登録ボタンが無効化されていることをテストする
    const registerButton = getByText("登録");
    expect(registerButton).toBeDisabled();

    // 登録されたテキストのラベルをテストする
    const regiteredLabel = getByText("登録されたテキスト");
    expect(regiteredLabel).toBeInTheDocument();

    //登録されたテキストが空文字""であることをテストする
    const registeredText = getByTestId("registeredText");
    expect(registeredText).toHaveTextContent("");

    // 変換ブロック
    // 変換ボタンが無効化されていることをテストする
    const ttsButton = getByText("変換");
    expect(ttsButton).toBeDisabled();

    // 変換されたテキストのラベルをテストする
    const ttsedLabel = getByText("変換されたテキスト");
    expect(ttsedLabel).toBeInTheDocument();

    // 変換されたテキストが空文字""であることをテストする
    const ttsedText = getByTestId("ttsedText");
    expect(ttsedText).toHaveTextContent("");

    // 再生ブロック
    // 再生ボタンが無効化されていることをテストする
    const playButton = getByText("再生");
    expect(playButton).toBeDisabled();
  });
});
