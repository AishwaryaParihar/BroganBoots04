const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  description: String,
  imageUrl: String, // This will store the image path
});

const About = mongoose.model('About', aboutSchema);
module.exports = About;
