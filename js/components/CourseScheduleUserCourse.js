var React = require('react');
var CourseScheduleActions = require('../actions/CourseScheduleActions');


var CourseSchedulerUserCourse = React.createClass({

    removeCourse: function(event) {
        console.log("Calling removeCourse from CourseScheduleUserCourse component");
        CourseScheduleActions.removeCourse(this.props.course.CRN)
    },

    render: function() {
        var crn = this.props.course.CRN;
        <div>
        <h1>"{crn}"</h1>
        </div>
    }
});

module.exports = CourseScheduleUserCourse;
