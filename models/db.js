import mongoose from 'mongoose';

const dbstSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  class: String,
  course: String,
  passed: Boolean
});

const dbst = mongoose.model("dbst", dbstSchema);

export default dbst;
