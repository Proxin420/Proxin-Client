const { app, shell, BrowserWindow } = require('electron');
const path = require('path');

app.commandLine.appendSwitch("disable-frame-rate-limit");
app.commandLine.appendSwitch("disable-gpu-vsync");

const startApp = () => {
  const splashscreen = new BrowserWindow({
    width: 310,
    height: 294,
    resizable: false,
    autoHideMenuBar: true,
    title: "Proxin",
    show: true,
    transparent: true,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      contextIsolation: false,
    }
  });
  splashscreen.loadFile("src/splash.html");
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    title: "Proxin",
    show: false,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: false,
      enableRemoteModule: false,
      preload: path.resolve(app.getAppPath(), 'src/preload.js'),
    }
  });
  win.loadURL("https://kirka.io/");
  win.webContents.once("did-finish-load", () => {
    splashscreen.close()
    win.show();
  });
};

app.on('ready', startApp);

