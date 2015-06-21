window.React = require('react');
var CourseData = require('./CourseData');
var CourseAPI = require('./utils/CourseAPI');
var FluxCartApp = require('./components/NovaCourseApp.react');


CourseData.init();

CourseApi.getProductData();


React.render(
        <NovaCourseApp />
        document.getElementById('nova-course-app');
);
