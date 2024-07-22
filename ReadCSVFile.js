const fs = require('fs');
const csv = require('csv-parser');

const readCSVFile = (filepath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filepath)
            .pipe(csv())
            .on('data', (data) => {
                if (data.pre_re) {
                    // Convert pre_re to an array of numbers if necessary
                    try {
                        // Assuming the pre_re column is a comma-separated list
                        data.pre_re = data.pre_re.split(',').map(num => parseFloat(num.trim()));
                    } catch (error) {
                        console.error('Error processing pre_re:', error);
                        data.pre_re = [];  // Handle errors by setting a default value
                    }
                }
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

module.exports = readCSVFile;
