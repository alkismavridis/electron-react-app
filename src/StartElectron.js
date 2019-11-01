// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

class ElectronApp {
  constructor(isDev) {
    this.isDev = isDev;
    this.mainWindow = null;

    app.on('ready', ()=>this.createWindow());
    app.on('activate', ()=> {
      if (this.mainWindow === null) this.createWindow()
    });

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit();
    });
  }


  createWindow () {
    this.mainWindow = new BrowserWindow({width: 800, height: 600});
    this.mainWindow.on('closed', () => this.closeMainWindow());

    if(this.isDev) this.mainWindow.loadURL("http://localhost:3000")
    else  this.mainWindow.loadFile(path.join(__dirname, "index.html"))
  }


  closeMainWindow() {
    this.mainWindow = null;
  }
}


const IS_DEV_MODE = process.argv[2] && process.argv[2].toUpperCase() == "DEV";
new ElectronApp(IS_DEV_MODE);
