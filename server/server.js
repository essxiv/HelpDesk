const express = require('express')
const app = express()

const db = require('./db/connection.js')

const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log('Listening On ', PORT)
})
