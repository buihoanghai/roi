var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
function exportCSV(arr, filePath){
    const fields = ['URL', 'heading', 'title', 'metaDescription'];
    const opts = { fields };

    try {
        const parser = new Json2csvParser(opts);
        const csv = parser.parse(arr);
        console.log(csv);
        fs.writeFile(filePath, csv, 'utf8', function(err) {
            if (err) {
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else {
                console.log('It\'s saved!', filePath);
            }
        });
    } catch (err) {
        console.error(err);
    }

}

module.exports = exportCSV;