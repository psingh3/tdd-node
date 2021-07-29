const express = require('express')
const User = require('./models/User')

const app = express()

app.use(express.json())

app.post('/api/1.0/users', (req, res) => {
  User.create(req.body).then(() => {
    return res.send({ message: 'User Created' })
  })

  // try {
  //   await User.create(req.body)
  //   res.send({ message: 'User Created' })
  // } catch (err) {
  //   // print the error details
  //   console.log(err, req.body.email)
  // }
})

module.exports = app
