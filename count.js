let contentWrapper = $('#contentWrapper');
let wordCount = $('#word');
let charCount = $('#char');
let infoIcon = $('#info');

const updateWordCount = setInterval(function () {
    let content = $('#content').val();

    if (content && content.length > 0) { 
        $(charCount).text(content.length);
        $(wordCount).text(content.split(' ').length);
        $('#char2').text(content.length);
        $('#word2').text(content.split(' ').length);
    }
    
    
}, 5000);

window.addEventListener("keyup", function () {
    $(contentWrapper).addClass('z-depth-2');

    setTimeout(function () {
        $(contentWrapper).removeClass('z-depth-2');
    }, 25); 
});

info.addEventListener("mouseenter", function () {
    $(contentWrapper).fadeOut("slow", function () {
        $("#stats").fadeIn();
    });
    
});

info.addEventListener("mouseleave", function () {
    $("#stats").fadeOut("slow", function () {
        $(contentWrapper).fadeIn();
    });    
});