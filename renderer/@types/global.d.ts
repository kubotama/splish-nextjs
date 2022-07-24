export interface IElectronAPI {
  textToSpeech: (text: string) => Promise<Buffer>;
}

declare global {
  interface Window {
    splish: IElectronAPI;
  }
}
