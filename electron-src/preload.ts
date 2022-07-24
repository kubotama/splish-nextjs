/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ipcRenderer, IpcRenderer, contextBridge } from 'electron'

declare global {
  // namespace NodeJS {
  //   interface Global {
    interface Window {
      ipcRenderer: IpcRenderer
    // }
  }
}

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
  window.ipcRenderer = ipcRenderer
})

contextBridge.exposeInMainWorld("splish", {
  play: async (filename: string) => {ipcRenderer.send("play", filename)},
})
