const setupServer = require('./setup-server')
const app = setupServer()
//const mongoose = require('mongoose')
const Charts = require('./models/Charts')

app.get('/test', (req, res) => {
  Charts.find()
    .then(data => res.json(data))
    .catch(err => err.json({ errors: [err] }))
})
