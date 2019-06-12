const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema([
  {
    userId: String,
    certificateList: [
      { date: Date, title: String, subject: String, comment: String },
    ],
  },
])

module.exports = mongoose.model('Certificates', certificateSchema)
