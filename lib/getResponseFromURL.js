var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function getResponseFromURL(url) {
    let defered = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const doc = xhr.responseText;
                resolve(doc);
            }
        };
        xhr.send();
    });
    return defered;
}

module.exports = getResponseFromURL;