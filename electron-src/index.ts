// Native
import { join } from "path";
import { URL } from "url";

// import { Howl } from "howler";

import fs from "fs";
// import { Buffer } from "node:buffer";

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

  ipcMain.handle(IPCKeys.TEST_MESSAGE, () => {
    const filename = "./output.mp3";
    let buffer;
    try {
      buffer = fs.readFileSync(filename);
      console.log("exist");
    } catch (error) {
      console.log("not exist");
    }

    return buffer;
    // return "テキスト";
  });
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

// // listen the channel `message` and resend the received message to the renderer process
// ipcMain.on("testMessage", () => {
//   console.log("test message");
//   return "filename";
// });

// ipcMain.on("play", (event: IpcMainEvent, filename: string) => {
//   console.log(__dirname);
//   console.log(filename);
//   const howler = new Howl({
//     src: [filename],
//     onloaderror: (id: number, err: any) => {
//       console.log(id + " " + filename + err);
//     },
//     onend: () => {
//       event.sender.send("playEnd", "");
//     },
//   });
//   howler.play();
// });

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
