const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  window.setMenuBarVisibility(false);

  window.setFullScreen(true)

  window.loadFile('./index.html');
});