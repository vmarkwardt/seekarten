const setupServer = require('./setup-server')
const app = setupServer()
const Charts = require('./models/Charts')
const Certificates = require('./models/Certificate')

app.get('/chartList', (req, res) => {
  Charts.find()
    .then(data => res.json(data))
    .catch(err => err.json({ errors: [err] }))
})

app.get('/chartList/:id', (req, res) => {
  const { id } = req.params
  Charts.find({ userId: id })
    .then(data => res.json(data))
    .catch(err => err.json({ errors: [err] }))
})

app.patch('/chartList/:id', (req, res) => {
  const { id } = req.params
  const newCharts = req.body
  Charts.findByIdAndUpdate({ _id: id }, newCharts, { new: true }) // to get the updated Obj back
    .then(charts => res.json(charts))
    .catch(err => console.log('Something went wrong while updating charts!'))
})

app.post('/chartList', (req, res) => {
  Charts.create(req.body)
    .then(charts => res.status(201).json(charts))
    .catch(err => res.status(500).json({ erorrs: [err] }))
})

// CERTIFICATES    ------------------------------------------------

app.get('/certificates', (req, res) => {
  Certificates.find()
    .then(data => res.json(data))
    .catch(err => err.json({ errors: [err] }))
})

app.get('/certificates/:id', (req, res) => {
  const { id } = req.params
  Certificates.find({ userId: id })
    .then(data => res.json(data))
    .catch(err => err.json({ errors: [err] }))
})

app.patch('/certificates/:id', (req, res) => {
  const { id } = req.params
  const newCertificates = req.body
  console.log('app.patch(/certificates/:id', id, newCertificates)
  Certificates.updateOne({ userId: id }, { certificateList: newCertificates }) // to get the updated Obj back
    .then(certificates => res.json(certificates))
    .catch(err =>
      console.log('Something went wrong while updating certificates!', err)
    )
})

app.post('/certificates', (req, res) => {
  Certificates.create(req.body)
    .then(certificates => res.status(201).json(certificates))
    .catch(err => res.status(500).json({ erorrs: [err] }))
})
