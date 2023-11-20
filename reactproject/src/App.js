import logo from './logo.svg';
import './App.css';
import Hovercounter from './day6/Hovercounter.js';
import Clickcounter from './day6/Clickcounter.js';
function App() {
  const hstyle={
    color:'green'
  }
  return (
    <div className='App'>
      <Hovercounter/>
      <Clickcounter/>
    </div>
  );
}

export default App;
