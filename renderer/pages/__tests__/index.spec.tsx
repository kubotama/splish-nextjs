import IndexPage from "../index";
import { render } from "@testing-library/react";

describe("起動時の画面", () => {
  it("起動時の画面をテストする", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <IndexPage />
    );
    expect(getByText("登録するテキスト")).toBeInTheDocument();
    expect(getByPlaceholderText("登録するテキストを入力")).toBeInTheDocument();
    expect(getByText("登録")).toBeInTheDocument();

    expect(getByText("登録されたテキスト")).toBeInTheDocument();
    expect(getByTestId("registeredText")).toHaveTextContent("");
    expect(getByText("変換")).toBeInTheDocument();

    expect(getByText("再生")).toBeInTheDocument();
  });
});
