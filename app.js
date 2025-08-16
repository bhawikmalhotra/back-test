import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dataroutes from "./app/routes/web/dataroutes.js";

const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.dbstring).then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => {
  res.send("Hello ji!");
});

app.use("/api/data", dataroutes);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
