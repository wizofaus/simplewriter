let contentWrapper = $('#contentWrapper');
let wordCount = $('#word');
let charCount = $('#char');
let infoIcon = $('#info');

function updateWordCount () {
    console.log('update')
    let content = $('#content').val();
    console.log(content)
    if (content && content.length > 0) { 
        $('#char2').text(content.length);
        $('#word2').text(content.split(' ').length);
    }
}

window.addEventListener("keyup", function () {
    updateWordCount();
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