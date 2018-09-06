const _ = require('lodash');
const getFromBetween = require('./lib/getFromBetween');
const getResponseFromURL = require('./lib/getResponseFromURL');
const getTextFromFile = require('./lib/getTextFromFile');
const exportCSV = require('./lib/exportCSV');
function processMetaTag(filePath, output) {
    getTextFromFile(filePath).then(data =>{
        var links = data.split('\n');
        let deferedList = [];
        _.each(links,link=>{
            deferedList.push(new Promise((resolve1) => {
                getResponseFromURL(link).then(res=>{
                    let heading = getHeading(res);
                    let metaDescription = getMetaDescription(res);
                    let title = getTitle(res);
                    resolve1({
                        URL: link,
                        heading: heading,
                        title: title,
                        metaDescription: metaDescription
                    });
                });
            }));
        });
        Promise.all(deferedList).then(results=>{
            console.log(results);
            exportCSV(results,output)
        });
    });
}
function getHeading(doc) {
    return getFromBetween.get(doc, "<h1 class=\"ws-normal b f28-l f18 lh-32-l lh-25 mr5\">","</h1>")[0];
}
function getMetaDescription(doc) {
    return getFromBetween.get(doc, "<meta name=\"description\" content=\"","\"/>")[0];
}

function getTitle(doc) {
    return getFromBetween.get(doc, "<title>","</title>")[0];
}

// Make sure we got a filename on the command line.

if (process.argv.length < 4) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME OUTPUT');
    process.exit(1);
}
let filename = process.argv[2];
let output = process.argv[3];

filename = filename.indexOf(".txt") > -1 ? filename : filename + ".txt";
output = output.indexOf(".csv") > -1 ? output : output + ".csv";

processMetaTag(filename, output);



