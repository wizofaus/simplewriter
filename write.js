let $ = require('jquery');
let fs = require('fs');
let filename = 'simplewriter';

// $('#simplewriter').on('submit', (e) => {
//     e.preventDefault();
//     let content = $('#content').val();
    
//     fs.appendFile('simplewriter.txt', content, 'utf-8', (err) => {
//         if (err) throw err;
//         console.log("saved")
//     });
// })