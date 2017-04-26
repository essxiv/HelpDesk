const mongoose = require('mongoose')
const Staff = require('../../model/staff/Staff.js')

const exampleData = [{
    firstName: 'Kelly',
    lastName: 'Jayce',
    email: 'staff@yahoo.com',
    password: 'passw0rd123',
    passwordConfirmation: 'passw0rd123'
}]

module.exports = mongoose.connect('mongodb://localhost:27017/Helpdesk', function() {
    Staff.remove({}, function(error) {
        if (error) {
            return error
        }
    })

    Staff.collection.insertMany(exampleData, function(error, result) {
        if (error) {
            console.log(error)
            return error
        }
        console.log(exampleData)

        mongoose.connection.close()
    })
})
