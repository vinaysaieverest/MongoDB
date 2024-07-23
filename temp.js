const mongoose = require("mongoose");
const express = require("express");
const { Course, Prerequisite } = require("./models");
const { courseData, prerequisiteData } = require('./data');
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

async function insertCoursesAndPrerequisites() {
    try {
        // Insert courses and get their IDs
        const insertedCourses = await Course.insertMany(courseData);
        console.log('Inserted courses:', insertedCourses);

        // Map course names to their IDs
        const courseMap = {};
        insertedCourses.forEach(course => {
            courseMap[course.name] = course._id;
        });

        // Replace course names with their IDs in prerequisiteData
        const updatedPrerequisiteData = prerequisiteData.map(prerequisite => {
            const prerequisiteArray = Array.isArray(prerequisite.prerequisite) ? prerequisite.prerequisite : [prerequisite.prerequisite];
            const updatedPrere = {
                course: courseMap[prerequisite.course],
                prerequisite: prerequisiteArray.map(name => courseMap[name])
            };
            return updatedPrere;
        });

        // Insert prerequisites
        const insertedPrerequisites = await Prerequisite.insertMany(updatedPrerequisiteData);
        console.log('Inserted prerequisites:', insertedPrerequisites);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Uncomment these lines as needed
// run2();
// run();
// queries();
run();
