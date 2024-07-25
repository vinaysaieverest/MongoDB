
const express = require('express');
const router = express.Router();
const { class12th, Undergraduate, Postgraduate } = require("./models");
const { undergraduate } = require('./data');
const { toUpper } = require('lodash');

router.get('/',async (req,res)=> {
    console.log("hi"
    )
  try {
    const results = await Undergraduate.aggregate([
      {
        $lookup: {
          from: "class12",
          localField: "pre_re",
          foreignField: "id",
          as: "Pre-re"
        }
      },
      {
        $project: {
          _id: 0,
          undergraduate: "$name",
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

router.get('/:name', async (req,res)=>{
  try{
    const name1 = toUpper(req.params.name)
    console.log(name1)
    const results1 = await Undergraduate.aggregate([
      {
        $lookup: {
          from: "class12",
          localField: "pre_re",
          foreignField: "id",
          as: "Pre-re"
        }
      },
      {
        $project: {
          _id: 0,
          undergraduate: "$name",
          prerequisites: "$Pre-re.name"
        }
      },
      {
        $match:{undergraduate:name1}
      }
      
    ]);
    console.log(results1);
    res.json(results1)

  }
  catch(e){
    console.log(e)
  }
})

// module.exports = router