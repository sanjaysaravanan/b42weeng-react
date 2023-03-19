import React from 'react';

function EnrollMents({ enrolledCourses }) {
  return (<div style={{
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    fontSize: '24px'
  }} >
    Enrolled Courses: {enrolledCourses.length}
  </div>)
}

export default EnrollMents;