import React, { useState } from "react";

import { Howl, Howler } from "howler";

import Layout from "../components/Layout";

const IndexPage = () => {
  const [labelPlayButton, setLabelPlayButton] = useState("再生");
  const toggleLabelPlayButton = () => {
    setLabelPlayButton(labelPlayButton === "再生" ? "停止" : "再生");
  };
  const onClickPlay = () => {
    const howler = new Howl({
      src: ["/1.wav"],
    });
    howler.play();
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
