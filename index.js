const electron = require('electron');
const { ffprobe } = require('fluent-ffmpeg/lib/fluent-ffmpeg');
const path = require('path');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(path.join(app.getAppPath(), 'index.html'));

  ipcMain.on('video:submit', (event, path) => {
    ffprobe(path, (err, metadata) => {
      mainWindow.webContents.send('video:info', {
        duration: metadata.format.duration,
      });
    });
  });
});
