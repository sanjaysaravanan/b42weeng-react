import React from 'react';
import './Course.css';

function Course({
  image,
  progLang,
  title,
  lang,
  enrolled,
  category
}) {
  return (
    <div className="root" >
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
        className={`cat-div ${category === 'Free' ? 'cat-free' : 'cat-premium'}`}
      >
        {category}
      </div>
      <h3>{title}</h3>
      Lang: {lang} Enrolled: {enrolled} ProgLang: {progLang}
    </div >
  )
}

export default Course;