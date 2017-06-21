// let $ = require('jquery');
let contentWrapper = $('#contentWrapper');
let wordCount = $('#word');
let charCount = $('#char');

const updateWordCount = setInterval(function () {
    let content = $('#content').val();
    $(charCount).text(content.length);
    $(wordCount).text(content.split(' ').length);
}, 5000);

window.addEventListener("keyup", function () {
    $(contentWrapper).addClass('z-depth-2');

    setTimeout(function () {
        $(contentWrapper).removeClass('z-depth-2');
    }, 25);
    
});