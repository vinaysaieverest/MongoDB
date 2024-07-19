const mongoose = require("mongoose")

const class12 = new mongoose.Schema({
    id:Number,
    name:String,
    pre_re:String
})
const undergraduate = new mongoose.Schema({
    id:Number,
    name:String,
    pre_re:[Number]
})
const postgraduate = new mongoose.Schema({
    id:Number,
    name:String,
    pre_re:[Number]

})

const class12th = mongoose.model("class12",class12)
const Undergraduate = mongoose.model("undergraduate",undergraduate)
const Postgraduate = mongoose.model("postgraduate",postgraduate)
module.exports = {class12th,Undergraduate,Postgraduate};

