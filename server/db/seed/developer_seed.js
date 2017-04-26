const mongoose = require('mongoose')
const Developer = require('../../model/developer/Developer.js')

const exampleData = [{
    firstName: 'Dory',
    lastName: 'Jayce',
    email: 'developer@yahoo.com',
    password: 'passw0rd123',
    passwordConfirmation: 'passw0rd123',
}]

module.exports = mongoose.connect('mongodb://localhost:27017/Helpdesk', function() {
    Developer.remove({}, function(error) {
        if (error) {
            return error
        }
    })

    Developer.collection.insertMany(exampleData, function(error, result) {
        if (error) {
            console.log(error)
            return error
        }
        console.log(exampleData)

        mongoose.connection.close()
    })
})
