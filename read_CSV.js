const { class12, undergraduate, postgraduate } = require("./data");
const readCSVFile = require("./ReadCSVFile");
const class12_path = './data/class12.csv';
const Under_graduate_path = './data/undergraduate.csv';
const post_graduation_path = './data/postgraduate.csv';


const loadData = async() => {
    const class12 = await readCSVFile(class12_path);
    const undergraduate = await readCSVFile(Under_graduate_path)
    const postgraduate = await readCSVFile(post_graduation_path)

    // console.log(class12)
    // console.log(undergraduate)
    // console.log(postgraduate)

}

loadData();
module.exports = {class12,undergraduate,postgraduate}