import React, { useState } from "react";

import { Howl } from "howler";

export const useSoundBlock = () => {
  const [soundButtonLabel, setSoundButtonLabel] = useState("再生");
  const onClickSoundButton = () => {
    setSoundButtonLabel(soundButtonLabel === "再生" ? "停止" : "再生");

    const filename = "test.wav";
    const howler = new Howl({
      src: [filename],
      onend: () => {
        setSoundButtonLabel("再生");
      },
    });
    howler.play();
  };

  return { soundButtonLabel, onClickSoundButton };
};
