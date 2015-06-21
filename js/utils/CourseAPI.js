var NovaCourseActions = require('../actions/NovaCourseActions');

module.exports = {

    // Load the course data from localStorage into CourseStore via action
    getCourseData: function() {
        var data = JSON.parse(localStorage.getItem('course'));
        NovaCourseActions.recieveCourse(data);
    }
};
