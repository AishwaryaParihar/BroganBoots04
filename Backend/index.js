require('dotenv').config();
const express = require('express')
const app = express('')
const connectDB = require('./config/db')

app.get ('/',(req,res)=>{
    res.status(200).send('this is root')
})

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
