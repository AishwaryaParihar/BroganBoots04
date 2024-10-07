require('dotenv').config();
const express = require('express')
const app = express('')
const connectDB = require('./config/db');
const router = require('./router/router');
const cors = require("cors");
const FRONTEND_URL= process.env.FRONTEND_URL

app.use(
    cors({
<<<<<<< HEAD
      origin: 'http://localhost:5173 ',
=======
      origin: 'http://localhost:5173 ,http://localhost:5173 ',
>>>>>>> 1cc19114384134c742cc08a5bda8790d203a8350
      credentials: true,
    })
  );
app.get ('/',(req,res)=>{
    res.status(200).send('this is root')
})
app.use(express.json());
app.use("/api", router);
const PORT = 5055;

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
