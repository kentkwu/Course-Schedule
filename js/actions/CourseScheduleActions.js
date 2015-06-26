var AppDispatcher = require('../dispatcher/AppDispatcher');
var CourseScheduleConstants = require('../constants/CourseScheduleConstants');

// Define action methods
var CourseScheduleActions = {

    recieveCourseData: function(courses) {
        console.log("Creating Action to get course data");
        AppDispatcher.handleAction({
            actionType: CourseScheduleConstants.RECIEVE_DATA,
            courses: courses
        });
    },

    addCourse: function(CRN) {
        console.log("Creating Action to addCourse with CRN: " + CRN);
        AppDispatcher.handleAction({
            actionType: CourseScheduleConstants.ADD_COURSE,
            CRN: CRN
        });
    },

    removeCourse: function(CRN) {
        console.log("Creating Action to removeCourse with CRN: " + CRN);
        AppDispatcher.handleAction({
            actionType: CourseScheduleConstants.REMOVE_COURSE,
            CRN: CRN
        });
    }
}

module.exports = CourseScheduleActions;
