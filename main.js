const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/vinay");
console.log("Conected to database");
const express = require("express");
const app = express();
const { class12, undergraduate, postgraduate } = require("./data");
const { class12th, Undergraduate, Postgraduate } = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const a = require("./queries");
const b = require("./queries_undergraduate");

async function run() {
  try {
    await class12th.insertMany(class12);

    await Undergraduate.insertMany(undergraduate);
    await Postgraduate.insertMany(postgraduate);
  } catch (e) {
    console.log(e);
  }
}
async function run1() {
  try {
  } catch (e) {
    console.log(e);
  }
}

async function run2() {
  try {
    await class12th.deleteMany();
    await Undergraduate.deleteMany();
    await Postgraduate.deleteMany();
  } catch (e) {
    console.log(e);
  }
}
const quries = async () => {
  try {
    app.use("/api/postgraduation", a);
    app.use("/api/undergraduation", b);
  } catch (e) {
    console.log(e);
  }
};
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

run2();
run();
quries();