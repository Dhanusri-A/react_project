import logo from './logo.svg';
import './App.css';
import PropsFunctional from './day3/PropsFunctional';
import PropsClassCom from './day3/PropsClassCom';
import DefaultPropsExa from './day3/DefaultPropsExa';
import Count from './day3/Count';
import Onchange from './day3/Onchange';
import Parent from './day3/Parent';
import Stateconstructor from './day3/Stateconstructor';
import PropHide from './day3/PropHide';
import ToggleMessage from './day3/classwork';

function App() {
  return (
    <div className="App">
      <PropsFunctional name="Dhanusri" age="18"/>
      <PropsClassCom/>
      <DefaultPropsExa/>
      <Count/>
      <Onchange/>
      <Parent/>
      <Stateconstructor/>
      <PropHide/>
      <ToggleMessage/>
    </div>
  );
}

export default App;
  