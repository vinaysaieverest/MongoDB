const express = require('express');
const router = express.Router();
const {Course,prer} = require('../models')
const { toUpper } = require('lodash');
const { models } = require('mongoose');
console.log(Course)
console.log(prer)

router.get('/',async (req,res)=> {
    console.log("hi");
  try{

   const results  = await Course.aggregate([
    {
        $match: {
          pre_id: { $exists: true, $ne: [] }  // Ensure pre_id exists and is not an empty array
        }
      },
      {
        $lookup: {
          from: "prer",                    // The target collection to join
          localField: "pre_id",            // Field from the Courses collection (array of ObjectId)
          foreignField: "_id",             // Field from the prer collection (_id)
          as: "Pre-re"                     // Output array field name
        }
      }
    ])
    //console.log(results)
    res.json(results)

  } catch (e) {
    console.log("error")
    console.error(e);
    res.send("hi")
  }
})
module.exports = router