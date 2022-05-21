import IndexPage from "../index";
import { render, screen } from "@testing-library/react";

describe("起動時の画面", () => {
  beforeEach(() => {
    render(<IndexPage />);
  });

  describe("登録ブロック", () => {
    it("テキストの登録ブロックのラベルをテストする", () => {
      // テキストの登録ブロックのラベルをテストする
      const inputLabel = screen.getByText("登録するテキスト");
      expect(inputLabel).toBeInTheDocument();
    });

    it("登録するテキストの入力欄が空文字であることをテストする", () => {
      // 登録するテキストの入力欄が空文字""であることをテストする
      const inputTextarea =
        screen.getByPlaceholderText("登録するテキストを入力");
      expect(inputTextarea).toHaveValue("");
    });

    it("登録ボタンが無効化されていることをテストする", () => {
      // 登録ボタンが無効化されていることをテストする
      const registerButton = screen.getByText("登録");
      expect(registerButton).toBeDisabled();
    });

    it("登録されたテキストのラベルをテストする", () => {
      // 登録されたテキストのラベルをテストする
      const regiteredLabel = screen.getByText("登録されたテキスト");
      expect(regiteredLabel).toBeInTheDocument();
    });

    it("登録されたテキストが空文字であることをテストする", () => {
      //登録されたテキストが空文字""であることをテストする
      const registeredText = screen.getByTestId("registeredText");
      expect(registeredText).toHaveTextContent("");
    });
  });

  describe("変換ブロック", () => {
    it("変換ボタンが無効化されていることをテストする", () => {
      const ttsButton = screen.getByText("変換");
      expect(ttsButton).toBeDisabled();
    });

    it("変換されたテキストのラベルをテストする", () => {
      const ttsedLabel = screen.getByText("変換されたテキスト");
      expect(ttsedLabel).toBeInTheDocument();
    });

    it("変換されたテキストが空文字であることをテストする", () => {
      // 変換されたテキストが空文字""であることをテストする
      const ttsedText = screen.getByTestId("ttsedText");
      expect(ttsedText).toHaveTextContent("");
    });
  });

  describe("再生ブロック", () => {
    it("再生ボタンが無効化されていることをテストする", () => {
      const playButton = screen.getByText("再生");
      expect(playButton).toBeDisabled();
    });
  });
});
