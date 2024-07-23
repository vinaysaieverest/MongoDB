const { default: mongoose } = require('mongoose');
const { Course, Prerequisite } = require('./models');

const courseData = [
    {name:"10th",course_level:"Secondary School"},
    { name: "MPC", course_level: "12th" },
    { name: "BiPC", course_level: "12th" },
    { name: "CEC", course_level: "12th" },
    { name: "BTECH", course_level: "UnderGraduation" },
    { name: "MBBS", course_level: "UnderGraduation" },
    { name: "CA", course_level: "UnderGraduation" },
    { name: "BPHARM", course_level: "UnderGraduation" },
    { name: "DEGREE", course_level: "UnderGraduation" },
    { name: "LLB", course_level: "UnderGraduation" },
    { name: "MTECH", course_level: "PostGraduation" },
    { name: "MASTER_LLB", course_level: "PostGraduation" },
    { name: "MASTER_MBBS", course_level: "PostGraduation" },
    { name: "MBA", course_level: "PostGraduation" },
    { name: "MCA", course_level: "PostGraduation" },
    { name: "MASTER_SCIENCE", course_level: "PostGraduation" },
    { name: "MASTER_PHARM", course_level: "PostGraduation" },
    { name: "MASTER_COMMERCE", course_level: "PostGraduation" },
    { name: "MASTER_BUSINESS", course_level: "PostGraduation" }
];




const prerequisiteData = [
    { course: mongoose.Types.ObjectId('MPC'), prerequisite: mongoose.Types.ObjectId('10th') },
    { course: "BiPC", prerequisite: "10th" },
    { course: "CEC", prerequisite: "10th" },
    { course: "BTECH", prerequisite: ['MPC','BiPC','CEC'] },
    { course: "MBBS", prerequisite: ['BiPC'] },
    { course: "CA", prerequisite: ['CEC'] },
    { course: "BPHARM", prerequisite: ['BiPC'] },
    { course: "DEGREE", prerequisite: ['MPC','BiPC','CEC'] },
    { course: "LLB", prerequisite: ['CEC'] },
    { course: "MTECH", prerequisite: ['BTECH','DEGREE'] },
    { course: "MASTER_LLB", prerequisite: ['LLB'] },
    { course: "MASTER_MBBS", prerequisite: ['MBBS'] },
    { course: "MBA", prerequisite: ['BTECH','MBBS','BPHARM','CA','DEGREE','LLB'] },
    { course: "MCA", prerequisite: ['DFEGREE','BTECH'] },
    { course: "MASTER_SCIENCE", prerequisite: ['BTECH'] },
    { course: "MASTER_PHARM", prerequisite: ['BPHARM'] },
    { course: "MASTER_COMMERCE", prerequisite: ['CA'] },

]

module.exports = { courseData ,prerequisiteData};
