import React from "react";

import Layout from "../components/Layout";
import TtsBlock from "../components/TtsBlock";
import SoundBlock from "../components/SoundBlock";
import { useRegisterBlock } from "../hooks/UseRegisterBlock";

const IndexPage = () => {
  const {
    inputTextarea,
    registeredText,
    registerButtonDisabled,
    onClickRegisterButton,
    onChangeInputrTextarea,
  } = useRegisterBlock();

  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      <div>
        <div>
          <div>登録するテキスト</div>
          <div>
            <textarea
              placeholder="登録するテキストを入力"
              onChange={onChangeInputrTextarea}
              value={inputTextarea}
            />
          </div>
          <div>
            <button
              disabled={registerButtonDisabled}
              onClick={onClickRegisterButton}
            >
              登録
            </button>
          </div>
          <div>登録されたテキスト</div>
          <div data-testid="registeredText">{registeredText}</div>
        </div>

        <TtsBlock />

        <SoundBlock />
      </div>
    </Layout>
  );
};

export default IndexPage;
