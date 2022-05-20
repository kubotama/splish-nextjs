import React from "react";

import Layout from "../components/Layout";

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

        <div>
          <button disabled>変換</button>
        </div>
        <div>変換されたテキスト</div>
        <div data-testid="ttsedText"></div>

        <div>
          <button disabled>再生</button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
