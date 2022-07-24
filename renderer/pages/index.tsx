import React, { useState } from "react";

// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import Layout from "../components/Layout";
// import TtsBlock from "../components/TtsBlock";
// import SoundBlock from "../components/SoundBlock";
import { useRegisterBlock } from "../hooks/UseRegisterBlock";
import { useTtsBlock } from "../hooks/UseTtsBlock";
import { useSoundBlock } from "../hooks/UseSoundBlock";

const IndexPage = () => {
  const {
    inputTextarea,
    registeredText,
    registerButtonDisabled,
    ttsButtonDisabled,
    onClickRegisterButton,
    onChangeInputrTextarea,
  } = useRegisterBlock();

  const { ttsedText, soundButtonDisabled, onClickTtsButton } =
    useTtsBlock(registeredText);

  const { soundButtonLabel, onClickSoundButton } = useSoundBlock();

  const [file, setFile] = useState("");
  const [url, setUrl] = useState<string | undefined>(undefined);

  const onClickTest = async () => {
    window.splish.testMessage().then(async (buffer) => {
      setFile(buffer.toString());
      const ctx = new AudioContext();
      let fakeAudioBuffer = null;
      const audioBuffer = await ctx.decodeAudioData(buffer.buffer);
      // fakeAudioBuffer = audioBuffer;
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      // const mediaStreamDest = ctx.createMediaStreamDestination();
      source.connect(ctx.destination);
      // const { stream } = mediaStreamDest;
      // setFile(stream.getAudioTracks().toString());
      // setUrl(stream);
      source.start();
    });
  };

  const handleFiles: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    // console.log("file:", file);
    setFile(file.name);
    setUrl(URL.createObjectURL(file));
  };

  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      {/* 登録ブロック */}
      <div>
        <div>
          <div>登録するテキスト</div>
          <div>
            <textarea
              placeholder="登録するテキストを入力"
              onChange={onChangeInputrTextarea}
              value={inputTextarea}
            />
          </div>
          <div>
            <button
              disabled={registerButtonDisabled}
              onClick={onClickRegisterButton}
            >
              登録
            </button>
          </div>
          <div>登録されたテキスト</div>
          <div data-testid="registeredText">{registeredText}</div>
        </div>

        {/* 変換ブロック */}
        <div>
          <div>
            <button disabled={ttsButtonDisabled} onClick={onClickTtsButton}>
              変換
            </button>
          </div>
          <div>変換されたテキスト</div>
          <div data-testid="ttsedText">{ttsedText}</div>
        </div>

        {/* 再生ブロック */}
        <div>
          <button disabled={soundButtonDisabled} onClick={onClickSoundButton}>
            {soundButtonLabel}
          </button>
        </div>

        <div>テスト: {file}</div>
        <button onClick={onClickTest}>テスト</button>
        <input type="file" onChange={handleFiles} />
        {/* <div>url: {url}</div> */}
        {/* <ReactPlayer url={url} controls={true} height="100px"></ReactPlayer> */}
        <audio controls src={url}></audio>
      </div>
    </Layout>
  );
};

export default IndexPage;
