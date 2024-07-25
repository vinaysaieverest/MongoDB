// const mongoose = require('mongoose');
// const { Course,prer } = require('./models');
// const readCSVFile = require('./ReadCSVFile');

// // File paths
// const data = './data.csv';
// const data1 = './data1.csv';

// async function importData() {
//     try {
//         // Read and process CSV files
//         const dataResult = await readCSVFile(data);
//         const data1Result = await readCSVFile(data1);
//         console.log(data1Result)

        
//         const a = await prer.insertMany(data1Result);
//         console.log(a)        
//     } catch (error) {
//         console.error('Error importing data:', error);
//     }
//     module.exports = {dataResult,data1Result}
// }
const { prer } = require('./models');
const readCSVFile = require('./ReadCSVFile');

const data = './data.csv';
const data1 = './data1.csv';

async function importData() {
  try {
    const dataResult = await readCSVFile(data);
    const data1Result = await readCSVFile(data1);
    await prer.insertMany(data1Result);
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

module.exports = { importData };
