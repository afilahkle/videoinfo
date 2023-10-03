const electron = require('electron');
const path = require('path');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadURL(path.join(app.getAppPath(), 'index.html'));

  ipcMain.on('video:submit', (event, path) => {
    console.log(p);
  });
});
