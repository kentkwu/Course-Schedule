React = require('react');
var CourseData = require('./CourseData');
var CourseAPI = require('./utils/CourseAPI');
var CourseScheduleApp = require('./components/CourseScheduleApp');

CourseData.init();
CourseAPI.getCourseData();

React.render(
    <CourseScheduleApp />,
    document.getElementById('course-schedule-app')
);
