const mongoose = require("mongoose");
const express = require("express");
const { Course } = require("./models");
const app = express();
const readCSVFile = require("./ReadCSVFile");
const { class12 } = require('./read_CSV'); // Assuming class12 is an array of course objects

mongoose.connect("mongodb://localhost/Krishna", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.error("Error connecting to the database", err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function vinay() {
    try {
        await Course.insertMany(class12);
        for (let courseData of class12) {
            const { name, course_level, pre_name } = courseData;
            let course = await Course.findOne({ name, course_level });
            if (!course) {
                course = await Course.create({ name, course_level });
                console.log(`Inserted course: ${name}`);
            }
            if (pre_name) {
                let preCourse = await Course.findOne({ name: pre_name });
                if (!preCourse) {
                    preCourse = await Course.create({ name: pre_name });
                    console.log(`Created prerequisite course: ${pre_name}`);
                } else {
                    course.prerequisites.push(preCourse._id);
                    await course.save();
                    console.log(`Inserted course: ${name} (${course_level}) with prerequisite: ${pre_name}`);
                }
                console.log(course)
            }
        }
    } catch (e) {
        console.log(e);
    }
}

async function run2() {
    try {
        await Course.deleteMany();
        // Assuming you don't have a separate Prerequisite model
        // Remove the line: await Prerequisite.deleteMany();
    } catch (e) {
        console.log(e);
    }
}

const queries = async () => {
    try {
        // Define `a` and `b` or import them if they are route handlers
        // Example:
        const a = (req, res) => res.send('Postgraduation route');
        const b = (req, res) => res.send('Undergraduation route');

        app.use("/api/postgraduation", a);
        app.use("/api/undergraduation", b);
    } catch (e) {
        console.log(e);
    }
};

// Make sure to run the functions properly
(async () => {
    await run2();
    await vinay();
    await queries();

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();
