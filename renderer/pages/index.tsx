import React, { useState } from "react";

import Layout from "../components/Layout";

const IndexPage = () => {
  const [labelPlayButton, setLabelPlayButton] = useState("再生");
  const toggleLabelPlayButton = () => {
    setLabelPlayButton(labelPlayButton === "再生" ? "停止" : "再生");
  };
  const onClickPlay = () => {
    toggleLabelPlayButton();
  };

  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      <div>
        <button onClick={onClickPlay}>{labelPlayButton}</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
