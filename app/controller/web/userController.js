import express from "express";
import dbst from "../../models/db.js";

let insertuser = async (req, res) => {
  let dataobj = req.body;
  let inserdata = dbst.insertOne(dataobj);
  res.json({
    staus: "success",
    message: "Data inserted successfully",
    data: dataobj,
  });
};

let getuser = async (req, res) => {
  let data = await dbst.find();
  res.json(data);
};

let delall = async (req, res) => {
  await dbst.deleteMany({});
  res.json({ staus: "success", message: "All data deleted successfully" });
};

let deluser = async (req, res) => {
  let id = req.params.id;
  await dbst.deleteOne({ _id: id });
  res.json({ staus: "success", message: `${id} deleted successfully` });
};

let updateuser = async (req, res) => {
  let id = req.params.id;
  let { name } = req.body;
  await dbst.updateOne({ _id: id }, { $set: { name } });
  res.json({
    staus: "success",
    message: `${id} updated successfully`,
    data: req.body,
  });
};

export { insertuser, getuser, delall, deluser, updateuser };
