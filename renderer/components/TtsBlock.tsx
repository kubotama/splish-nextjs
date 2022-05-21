import React from "react";

const TtsBlock = () => {
  return (
    <div>
      <div>
        <button disabled>変換</button>
      </div>
      <div>変換されたテキスト</div>
      <div data-testid="ttsedText"></div>
    </div>
  );
};

export default TtsBlock;
