var CourseScheduleActions = require('../actions/CourseScheduleActions');

module.exports = {
    // Load the course data from localStorage into CourseStore via action
    getCourseData: function() {
        var data = JSON.parse(localStorage.getItem('courses'));
        CourseScheduleActions.recieveCourseData(data);
    }
};
