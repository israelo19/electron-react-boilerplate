import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement; //
const root = createRoot(container);
root.render(<App />); //renders full app -->index.tsx

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {  //listener
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['Send or Bing']); //sends message to backend

window.electron.ipcRenderer.sendMessage('doSomeBackendTask', []);

window.electron.ipcRenderer.sendMessage('sendConfirmation', ['Sending Request']);
