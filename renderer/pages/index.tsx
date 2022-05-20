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
          <button>登録</button>
        </div>

        <div>登録されたテキスト</div>
        <div data-testid="registeredText"></div>
        <div>
          <button>変換</button>
        </div>

        <div>
          <button>再生</button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
