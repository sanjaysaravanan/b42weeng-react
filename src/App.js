import logo from './images.jpeg'; // named import for an image
import './App.css';
import CardBtn from './CardBtn';

function App() {

  var batchName = 'B42WEENG';

  var showLearners = true;
  var showMentors = true;

  var data = [
    { title: 'Learners', num: '123', numHighlight: false },
    { title: 'Mentors', num: '321', numHighlight: true },
    { title: 'Videos', num: '456', numHighlight: false },
  ]

  return (
    <div className="App">
      {/* Learner will be visible only when showLearner is true */}
      {/* {showLearners && <CardBtn title={'Learners'} num={123} />} */}
      {/* Conditional operator --> ? */}
      {/* {showMentors ?
        (
          <CardBtn title={'Mentors'} num={432} />
        ) : ""
      }
      <CardBtn title={'Videos'} num={567} /> */}

      {/* {[
        <CardBtn title={'Learns'} num={567} />,
        <CardBtn title={'Mentors'} num={567} />,
        <CardBtn title={'Videos'} num={567} />
      ]} */}
      {data.map(({ title, num, numHighlight }) => (
        <CardBtn title={title} num={num} numHighlight={numHighlight} />
      ))}
    </div>
  );
}

export default App;
