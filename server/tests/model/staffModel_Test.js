const mocha = require('mocha')
const chai = require('chai')
const Staff = require('../../model/staff/Staff.js')

const staff = new Staff({
    firstName: 'Loki',
    lastName: 'Cyion',
    email: 'popcorn18@yahoo.com',
    password: 'password123',
    passwordConfirmation: 'password123'
})

describe('Developer Model', function() {

    // before each functions

    describe('valid first and last name', function() {
        it('should have a first name', function() {

        })

        it('should have a last name', function() {

        })
    })

    describe('valid email', function() {
        it('should have a valid email', function() {

        })

        it('should receive a email confirmation', function() {

        })
    })

    describe('valid password', function() {
        it('should have a password', function() {

        })

        it('should match the password confirmation', function() {

        })
    })

    describe('all privileges', function() {
        it('should NOT have all available privileges', function() {

        })

        it('should NOT be able to create', function() {

        })

        it('should NOT be able to update', function() {

        })

        it('should NOT be able to delete', function() {

        })
    })

})
