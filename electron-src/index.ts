// Native
import { join } from 'path'
import { URL } from 'url'

import { Howl } from "howler";

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent, Menu } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, 'preload.js'),
    },
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : new URL('file:///Users/james/Documents/GitHub/electron-next/renderer/out/index.html').toString()

  mainWindow.loadURL(url);
  setupWindowMenu(mainWindow);
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// // listen the channel `message` and resend the received message to the renderer process
// ipcMain.on('message', (event: IpcMainEvent, message: any) => {
//   console.log(message)
//   setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
// })

ipcMain.on("play", (event: IpcMainEvent, filename: string) => {
  console.log(__dirname);
  console.log(filename);
  const howler = new Howl({
    src: [filename],
    onloaderror: (id: number, err: any) => {
      console.log(id+ " " + filename + err);
    },
    onend: () => {
      event.sender.send("playEnd", "");
    },
  });
  howler.play();
})

const setupWindowMenu = (window: BrowserWindow) => {
  const template = [
    {
      label: "&File",
      submenu: [
        {
          label: "&Quit",
          accelerator: 'Ctrl+Q',
          click() { window.close() },
        },
      ],
    },
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu)
}
