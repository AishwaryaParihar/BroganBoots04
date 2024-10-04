


const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected tp databse')
    } catch (error) {
        console.log('ERROR connecting to database',error)
    }
}

module.exports = connectDB