import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    async function getServerData() {
      const resp = await fetch('/api/todos');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data);
    }

    getServerData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          serverData.map(todo => (
            <h1 key={todo.todoId}>{todo.task}</h1>
          ))
        }
      </header>
    </div>
  );
}

export default App;
