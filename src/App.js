import './App.css';

// Components
import List from './Components/List';

function App() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const d = new Date();
  const monthDay = month[d.getMonth()];
  const weekDay = weekday[d.getDay()];
  const year = d.getFullYear();

  return (
    <div className="App">
      <div className="container">
        <div className="dateContainer">
          {weekDay}
          <span>{monthDay}, {year}</span>
        </div>
        <List />
      </div>
    </div>
  );
}

export default App;
