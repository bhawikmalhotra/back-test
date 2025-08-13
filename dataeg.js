import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import check from './middleware.js'
import { getData } from './japi.js';
import dbst from './models/db.js';
const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.dbstring)
  .then(() => console.log('MongoDB connected'))

app.get('/', (req, res) => {
  res.send('Hello ji!');
});

app.get('/test', check, async (req, res) => { 
    let dataobj = { 
        name: 'Bhawik', 
        rollno: 8, 
        lass: 'BCA', 
        course: 'BCA', 
        passed: true
    }
    let inserdata =  dbst.insertOne(dataobj);
    let data = await dbst.find();
    res.json(data);
    console.log(data);
    
});

app.get('/del', async (req,res)=>{
  await dbst.deleteMany({});
  res.json({staus : 'success', message: 'All data deleted successfully'});
})

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
})


