import { useState } from "react";

export const useRegisterBlock = () => {
  const [inputTextarea, setInputTextarea] = useState("");
  const [registeredText, setRegisteredText] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);

  const onChangeInputrTextarea = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputTextarea(e.target.value);
    if (e.target.value !== "") {
      setRegisterButtonDisabled(false);
    } else {
      setRegisterButtonDisabled(true);
    }
  };

  return {
    inputTextarea,
    registeredText,
    registerButtonDisabled,
    onChangeInputrTextarea,
  };
};
