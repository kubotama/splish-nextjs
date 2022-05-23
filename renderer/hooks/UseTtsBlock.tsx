import React, { useState } from "react";

export const useTtsBlock = (registeredText: string) => {
  const [ttsedText, setTtsedText] = useState("");
  const [soundButtonDisabled, setSoundButtonDisabled] = useState(true);
  const onClickTtsButton = () => {
    setTtsedText(registeredText);
    setSoundButtonDisabled(false);
  };

  return { ttsedText, soundButtonDisabled, onClickTtsButton };
};
