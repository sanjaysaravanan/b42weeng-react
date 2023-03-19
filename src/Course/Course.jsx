import React from 'react';
// import './Course.css';
import styles from './Course.module.css';

// stateless
function Course({
  image,
  progLang,
  title,
  lang,
  enrolled,
  category,
  enrollment, // true or false
  addCourse,
  removeCourse
}) {
  return (
    // <div className="root" >
    // inline styling
    <div
      className={styles.root}
    >
      <img src={image} alt={title} />
      {/* using ternary/conditional operation */}
      {/* {category === 'Free' ? (
        <div className={'cat-div cat-free'} >
          {category}
        </div>
      ) : (
        <div className={'cat-div cat-premium'} >
          {category}
        </div>
      )} */}
      {/* using && operator */}
      {/* {category === 'Free' && <div className={'cat-div cat-free'} >
        {category}
      </div>}
      {category === 'Premium' && <div className={'cat-div cat-premium'} >
        {category}
      </div>} */}
      {/* backtick expression syntax at classname level */}
      <div
        className={`${styles.catDiv} ${category === 'Free' ? styles.catFree : styles.catPremium}`}
      >
        {category}
      </div>
      <h3>{title}</h3>
      Lang: {lang} Enrolled: {enrolled} ProgLang: {progLang}
      <br />
      {enrollment ? (
        <button
          className={`${styles.btn} ${styles.leaveBtn}`}
          onClick={() => {
            // remove the title from parent enrolledCourses state 
            removeCourse(title);
          }}
        >
          Leave
        </button>
      ) :
        (<button
          className={`${styles.btn} ${styles.enrollBtn}`}
          onClick={() => {
            addCourse(title);
          }}
        >
          Enroll
        </button>)
      }
    </div >
  )
}

export default Course;