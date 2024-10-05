require('dotenv').config();
const express = require('express')
const app = express('')
const connectDB = require('./config/db');
const router = require('./router/router');


app.get ('/',(req,res)=>{
    res.status(200).send('this is root')
})

app.use("/api", router);
const PORT = 5050;

connectDB()
.then(()=>{

    app.listen(PORT, ()=>{
        console.log('connect db')
        console.log('SERVER IS RUNNING')
    })
})
.catch((err)=>{
    console.log(err.massage)
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
