import './App.css';
import { useState } from 'react';

import Course from './Course/Course';

function App() {

  var data = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png', progLang: 'C', title: 'C Program', lang: 'Hindi', enrolled: 255, category: 'Free' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png', progLang: 'Java', title: 'Java Program', lang: 'Tamil', enrolled: 678, category: 'Premium' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png', progLang: 'Python', title: 'Python Program', lang: 'Kannada', enrolled: 235, category: 'Premium' },
  ];

  // Scenario --> enrollment for each course
  // Module Create Enroll Button for Each Course
  // Show list for all the enrolled course
  // Delete Course

  // Which iteration produces new array
  // forEach, map, filter, for loop, for in for of

  return (
    <div className="App">
      {/* usage of component
        Passing Props --> passing attribute
      */}
      {/* With array of objects --> produce array of components 
        use array map function to produce array components
      */}
      {/* {
        [
          <Course
            image={data[0].image}
            title={data[0].title}
            lang={data[0].lang}
            progLang={data[0].progLang}
            category={data[0].category}
            enrolled={data[0].enrolled}
          />,
          <Course
            image={data[1].image}
            title={data[1].title}
            lang={data[1].lang}
            progLang={data[1].progLang}
            category={data[1].category}
            enrolled={data[1].enrolled}
          />,
          <Course
            image={data[2].image}
            title={data[2].title}
            lang={data[2].lang}
            progLang={data[2].progLang}
            category={data[2].category}
            enrolled={data[2].enrolled}
          />,
        ]} */}
      {data.map((course, i) => {
        return (
          <Course
            image={course.image}
            title={course.title}
            lang={course.lang}
            progLang={course.progLang}
            category={course.category}
            enrolled={course.enrolled}
            // key is specified to identify the particular component in VDOM
            // do not use index key
            key={i}
          />
        )
      })}
    </div>
  );
}


function SampleApp() {
  // var count = 3;
  // useState() return ---> [current value, function to change the state value]
  // we destructuring above return value
  // enable the re-render each state value update
  // whenever count value changes the render block
  const [count, setCount] = useState(0);


  // render block / jsx block
  return (
    <>
      {console.log('Rendering', count)}
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <button
        onClick={function () {
          // console.log('Increment Called', count)
          setCount(count + 1);
          // count++;
        }}
      >
        Increase
      </button>
      <button
        onClick={function () {
          // console.log('Decrement Called', count)
          setCount(count - 1);
          // count--;
        }}
      >
        Decrease
      </button>
    </>
  )
}

export {
  SampleApp
}

export default App;
