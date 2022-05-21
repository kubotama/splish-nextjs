import React from "react";

import Layout from "../components/Layout";
import RegisterBlock from "../components/RegisterBlock";
import TtsBlock from "../components/TtsBlock";
import SoundBlock from "../components/SoundBlock";

const IndexPage = () => {
  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      <div>
        <RegisterBlock />

        <TtsBlock />

        <SoundBlock />
      </div>
    </Layout>
  );
};

export default IndexPage;
