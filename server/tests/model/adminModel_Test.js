const chai = require('chai')
const mocha = require('mocha')
const Admin = require('../../model/admin/Admin.js')

const admin = new Admin({
    firstName: 'Loki',
    lastName: 'Cyion',
    email: 'popcorn18@yahoo.com',
    password: 'password123',
    passwordConfirmation: 'password123'
})

describe('Admin Model', function() {

    // before describe functions
    describe('valid first and last name', function() {
        it('should have a first name', function() {

        })

        it('should have a last name', function() {

        })
    })

    describe('valid email', function() {
        it('should have a valid email address', function() {

        })

        it('receive a confirmation email', function() {

        })
    })

    describe('valid password', function() {
        it('should have a valid password', function() {

        })

        it('should match password confirmation', function() {

        })
    })

    describe('all privileges', function() {
        it('should have all available privileges', function() {

        })

        it('should be able to create', function() {

        })

        it('should be able to update', function() {

        })

        it('should be able to delete', function() {
            
        })
    })

})
