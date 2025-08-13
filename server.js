import express from 'express'
import dotenv from 'dotenv'
import check from './middleware.js'
import { getData } from './japi.js';
const app = express();
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test',check, (req, res) => {
  res.send(
    {
      status: 'ok', 
      message: 'Test endpoint is working!',
      data: {
        name: 'John Doe',
        age: 30,
        city: 'New York'
      }
    })
})

// send body in postman
app.get("/a", (req,res) => {
  res.json({staus: "success", message: "A endpoint is working!.....", data: req.body});
});

app.get('/data', check, async (req, res) => {
   const data = await getData();
    res.json({ status: 'ok', data });
});

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send({status: 'ok', message: 'Login endpoint is working!........'})
})

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
})