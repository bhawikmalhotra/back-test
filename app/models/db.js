import mongoose from 'mongoose';

const dbstSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
});

const dbst = mongoose.model("dbst", dbstSchema);

export default dbst;
