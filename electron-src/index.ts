// Native
import { join } from "path";
import { URL } from "url";

import fs from "fs";

import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { google } from "@google-cloud/text-to-speech/build/protos/protos";

// Packages
import { BrowserWindow, app, ipcMain, Menu } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

import { IPCKeys } from "./constants";

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  const url = isDev
    ? "http://localhost:8000/"
    : new URL(
        "file:///Users/james/Documents/GitHub/electron-next/renderer/out/index.html"
      ).toString();

  mainWindow.loadURL(url);
  setupWindowMenu(mainWindow);

  ipcMain.handle(IPCKeys.TEST_MESSAGE, async () => {
    const filename = "./output.mp3";
    const client = new TextToSpeechClient();
    const text = "This is sample speech. This is sample speech.";

    const request: google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
      input: { text: text },
      voice: {
        languageCode: "en-US",
        ssmlGender: "NEUTRAL",
        name: "en-US-Standard-J",
      },
      audioConfig: {
        audioEncoding: "MP3",
        effectsProfileId: ["headphone-class-device"],
      },
    };

    const [response] = await client.synthesizeSpeech(request);
    if (response.audioContent) {
      fs.writeFileSync(filename, response.audioContent);
      const buffer = response.audioContent;
      return buffer;
    }
  });
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

const setupWindowMenu = (window: BrowserWindow) => {
  const template = [
    {
      label: "&File",
      submenu: [
        {
          label: "&Quit",
          accelerator: "Ctrl+Q",
          click() {
            window.close();
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};
