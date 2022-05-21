import React from "react";

const RegisterBlock = () => {
  return (
    <div>
      <div>登録するテキスト</div>
      <div>
        <textarea placeholder="登録するテキストを入力" />
      </div>
      <div>
        <button disabled>登録</button>
      </div>
      <div>登録されたテキスト</div>
      <div data-testid="registeredText"></div>
    </div>
  );
};

export default RegisterBlock;
