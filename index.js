const { ipcRenderer } = require('electron');
const $ = require('jquery');
const fs = require('fs');

function SimpleWriter () {
    this.openButton = $('#open');
    this.saveButton = $('#save');
    this.wordCount = $('#word2');
    this.charCount = $('#char2');
    this.infoIcon = $('#info');
    this.contentWrapper = $('#contentWrapper');
    this.stats = $('#stats');

    this.openButton.on("click", this.open.bind(this));
    this.saveButton.on("click", this.save.bind(this));

    ipcRenderer.on('saveConfirmation', this.saveFile.bind(this));
    ipcRenderer.on('fileData', this.loadFile.bind(this));

    window.addEventListener('keyup', this.wordCount.bind(this));

    this.infoIcon.on({
        mouseenter: () => {
            this.showCount()
        },
        mouseleave: () => {
            this.showWrite()
        }
    })
}

SimpleWriter.prototype.wordCount = function () {
    let content = $('#content').val();
    
    if (content && content.length > 0) { 
        this.charCount.text(content.length);
        this.wordCount.text(content.split(' ').length);
    }

}

SimpleWriter.prototype.save = function (event) {
    event.preventDefault();
    ipcRenderer.send('saveFile');
}

SimpleWriter.prototype.saveFile = function (event, path) {
    let content = $('#content').val();
    
    try {
        fs.writeFile(path, content, (err) => {
            if (err) 
                alert("An error ocurred creating the file " + err.message);
        });
    } catch (e) {
        alert("File not saved.")
    }

}

SimpleWriter.prototype.open = function (event) {
    event.preventDefault();
    ipcRenderer.send('openFile');
}

SimpleWriter.prototype.loadFile = function (event, data) {
    $('#content').val(data);
}

SimpleWriter.prototype.showCount = function () {
    $(this.contentWrapper).fadeOut("slow", () => {
        $(this.stats).fadeIn();
    });
}

SimpleWriter.prototype.showWrite = function () {
    $(this.stats).fadeOut("slow", () => {
        $(this.contentWrapper).fadeIn();
    });   
}

window.onload = function () {
    window.simpleWriter = new SimpleWriter();
}