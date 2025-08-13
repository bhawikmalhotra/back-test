import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import check from "./middleware.js";
import { getData } from "./japi.js";
import dbst from "./models/db.js";
const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.dbstring).then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => {
  res.send("Hello ji!");
});

app.get("/add", check, async (req, res) => {
  let dataobj = req.body;
  let inserdata = dbst.insertOne(dataobj);
  res.json({staus: "success", message: "Data inserted successfully", data: dataobj});
});

app.get("/get", async (req, res) => {
  let data = await dbst.find();
  res.json(data);
});

app.get("/del", async (req, res) => {
  await dbst.deleteMany({});
  res.json({ staus: "success", message: "All data deleted successfully" });
});

app.get("/delone/:id", async (req, res) => {
  let id = req.params.id;
  await dbst.deleteOne({ _id: id });
  res.json({ staus: "success", message: `${id} deleted successfully` });
});

app.put("/update/:id", async (req, res) => {
  let id = req.params.id; 
  let {name} = req.body;
  await dbst.updateOne({ _id: id }, { $set: {name} });
  res.json({ staus: "success", message: `${id} updated successfully`, data: req.body });
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});




// sample json
// {
//   "name": "Bhawik",
//   "rollno": 8,
// }
