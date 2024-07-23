const mongoose = require("mongoose");
const express = require("express");
const { Course, Prerequisite } = require("./models");
const { courseData,prerequisiteData} = require('./data');
const app = express();

mongoose.connect("mongodb://localhost/vinay", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.error("Error connecting to the database", err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const a = require("./queries_postgraduation");
// const b = require("./queries_undergraduate");
// const readCSVFile = require("./ReadCSVFile");
// const { class12, undergraduate, postgraduate } = require('./read_CSV');

async function insertCoursesAndPrerequisites() {
    try {
        // Insert courses and get their IDs
        const insertedCourses = await Course.insertMany(courseData);
        const insertedPrere = await Prerequisite.insertMany(prerequisiteData)
        const courseid = insertedCourses.map(course => course.id);
        const courseName = insertedCourses.map(course => course.name)

        console.log('Inserted courses:', insertedCourses);
        console.log('Insertd Pre_re',insertedPrere)

        

        // await Prerequisite.insertMany(preRequisitesData);
    } catch (error) {
        console.error('Error inserting courses or prerequisites:', error);
    }
}

async function run() {
    try {
        await insertCoursesAndPrerequisites();
        console.log('Courses and prerequisites insertion completed.');
    } catch (e) {
        console.log(e);
    }
}

async function run1() {
    try {
        // Additional logic can be added here
    } catch (e) {
        console.log(e);
    }
}

async function run2() {
    try {
        await Course.deleteMany();
        await Prerequisite.deleteMany();
    } catch (e) {
        console.log(e);
    }
}

const queries = async () => {
    try {
        app.use("/api/postgraduation", a);
        app.use("/api/undergraduation", b);
    } catch (e) {
        console.log(e);
    }
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Uncomment these lines as needed
// run2();
// run();
// queries();
insertCoursesAndPrerequisites()