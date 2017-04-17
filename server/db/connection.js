const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/helpdesk'

mongoose.connect(mongoURI)

const db = mongoose.connection

db.on('connected', () => {
  console.log('Mongodb Connection Open.. ', mongoURI)
})
db.on('error', console.error.bind(console, 'Connection Error'))

module.exports = db
