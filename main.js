const mongoose = require("mongoose");
const express = require("express");
const {Course , prer}  = require("./models.js");
const app = express();


async function connection(){
    try{
        mongoose.connect("mongodb://localhost/Krishna", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected to database");
        }).catch((err) => {
            console.error("Error connecting to the database", err);
        });
    }
    catch(e){
        console.log(e)
    }
}

const a = require('./routes/routes1.js')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const data = ('./data.csv')
const data1 = ('./data1.csv')
const readCSVFile = require('./ReadCSVFile.js');
//const {dataResult,data1Result } = require('./data_insert.js')
async function vinay(){
    try{
        const dataResult = await readCSVFile(data);
        const data1Result = await readCSVFile(data1);
        console.log(dataResult)
        console.log(data1Result)
        const a = await prer.insertMany(data1Result);
        console.log(a)
        for(item of dataResult){
            let course = await Course.findOne({ name:item.name, course_level:item.course_level });
            if (!course) {
              course = await Course.create({ name:item.name, course_level:item.course_level });
              console.log(`Inserted course: ${item.name} (${item.course_level})`);
              await course.save();
            }
            if (item.pre_level && item.pre_name) {
              let preCourse = await prer.findOne({ name: item.pre_name, course_level: item.pre_level });
              if (preCourse) {
                  course.pre_id.push(preCourse._id);
                  await course.save();
                  
              } else {
                  console.error(`Failed to find or create prerequisite course: ${item.pre_name} (${item.pre_level})`);
              }
          } else {
              console.log(`Inserted course without prerequisites: ${item.name} (${item.level})`);
          }

 
    }
   
}
    catch(e){
        console.log(e)
    }
}
async function run2() {
    try {
        await Course.deleteMany();
    } catch (e) {
        console.log(e);
    }
}

const queries = async () => {
    try {
        app.use("/api/a", a);
    } catch (e) {
        console.log(e);
    }
};

connection()
run2()
vinay()
vinay1()
queries()
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


