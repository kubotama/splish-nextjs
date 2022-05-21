import React from "react";

import Layout from "../components/Layout";
import TtsBlock from "../components/TtsBlock";
import SoundBlock from "../components/SoundBlock";

const IndexPage = () => {
  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      <div>
        <div>登録するテキスト</div>
        <div>
          <textarea placeholder="登録するテキストを入力" />
        </div>
        <div>
          <button disabled>登録</button>
        </div>
        <div>登録されたテキスト</div>
        <div data-testid="registeredText"></div>

        <TtsBlock />

        <SoundBlock />
      </div>
    </Layout>
  );
};

export default IndexPage;
