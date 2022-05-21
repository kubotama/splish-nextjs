import { useState } from "react";

export const useRegisterBlock = () => {
  const [inputTextarea, setInputTextarea] = useState("");
  const [registeredText, setRegisteredText] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);

  const onChangeInputrTextarea = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputTextarea(e.target.value);
    setRegisterButtonDisabled(e.target.value !== "" ? false : true);
  };

  return {
    inputTextarea,
    registeredText,
    registerButtonDisabled,
    onChangeInputrTextarea,
  };
};