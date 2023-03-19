import './App.css';
import { useState } from 'react';

import Course from './Course/Course';
import EnrollMents from './EnrollMents/EnrollMents';


// stateless component
function App() {

  // state --> array course title to keep track of the enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Callback to Child, so that child can change the state of parent
  const addCourse = (title) => {
    setEnrolledCourses([...enrolledCourses, title]);
  }
  const removeCourse = (title) => {
    // use filter to filter out the course not equal to param title 
    setEnrolledCourses(
      enrolledCourses.filter((courseTitle) => courseTitle !== title));
  }

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
    <>
      <EnrollMents
        enrolledCourses={data.filter(({ title }) => enrolledCourses.includes(title))}
      />
      <div className="App">
        {console.log(enrolledCourses)}

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
        {false && <h1>B42WEENG</h1>}
        {data.map((course) => {
          return (
            <Course
              image={course.image}
              title={course.title}
              lang={course.lang}
              progLang={course.progLang}
              category={course.category}
              enrolled={course.enrolled}
              key={course.title}
              // dynamic props
              enrollment={
                // if course present then valid object( true ) or undefined( false )
                enrolledCourses.find((title) => title === course.title)
              }
              // function as an attribute
              addCourse={addCourse}
              removeCourse={removeCourse}
            // key is specified to identify the particular component in VDOM
            // do not use index key
            // key={i}
            />
          )
        })}
      </div>
    </>
  );
}

// statefull component
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

export function ColorList() {
  // declare all the state in top
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);

  // onChange --> camel case\
  const handleInpChange = (event) => {
    // console.log('Entered Value', event.target.value);
    setColor(event.target.value);
  }

  // Submit --> during add the color from the input to the color list

  return (
    <div style={{
      margin: '10px',
    }}>
      {console.log('Colors State', colors)}
      <form

        onSubmit={(event) => {
          event.preventDefault();
          const data = {};
          Array.from(event.target.elements).forEach((element) => {
            if (element.nodeName === 'INPUT') {
              data[element.name] = element.value;
            }
          });
          // var assign done
          // var colors = ['red'];
          // spread the existing then the add the new color at last
          // not a var assign, instead this a state update, state value will update only on the next render
          // asynchronous operation gets called
          setColors([...colors, data.color]); // updating state in scope
          // will not reflect in the same scope untill the next render

          // updated state won't appear immediately in the same scope, it will only after the next render
          // synchronous call
          console.log('Line 154, state update Done on 149', colors); // guess colors value here
        }}
      >

        <input
          type={'text'}
          // unamed inline callback
          // onChange={(event) => {
          //   console.log('Entered Value', event.target.value);
          //   setColor(event.target.value);
          // }}
          // Using name callback
          onChange={handleInpChange}
          style={{
            backgroundColor: color
          }}
          name="color"
        />
        <button type='submit'>Add Color</button>
      </form>
      {colors.map((itemColor) => (
        <ColorBar itemColor={itemColor} />
      ))}
    </div>
  )
}

const ColorBar = ({ itemColor }) => {
  return (<div style={{
    backgroundColor: itemColor,
    height: '40px',
    width: '100px',
    margin: '10px'
  }} ></div>)
}


export {
  SampleApp
}

export default App;
