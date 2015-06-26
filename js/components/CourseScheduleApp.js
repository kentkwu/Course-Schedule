var React = require('react');
var CourseScheduleListingStore = require('../stores/CourseScheduleListingStore');
var CourseScheduleUserStore = require('../stores/CourseScheduleUserStore');
var CourseAPI = require('../utils/CourseAPI');
var CourseScheduleListing = require('../components/CourseScheduleListing')
var CourseScheduleUser = require('../components/CourseScheduleUser')

function getCourseScheduleState() {
    console.log("getting user state...");
    console.log(CourseAPI);
    return {
        courseList: CourseAPI.getCourseData(),
        userCourses: CourseScheduleUserStore.getCourses(),
        userCourseCount: CourseScheduleUserStore.getCourseCount(),
    };
}

// Define main controller View
var CourseScheduleApp = React.createClass({
    getInitialState: function() {
        console.log("CourseScheduleApp: getInitialState");
        return getCourseScheduleState();
    },

    componentDidMount: function() {
        console.log("CourseScheduleApp: componentDidMount");
        CourseSchedulerUserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        console.log("CourseScheduleApp: componentWillUnmount");
        CourseSchedulerUserStore.removeChangeListener(this._onChange);
    },

    // Render our child components, passing state via props
    render: function() {
        <div className="course-schedule-app">
            <CourseScheduleListing courses="{this.state.courseList}"/>
            <CourseScheduleUser courses="{this.state.userCourses}" courseCount="this.state.userCourseCount" />
        </div>
    },

    _onChange: function() {
                           console.log("Store Change triggered _onChange... refreshing CourseScheduleApp state");
                           this.setState(getCourseScheduleState());
    }
});

module.exports = CourseScheduleApp;
