const amp = require('./lib/validator').amp;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function validateFromURL(url) {
    let defered = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                const doc = xhr.responseText;
                const validationResult = amp.validator.validateString(doc);
                console.log('AMP valid:', validationResult.status);
                resolve(validationResult);
            }
        };
        xhr.send();
    });
    return defered;
}
validateFromURL('http://ifarmer.vn');
