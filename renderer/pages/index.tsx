import React from "react";

import Layout from "../components/Layout";
// import TtsBlock from "../components/TtsBlock";
// import SoundBlock from "../components/SoundBlock";
import { useRegisterBlock } from "../hooks/UseRegisterBlock";
import { useTtsBlock } from "../hooks/UseTtsBlock";

const IndexPage = () => {
  const {
    inputTextarea,
    registeredText,
    registerButtonDisabled,
    ttsButtonDisabled,
    onClickRegisterButton,
    onChangeInputrTextarea,
  } = useRegisterBlock();

  const { ttsedText, soundButtonDisabled, onClickTtsButton } =
    useTtsBlock(registeredText);

  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      {/* 登録ブロック */}
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

        {/* 変換ブロック */}
        <div>
          <div>
            <button disabled={ttsButtonDisabled} onClick={onClickTtsButton}>
              変換
            </button>
          </div>
          <div>変換されたテキスト</div>
          <div data-testid="ttsedText">{ttsedText}</div>
        </div>

        {/* 再生ブロック */}
        <div>
          <button disabled={soundButtonDisabled}>再生</button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
