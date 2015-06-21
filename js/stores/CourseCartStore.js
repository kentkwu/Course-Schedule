var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/NovaCourseConstants');
var _ = require('underscore');

var _courses = {}

// Remove course from cart
function removeCourse(crn) {
    delete _products[crn]
}

var CartStore = _.extend({}, EventEmitter.prototype, {

    getCartItems: function() {
        return _products;
    }
})
