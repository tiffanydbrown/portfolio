import logo from './logo.svg';
import Todos from '../Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="" />
      <h1>Demo Todos on MS Azure</h1>
      <Todos />
    </div>
  );
}

export default App;
