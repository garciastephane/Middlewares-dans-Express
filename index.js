const express = require('express')
const app = express()
const middle = require('./routes/middleware.js')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/superMiddleware', middle)

app.get('/',(req,res) => {
    res.send("hello middleware")
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})
