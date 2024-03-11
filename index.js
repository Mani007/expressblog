const express = require('express')
const app = express()
const path= require('path')
const port = 3400

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname,'routes/blog.js')))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})