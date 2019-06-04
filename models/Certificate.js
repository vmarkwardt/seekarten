const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
  date: Date,
  title: String,
  subject: String,
  comment: String,
})

module.exports = mongoose.model('Charts', chartsSchema)
