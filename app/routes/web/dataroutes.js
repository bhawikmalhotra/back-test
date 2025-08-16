import express from "express";
import check from "../../middleware/usermiddleware.js";
import { insertuser, getuser, delall, deluser, updateuser } from "../../controller/web/userController.js";

let dataroutes = express.Router();

dataroutes.get("/insert", check, insertuser)
dataroutes.get("/get", check, getuser);
dataroutes.get("/del", delall);
dataroutes.get("/delone/:id", deluser);
dataroutes.put("/update/:id", updateuser);

export default dataroutes;