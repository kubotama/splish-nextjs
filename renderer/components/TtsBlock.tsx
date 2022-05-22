import React, { useState } from "react";

import { useTtsBlock } from "../hooks/UseTtsBlock";

const TtsBlock: React.FC<{
  ttsButtonDisabled: boolean;
  registeredText: string;
}> = ({ ttsButtonDisabled, registeredText }) => {
  const { ttsedText, onClickTtsButton } = useTtsBlock(registeredText);

  return (
    <div>
      <div>
        <button disabled={ttsButtonDisabled} onClick={onClickTtsButton}>
          変換
        </button>
      </div>
      <div>変換されたテキスト</div>
      <div data-testid="ttsedText">{ttsedText}</div>
    </div>
  );
};

export default TtsBlock;
