import React, { useState } from "react";

// import { ipcRenderer } from "electron";

import { Howl } from "howler";

export const useSoundBlock = () => {
  const [soundButtonLabel, setSoundButtonLabel] = useState("再生");
  const onClickSoundButton = async () => {
    setSoundButtonLabel(soundButtonLabel === "再生" ? "停止" : "再生");

    // ipcRenderer.on("playEnd", (event) => {
    //   setSoundButtonLabel("再生");
    // });

    // const filename = "./main.wav";
    const filename = "test.wav";
    const howler = new Howl({
      src: [filename],
      onend: () => {
        setSoundButtonLabel("再生");
      },
    });
    howler.play();
    // ipcRenderer.send("play", filename);
    // await (window as any).splish.play(filename);
  };

  return { soundButtonLabel, onClickSoundButton };
};
