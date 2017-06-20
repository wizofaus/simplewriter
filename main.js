const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain, dialog } = require('electron');
const fs = require('fs');
// const {dialog} = require('electron');
let win;

function createWindow () {
    win = new BrowserWindow({
        with: 800,
        height: 600
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

ipcMain.on('openFile', (event, path) => {
    
    dialog.showOpenDialog(function (fileNames) {
        if (fileNames === undefined) {
            console.log('No file selected.');
        } else {
            readFile(fileNames[0]);
        }
    });

    function readFile(filepath) {

        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                alert("error occured");
                return;
            }

            event.sender.send('fileData', data);
        })
    }
});

ipcMain.on('saveFile', (event, path) => {

    dialog.showSaveDialog(function (filePath) {
        
        if (filePath === "undefined") {
            return;
        }

        let path = filePath;
        let hasExtn = filePath.match(/\.[a-z]{3}/);
        
        if (typeof(hasExtn) === 'object' && !hasExtn) {
             path = path + '.txt';
        } 

        

        event.sender.send('saveConfirmation', path);

        // saveFile(filepath);
        // fs.writeFile(filePath, filePath, (err) => {
        //     if (err) {
        //         alert("An error ocurred creating the file "+ err.message)
        //     }
                        
            
        //     event.sender.send('saveConfirmation');
        // });
    });

});

app.on('ready', createWindow);