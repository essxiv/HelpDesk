const bodyParser = require('body-parser')
const express = require('express')
const React = require('react')
const Router = require('react-router')
const path = require('path')
const app = express()

const port = process.env.PORT || 1337

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(port, function() {
    console.log('Listening On Port: ' + port)
})
