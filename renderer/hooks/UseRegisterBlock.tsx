import { useState } from "react";

export const useRegisterBlock = () => {
  const [inputTextarea, setInputTextarea] = useState("");
  const [registeredText, setRegisteredText] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);
  const [ttsButtonDisabled, setTtsButtonDisabled] = useState(true);

  const onChangeInputrTextarea = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputTextarea(e.target.value);

    setRegisterButtonDisabled(e.target.value !== "" ? false : true);
  };

  const onClickRegisterButton = () => {
    // 登録ボタンをクリックすると、登録されたテキストが設定されて、変換ボタンが有効になる
    setRegisteredText(inputTextarea);
    setTtsButtonDisabled(false);
  };

  return {
    inputTextarea,
    registeredText,
    registerButtonDisabled,
    ttsButtonDisabled,
    onClickRegisterButton,
    onChangeInputrTextarea,
  };
};
