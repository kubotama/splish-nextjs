import React, { useState } from "react";

export const useTtsBlock = (registeredText: string) => {
  const [ttsedText, setTtsedText] = useState("");
  const onClickTtsButton = () => {
    setTtsedText(registeredText);
  };

  return { ttsedText, onClickTtsButton };
};
