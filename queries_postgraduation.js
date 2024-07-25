
const express = require('express');
const router = express.Router();
const { class12th, Undergraduate, Postgraduate, Course } = require("./models");
const { toUpper } = require('lodash');

router.get('/',async (req,res)=> {
    console.log("hi"
    )
  try {
    const results = await Course.aggregate([
      {
        $lookup: {
          from: "prep",
          localField: "pre_re",
          foreignField: "_id",
          as: "Pre-re"
        }
      },
      {
        $project: {
          _id: 0,
          postgraduate: "$name",
          prerequisites: "$Pre-re.name"
        }
      }
    ]);
    console.log(results);
    res.json(results)

  } catch (e) {
    console.error(e);
  }
})

router.get('/:name',async (req,res)=> {
    const name1 = toUpper(req.params.name)
  try {
    const results = await Postgraduate.aggregate([
      {
        $lookup: {
          from: "undergraduates",
          localField: "pre_re",
          foreignField: "id",
          as: "Pre-re"
        }
      },
      {
        $project: {
          _id: 0,
          postgraduate: "$name",
          prerequisites: "$Pre-re.name"
        }
      },
      {
        $match:{postgraduate:name1}
      }
    ]);
    console.log(results);
    res.json(results)

  } catch (e) {
    console.error(e);
  }
})
// module.exports = router