const { ipcRenderer } = require('electron');
const $ = require('jquery');
const fs = require('fs');


let openButton = $('#open'),
    saveButton = $('#save');

$(openButton).on("click", function (e) {
    e.preventDefault();
    ipcRenderer.send('openFile');
});

$(saveButton).on("click", function (e) {
    e.preventDefault();
    ipcRenderer.send('saveFile');
});


ipcRenderer.on('fileData', (event, data) => {
    $('#content').val(data);
});

ipcRenderer.on('saveConfirmation', (event, path) => {
    let content = $('#content').val();
            
    fs.writeFile(path, content, (err) => {
        if (err) 
            alert("An error ocurred creating the file " + err.message)
    });
})