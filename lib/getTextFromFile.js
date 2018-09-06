const fs = require('fs');
function getTextFromFile(pathFile){
    // Read the file and print its contents.
    let defered = new Promise((resolve, reject) => {
        fs.readFile(pathFile, 'utf8', function(err, data) {
            if (err) throw err;
            resolve(data);
        });
    });
    return defered;
}

module.exports = getTextFromFile;