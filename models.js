const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    course_level: {
        type: String,
        required: true,
    },
 
});

const PrerequisitesSchema = new mongoose.Schema({
    course: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Course"
    },
    prerequisite: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Course"
    }],
});

const Course = mongoose.model("Course", CourseSchema);
const Prerequisite = mongoose.model("Prerequisite", PrerequisitesSchema);

module.exports = { Course, Prerequisite };
