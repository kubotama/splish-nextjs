import React from "react";

const TtsBlock: React.FC<{ ttsButtonDisabled: boolean }> = ({
  ttsButtonDisabled,
}) => {
  return (
    <div>
      <div>
        <button disabled={ttsButtonDisabled}>変換</button>
      </div>
      <div>変換されたテキスト</div>
      <div data-testid="ttsedText"></div>
    </div>
  );
};

export default TtsBlock;
