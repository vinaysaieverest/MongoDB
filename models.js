// const mongoose = require("mongoose");
// const { type } = require("os");

// const CourseSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     course_level: {
//         type: String,
//         required: true,
//     },
//     pre_id:[{
//         type:mongoose.SchemaTypes.ObjectId,
//         ref: "Course"
        
//     }]
 
// });
// const pre = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true
//     },
//     course_level:{
//         type:String,
//         require:true
//     }
// })
// const Course = mongoose.model("Course", CourseSchema);
// const prer = mongoose.model("Prer",pre)
// //const Prerequisite = mongoose.model("Prerequisite", PrerequisitesSchema);

// module.exports = {Course,prer};

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
  pre_id: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "prer"
  }]
});

const PrerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course_level: {
    type: String,
    required: true,
  }
});

const Course = mongoose.model("Course", CourseSchema);
const prer = mongoose.model("Prer", PrerSchema);

module.exports = { Course, prer };

