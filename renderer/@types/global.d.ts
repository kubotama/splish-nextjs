export interface IElectronAPI {
  testMessage: () => Promise<Buffer>;
}

declare global {
  interface Window {
    splish: IElectronAPI;
  }
}
