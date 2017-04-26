const mongoose = require('mongoose')
const Admin = require('../../model/admin/Admin.js')

const exampleData = [{
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@yahoo.com',
    password: 'passw0rd123',
    passwordConfirmation: 'passw0rd123',
}]

module.exports = mongoose.connect('mongodb://localhost:27017/Helpdesk', function() {
    Admin.remove({}, function(error) {
        if (error) {
            return error
        }
    })

    Admin.collection.insertMany(exampleData, function(error, result) {
        if (error) {
            console.log(error)
            return error
        }
        console.log(exampleData)

        mongoose.connection.close()
    })
})
