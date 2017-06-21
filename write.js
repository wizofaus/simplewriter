let $ = require('jquery');
let wordCount = $('#word');
let charCount = $('#char');

const updateWordCount = setInterval(function () {
    let content = $('#content').val();
    console.log(content.length)
    $(charCount).text(content.length);

    console.log(content);
}, 5000);