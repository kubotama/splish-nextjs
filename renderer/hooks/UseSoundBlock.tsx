import React, { useState } from "react";

export const useSoundBlock = () => {
  const [soundButtonLabel, setSoundButtonLabel] = useState("再生");
  const onClickSoundButton = () => {
    setSoundButtonLabel(soundButtonLabel === "再生" ? "停止" : "再生");
  };

  return { soundButtonLabel, onClickSoundButton };
};
