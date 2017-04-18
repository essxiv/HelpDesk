const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const db = require('./db/connection.js')
const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log('Listening On ', PORT)
})
