const express = require('express')
const app = express()

app.get('/tintuc', function (req, res) {
  res.send('Hello World')
})

app.listen(3005);
