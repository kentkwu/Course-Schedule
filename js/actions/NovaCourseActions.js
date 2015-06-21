var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var NovaCourseConstants = require('../constants/NovaCourseActions.js');


// define actions object
var NovaCourseActions = {

    // recieve initial course data
    recieveCourse: function(data) {
        AppDispatcher.handleAction({
            actionType: NovaCourseConstants.RECIEVE_DATA,
            data: data
        });
    },

    // Remove course from cart
    removeFromCart: function(crn) {
        AppDispatcher.handleAction({
            actionType: NovaCourseConstants.CART_REMOVE,
            crn: crn
        });
    }
};

module.exports = NovaCourseActions;

