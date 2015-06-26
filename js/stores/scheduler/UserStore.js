var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SchedulerConstants = require('../constants/CourseScheduleConstants');
var _ = require('underscore');


// Represents a mock user
var _courses = {};

// Add a course to a user
function addCourse(CRN, courses) {
    console.log("UserStore: Adding course crn " + CRN + " to user courses");
    _courses.push(courses[CRN]);
}

function removeCourse(CRN) {
    console.log("UserStore: Removing course crn " + CRN + " from user courses");
}

var UserStore = _.extend({}, EventEmitter.prototype, {

    // Return courses
    getCourses: function() {
        console.log("UserStore: getCourses");
        return _courses;
    },

    getCourseCount: function() {
        console.log("UserStore: getCourseCount");
        return Object.keys(_courses).length;
    },

    emitChange: function() {
        console.log("UserStore: emitChange");
        this.emit('change');
    },

    addChangeListener: function(callback) {
        console.log("UserStore: addChangeListener");
        this.emit('change');
    },

    removeChangeListener: function(callback) {
        console.log("UserStore: removeChangeListener");
        this.removeListener('change', callback);
    }

});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

    case CourseScheduleConstants.ADD_COURSE:
        console.log("ADD_COURSE recieved by UserStore");
        addCourse(action.CRN, action.courses);
        break;

    case CourseScheduleConstants.REMOVE_COURSE:
        console.log("REMOVE_COURSE recieved by UserStore");
        removeCourse(action.CRN);
        break;

    default:
        return true;

    }

    UserStore.emitChange();

    return true;
})

module.exports = UserStore;
