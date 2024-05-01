// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    setDBItem(key: string, value: any) {
      ipcRenderer.send('set-item', {store_key: key, value})
    },
    getDbItem(key: string) {
      ipcRenderer.send('get-item', {store_key: key})
      ipcRenderer.on('get-item', (data, args) => {
        if (args == 'dark') {
          document.documentElement!.classList.add('dark')
        }        
      });
    },
    showCallModal() {
      ipcRenderer.send('show-call-modal')

    }
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
