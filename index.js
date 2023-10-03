const electron = require('electron');
const path = require('path');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
    },
  });

  mainWindow.loadURL(path.join(app.getAppPath(), 'index.html'));
});
