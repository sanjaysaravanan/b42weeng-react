import React from 'react';
import './App.css';


const CardBtn = ({ title, num, numHighlight }) => {
  return (
    <div className='card' >
      {numHighlight ? (
        <h2>{num}</h2>
      ) : (
        <p>{num}</p>
      )}
      <h3>{title}</h3>
      <button>Know More</button>
    </div>
  );
}


// general props obj without destructure
// const CardBtn = (props) => {
//   return (
//     <div className='card' >
//       <h1>{props.num}</h1>
//       <h3>{props.title}</h3>
//       <button>Know More</button>
//     </div>
//   );
// }


export default CardBtn;