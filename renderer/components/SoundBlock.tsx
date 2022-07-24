import React from "react";

const SoundBlock: React.FC<{ soundButtonDisabled: boolean }> = ({
  soundButtonDisabled,
}) => (
  <div>
    <button disabled={soundButtonDisabled}>再生</button>
  </div>
);

export default SoundBlock;
