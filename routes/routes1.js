const express = require('express');
const router = express.Router();
const {Course,prer} = require('../models')
const { toUpper } = require('lodash');
const { models } = require('mongoose');
console.log(Course)
console.log(prer)

router.get('/', async (req, res) => {
  try {
      const results = await Course.aggregate([
          {
              $lookup: {
                  from: "prers",
                  localField: "pre_id",
                  foreignField: "_id",
                  as: "Prerequiste"
              }
          },
          {
            $project: {
              
              name: 1,
              course_level: 1,
              Prerequiste: {
                name: 1,
                course_level: 1
              }
            }
        }
          
      ]);

      res.json(results);
      console.log(results)
  } catch (e) {
      console.error(e);
      res.send("Error is Occured");
  }
});
router.get('/:name',async(req,res)=>{
    try {
        const name1 = toUpper(req.params.name)
        const results = await Course.aggregate([
            {
                $match:{name:name1}
              },
            {
                $lookup: {
                    from: "prers",
                    localField: "pre_id",
                    foreignField: "_id",
                    as: "Prerequiste"
                }
            },
            {
              $project: {
                
                name: "$name",
                course_level: "$course_level",
                Prerequiste: {
                  name: "$prers.name",
                  course_level: "$prers.course_level"
                }
              }
          }
         
            
        ]);
  
        res.json(results);
        console.log(results)
    } catch (e) {
        console.error(e);
        res.send("Error is Occured");
    }
    
})
module.exports = router


// {
//     $project: {
//       _id: 0,
//       postgraduate: "$name",
//       prerequisites: "$Pre-re.name"
//     }
//   },
//   {
//     $match:{postgraduate:name1}
//   }