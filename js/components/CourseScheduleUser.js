var React = require('react');
var CourseSchedulerUserStore = require('../stores/CourseScheduleUserStore');
var CourseScheduleUserCourse = require('../components/CourseScheduleUserCourse');

var CourseSchedulerUser = React.createClass({
    render: function() {
        var courses = this.props.userCourses.map( function(course) {
            return (
                <CourseScheduleUserCourse course="{course}" />
            )
        })
        return <div>courses</div>

    }
});
