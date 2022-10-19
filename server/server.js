const express = require('express')
const app = express()
const mysql = require('./db')()
const cors = require('cors')
require('dotenv').config(); 
const port = process.env.PORT || 5000
const exhibitionRouter = require('./router/exhibition')

app.use(express.json())
app.use(cors())
app.use(express.static('client'))

app.listen(port, () => console.log(`${port}`))

app.get('/', (req, res) => {
  res.send("hi")
})

app.use('/api/exhibition', exhibitionRouter)

const connection = mysql.init()
mysql.open(connection)