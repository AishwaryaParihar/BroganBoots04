require('dotenv').config();
const express = require('express')
const app = express('')
const connectDB = require('./config/db');
const router = require('./router/router');
const cors = require("cors");
const FRONTEND_URL= process.env.FRONTEND_URL
const Admin_url = process.env.Admin_url

// app.use(
//     cors({
//       origin: 'http://localhost:5173 ,http://localhost:5174 ',
//       credentials: true,
//     })
//   );

app.use(
    cors({
      origin: [`${Admin_url}`],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })
  );



app.get ('/',(req,res)=>{
    res.status(200).send('this is root')
})
app.use(express.json());
app.use("/api", router);
const PORT = 6060;

connectDB()
.then(()=>{

    app.listen(PORT, ()=>{
        console.log('connect db')
        console.log('SERVER IS RUNNING')
    })
})
.catch((err)=>{
    console.log(err.message)
})

// connectDB()
// .then(()=>{
//     app.listen(PORT , ()=>{
//         console.log('connect db')
//         console.log(`SERVER IS RUNNING ON ${PORT}`)
//     })
// })
// .catch((err)=>{
//     console.log(err.massage)
// })
