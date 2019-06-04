const mongoose = require('mongoose')

const chartsSchema = new mongoose.Schema({
  chartList: [
    {
      title: String,
      categories: [
        {
          name: String,
          skillList: [
            {
              name: String,
              progress: Number,
              changeHistory: [{ changeDate: Date, progress: Number }],
            },
          ],
        },
      ],
    },
  ],
})

module.exports = mongoose.model('Charts', chartsSchema)
